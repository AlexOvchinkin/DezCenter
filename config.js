//const page = 'main';
const page = 'disinsection';

module.exports = config = {
  src: {
    html: `html/${page}/index.html`,
    php: ['php/*.php', 'php/*/*.php'],
    styles: `scss/${page}/styles.scss`,
    stylesWatch: [`scss/${page}/styles.scss`, `scss/${page}/source/*.scss`],
    js: `js/${page}/*.js`,
    img: `img/${page}/*`
  },
  dest: {
    main: 'dist',
    php: 'dist/php',
    page: page
  }
}