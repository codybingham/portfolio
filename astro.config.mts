import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://codybingham.github.io',
  base: '/portfolio/',
  vite: {
    plugins: [tailwindcss()],
  },
});
