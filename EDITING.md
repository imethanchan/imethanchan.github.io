# Edit your website with GitHub

Website: https://imethanchan.github.io/

Sign in to GitHub as **imethanchan**. Public visitors can view the website and download its files. Publishing changes requires write access to this repository. The website does not have a separate studio login.

## Change your website text and layout

1. Open [content.json](https://github.com/imethanchan/imethanchan.github.io/blob/main/content.json).
2. Click the pencil icon, or **Edit this file**.
3. Change the text between quotation marks. Keep the surrounding JSON structure.
4. Click **Commit changes** and commit to `main`.
5. Wait for GitHub Pages to finish publishing, then refresh the website.

Common fields:

| Field | What it changes |
| --- | --- |
| `email`, `phone`, `fullName`, `location` | Contact and personal details |
| `headline`, `intro` | Homepage heading and introduction |
| `sections` | Education, projects, experience, skills and their order |
| `highlights` | Recruiter summary |
| `portfolioIntro` | Portfolio introduction |
| `copy` | Slogans, headings, navigation and button text |
| `design` | Section order, hidden sections, layout, spacing and gallery columns |

Use `\n` inside a JSON string for a new line. A missing comma or quotation mark makes invalid JSON; GitHub keeps earlier revisions in file history.

## Add a photograph or another work

1. Open [Upload files](https://github.com/imethanchan/imethanchan.github.io/upload/main).
2. Select your photo or file. Use a unique, simple filename such as `hong-kong-evening.jpg`. Browser uploads must be under 25 MiB per file.
3. Commit the upload to `main`.
4. Edit [artworks.json](https://github.com/imethanchan/imethanchan.github.io/blob/main/artworks.json). Copy the example below into the array, adding a comma between entries.
5. Replace the filename and details, then commit your changes. Add the entry at the beginning for newest-first display.

```json
{
  "id": "hong-kong-evening-2026",
  "title": "",
  "medium": "Photography / Architecture",
  "year": "2026",
  "description": "",
  "file_type": "image/jpeg",
  "file_name": "hong-kong-evening.jpg",
  "file_url": "/hong-kong-evening.jpg"
}
```

Titles are optional. Either `""` or `"-"` displays no title.

Photography subcategories are **Architecture**, **Humanities**, **Creativity**, **Landscape**, **Portraiture**, and **Culture**. Write `Photography / Culture`, for example. Use `Photography` alone when you have not chosen a subcategory. Other media, such as `Digital art` or `Drawing`, remain supported.

For PNG files use `image/png`; for WebP use `image/webp`. Video, audio and PDFs use their corresponding MIME type. Files without a supported preview remain downloadable.

Optional: upload a smaller image and add `"preview_url": "/hong-kong-evening-preview.webp"`. The gallery uses this preview; the enlarged view and **Open original** use `file_url`. Migrated photographs already have small previews and full-resolution originals.

## Edit or hide an existing work

Edit its entry in [artworks.json](https://github.com/imethanchan/imethanchan.github.io/blob/main/artworks.json). To hide a work, remove its entry from the array; its image file stays in the repository. No original files are deleted automatically.

## Replace the downloadable CV

Upload a PDF named **cv.pdf** to the repository root and commit the replacement. Both Download CV buttons use that file. Editing the website CV text does not rewrite this PDF, so update both when needed.

## Background photo

Upload an image, then set `design.creativeBackground` in `content.json` to its path, such as `/my-background.jpg`. The other background settings control position and overlay strength.

## Publishing and storage

GitHub Pages publishes the `main` branch from the repository root. Changes take time to deploy; they are not instant. Check the repository's **Actions** or **Deployments** page if an update has not appeared.

This repository includes the 57 migrated original photographs, about 645 MiB, plus optimized previews. GitHub Pages has a 1 GB published-site limit, so watch storage as the collection grows. Keep new preview files small. Do not upload private documents or secrets: this repository and its published assets are public.

## Optional developer rebuild

All React source files, the build script and dependency lockfile are included. For design/code changes, run `npm ci` followed by `npm run build`, then commit the updated `app.js`, `index.html` and `portfolio.html` with the source changes. Ordinary edits to `content.json` and `artworks.json` load on the website without a local rebuild.
