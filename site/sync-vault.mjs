import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const vaultRoot = path.resolve(__dirname, '..');
const docsTargetDir = path.resolve(__dirname, 'src/content/docs');

const ignoredDirs = new Set(['.git', '.obsidian', '.devcontainer', 'site', 'node_modules', '.astro', 'dist']);

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[-\s]+/g, '-');
}

function convertCallouts(markdown) {
  const typeMap = {
    note: 'note',
    tip: 'tip',
    warning: 'caution',
    caution: 'caution',
    danger: 'danger',
    important: 'caution',
    info: 'note',
    todo: 'note',
  };

  // Match GitHub / Obsidian blockquote callouts:
  // > [!TYPE] optional title
  // > body line 1
  // > body line 2
  const calloutRegex = /^>[ \t]*\[!([a-zA-Z]+)\][ \t]*(.*(?:\r?\n|$))(?:(?:>[ \t]*.*(?:\r?\n|$))*)/gm;

  return markdown.replace(calloutRegex, (match, type, titleLine) => {
    const rawType = type.toLowerCase();
    const asideType = typeMap[rawType] || 'note';
    const trimmedTitle = titleLine.trim();
    const titleAttr = trimmedTitle ? `[${trimmedTitle}]` : '';

    const lines = match.split(/\r?\n/);
    lines.shift(); // remove first line (> [!TYPE])
    const cleanedLines = lines.map(line => line.replace(/^>[ \t]?/, ''));

    while (cleanedLines.length > 0 && cleanedLines[cleanedLines.length - 1].trim() === '') {
      cleanedLines.pop();
    }

    return `:::${asideType}${titleAttr}\n${cleanedLines.join('\n')}\n:::\n\n`;
  });
}

function processMarkdown(content, filename) {
  let title = path.basename(filename, '.md');
  let description = 'Shop knowledge base document';

  // Extract first H1 heading if present
  const h1Match = content.match(/^#\s+(.+)$/m);
  if (h1Match) {
    title = h1Match[1].replace(/^[^\w\s]+/, '').trim(); // strip leading emojis if needed
  }

  // Check if frontmatter exists
  let hasFrontmatter = content.startsWith('---');
  let body = content;

  if (!hasFrontmatter) {
    const frontmatter = `---\ntitle: "${title.replace(/"/g, '\\"')}"\ndescription: "${description}"\n---\n\n`;
    body = frontmatter + body;
  }

  // 1. Convert Obsidian wikilinks: [[Target/Note|Display]] or [[Target/Note]]
  body = body.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (match, target, display) => {
    const text = display || target.split('/').pop();
    const targetClean = target.replace(/\.md$/, '');
    const parts = targetClean.split('/').map(slugify);
    const linkPath = '/' + parts.join('/');
    return `[${text}](${linkPath})`;
  });

  // 2. Convert GitHub & Obsidian callouts to Starlight asides
  body = convertCallouts(body);

  return body;
}

function syncDirectory(srcDir, destDir) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const entries = fs.readdirSync(srcDir, { withFileTypes: true });

  for (const entry of entries) {
    if (ignoredDirs.has(entry.name) || entry.name.startsWith('.')) {
      continue;
    }

    const srcPath = path.join(srcDir, entry.name);

    if (entry.isDirectory()) {
      const destSubDir = path.join(destDir, slugify(entry.name));
      syncDirectory(srcPath, destSubDir);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      const content = fs.readFileSync(srcPath, 'utf8');
      const processed = processMarkdown(content, entry.name);
      
      let baseName = entry.name;
      if (baseName.startsWith('00 -')) {
        baseName = 'overview.md';
      } else {
        baseName = slugify(path.basename(entry.name, '.md')) + '.md';
      }

      const destPath = path.join(destDir, baseName);
      fs.writeFileSync(destPath, processed, 'utf8');
      console.log(`Synced: ${entry.name} -> ${path.relative(docsTargetDir, destPath)}`);
    }
  }
}

console.log('🔄 Syncing Obsidian vault markdown notes to Astro Starlight...');
const cleanTargets = ['guides', 'reference', 'darkroom', 'equipment', 'press-room', 'support'];
for (const target of cleanTargets) {
  const p = path.join(docsTargetDir, target);
  if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
}
const overviewFile = path.join(docsTargetDir, 'overview.md');
if (fs.existsSync(overviewFile)) fs.rmSync(overviewFile, { force: true });

syncDirectory(vaultRoot, docsTargetDir);
console.log('✅ Vault synchronization complete!');
