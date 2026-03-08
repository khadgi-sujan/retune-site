# Retune Site

Landing page for Retune at retune.dev.

## Local Development

- `npm run dev` starts on port 3001
- The `retune` package is linked locally via `npm link` — `node_modules/retune` is a symlink to `../retune/packages/overlay`
- `package.json` always uses the npm version (`"retune": "^0.3.x"`) so Vercel deploys work
- After building retune (`npm run build` in the retune repo), changes are picked up automatically via the symlink
- If `npm install` breaks the link, re-run `npm link retune` to restore it
- Never change `package.json` to use `file:` path — use the link instead

## Retune Development Workflow

When making changes to the retune package and testing on this site:

1. Make changes in `~/Projects/retune/packages/overlay/src/`
2. Run `npm run build` in the retune repo
3. Refresh the site — changes are live via symlink
4. When ready to publish: bump version, tag, push (GitHub Actions publishes to npm)
5. Update the version in this site's `package.json` to match the new npm version
