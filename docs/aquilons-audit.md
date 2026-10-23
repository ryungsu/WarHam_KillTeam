# Tempestus Aquilons integration

Added from the retained vjosset/killteamjson snapshot (IMP-TEMPAQ). English snapshot remains in data-original. This is a source comparison, not a guarantee of the latest tournament balance version.

Official comparison: https://assets.warhammer-community.com/eng_17-12_kt_tempestus_aquilons_online_rules-lmtd3jnxje-xwnybrafnr.pdf

- Page 4: one Tempestor, one Servo-Sentry and nine other operatives (11 models). Troopers repeat; each specialist once; Gunner with melta and Gunner with plasma are separately limited to one each.
- Pages 1–3: eight operative types, datacard statistics, profiles and unique abilities compared. Tempestor has three legal pairs; Gunner has two pairs; Sentry selects one of three weapons. Sentry has no fists.
- Pages 4–8: Drop Insertion, Grav-chute, eight ploys and four faction equipment entries compared. Salvo English targeting is clarified in the public dataset from official page 1; the unmodified snapshot remains retained.
- Archetypes: Recon and Seek & Destroy. Mission selection includes the corresponding six Tac Ops.
- Korean content is an AI translation draft. The app retains English and original source links.
- Eight portraits are extracted from the corresponding official datacard headers, with page and embedded image names in public/images/operatives/sources.json. No unrelated team portraits are substituted.
- Situation assistance includes faction rules, unique actions, equipment and ploys; strategic ploy CP is paid once per TP as for existing teams. Conditional rules and actual landing geometry are applied by the player, not automatically simulated.

Validation: TypeScript check, complete existing unit suite plus Aquilon roster/loadout and Tac Op regressions, production build and offline cache generation. Browser automation was unavailable because its runtime failed to initialize; visual interaction QA was not completed in this session.
