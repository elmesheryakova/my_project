import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c58b995c = () => interopDefault(import('..\\pages\\accessories.vue' /* webpackChunkName: "pages/accessories" */))
const _98bdf168 = () => interopDefault(import('..\\pages\\career.vue' /* webpackChunkName: "pages/career" */))
const _3686220a = () => interopDefault(import('..\\pages\\certificates.vue' /* webpackChunkName: "pages/certificates" */))
const _512299c2 = () => interopDefault(import('..\\pages\\company.vue' /* webpackChunkName: "pages/company" */))
const _c3963758 = () => interopDefault(import('..\\pages\\conception\\index.vue' /* webpackChunkName: "pages/conception/index" */))
const _1101b821 = () => interopDefault(import('..\\pages\\contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _5167ddee = () => interopDefault(import('..\\pages\\docs.vue' /* webpackChunkName: "pages/docs" */))
const _2f39f130 = () => interopDefault(import('..\\pages\\equipment.vue' /* webpackChunkName: "pages/equipment" */))
const _302c3f44 = () => interopDefault(import('..\\pages\\loading.vue' /* webpackChunkName: "pages/loading" */))
const _eadf007e = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages/news/index" */))
const _b4b33c2e = () => interopDefault(import('..\\pages\\partners\\index.vue' /* webpackChunkName: "pages/partners/index" */))
const _39839bd0 = () => interopDefault(import('..\\pages\\prices.vue' /* webpackChunkName: "pages/prices" */))
const _36854f90 = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _7b35556f = () => interopDefault(import('..\\pages\\questions.vue' /* webpackChunkName: "pages/questions" */))
const _47d66bbd = () => interopDefault(import('..\\pages\\reviews.vue' /* webpackChunkName: "pages/reviews" */))
const _0f104076 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _fa693d52 = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _bcf46430 = () => interopDefault(import('..\\pages\\shipment.vue' /* webpackChunkName: "pages/shipment" */))
const _3e9c2146 = () => interopDefault(import('..\\pages\\solutions\\index.vue' /* webpackChunkName: "pages/solutions/index" */))
const _40a2502b = () => interopDefault(import('..\\pages\\team.vue' /* webpackChunkName: "pages/team" */))
const _c70379e8 = () => interopDefault(import('..\\pages\\conception\\_slug.vue' /* webpackChunkName: "pages/conception/_slug" */))
const _ee4c430e = () => interopDefault(import('..\\pages\\news\\_slug.vue' /* webpackChunkName: "pages/news/_slug" */))
const _ea93dfd4 = () => interopDefault(import('..\\pages\\products\\_current\\index.vue' /* webpackChunkName: "pages/products/_current/index" */))
const _3ce57ffe = () => interopDefault(import('..\\pages\\solutions\\_slug.vue' /* webpackChunkName: "pages/solutions/_slug" */))
const _f6257c18 = () => interopDefault(import('..\\pages\\products\\_current\\_slug\\index.vue' /* webpackChunkName: "pages/products/_current/_slug/index" */))
const _9ec0f118 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _c58b995c,
    name: "accessories"
  }, {
    path: "/career",
    component: _98bdf168,
    name: "career"
  }, {
    path: "/certificates",
    component: _3686220a,
    name: "certificates"
  }, {
    path: "/company",
    component: _512299c2,
    name: "company"
  }, {
    path: "/conception",
    component: _c3963758,
    name: "conception"
  }, {
    path: "/contacts",
    component: _1101b821,
    name: "contacts"
  }, {
    path: "/docs",
    component: _5167ddee,
    name: "docs"
  }, {
    path: "/equipment",
    component: _2f39f130,
    name: "equipment"
  }, {
    path: "/loading",
    component: _302c3f44,
    name: "loading"
  }, {
    path: "/news",
    component: _eadf007e,
    name: "news"
  }, {
    path: "/partners",
    component: _b4b33c2e,
    name: "partners"
  }, {
    path: "/prices",
    component: _39839bd0,
    name: "prices"
  }, {
    path: "/products",
    component: _36854f90,
    name: "products"
  }, {
    path: "/questions",
    component: _7b35556f,
    name: "questions"
  }, {
    path: "/reviews",
    component: _47d66bbd,
    name: "reviews"
  }, {
    path: "/search",
    component: _0f104076,
    name: "search"
  }, {
    path: "/service",
    component: _fa693d52,
    name: "service"
  }, {
    path: "/shipment",
    component: _bcf46430,
    name: "shipment"
  }, {
    path: "/solutions",
    component: _3e9c2146,
    name: "solutions"
  }, {
    path: "/team",
    component: _40a2502b,
    name: "team"
  }, {
    path: "/conception/:slug",
    component: _c70379e8,
    name: "conception-slug"
  }, {
    path: "/news/:slug",
    component: _ee4c430e,
    name: "news-slug"
  }, {
    path: "/products/:current",
    component: _ea93dfd4,
    name: "products-current"
  }, {
    path: "/solutions/:slug",
    component: _3ce57ffe,
    name: "solutions-slug"
  }, {
    path: "/products/:current/:slug",
    component: _f6257c18,
    name: "products-current-slug"
  }, {
    path: "/",
    component: _9ec0f118,
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
