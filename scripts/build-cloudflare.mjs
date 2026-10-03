import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const stage = path.join(root, '.cloudflare-build');
if (path.dirname(stage) !== root || path.basename(stage) !== '.cloudflare-build') throw new Error('Invalid staging path');
await rm(stage, { recursive: true, force: true });
await mkdir(stage, { recursive: true });
for (const file of ['src', 'public', 'tsconfig.json', 'package.json']) {
  await cp(path.join(root, file), path.join(stage, file), { recursive: true });
}
// Export only the public pages; the Worker handles POST /api/workshop.
await rm(path.join(stage, 'src/app/api'), { recursive: true, force: true });
for (const route of ['entrar', 'academy']) {
  const file = path.join(stage, 'src/app', route, 'page.tsx');
  let source = await readFile(file, 'utf8');
  source = source.replace('export const dynamic = "force-dynamic";', 'export const dynamic = "force-static";');

  await writeFile(file, source);
}
// Public destinations are supplied explicitly by the build environment, never
// copied from a developer's .env.local (which can contain localhost or secrets).
await writeFile(path.join(stage, 'next.config.mjs'), `export default {
  output: 'export', trailingSlash: true, poweredByHeader: false,
  images: { unoptimized: true },
  turbopack: { root: ${JSON.stringify(root)} }
};\n`);
const result = spawnSync(process.execPath, [path.join(root, 'node_modules/next/dist/bin/next'), 'build', stage], {
  cwd: root, stdio: 'inherit', env: { ...process.env, NEXT_TELEMETRY_DISABLED: '1' },
});
if (result.status !== 0) process.exit(result.status ?? 1);
