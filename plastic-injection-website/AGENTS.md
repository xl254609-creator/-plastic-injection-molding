# AGENTS.md

## Project

This is a dependency-free, multi-page static website for Haiqiang Technology, a plastic injection molding manufacturer. There is no build system or package manifest. See [README.md](README.md) for deployment and content guidance.

## Structure and Ownership

- `index.html`, `about.html`, `services.html`, `products.html`, `factory.html`, `quality.html`, `faq.html`, and `contact.html` are standalone pages with duplicated header/footer markup.
- `css/style.css` owns shared layout, responsive behavior, navigation, forms, cards, and language-switcher styling.
- `js/main.js` owns mobile navigation, FAQ accordion behavior, RFQ demo validation, and the footer year.
- `js/i18n.js` owns the offline language switcher and its translation dictionaries. Prefer `data-i18n` keys for new shared translations; preserve the existing language codes and localStorage key.
- `js/translate.js` is a separate third-party-style translation library used only by `test-translate.html`; avoid editing it unless the task explicitly concerns that test page.
- `images/` contains site assets. Keep paths relative and verify referenced files exist when adding or renaming images.

## Editing Conventions

- Preserve the existing plain HTML/CSS/JavaScript approach. Do not introduce a framework, bundler, or dependency for a small site change.
- When changing shared navigation, footer, or metadata, update every applicable HTML page because these sections are duplicated rather than templated.
- Keep the active navigation class correct for each page and retain accessible labels, button states, and semantic elements.
- Use the existing CSS variables, class names, grid utilities, and responsive breakpoints before adding new styles.
- Keep user-facing copy and SEO metadata consistent across page title, description, canonical URL, Open Graph, sitemap, robots, and schema data when relevant.
- Treat the RFQ form as a front-end demo unless a real submission endpoint is explicitly requested; do not imply that `console.log` sends an inquiry.

## Validation

- Open the changed HTML page directly in a browser or serve the folder with any simple static HTTP server when relative-file behavior matters.
- Exercise the mobile menu, language switcher, FAQ accordion, and RFQ validation when those areas change.
- Check the browser console for JavaScript errors and inspect the page at desktop and narrow mobile widths.
- There are currently no repository-defined automated tests, lint scripts, or build commands.

## Agent Workflow

- Use the available workspace tools directly for routine reads, edits, and focused validation when permissions allow; keep approvals or questions for genuine blockers and product decisions.
- Make the smallest coherent change, preserve unrelated user work, and run a focused browser or syntax validation after editing.
- Do not commit changes or alter deployment/domain placeholders unless the user explicitly asks.
