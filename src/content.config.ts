import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const shared = {
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  draft: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
};

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({ ...shared, featured: z.boolean().default(false), url: z.string().url().optional() }),
});
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object(shared),
});

export const collections = { projects, writing };
