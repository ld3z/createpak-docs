import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';

const entries = await getCollection('docs');
const pages = Object.fromEntries(
  entries.map(({ data, id }) => [id, { data }])
);

export const { getStaticPaths, GET } = OGImageRoute({
  pages,
  param: 'slug',
  getImageOptions: (_path, page: any) => ({
    title: page.data.title,
    description: page.data.description,
    logo: {
      path: './src/assets/createpak_logo.webp',
      size: [100, 100],
    },
    border: { color: [63, 63, 70], width: 2 },
    bgGradient: [[24, 24, 27]],
    font: {
      title: {
        size: 70,
        families: ['Inter'],
        weight: 'Medium',
      },
      description: {
        size: 40,
        families: ['Inter'],
        weight: 'Normal',
      },
    },
    padding: 60,
  }),
});