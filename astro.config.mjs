// @ts-check
import { defineConfig } from 'astro/config';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	// This repo is "SurajBichkunde39/Suraj-Bichkunde", not "<user>.github.io",
	// so GitHub Pages serves it as a *project* page under a sub-path rather
	// than at the domain root. `site` + `base` together tell Astro to build
	// every internal link/asset URL with that sub-path baked in.
	site: 'https://surajbichkunde39.github.io',
	// Trailing slash matters: import.meta.env.BASE_URL echoes this value
	// exactly, and every href in this project is built as `${base}path`.
	base: '/Suraj-Bichkunde/',
	output: 'static',
	integrations: [mermaid({ theme: 'default' })],
});
