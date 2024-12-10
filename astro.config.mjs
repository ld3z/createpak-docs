import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://ld3z.github.io',
  base: '/site6',
  integrations: [
    starlight({
      components: {
        Head: './src/components/Head.astro',
      },
      title: 'My Docs',
    }),
  ],
});