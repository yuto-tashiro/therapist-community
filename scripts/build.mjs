import { rm, mkdir, copyFile } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
for (const file of ['index.html', 'style.css', 'script.js']) {
  await copyFile(file, 'dist/' + file);
}
console.log('Built static community site in dist/');
