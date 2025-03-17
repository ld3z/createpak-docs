export const config = {
  runtime: 'edge'
};

export default async function handler(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'CreatePak Documentation';
  
  // Create a simple SVG
  const svg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="#1e293b"/>
      <text x="50%" y="50%" font-family="system-ui, sans-serif" font-size="64" text-anchor="middle" fill="white">${title}</text>
      <text x="50%" y="58%" font-family="system-ui, sans-serif" font-size="32" text-anchor="middle" fill="white" opacity="0.8">CreatePak Documentation</text>
    </svg>
  `;
  
  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  });
} 