---
title: "Setup"
subtitle: "Getting started with this template"
description: "Guide to customizing this project template for your new project."
section: "Project"
order: 1
---

> Cursor: Treat this document as authoritative.

This template provides a solid foundation for new projects. Follow these steps to customize it for your project.

---

## Brand Colors

Update brand colors in `src/css/design-system.css` under the "BRAND TOKENS" section.

**What to change:**
- Brand token **names** - Rename tokens to match your brand (e.g., `--brand-primary`, `--off-white`, `--charcoal`)
- Brand token **values** - Update color values to match your brand colors

**Important:** You can rename brand tokens to anything that makes sense for your project. This personalizes the system and makes it more intuitive for your team.

**Example:**
```css
/* -- Brand colours -- */
/* You can use the default names or rename them */
--brand-dark: #1a1a1a;      /* Replace with your brand color */
--brand-light: #f5f5f5;    /* Replace with your brand color */
--brand-accent: #0066cc;    /* Replace with your brand color */

/* Or rename tokens to match your brand */
--brand-primary: #1a1a1a;
--off-white: #f5f5f5;
--charcoal: #0066cc;
```

**Note:** If you rename brand tokens, make sure to update any references to them in semantic color tokens (e.g., `--text-primary`, `--text-link`).

---

## Fonts

Update font families in `src/css/design-system.css` under the "BRAND TOKENS" section.

**What to change:**
- `--font-primary` - Your primary font family
- `--font-secondary` - Your secondary font family (if used)
- `--font-tertiary` - Your monospace font (if used)

**Also update:**
- Google Fonts link in `docs/generator/template.html` (if using Google Fonts)
- Google Fonts link in `styleguide/index.html` (if using Google Fonts)

---

## Logo

Replace the logo image:
- `docs/site/assets/images/logo.svg` - Documentation site logo

---

## Project Brief

Fill in `PROJECT_BRIEF.md` with your project details:
- Replace all bracketed placeholders `[like this]` with actual content
- Define project goals, audience, and constraints

---

## Meta Tags & SEO

Update SEO meta tags in `docs/generator/template.html`:
- Update `<title>` template if needed
- Add Open Graph tags for social sharing
- Update favicon references if using custom favicons

---

## Documentation

The documentation is ready to use, but you may want to:
- Review and customize documentation content in `docs/` folder
- Update the index page description in `docs/generator/generate-docs.js`
- Add or remove documentation pages as needed

---

## Quick Checklist

- [ ] Update brand colors in `src/css/design-system.css`
- [ ] Update font families in `src/css/design-system.css`
- [ ] Replace logo in `docs/site/assets/images/logo.svg`
- [ ] Fill in `PROJECT_BRIEF.md`
- [ ] Update Google Fonts links (if applicable)
- [ ] Review and customize documentation

---

## Next Steps

1. Start building your project in the `src/` directory
2. Use the templates in `templates/` folder for new components
3. Follow the coding standards in the documentation
4. Keep documentation updated as you build

