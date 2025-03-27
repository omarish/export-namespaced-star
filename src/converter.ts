export function convertExportsToNamespace(text: string): string {
  const lines = text.split('\n');
  return lines
    .map((line) => {
      const match = line.match(/export\s*\*\s*from\s*["']\.\/([^"']+)["'];?/);
      if (!match) return line;

      const filename = match[1];
      // Handle hyphenated names by converting them to PascalCase
      const namespace = filename
        .split(/[-.]/)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');

      return `export * as ${namespace} from "./${filename}";`;
    })
    .join('\n');
}
