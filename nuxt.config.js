export default {
  loading: '@/components/loading.vue',
  server: {
    host: '0.0.0.0',
  },
  head: {
    title: 'pet-expert',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no, shrink-to-fit=no'
      },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

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
    { src: '~/plugins/vue-awesome-swiper.js', mode: "client" },
    { src: "~/plugins/device.js", mode: "client" },
    { src: "~/plugins/dev-device.js", mode: "client" },
    { src: "~/plugins/smooth-scroll.js", mode: "client" },
    { src: "~/plugins/vue-fullpage.js", mode: "client" },
    { src: '~/plugins/ymapPlugin.js', mode: 'client' },
    { src: '~/plugins/fullpage.js', mode: 'client' },
    { src: '~/plugins/gsap.js', mode: 'client' },

    '~/plugins/eventBus.js',
  ],

  components: true,

  buildModules: [
    '@nuxtjs/device'
  ],
  device: {
    refreshOnResize: true
  },

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',

    '@nuxtjs/device',
    ["nuxt-mq"]
  ],

  mq: {
    defaultBreakpoint: "xl2",
    breakpoints: {
      xs: 360,
      sm: 476,
      md: 768,
      lg: 992,
      xl: 1560,
      xl2: Infinity,
    }
  },

  axios: {
    baseURL: '/',
  },

  build: {
    babel: {
      compact: true,
    },
  },
  generate: {
    minify: {
      collapseWhitespace: false
    }
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
