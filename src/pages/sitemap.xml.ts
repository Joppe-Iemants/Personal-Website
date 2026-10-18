import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../data/site';
export const GET: APIRoute = async () => {
  const projects = await getCollection('projects', ({data}) => !data.draft);
  const writing = await getCollection('writing', ({data}) => !data.draft);
  const paths = ['/', '/projects/', ...projects.map(p => `/projects/${p.id}/`), ...(writing.length ? ['/writing/', ...writing.map(p => `/writing/${p.id}/`)] : [])];
  const escape = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(p => `<url><loc>${escape(new URL(p, site.url).href)}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
