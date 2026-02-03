const esbuild = require('esbuild')

esbuild.build({
  entryPoints: ['src/index.js'],
  bundle: true,
  minify: true,
  platform: 'node',
  target: 'node22',
  outfile: 'build/index.js',
  sourcemap: process.argv.includes('--sourcemap')
}).catch(() => process.exit(1))
