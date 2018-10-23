module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {
      warnForDuplicates: false,
    },
    cssnano: {
      zindex: false,
    },
  },
};
