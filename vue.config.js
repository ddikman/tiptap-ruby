module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/tiptap-ruby/' : '/',
  outputDir: process.env.NODE_ENV === 'production' ? 'docs' : 'dist',
};
