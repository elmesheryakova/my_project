import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d69e0040 = () => interopDefault(import('..\\pages\\accessories.vue' /* webpackChunkName: "pages/accessories" */))
const _edf7cc04 = () => interopDefault(import('..\\pages\\career.vue' /* webpackChunkName: "pages/career" */))
const _2de8e73c = () => interopDefault(import('..\\pages\\certificates.vue' /* webpackChunkName: "pages/certificates" */))
const _a32412a6 = () => interopDefault(import('..\\pages\\company.vue' /* webpackChunkName: "pages/company" */))
const _74178e62 = () => interopDefault(import('..\\pages\\conception\\index.vue' /* webpackChunkName: "pages/conception/index" */))
const _19eae653 = () => interopDefault(import('..\\pages\\contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _7f58283b = () => interopDefault(import('..\\pages\\docs.vue' /* webpackChunkName: "pages/docs" */))
const _4376893e = () => interopDefault(import('..\\pages\\equipment.vue' /* webpackChunkName: "pages/equipment" */))
const _822db828 = () => interopDefault(import('..\\pages\\loading.vue' /* webpackChunkName: "pages/loading" */))
const _fbf16762 = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages/news/index" */))
const _34a83777 = () => interopDefault(import('..\\pages\\partners\\index.vue' /* webpackChunkName: "pages/partners/index" */))
const _8ebd766c = () => interopDefault(import('..\\pages\\prices.vue' /* webpackChunkName: "pages/prices" */))
const _74f1b5c4 = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _e11c2506 = () => interopDefault(import('..\\pages\\questions.vue' /* webpackChunkName: "pages/questions" */))
const _1ed5af4b = () => interopDefault(import('..\\pages\\reviews.vue' /* webpackChunkName: "pages/reviews" */))
const _371959b0 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _59caa4e5 = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _ab2207cc = () => interopDefault(import('..\\pages\\shipment.vue' /* webpackChunkName: "pages/shipment" */))
const _e0560510 = () => interopDefault(import('..\\pages\\solutions\\index.vue' /* webpackChunkName: "pages/solutions/index" */))
const _2ea33146 = () => interopDefault(import('..\\pages\\team.vue' /* webpackChunkName: "pages/team" */))
const _7260ed1a = () => interopDefault(import('..\\pages\\conception\\_slug.vue' /* webpackChunkName: "pages/conception/_slug" */))
const _ff5ea9f2 = () => interopDefault(import('..\\pages\\news\\_slug.vue' /* webpackChunkName: "pages/news/_slug" */))
const _27e667b8 = () => interopDefault(import('..\\pages\\products\\_current\\index.vue' /* webpackChunkName: "pages/products/_current/index" */))
const _e3c347a0 = () => interopDefault(import('..\\pages\\solutions\\_slug.vue' /* webpackChunkName: "pages/solutions/_slug" */))
const _221b7a26 = () => interopDefault(import('..\\pages\\products\\_current\\_slug\\index.vue' /* webpackChunkName: "pages/products/_current/_slug/index" */))
const _0a165682 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _d69e0040,
    name: "accessories"
  }, {
    path: "/career",
    component: _edf7cc04,
    name: "career"
  }, {
    path: "/certificates",
    component: _2de8e73c,
    name: "certificates"
  }, {
    path: "/company",
    component: _a32412a6,
    name: "company"
  }, {
    path: "/conception",
    component: _74178e62,
    name: "conception"
  }, {
    path: "/contacts",
    component: _19eae653,
    name: "contacts"
  }, {
    path: "/docs",
    component: _7f58283b,
    name: "docs"
  }, {
    path: "/equipment",
    component: _4376893e,
    name: "equipment"
  }, {
    path: "/loading",
    component: _822db828,
    name: "loading"
  }, {
    path: "/news",
    component: _fbf16762,
    name: "news"
  }, {
    path: "/partners",
    component: _34a83777,
    name: "partners"
  }, {
    path: "/prices",
    component: _8ebd766c,
    name: "prices"
  }, {
    path: "/products",
    component: _74f1b5c4,
    name: "products"
  }, {
    path: "/questions",
    component: _e11c2506,
    name: "questions"
  }, {
    path: "/reviews",
    component: _1ed5af4b,
    name: "reviews"
  }, {
    path: "/search",
    component: _371959b0,
    name: "search"
  }, {
    path: "/service",
    component: _59caa4e5,
    name: "service"
  }, {
    path: "/shipment",
    component: _ab2207cc,
    name: "shipment"
  }, {
    path: "/solutions",
    component: _e0560510,
    name: "solutions"
  }, {
    path: "/team",
    component: _2ea33146,
    name: "team"
  }, {
    path: "/conception/:slug",
    component: _7260ed1a,
    name: "conception-slug"
  }, {
    path: "/news/:slug",
    component: _ff5ea9f2,
    name: "news-slug"
  }, {
    path: "/products/:current",
    component: _27e667b8,
    name: "products-current"
  }, {
    path: "/solutions/:slug",
    component: _e3c347a0,
    name: "solutions-slug"
  }, {
    path: "/products/:current/:slug",
    component: _221b7a26,
    name: "products-current-slug"
  }, {
    path: "/",
    component: _0a165682,
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
