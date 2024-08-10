export default function handler(req, res) {

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/xml')
      
      // Instructing the Vercel edge to cache the file
      res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')
      
      // generate sitemap here
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset
            xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                  http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      
      <url>
        <loc>https://www.webverse.tech/</loc>
        <lastmod>2023-03-23T19:52:14+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://www.webverse.tech/tools</loc>
        <lastmod>2023-03-23T19:52:14+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.webverse.tech/tools/css-generators</loc>
        <lastmod>2023-03-23T19:52:14+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.webverse.tech/tools/image-tools</loc>
        <lastmod>2023-03-23T19:52:14+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.webverse.tech/tools/color-tools</loc>
        <lastmod>2023-03-23T19:52:14+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.webverse.tech/tools/css-generators/border-radius-generator</loc>
        <lastmod>2023-03-23T19:52:14+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.webverse.tech/tools/css-generators/box-animations</loc>
        <lastmod>2023-03-23T19:52:14+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.webverse.tech/tools/css-generators/box-shadow</loc>
        <lastmod>2023-03-23T19:52:14+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.webverse.tech/tools/image-tools/image-converter</loc>
        <lastmod>2023-03-23T19:52:14+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.webverse.tech/tools/color-tools/color-lightness</loc>
        <lastmod>2023-03-23T19:52:14+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.webverse.tech/tools/color-tools/color-mixture</loc>
        <lastmod>2023-03-23T19:52:14+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.webverse.tech/tools/color-tools/color-shades-generator</loc>
        <lastmod>2023-03-23T19:52:14+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.webverse.tech/tools/css-generators/button-generator</loc>
        <lastmod>2023-03-23T19:52:14+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.webverse.tech/tools/css-generators/cursor-options</loc>
        <lastmod>2023-03-23T19:52:14+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.webverse.tech/tools/css-generators/gradient-generator</loc>
        <lastmod>2023-03-23T19:52:14+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.webverse.tech/tools/css-generators/scrollbar-css-generator</loc>
        <lastmod>2023-03-23T19:52:14+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.webverse.tech/tools/css-generators/text-animations</loc>
        <lastmod>2023-03-23T19:52:14+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.webverse.tech/tools/css-generators/text-gradient</loc>
        <lastmod>2023-03-23T19:52:14+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.webverse.tech/tools/css-generators/text-shadow</loc>
        <lastmod>2023-03-23T19:52:14+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.webverse.tech/tools/css-generators/transform-generator-2d</loc>
        <lastmod>2023-03-23T19:52:14+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.webverse.tech/tools/css-generators/transform-generator-3d</loc>
        <lastmod>2023-03-23T19:52:14+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.webverse.tech/tools/color-tools/hex-to-rgba-converter</loc>
        <lastmod>2023-03-23T19:52:14+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.webverse.tech/tools/color-tools/rgba-to-hex-converter</loc>
        <lastmod>2023-03-23T19:52:14+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      </urlset>`
  
    res.end(xml)
  }