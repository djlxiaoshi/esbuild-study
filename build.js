

  (async () => {
    const esbuild = require('esbuild');
    const result = await esbuild.build({
        entryPoints: ['src/index2.js', 'src/index3.js', 'src/image.js'],
        bundle: true,
        outdir: 'dist',
        format: 'esm',
        loader: {
            '.png': 'dataurl'
        },
        metafile: true,
      }).catch(() => process.exit(1))
    
      let text = await esbuild.analyzeMetafile(result.metafile);
      console.log(text)
  })()