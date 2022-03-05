export default {

  head: {
    title: 'pet-expert',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  styleResources: {
    scss: [
      '@/assets/scss/_variables.scss',
    ]
  },

  css: [
    '@/assets/scss/main.scss'
  ],


  plugins: [
    '@/plugins/vue-svgicon.js',
  ],


  components: true,


  buildModules: [
  ],


  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  axios: {

    baseURL: '/',
  },


  build: {
    babel: {
      compact: true,
    },
  },
  router: {

    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }

      const findEl = async (hash, x) => {
        return document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1))
            }, 1500)
          })
      }

      if (to.hash) {
        let el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({
            top: el.offsetTop,
            behavior: 'smooth'
          })
        } else {

          return window.scrollTo(0, el.offsetTop);
        }

      }

      return {
        x: 0,
        y: 0
      }
    }

  }
}