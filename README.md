# Importing External Libraries in Puter Serverless Workers

Serverless Workers in Puter don't support `import` or `require` statements directly. To use external npm packages, you need to bundle your code with a tool like esbuild.

## Setup

```bash
npm install
```

## How It Works

1. Write your worker code in `index.js` with normal ES imports:

```js
import * as cowsay from "cowsay";

router.get("/", async () => {
  return cowsay.say({ text: "Hello, World!" });
});
```

2. Bundle with esbuild:

```bash
npm run build
```

3. This outputs `worker.js` with all dependencies inlined. Copy and publish this file as your Puter worker normally.

## Build Configuration

The build script in `package.json`:

```json
"build": "esbuild index.js --bundle --format=esm --outfile=worker.js"
```

Key flags:

- `--bundle` - Inlines all dependencies into one file
- `--format=esm` - Keeps your code at global scope (required for Puter workers)
- `--outfile=worker.js` - Output filename

## Adding Dependencies

```bash
npm install <package-name>
```

Then import it in `index.js` and rebuild.
