import type { OGImageOptions } from 'astro-og-canvas';

export interface PageData {
  data: {
    title: string;
    description: string;
  };
}

export function getOGImageOptions(_path: string, page: PageData): OGImageOptions {
  return {
    title: page.data.title,
    description: page.data.description,
    bgGradient: [[24, 24, 27]],
    border: { color: [63, 63, 70], width: 20 },
    padding: 120,
  };
}