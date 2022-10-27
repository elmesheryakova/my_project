import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _30efaeee = () => interopDefault(import('..\\pages\\accessories.vue' /* webpackChunkName: "pages/accessories" */))
const _09832896 = () => interopDefault(import('..\\pages\\career.vue' /* webpackChunkName: "pages/career" */))
const _35f6d3b3 = () => interopDefault(import('..\\pages\\certificates.vue' /* webpackChunkName: "pages/certificates" */))
const _f9044854 = () => interopDefault(import('..\\pages\\company.vue' /* webpackChunkName: "pages/company" */))
const _2224576a = () => interopDefault(import('..\\pages\\conception\\index.vue' /* webpackChunkName: "pages/conception/index" */))
const _3250b36c = () => interopDefault(import('..\\pages\\contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _3c997bb2 = () => interopDefault(import('..\\pages\\docs.vue' /* webpackChunkName: "pages/docs" */))
const _1421c827 = () => interopDefault(import('..\\pages\\equipment.vue' /* webpackChunkName: "pages/equipment" */))
const _d80dedd6 = () => interopDefault(import('..\\pages\\loading.vue' /* webpackChunkName: "pages/loading" */))
const _56431610 = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages/news/index" */))
const _fe0e38c0 = () => interopDefault(import('..\\pages\\partners\\index.vue' /* webpackChunkName: "pages/partners/index" */))
const _2adb9681 = () => interopDefault(import('..\\pages\\prices.vue' /* webpackChunkName: "pages/prices" */))
const _11d7d147 = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _601d2c66 = () => interopDefault(import('..\\pages\\questions.vue' /* webpackChunkName: "pages/questions" */))
const _1834d718 = () => interopDefault(import('..\\pages\\reviews.vue' /* webpackChunkName: "pages/reviews" */))
const _56ada4df = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _2eda8a0e = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _775bbc11 = () => interopDefault(import('..\\pages\\shipment.vue' /* webpackChunkName: "pages/shipment" */))
const _64cc5322 = () => interopDefault(import('..\\pages\\solutions\\index.vue' /* webpackChunkName: "pages/solutions/index" */))
const _b4208a58 = () => interopDefault(import('..\\pages\\team.vue' /* webpackChunkName: "pages/team" */))
const _259199fa = () => interopDefault(import('..\\pages\\conception\\_slug.vue' /* webpackChunkName: "pages/conception/_slug" */))
const _59b058a0 = () => interopDefault(import('..\\pages\\news\\_slug.vue' /* webpackChunkName: "pages/news/_slug" */))
const _d5d1cde6 = () => interopDefault(import('..\\pages\\products\\_current\\index.vue' /* webpackChunkName: "pages/products/_current/index" */))
const _683995b2 = () => interopDefault(import('..\\pages\\solutions\\_slug.vue' /* webpackChunkName: "pages/solutions/_slug" */))
const _7f15851d = () => interopDefault(import('..\\pages\\products\\_current\\_slug\\index.vue' /* webpackChunkName: "pages/products/_current/_slug/index" */))
const _16011c2a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _30efaeee,
    name: "accessories"
  }, {
    path: "/career",
    component: _09832896,
    name: "career"
  }, {
    path: "/certificates",
    component: _35f6d3b3,
    name: "certificates"
  }, {
    path: "/company",
    component: _f9044854,
    name: "company"
  }, {
    path: "/conception",
    component: _2224576a,
    name: "conception"
  }, {
    path: "/contacts",
    component: _3250b36c,
    name: "contacts"
  }, {
    path: "/docs",
    component: _3c997bb2,
    name: "docs"
  }, {
    path: "/equipment",
    component: _1421c827,
    name: "equipment"
  }, {
    path: "/loading",
    component: _d80dedd6,
    name: "loading"
  }, {
    path: "/news",
    component: _56431610,
    name: "news"
  }, {
    path: "/partners",
    component: _fe0e38c0,
    name: "partners"
  }, {
    path: "/prices",
    component: _2adb9681,
    name: "prices"
  }, {
    path: "/products",
    component: _11d7d147,
    name: "products"
  }, {
    path: "/questions",
    component: _601d2c66,
    name: "questions"
  }, {
    path: "/reviews",
    component: _1834d718,
    name: "reviews"
  }, {
    path: "/search",
    component: _56ada4df,
    name: "search"
  }, {
    path: "/service",
    component: _2eda8a0e,
    name: "service"
  }, {
    path: "/shipment",
    component: _775bbc11,
    name: "shipment"
  }, {
    path: "/solutions",
    component: _64cc5322,
    name: "solutions"
  }, {
    path: "/team",
    component: _b4208a58,
    name: "team"
  }, {
    path: "/conception/:slug",
    component: _259199fa,
    name: "conception-slug"
  }, {
    path: "/news/:slug",
    component: _59b058a0,
    name: "news-slug"
  }, {
    path: "/products/:current",
    component: _d5d1cde6,
    name: "products-current"
  }, {
    path: "/solutions/:slug",
    component: _683995b2,
    name: "solutions-slug"
  }, {
    path: "/products/:current/:slug",
    component: _7f15851d,
    name: "products-current-slug"
  }, {
    path: "/",
    component: _16011c2a,
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
