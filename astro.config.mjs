import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://ld3z.github.io',
  base: '/site6',
  integrations: [
    starlight({
      title: 'Site6',
      social: { github: 'https://github.com/ld3z/site6' }
      components: {
        Head: './src/components/Head.astro',
      },
    }),
  ],
});
