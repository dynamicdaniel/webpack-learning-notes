module.exports = {
  // parser: 'sugarss',
  plugins: [
    require('cssnano')({
      preset: [
        'default'
      ]
    }),
    require('postcss-cssnext')({})
  ]
}