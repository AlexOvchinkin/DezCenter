const localhost_dir = 'C:\\OSPanel\\domains\\dez-center';

module.exports = {
  src: {
    img: 'img/**',
    php: 'php/**',
    js: 'js/**',
    styles: 'scss/*/styles.scss',
    stylesWatch: 'scss/**'
  },
  dest: { 
    root: localhost_dir,
    img: `${localhost_dir}/img`,
    js: `${localhost_dir}/js`,
    styles: `${localhost_dir}/css`,
  }
}