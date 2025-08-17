// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: "https://ggzy12345.github.io/",
	base: "/",
	integrations: [mdx(), sitemap()],
});
