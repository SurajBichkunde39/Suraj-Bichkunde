// This file defines the *shape* of an article's frontmatter — think of it
// like a Kotlin data class with validation, but for markdown files. Astro
// scans every file matched by the glob() loader below, checks its
// frontmatter against the schema, and everywhere else in the site you get
// fully-typed, autocompleted access to that data (similar to how a Room
// @Entity gives you typed columns instead of raw strings/maps).
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
	// One flat folder — no per-topic subfolders. Topic is handled entirely
	// by the `tags` field below, so an article can belong to multiple
	// topics without having to pick one "home" folder for it.
	// The pattern already matches .mdx as well as .md: if custom
	// interactive components get added to articles later, that's just a
	// new file extension, not a schema change.
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),

	schema: z.object({
		title: z.string(),
		// z.coerce.date() accepts a plain "2026-09-05" string in frontmatter
		// and turns it into a real JS Date we can sort/format with.
		date: z.coerce.date(),
		tags: z.array(z.string()).default([]),

		// Distinguishes a normal write-up from a "playground"/experiment
		// entry. Both live in this same folder and collection — the pages
		// that list them just filter on this field instead of using a
		// separate content system.
		type: z.enum(['article', 'playground']).default('article'),

		// Separate from `tags` on purpose: `tags` is topic ("android",
		// "space"), this is audience focus. The main /articles/ listing
		// only shows "tech" (the default, so you rarely have to set this).
		// A "non-tech" article isn't hidden from the site — it just doesn't
		// compete for attention on the main page. It's still fully reachable
		// via its tag page, a direct link, or the dedicated /non-tech/ page.
		category: z.enum(['tech', 'non-tech']).default('tech'),

		// --- everything below is optional; omit it in frontmatter and the
		// default (or "not set") applies ---

		draft: z.boolean().default(false), // true = hidden from listing pages
		summary: z.string().optional(), // short teaser shown on listing cards
		series: z.string().optional(), // e.g. "Kotlin Coroutines Deep Dive"
		part: z.number().optional(), // ordering within a series, e.g. 1, 2, 3
		cover: z.string().optional(), // path to a thumbnail image
	}),
});

export const collections = { articles };
