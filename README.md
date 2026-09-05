# Suraj Bichkunde — personal site

A portfolio + learning-log site built with [Astro](https://astro.build). Content is markdown, not hardcoded pages.

## Publishing an article

1. Add a file to `src/content/articles/`, e.g. `src/content/articles/my-topic.md`.
2. Add frontmatter at the top:
   ```yaml
   ---
   title: "My Article Title"
   date: 2026-09-05
   tags: [android, kotlin]
   summary: "One-sentence teaser shown on the listing page."
   ---
   ```
   See `src/content.config.ts` for every available field (all except `title`, `date`, `tags` are optional).
3. Writing about something non-technical (math, space, science, a book/movie review, etc.)? Add `category: non-tech` — it keeps the article off the main `/articles/` page (which stays tech-focused) but it's still fully reachable via its tag page, a direct link, or `/non-tech/`. Leave it out and it defaults to `tech`.
4. Write the article body in markdown below the frontmatter. Fenced ` ```mermaid ` code blocks render as real diagrams.
5. Commit and push to `main` — GitHub Actions builds and deploys automatically. No other file needs to change.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321/Suraj-Bichkunde/
npm run build     # production build to dist/
npm run preview   # serve the production build locally
```

## Structure

- `src/content.config.ts` — the schema every article's frontmatter is validated against.
- `src/content/articles/` — the articles themselves (flat folder; `tags` do the organizing, not subfolders).
- `src/pages/` — the routes: `/articles/` (tech listing), `/articles/[slug]/` (one article), `/tags/[tag]/` (per-tag listing), `/non-tech/` (non-technical writing, kept off the main listing).
- `public/apps/awakened/` — privacy-policy pages linked from Play Store app listings. These are plain static files, unrelated to the content system — don't move or rename them.
