---
title: "Folders"
subtitle: "File organization and directory structure"
description: "Guide defining where files live and why in the project structure."
section: "Project"
order: 4
---

This document defines where files live and why.

Do not add new top-level folders without updating this file.

## Root Level

- `README.md` → Project overview and getting started
- `PROJECT_BRIEF.md` → Project brief and requirements
- `.cursor/` → Cursor AI configuration
  - `rules.md` → Cursor AI development rules
- `templates/` → Component and page templates
- `styleguide/` → Living style guide demonstration
- `docs/` → Documentation files and generator
- `src/` → Source files

## src/

### src/assets/
- `fonts/` → Web fonts
- `icons/` → Favicons and app icons
- `images/` → General image assets and Open Graph images
- `video/` → Video assets

### src/css/
- `design-system.css` → Core design system styles

### src/js/
- JavaScript modules and scripts

### src/pages/
- HTML page files

### src/styleguide/
- Style guide specific files

## templates/

- `component-template.js` → JavaScript component template
- `component-template.css` → CSS component template
- `page-template.html` → HTML page template

## styleguide/

- `index.html` → Living style guide demonstration page

## docs/

- Markdown documentation files
- `generator/` → Documentation site generator
- `site/` → Generated HTML documentation (gitignored)

## Notes

Empty folders are tracked using `.gitkeep` to preserve structure in the template.

### Favicons

Favicons live in `src/assets/icons/`.

They are referenced directly in the HTML `<head>` and are treated as brand assets, not part of the design system.

