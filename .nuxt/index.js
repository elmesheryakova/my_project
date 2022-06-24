import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_ea7dc282 from 'nuxt_plugin_plugin_ea7dc282' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_bootstrapvue_71dbd591 from 'nuxt_plugin_bootstrapvue_71dbd591' // Source: .\\bootstrap-vue.js (mode: 'all')
import nuxt_plugin_nuxtmq_6dc5a9ea from 'nuxt_plugin_nuxtmq_6dc5a9ea' // Source: .\\nuxt-mq.js (mode: 'all')
import nuxt_plugin_gtm_73e59e90 from 'nuxt_plugin_gtm_73e59e90' // Source: .\\gtm.js (mode: 'all')
import nuxt_plugin_axios_4ecd0d3c from 'nuxt_plugin_axios_4ecd0d3c' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_deviceplugin_5eda8eed from 'nuxt_plugin_deviceplugin_5eda8eed' // Source: .\\device.plugin.js (mode: 'all')
import nuxt_plugin_vuesvgicon_02c3d595 from 'nuxt_plugin_vuesvgicon_02c3d595' // Source: ..\\plugins\\vue-svgicon.js (mode: 'all')
import nuxt_plugin_vueawesomeswiper_5ce03f58 from 'nuxt_plugin_vueawesomeswiper_5ce03f58' // Source: ..\\plugins\\vue-awesome-swiper.js (mode: 'client')
import nuxt_plugin_device_71515d2b from 'nuxt_plugin_device_71515d2b' // Source: ..\\plugins\\device.js (mode: 'client')
import nuxt_plugin_devdevice_99c08f1a from 'nuxt_plugin_devdevice_99c08f1a' // Source: ..\\plugins\\dev-device.js (mode: 'client')
import nuxt_plugin_smoothscroll_ac9d6bbe from 'nuxt_plugin_smoothscroll_ac9d6bbe' // Source: ..\\plugins\\smooth-scroll.js (mode: 'client')
import nuxt_plugin_vuefullpage_ec0158c8 from 'nuxt_plugin_vuefullpage_ec0158c8' // Source: ..\\plugins\\vue-fullpage.js (mode: 'client')
import nuxt_plugin_ymapPlugin_43baa32b from 'nuxt_plugin_ymapPlugin_43baa32b' // Source: ..\\plugins\\ymapPlugin.js (mode: 'client')
import nuxt_plugin_fullpage_2c77f33a from 'nuxt_plugin_fullpage_2c77f33a' // Source: ..\\plugins\\fullpage.js (mode: 'client')
import nuxt_plugin_gsap_0d8e3474 from 'nuxt_plugin_gsap_0d8e3474' // Source: ..\\plugins\\gsap.js (mode: 'client')
import nuxt_plugin_vuemask_08817de4 from 'nuxt_plugin_vuemask_08817de4' // Source: ..\\plugins\\vue-mask.js (mode: 'client')
import nuxt_plugin_eventBus_aaeb250a from 'nuxt_plugin_eventBus_aaeb250a' // Source: ..\\plugins\\eventBus.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"PET-EXPERT","htmlAttrs":{"lang":"ru"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no, shrink-to-fit=no"},{"hid":"description","name":"description","content":""},{"name":"format-detection","content":"telephone=no"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"script":[{"hid":"gtm-script","innerHTML":"if(!window._gtm_init){window._gtm_init=1;(function(w,n,d,m,e,p){w[d]=(w[d]==1||n[d]=='yes'||n[d]==1||n[m]==1||(w[e]&&w[e][p]&&w[e][p]()))?1:0})(window,navigator,'doNotTrack','msDoNotTrack','external','msTrackingProtectionEnabled');(function(w,d,s,l,x,y){w[x]={};w._gtm_inject=function(i){if(w.doNotTrack||w[x][i])return;w[x][i]=1;w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https:\u002F\u002Fwww.googletagmanager.com\u002Fgtm.js?id='+i;f.parentNode.insertBefore(j,f);};w[y]('GTM-PX32XQD')})(window,document,'script','dataLayer','_gtm_ids','_gtm_inject')}"}],"style":[],"noscript":[{"hid":"gtm-noscript","pbody":true,"innerHTML":"\u003Ciframe src=\"https:\u002F\u002Fwww.googletagmanager.com\u002Fns.html?id=GTM-PX32XQD?id=GTM-PX32XQD&\" height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\" title=\"gtm\"\u003E\u003C\u002Fiframe\u003E"}],"__dangerouslyDisableSanitizersByTagID":{"gtm-script":["innerHTML"],"gtm-noscript":["innerHTML"]}},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_ea7dc282 === 'function') {
    await nuxt_plugin_plugin_ea7dc282(app.context, inject)
  }

  if (typeof nuxt_plugin_bootstrapvue_71dbd591 === 'function') {
    await nuxt_plugin_bootstrapvue_71dbd591(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtmq_6dc5a9ea === 'function') {
    await nuxt_plugin_nuxtmq_6dc5a9ea(app.context, inject)
  }

  if (typeof nuxt_plugin_gtm_73e59e90 === 'function') {
    await nuxt_plugin_gtm_73e59e90(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_4ecd0d3c === 'function') {
    await nuxt_plugin_axios_4ecd0d3c(app.context, inject)
  }

  if (typeof nuxt_plugin_deviceplugin_5eda8eed === 'function') {
    await nuxt_plugin_deviceplugin_5eda8eed(app.context, inject)
  }

  if (typeof nuxt_plugin_vuesvgicon_02c3d595 === 'function') {
    await nuxt_plugin_vuesvgicon_02c3d595(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueawesomeswiper_5ce03f58 === 'function') {
    await nuxt_plugin_vueawesomeswiper_5ce03f58(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_device_71515d2b === 'function') {
    await nuxt_plugin_device_71515d2b(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_devdevice_99c08f1a === 'function') {
    await nuxt_plugin_devdevice_99c08f1a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_smoothscroll_ac9d6bbe === 'function') {
    await nuxt_plugin_smoothscroll_ac9d6bbe(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuefullpage_ec0158c8 === 'function') {
    await nuxt_plugin_vuefullpage_ec0158c8(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_ymapPlugin_43baa32b === 'function') {
    await nuxt_plugin_ymapPlugin_43baa32b(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_fullpage_2c77f33a === 'function') {
    await nuxt_plugin_fullpage_2c77f33a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_gsap_0d8e3474 === 'function') {
    await nuxt_plugin_gsap_0d8e3474(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuemask_08817de4 === 'function') {
    await nuxt_plugin_vuemask_08817de4(app.context, inject)
  }

  if (typeof nuxt_plugin_eventBus_aaeb250a === 'function') {
    await nuxt_plugin_eventBus_aaeb250a(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
