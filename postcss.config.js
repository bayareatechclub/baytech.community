module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: [
    require('postcss-nested'),
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
  ],

  //TODO: check for the canonical postcss.config.js properties
  generate: {
    header: '/* (c) 2020 Bay Area Tech Club */',
    from: [
      // Fonts
      'assets/fonts/roboto.css',

      // Defaults
      'assets/css/base/main.css',  

      // Skeleton
      'assets/css/base/header.css',
      'assets/css/base/footer.css',
      'assets/css/base/blocks.css',

      // Pages
      'assets/css/pg/home.css',
      'assets/css/pg/projects.css',
      'assets/css/pg/contact.css',
      //...
    ],
    outdir: '_site/',
    // If no outfile don't concat into single file
    outfile: '_site/css/style.css',
  }
});
