import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://joppeiemants.be',
  output: 'static',
  compressHTML: false,
  trailingSlash: 'always',
});
