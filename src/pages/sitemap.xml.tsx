import { GetServerSideProps } from 'next';

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = 'https://www.akevents-deli.com'; //ajmal
  
  // Static pages
  const staticPaths = [
    '',
    '/services',
    '/gallery', 
    '/about',
    '/contact',
    '/our-network'
  ];

  // Dynamic pages (if any)
  const dynamicPaths = [
    '/services/luxury-seating',
    '/services/buffet-rentals',
    '/services/cooling-solutions',
    '/services/decorations',
    '/gallery/weddings',
    '/gallery/corporate-events',
    '/gallery/ceremonies'
  ];

  const allPaths = [...staticPaths, ...dynamicPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((path) => {
          const url = `${baseUrl}${path}`;
          const priority = path === '' ? '1.0' : '0.8';
          const changefreq = path === '' ? 'daily' : 'weekly';
          
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>${changefreq}</changefreq>
              <priority>${priority}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
