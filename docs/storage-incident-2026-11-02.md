# Storage incident — 2026-11-02

The public hostname changed from killteam-field-reference.regalsugar7.chatgpt.site to killteam-field-reference.ryungsu86.chatgpt.site. The old URL redirects to the new URL. LocalStorage is origin-scoped; the new host cannot access the old host's records. This does not prove the old storage was deleted. No remote recovery of user records has been performed.

Do not clear browser data, uninstall the old PWA, or claim records recovered. Restoring old-origin execution requires hosting support; changing the site slug alone cannot restore the account suffix. Keep the canonical host stable for future releases and verify both expected and actual deployment URLs. If the origin changes, treat it as a migration incident rather than a routine release.

Local mitigation: snapshot all kt-* raw values before mounting React, never replace the first snapshot, block roster/battle autosave when their initial data cannot be parsed/validated, and expose a full raw JSON recovery export in Settings. This export is distinct from the existing roster import format and requires a future validated recovery importer. It is not cloud backup or cross-origin migration. If storage is full or blocked the snapshot may fail; originals are left untouched. The service worker replaces asset CacheStorage, not LocalStorage.

Verification: storage preservation tests plus full verify pipeline passed. Browser visual checks and recovery of old-origin data remain unverified. These changes have not been published as part of this investigation.
