import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _462ddba5 = () => interopDefault(import('..\\pages\\accessories.vue' /* webpackChunkName: "pages/accessories" */))
const _93b791ce = () => interopDefault(import('..\\pages\\career.vue' /* webpackChunkName: "pages/career" */))
const _a7f0f7d2 = () => interopDefault(import('..\\pages\\certificates.vue' /* webpackChunkName: "pages/certificates" */))
const _25517cf2 = () => interopDefault(import('..\\pages\\company.vue' /* webpackChunkName: "pages/company" */))
const _7b207b32 = () => interopDefault(import('..\\pages\\conception\\index.vue' /* webpackChunkName: "pages/conception/index" */))
const _7f7828ae = () => interopDefault(import('..\\pages\\contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _4c82d016 = () => interopDefault(import('..\\pages\\docs.vue' /* webpackChunkName: "pages/docs" */))
const _e0dcdb7a = () => interopDefault(import('..\\pages\\equipment.vue' /* webpackChunkName: "pages/equipment" */))
const _35ccaa31 = () => interopDefault(import('..\\pages\\loading.vue' /* webpackChunkName: "pages/loading" */))
const _33842814 = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages/news/index" */))
const _3dd0ae88 = () => interopDefault(import('..\\pages\\partners\\index.vue' /* webpackChunkName: "pages/partners/index" */))
const _347d3c36 = () => interopDefault(import('..\\pages\\prices.vue' /* webpackChunkName: "pages/prices" */))
const _71f69663 = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _48e612fc = () => interopDefault(import('..\\pages\\questions.vue' /* webpackChunkName: "pages/questions" */))
const _d48d94e0 = () => interopDefault(import('..\\pages\\reviews.vue' /* webpackChunkName: "pages/reviews" */))
const _11937043 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _5ea3a9ac = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _0ffc3e75 = () => interopDefault(import('..\\pages\\shipment.vue' /* webpackChunkName: "pages/shipment" */))
const _7153b4d3 = () => interopDefault(import('..\\pages\\solutions\\index.vue' /* webpackChunkName: "pages/solutions/index" */))
const _944de190 = () => interopDefault(import('..\\pages\\team.vue' /* webpackChunkName: "pages/team" */))
const _7e8dbdc2 = () => interopDefault(import('..\\pages\\conception\\_slug.vue' /* webpackChunkName: "pages/conception/_slug" */))
const _31cd86cc = () => interopDefault(import('..\\pages\\news\\_slug.vue' /* webpackChunkName: "pages/news/_slug" */))
const _2e472b29 = () => interopDefault(import('..\\pages\\products\\_current\\index.vue' /* webpackChunkName: "pages/products/_current/index" */))
const _6f9d138b = () => interopDefault(import('..\\pages\\solutions\\_slug.vue' /* webpackChunkName: "pages/solutions/_slug" */))
const _61ae1b81 = () => interopDefault(import('..\\pages\\products\\_current\\_slug\\index.vue' /* webpackChunkName: "pages/products/_current/_slug/index" */))
const _3b7eabf2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _462ddba5,
    name: "accessories"
  }, {
    path: "/career",
    component: _93b791ce,
    name: "career"
  }, {
    path: "/certificates",
    component: _a7f0f7d2,
    name: "certificates"
  }, {
    path: "/company",
    component: _25517cf2,
    name: "company"
  }, {
    path: "/conception",
    component: _7b207b32,
    name: "conception"
  }, {
    path: "/contacts",
    component: _7f7828ae,
    name: "contacts"
  }, {
    path: "/docs",
    component: _4c82d016,
    name: "docs"
  }, {
    path: "/equipment",
    component: _e0dcdb7a,
    name: "equipment"
  }, {
    path: "/loading",
    component: _35ccaa31,
    name: "loading"
  }, {
    path: "/news",
    component: _33842814,
    name: "news"
  }, {
    path: "/partners",
    component: _3dd0ae88,
    name: "partners"
  }, {
    path: "/prices",
    component: _347d3c36,
    name: "prices"
  }, {
    path: "/products",
    component: _71f69663,
    name: "products"
  }, {
    path: "/questions",
    component: _48e612fc,
    name: "questions"
  }, {
    path: "/reviews",
    component: _d48d94e0,
    name: "reviews"
  }, {
    path: "/search",
    component: _11937043,
    name: "search"
  }, {
    path: "/service",
    component: _5ea3a9ac,
    name: "service"
  }, {
    path: "/shipment",
    component: _0ffc3e75,
    name: "shipment"
  }, {
    path: "/solutions",
    component: _7153b4d3,
    name: "solutions"
  }, {
    path: "/team",
    component: _944de190,
    name: "team"
  }, {
    path: "/conception/:slug",
    component: _7e8dbdc2,
    name: "conception-slug"
  }, {
    path: "/news/:slug",
    component: _31cd86cc,
    name: "news-slug"
  }, {
    path: "/products/:current",
    component: _2e472b29,
    name: "products-current"
  }, {
    path: "/solutions/:slug",
    component: _6f9d138b,
    name: "solutions-slug"
  }, {
    path: "/products/:current/:slug",
    component: _61ae1b81,
    name: "products-current-slug"
  }, {
    path: "/",
    component: _3b7eabf2,
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
