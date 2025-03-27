# Namespace Exporter

A Visual Studio Code extension that converts `export *` statements to namespaced exports, making your code more explicit and maintainable.

## Features

- Converts `export * from "./file";` to `export * as File from "./file";`
- Handles hyphenated and dotted filenames with proper PascalCase conversion
- Preserves non-export lines
- Works with TypeScript and JavaScript files

## Installation

1. Open VS Code
2. Go to the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X` on Mac)
3. Search for "Namespace Exporter" by `omarish`
4. Click "Install"

## Usage

1. Open a file containing `export *` statements
2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
3. Type "Convert Exports to Namespace" and select the command
4. The extension will convert all `export *` statements to namespaced exports

### Example

Before:

```typescript
export * from './auth';
export * from './dashboard';
```

After:

```typescript
export * as Auth from './auth';
export * as Dashboard from './dashboard';
```