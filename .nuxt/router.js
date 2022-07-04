import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _46f26e08 = () => interopDefault(import('..\\pages\\accessories.vue' /* webpackChunkName: "pages/accessories" */))
const _7d5f1a54 = () => interopDefault(import('..\\pages\\career.vue' /* webpackChunkName: "pages/career" */))
const _785583d8 = () => interopDefault(import('..\\pages\\certificates.vue' /* webpackChunkName: "pages/certificates" */))
const _7facb8d5 = () => interopDefault(import('..\\pages\\company.vue' /* webpackChunkName: "pages/company" */))
const _39f082ec = () => interopDefault(import('..\\pages\\conception\\index.vue' /* webpackChunkName: "pages/conception/index" */))
const _7084692b = () => interopDefault(import('..\\pages\\contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _17d651da = () => interopDefault(import('..\\pages\\docs.vue' /* webpackChunkName: "pages/docs" */))
const _7fe53d34 = () => interopDefault(import('..\\pages\\equipment.vue' /* webpackChunkName: "pages/equipment" */))
const _dfb033d8 = () => interopDefault(import('..\\pages\\loading.vue' /* webpackChunkName: "pages/loading" */))
const _3448ba77 = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages/news/index" */))
const _22935cc2 = () => interopDefault(import('..\\pages\\partners\\index.vue' /* webpackChunkName: "pages/partners/index" */))
const _1e24c4bc = () => interopDefault(import('..\\pages\\prices.vue' /* webpackChunkName: "pages/prices" */))
const _7f953f46 = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _0c08c5a5 = () => interopDefault(import('..\\pages\\questions.vue' /* webpackChunkName: "pages/questions" */))
const _1fd71d1a = () => interopDefault(import('..\\pages\\reviews.vue' /* webpackChunkName: "pages/reviews" */))
const _1cbfac00 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _2b09670d = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _01087ef2 = () => interopDefault(import('..\\pages\\shipment.vue' /* webpackChunkName: "pages/shipment" */))
const _178a2850 = () => interopDefault(import('..\\pages\\solutions\\index.vue' /* webpackChunkName: "pages/solutions/index" */))
const _5d6b1635 = () => interopDefault(import('..\\pages\\team.vue' /* webpackChunkName: "pages/team" */))
const _3d5dc57c = () => interopDefault(import('..\\pages\\conception\\_slug.vue' /* webpackChunkName: "pages/conception/_slug" */))
const _3292192f = () => interopDefault(import('..\\pages\\news\\_slug.vue' /* webpackChunkName: "pages/news/_slug" */))
const _6a7e544c = () => interopDefault(import('..\\pages\\products\\_current\\index.vue' /* webpackChunkName: "pages/products/_current/index" */))
const _15d38708 = () => interopDefault(import('..\\pages\\solutions\\_slug.vue' /* webpackChunkName: "pages/solutions/_slug" */))
const _e4e01604 = () => interopDefault(import('..\\pages\\products\\_current\\_slug\\index.vue' /* webpackChunkName: "pages/products/_current/_slug/index" */))
const _2cef82aa = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/accessories",
    component: _46f26e08,
    name: "accessories"
  }, {
    path: "/career",
    component: _7d5f1a54,
    name: "career"
  }, {
    path: "/certificates",
    component: _785583d8,
    name: "certificates"
  }, {
    path: "/company",
    component: _7facb8d5,
    name: "company"
  }, {
    path: "/conception",
    component: _39f082ec,
    name: "conception"
  }, {
    path: "/contacts",
    component: _7084692b,
    name: "contacts"
  }, {
    path: "/docs",
    component: _17d651da,
    name: "docs"
  }, {
    path: "/equipment",
    component: _7fe53d34,
    name: "equipment"
  }, {
    path: "/loading",
    component: _dfb033d8,
    name: "loading"
  }, {
    path: "/news",
    component: _3448ba77,
    name: "news"
  }, {
    path: "/partners",
    component: _22935cc2,
    name: "partners"
  }, {
    path: "/prices",
    component: _1e24c4bc,
    name: "prices"
  }, {
    path: "/products",
    component: _7f953f46,
    name: "products"
  }, {
    path: "/questions",
    component: _0c08c5a5,
    name: "questions"
  }, {
    path: "/reviews",
    component: _1fd71d1a,
    name: "reviews"
  }, {
    path: "/search",
    component: _1cbfac00,
    name: "search"
  }, {
    path: "/service",
    component: _2b09670d,
    name: "service"
  }, {
    path: "/shipment",
    component: _01087ef2,
    name: "shipment"
  }, {
    path: "/solutions",
    component: _178a2850,
    name: "solutions"
  }, {
    path: "/team",
    component: _5d6b1635,
    name: "team"
  }, {
    path: "/conception/:slug",
    component: _3d5dc57c,
    name: "conception-slug"
  }, {
    path: "/news/:slug",
    component: _3292192f,
    name: "news-slug"
  }, {
    path: "/products/:current",
    component: _6a7e544c,
    name: "products-current"
  }, {
    path: "/solutions/:slug",
    component: _15d38708,
    name: "solutions-slug"
  }, {
    path: "/products/:current/:slug",
    component: _e4e01604,
    name: "products-current-slug"
  }, {
    path: "/",
    component: _2cef82aa,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
