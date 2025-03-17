import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

interface OgImageOptions {
  title: string;
  description?: string;
}

export async function generateOgImage({ title, description }: OgImageOptions): Promise<ArrayBuffer> {
  // Format the title
  const formattedTitle = title
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Load font
  const fontRegular = await fetch('https://rsms.me/inter/font-files/Inter-Regular.woff')
    .then(res => res.arrayBuffer());

  // Generate SVG using Satori
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
              style: { marginBottom: 40 },
              children: {
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
            }
          },
          {
            type: 'div',
            props: {
              style: {
                textAlign: 'center',
                marginBottom: description ? 16 : 0,
                fontSize: 60,
                lineHeight: 1.2,
                fontWeight: 'bold',
                maxWidth: 900
              },
              children: formattedTitle
            }
          },
          description && {
            type: 'div',
            props: {
              style: {
                fontSize: 32,
                opacity: 0.8,
                maxWidth: 800,
                textAlign: 'center',
                marginTop: 20
              },
              children: description
            }
          },
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                bottom: 40,
                fontSize: 24,
                opacity: 0.7
              },
              children: 'CreatePak Documentation'
            }
          }
        ].filter(Boolean)
      }
    },
    {
      width: 1200,
      height: 630,
      fonts: [{ name: 'Inter', data: fontRegular, weight: 400, style: 'normal' }]
    }
  );
  
  // Convert to PNG
  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  return pngData.asPng();
} 