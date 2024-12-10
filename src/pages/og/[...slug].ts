import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';
import { getOGImageOptions } from '../../utils/og-config';

const entries = await getCollection('docs');
const pages = Object.fromEntries(entries.map(({ data, id }) => [id, { data }]));

export const { getStaticPaths, GET } = OGImageRoute({
  pages,
  param: 'slug',
  getImageOptions: getOGImageOptions,
});