# GitHub Pages migration 29 October 2026

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

