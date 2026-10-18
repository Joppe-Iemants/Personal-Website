import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { format } from 'prettier';

async function formatDirectory(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await formatDirectory(path);
    } else if (entry.name.endsWith('.html')) {
      const html = await readFile(path, 'utf8');
      await writeFile(path, await format(html, { parser: 'html', tabWidth: 2, printWidth: 100 }));
      console.log(`Formatted ${path}`);
    }
  }
}

await formatDirectory('dist');
