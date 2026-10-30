# GitHub Pages migration 29 October 2026

## Project category 30 October 2026

- Added a Project filter alongside Photography, with project cover cards and a grouped photo-series view.
- Projects support a description, optional title/year and per-photo captions, previews and original-file links.
- Added projects.json for GitHub editing. Existing artwork IDs can be reused without duplicating photo files; direct project-only photo uploads are also supported.
- Added empty-project messaging and build validation for project IDs, photo references and files. Existing photographs and category assignments are unchanged.

- Exported all 57 visible portfolio works, their titles, descriptions, years, categories and original files.
- Preserved original file bytes and recorded their SHA-256 checksums in migration-inventory.json.
- Added 1600-pixel WebP gallery previews. Original files remain available in the enlarged view and original-file links.
- Stored website text/layout in content.json and artwork records in artworks.json. Both are editable using GitHub.
- Replaced the studio link with Edit on GitHub and included EDITING.md instructions for text, photos, categories, backgrounds and CV replacements.
- Removed external content-service refreshes, photo URLs and sign-in links. Browser data requests and media URLs now point to the same GitHub Pages origin.
- Included React source, build script, package manifest and lockfile for future development.
- Preserved the existing website design, current email, downloadable CV, Photography subcategories and optional-title behavior.
- Preserved the previous local folders and hosting deployment as a backup; the migrated website no longer uses them.

## CV website address update
- Changed the visible CV website line to https://imethanchan.github.io/ and retained the same clickable destination.
- Preserved all remaining CV content, current email and one-page layout. The previous PDF is retained locally as a backup.


## CV design tools update
- Added DaVinci Resolve (Intermediate) to Design Tools. Wrapped that bullet onto two lines and retained the one-page layout, remaining content and contact links.


## Local My Studio editor — 31 October 2026
- Added a local visual editor and one-click launcher in the website folder. It verifies GitHub user imethanchan (ID 346222955) and repository write access through the existing official CLI connection.
- Added forms for website text, CV sections, photos, grouped projects, captions, backgrounds and layout. Publishing saves data and uploaded files in one non-forced GitHub commit; conflicting updates are rejected.
- Replaced the public footer's direct GitHub editing link with My Studio and local-launch instructions. Public viewing remains open.
- The editor listens only on loopback and requires a local browser session, matching Origin/Host and CSRF token. GitHub credentials remain in the Windows keyring; no Cloudflare or ChatGPT sign-in is required.
- Tested owner/permission rejection, session/logout, CSRF and host/origin controls, data reads, allowed upload paths and conflict-safe atomic publishing. Verified the actual owner connection and loaded all 57 existing works. Preserved original files and CV.
