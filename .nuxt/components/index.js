export { default as Banner } from '../..\\components\\Banner.vue'
export { default as ContactsSection } from '../..\\components\\ContactsSection.vue'
export { default as Feedback } from '../..\\components\\Feedback.vue'
export { default as FeedbackForm } from '../..\\components\\FeedbackForm.vue'
export { default as Fullpage } from '../..\\components\\Fullpage.vue'
export { default as Fullscroll } from '../..\\components\\Fullscroll.vue'
export { default as GridMobile } from '../..\\components\\GridMobile.vue'
export { default as LoadingBar } from '../..\\components\\LoadingBar.vue'
export { default as LoadingImg } from '../..\\components\\LoadingImg.vue'
export { default as Map } from '../..\\components\\Map.vue'
export { default as Preloader } from '../..\\components\\Preloader.vue'
export { default as YandexMaps } from '../..\\components\\YandexMaps.vue'
export { default as Advantages } from '../..\\components\\advantages\\index.vue'
export { default as AdvantagesItem } from '../..\\components\\advantages\\Item.vue'
export { default as CompanyBanner } from '../..\\components\\company\\Banner.vue'
export { default as CompanyConcept } from '../..\\components\\company\\Concept.vue'
export { default as CompanyStory } from '../..\\components\\company\\Story.vue'
export { default as ConceptBanner } from '../..\\components\\concept\\Banner.vue'
export { default as ConceptItem } from '../..\\components\\concept\\Item.vue'
export { default as FooterBottom } from '../..\\components\\footer\\Bottom.vue'
export { default as Footer } from '../..\\components\\footer\\index.vue'
export { default as FooterTop } from '../..\\components\\footer\\Top.vue'
export { default as HeaderBottom } from '../..\\components\\header\\Bottom.vue'
export { default as Header } from '../..\\components\\header\\index.vue'
export { default as HeaderNavbar } from '../..\\components\\header\\Navbar.vue'
export { default as HeaderSubmenu } from '../..\\components\\header\\Submenu.vue'
export { default as HeaderTop } from '../..\\components\\header\\Top.vue'
export { default as ModalFeedback } from '../..\\components\\modal\\Feedback.vue'
export { default as ModalHeader } from '../..\\components\\modal\\Header.vue'
export { default as ModalNewsSuccess } from '../..\\components\\modal\\NewsSuccess.vue'
export { default as ModalSidebar } from '../..\\components\\modal\\Sidebar.vue'
export { default as ModalSubSuccess } from '../..\\components\\modal\\SubSuccess.vue'
export { default as ModalSuccess } from '../..\\components\\modal\\Success.vue'
export { default as News } from '../..\\components\\news\\Index.vue'
export { default as ProductInfo } from '../..\\components\\product\\Info.vue'
export { default as ProductIsDev } from '../..\\components\\product\\IsDev.vue'
export { default as ProductItem } from '../..\\components\\product\\Item.vue'
export { default as ProductPreview } from '../..\\components\\product\\Preview.vue'
export { default as ProductSpecifications } from '../..\\components\\product\\Specifications.vue'
export { default as PromoChooseItem } from '../..\\components\\promo\\ChooseItem.vue'
export { default as Promo } from '../..\\components\\promo\\Promo.vue'
export { default as PromoConcept } from '../..\\components\\promo\\PromoConcept.vue'
export { default as PromoMobileSlider } from '../..\\components\\promo\\PromoMobileSlider.vue'
export { default as PromoSlide } from '../..\\components\\promo\\PromoSlide.vue'
export { default as PromoSlides } from '../..\\components\\promo\\PromoSlides.vue'
export { default as PromoVideo } from '../..\\components\\promo\\PromoVideo.vue'
export { default as SliderFullscreen } from '../..\\components\\slider\\Fullscreen.vue'
export { default as Slider } from '../..\\components\\slider\\index.vue'
export { default as SliderPartnersSlider } from '../..\\components\\slider\\PartnersSlider.vue'
export { default as SliderProduct } from '../..\\components\\slider\\Product.vue'
export { default as SliderSolutions } from '../..\\components\\slider\\Solutions.vue'
export { default as SliderTeamSlider } from '../..\\components\\slider\\TeamSlider.vue'
export { default as SliderWater } from '../..\\components\\slider\\Water.vue'
export { default as SolutionConsultation } from '../..\\components\\solution\\Consultation.vue'
export { default as Solution } from '../..\\components\\solution\\index.vue'
export { default as SolutionInfo } from '../..\\components\\solution\\Info.vue'
export { default as SolutionMobile } from '../..\\components\\solution\\Mobile.vue'
export { default as SubscriptionForm } from '../..\\components\\subscription\\Form.vue'
export { default as Subscription } from '../..\\components\\subscription\\index.vue'
export { default as SubscriptionNews } from '../..\\components\\subscription\\News.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
