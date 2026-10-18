# joppeiemants.be

My personal website, built with Astro and plain CSS.

## Development

Requires Node.js 24.

```sh
npm ci
npm run dev
```

```sh
npm run check    # Type checks
npm run build    # Build to dist/
npm run preview  # Preview the build
npm run format   # Format Astro templates
```

## Content

Edit pages in `src/pages/`, styles in `src/styles/global.css`, and contact links in `src/data/site.ts`.

Projects and articles are Markdown files in `src/content/projects/` and `src/content/writing/`. Copy an existing entry and update its frontmatter. Set `draft: false` to publish; use `featured: true` to show a project on the homepage.

## Deployment

Upload the contents of `dist/`, including `.htaccess`, to the domain's document root on Combell. Rebuild after changes; don't edit generated files directly.
