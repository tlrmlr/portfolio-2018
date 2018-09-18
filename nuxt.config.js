module.exports = {
  /*
  ** Headers of the page
  */
  css: [
    '~assets/reset.css',
    '~assets/anim.css'
  ],
  head: {
    title: 'Tyler Miller | Product Designer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tyler Miller is a product designer based in San Francisco.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'transparent' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

