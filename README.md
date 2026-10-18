# joppeiemants.be

Joppe Iemants' personal website. Astro generates static HTML; plain CSS provides the design. No browser JavaScript, framework islands, database, analytics, or external fonts are required.

## Development

Use Node.js 24 LTS (recommended), or Node.js 22.19 or later. The machine's default Node.js 20.17 is too old for some development dependencies; verification used Codex's bundled Node.js 24.19.

```sh
npm ci
npm run dev
```

Before deployment:

```sh
npm run check
npm run build
npm run preview
```

`dist/` contains the deployable website. Node is used locally to build; the hosting server only serves static files. Commit `package-lock.json` so installations stay reproducible.

HTML is formatted with indentation and line breaks after each build. Run `npm run format` to format the Astro source templates. Edit content in `src/`; rebuilding replaces files in `dist/`.

## Editing

- Public profile links and description: `src/data/site.ts`.
- Homepage copy: `src/pages/index.astro`.
- Shared metadata, header, and footer: `src/layouts/Base.astro`.
- Design: `src/styles/global.css`.
- Domain: keep `astro.config.mjs` and `src/data/site.ts` aligned if it changes.

## Adding projects and articles

Add a `.md` file in `src/content/projects/` or `src/content/writing/`. The filename becomes the URL, so keep published filenames stable. Use lowercase names with hyphens. Content is validated by `src/content.config.ts`.

```yaml
---
title: "A clear, descriptive title"
description: "A short summary for visitors and search engines."
date: 2026-10-18
draft: true
tags: [Python, AI]
---
```

Write Markdown below the frontmatter. Set `draft: false` when ready. Projects may also use `featured: true` to appear on the homepage and an optional absolute `url` for a live application. Drafts have no public route and are excluded from listings and the sitemap. `src/content/writing/first-note.md` is an unpublished example, not a public article.

Lists sort by date, newest first. Dates are publication dates; future dates do not schedule publication. Rebuild and upload after changing content. The writing index stays `noindex` and outside the sitemap until an article is published.

## Deploying to Combell

1. Run the checks and production build above.
2. In your Combell control panel, identify the document root for `joppeiemants.be` and enable its TLS certificate. Document-root paths vary by account; use the path shown for your domain.
3. Upload the **contents** of `dist/` to that document root using SFTP or the hosting file manager. Include the hidden `.htaccess` file. Do not upload source files or `node_modules`.
4. Confirm `https://joppeiemants.be/`, `/projects/`, `/robots.txt`, and `/sitemap.xml` work. Check a nonexistent path returns HTTP 404 with the custom page. The supplied `.htaccess` is intended for Apache; verify the account accepts its directives.
5. Configure permanent redirects in hosting settings so HTTP and `www` resolve to `https://joppeiemants.be`. Avoid serving duplicate copies at other hostnames. Test redirects and HTTPS before announcing the site.
6. For later releases, replace changed files and remove obsolete generated pages so deleted content does not remain public. Keep a backup of the prior deployed release.

No GitHub Actions pipeline, server runtime, or paid service is required. To use GitHub, create a repository and push the source plus lockfile; generated output and installed dependencies are ignored. This implementation does not create a repository or configure your hosting account.

## Search launch checklist

The build includes unique titles and descriptions, canonical URLs, Person/ProfilePage structured data, article metadata, `robots.txt`, and a content-aware sitemap. Your name is visible in the homepage heading and page copy.

After the domain is live, verify a Google Search Console domain property using the DNS record supplied by Google, submit `https://joppeiemants.be/sitemap.xml`, and request indexing of the homepage. Add the website URL to LinkedIn and GitHub. Search indexing and ranking depend on Google; these files alone do not guarantee placement.

Social previews use text metadata and the favicon; a dedicated preview image can be added later when a personal visual identity is available. No stock portrait, invented credentials, or placeholder social links are included.
