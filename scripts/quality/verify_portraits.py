"""Read-only official PDF/PNG correspondence check. Never infers image order from Im numbers.

Requires pypdf and Pillow. Default PDFs are the locally reviewed originals; no network is used.
"""
import argparse
import json
from pathlib import Path
from PIL import Image, ImageChops
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[2]
parser = argparse.ArgumentParser()
parser.add_argument('--pdf-dir', type=Path, default=ROOT / 'tmp/new-teams')
args = parser.parse_args()
teams = json.loads((ROOT / 'public/data/teams.json').read_text(encoding='utf-8'))
proofs = json.loads((ROOT / 'data-original/portrait-card-mapping.json').read_text(encoding='utf-8'))
slugs = {'CHAOS-PM': 'plague-marines', 'CHAOS-NC': 'nemesis-claw', 'TYR-RAV': 'raveners'}
errors = []
checked = 0
for team_id, slug in slugs.items():
    pdf = args.pdf_dir / f'{slug}.pdf'
    if not pdf.exists():
        errors.append(f'{team_id}: missing reviewed PDF {pdf}')
        continue
    team = next(t for t in teams if t['killteamId'] == team_id)
    names = {o['opTypeName'].upper(): o['opTypeId'] for o in team['opTypes']}
    matches = {}
    for page_number, page in enumerate(PdfReader(pdf).pages[:3], 1):
        images = {im.name.split('.')[0]: im for im in page.images if im.name.endswith('.jp2')}
        draws, labels = [], []

        def drawing(operator, operands, cm, tm):
            if operator == b'Do' and str(operands[0])[1:] in images:
                draws.append((str(operands[0])[1:], cm[5]))

        def text(value, cm, tm, font, size):
            title = value.strip().upper()
            if title in names and tm[0] > 12:
                labels.append((title, tm[5]))

        page.extract_text(visitor_operand_before=drawing, visitor_text=text)
        for title, y in labels:
            candidates = [(name, image_y) for name, image_y in draws if 0 < y - image_y < 65]
            if len(candidates) != 1:
                errors.append(f'{team_id}: ambiguous image at page {page_number}: {title}')
                continue
            name, image_y = candidates[0]
            matches.setdefault(names[title], (page_number, images[name], title))
    for op in team['opTypes']:
        op_id = op['opTypeId']
        if op_id not in matches:
            errors.append(f'{op_id}: no titled official header found')
            continue
        page, image, title = matches[op_id]
        proof = next((p for p in proofs if p['id'] == op_id), None)
        if not proof or (proof['page'], proof['pdfImage'], proof['matchedTitle']) != (page, image.name, title):
            errors.append(f'{op_id}: recorded evidence does not match official header coordinates')
            continue
        actual_path = ROOT / f'public/images/operatives/{op_id}.png'
        if not actual_path.exists():
            errors.append(f'{op_id}: missing portrait PNG')
            continue
        actual, expected = Image.open(actual_path).convert('RGBA'), image.image.convert('RGBA')
        if actual.size != expected.size or any(ImageChops.difference(actual, expected).getextrema()[i][1] for i in range(4)):
            errors.append(f'{op_id}: portrait pixels differ from the matching official card image')
        checked += 1
print(f'Official portrait correspondence: {checked} images checked, {len(errors)} failures')
for error in errors:
    print(error)
raise SystemExit(1 if errors else 0)
