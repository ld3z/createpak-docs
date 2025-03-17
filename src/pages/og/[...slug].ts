import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load the Inter font
const interFont = readFileSync(
  join(__dirname, '../../../public/fonts/Inter-Medium.ttf')
);

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
        data: interFont,
      },
      description: {
        size: 40,
        families: ['Inter'],
        weight: 'Normal',
        data: interFont,
      },
    },
    padding: 60,
  }),
});