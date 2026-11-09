import type { APIRoute } from 'astro';
import { languages, defaultLang, getLocalizedPath, type Locale } from '../i18n/ui';

const SITE_URL = 'https://giftomp4.github.io';

export const GET: APIRoute = () => {
  const locales = Object.keys(languages) as Locale[];
  const lastmod = new Date().toISOString().split('T')[0];

  const buildUrl = (lang: Locale) => {
    const path = getLocalizedPath(lang, '');
    return `${SITE_URL}${path.endsWith('/') ? path : `${path}/`}`;
  };

  const xhtmlLinks = [
    ...locales.map(
      (loc) =>
        `    <xhtml:link rel="alternate" hreflang="${loc}" href="${buildUrl(loc)}" />`
    ),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${buildUrl(defaultLang)}" />`,
  ].join('\n');

  const urlEntries = locales
    .map(
      (loc) => `  <url>
    <loc>${buildUrl(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${loc === defaultLang ? '1.0' : '0.9'}</priority>
${xhtmlLinks}
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
