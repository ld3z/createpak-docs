import type { APIRoute } from 'astro';
import { ImageResponse } from '@vercel/og';

export const GET: APIRoute = async ({ params }) => {
  const slug = params.slug || 'default';
  
  try {
    // Convert slug to a readable title (replace hyphens with spaces and capitalize)
    const title = slug
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    // Use createElement-style objects instead of JSX
    const imageResponse = new ImageResponse(
      {
        type: 'div',
        props: {
          style: {
            height: 630,
            width: 1200,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1e293b',
            fontSize: 32,
            fontWeight: 'bold',
            color: 'white',
            padding: '40px 80px',
          },
          children: [
            {
              type: 'div',
              props: {
                style: { marginBottom: 40 },
                children: [
                  {
                    type: 'svg',
                    props: {
                      width: 120,
                      height: 120,
                      viewBox: '0 0 24 24',
                      fill: 'white',
                      children: {
                        type: 'path',
                        props: {
                          d: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
                        }
                      }
                    }
                  }
                ]
              }
            },
            {
              type: 'div',
              props: {
                style: { textAlign: 'center', marginBottom: 16 },
                children: {
                  type: 'div',
                  props: {
                    style: { fontSize: 60, lineHeight: 1.2 },
                    children: title
                  }
                }
              }
            },
            {
              type: 'div',
              props: {
                style: { fontSize: 24, opacity: 0.8, marginTop: 20 },
                children: 'CreatePak Documentation'
              }
            }
          ]
        }
      },
      {
        width: 1200,
        height: 630,
      },
    );
    
    return new Response(await imageResponse.arrayBuffer(), {
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