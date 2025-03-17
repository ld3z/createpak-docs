import type { APIRoute } from 'astro';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

const fontRegular = await fetch('https://rsms.me/inter/font-files/Inter-Regular.woff')
  .then(res => res.arrayBuffer());

export const GET: APIRoute = async ({ params }) => {
  const slug = params.slug || 'default';
  
  try {
    // Convert slug to a readable title (replace hyphens with spaces and capitalize)
    const title = slug
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    const svg = await satori(
      {
        type: 'div',
        props: {
          style: {
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1e293b',
            color: 'white',
            padding: '40px',
          },
          children: [
            {
              type: 'div',
              props: {
                children: title,
                style: {
                  fontSize: '60px',
                  fontWeight: 'bold',
                }
              }
            },
            {
              type: 'div',
              props: {
                children: 'CreatePak Documentation',
                style: {
                  marginTop: '20px',
                  fontSize: '24px',
                  opacity: 0.8,
                }
              }
            }
          ]
        }
      },
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: fontRegular,
            weight: 400,
            style: 'normal',
          }
        ]
      }
    );
    
    // Convert SVG to PNG
    const resvg = new Resvg(svg);
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();
    
    return new Response(pngBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    });
  } catch (error) {
    console.error('Error generating OG image:', error);
    return new Response('Failed to generate image', { status: 500 });
  }
}; 