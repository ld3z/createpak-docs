import type { APIRoute } from 'astro';
import satori from 'satori';
import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

// Load font once at the module level (outside the handler)
let interFont: ArrayBuffer;

export const GET: APIRoute = async ({ params }) => {
  try {
    // Load font if not already loaded
    if (!interFont) {
      try {
        // First try to load from local file
        const fontPath = path.resolve('./public/fonts/Inter-Medium.ttf');
        interFont = await fs.readFile(fontPath);
      } catch (error) {
        // Fallback to fetching from web
        console.log('Falling back to web font...');
        interFont = await fetch(
          "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZs.woff"
        ).then(res => res.arrayBuffer());
      }
    }

    const slug = params.slug || 'default';
    
    // Convert slug to a readable title
    const title = slug
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    // Generate the SVG
    const svg = await satori(
      {
        type: 'div',
        props: {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: '#1e293b',
            color: 'white',
            padding: '40px',
          },
          children: [
            {
              type: 'div',
              props: {
                style: {
                  fontSize: '60px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginBottom: '20px',
                },
                children: title
              }
            },
            {
              type: 'div',
              props: {
                style: {
                  fontSize: '24px',
                  opacity: 0.8,
                },
                children: 'CreatePak Documentation'
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
            data: interFont,
            weight: 500,
            style: 'normal',
          }
        ]
      }
    );
    
    // Convert SVG to PNG using sharp (more reliable than resvg)
    const png = await sharp(Buffer.from(svg))
      .png()
      .toBuffer();
    
    return new Response(png, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    });
  } catch (error) {
    console.error('Error generating OG image:', error);
    return new Response('Failed to generate OG image', { status: 500 });
  }
}; 