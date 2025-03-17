import type { APIRoute } from 'astro';
import { getImage } from 'astro:assets';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const GET: APIRoute = async ({ params, request }) => {
  try {
    const path = params.path;
    
    // You would typically load your page metadata here based on the path
    // This is a simplified example - you'd want to get the actual page title/description
    const title = "Documentation Page Title";
    const description = "A detailed description of the documentation page";
    
    // Generate the OG image
    const image = await getImage({
      src: '/src/components/OpenGraphImage.astro',
      props: { title, description },
      format: 'png',
      width: 1200,
      height: 630,
    });
    
    // Return the image with proper headers
    const imageData = await readFile(join(process.cwd(), 'dist', image.src.slice(1)));
    
    return new Response(imageData, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error generating OG image:', error);
    return new Response('Error generating image', { status: 500 });
  }
}; 