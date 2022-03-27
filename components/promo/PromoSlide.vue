<template>
  <div :class="[`js-section js-section-${bottleType} fp-auto-height`]" ref="beerSections">
    <div
      :class="[[ `promo-slide promo-slide--${bottleType}` ], {'promo-slide-first js-promo-slide-first': index === 0}, `promo-slide--${bottleType}-${index+1}`]">
      <div class="promo-slide__content" :class="{left: position === 'left'}">
        <div class="anim-bottle" :id="[ `anim-${bottleType}-container` ]" v-if="index === 0">
          <div class="anim-bottle__inner" :id="[`anim-${bottleType}-inner-container`]">
            <canvas :id="[ `anim-${bottleType}` ]" class="anim-bottle-canvas" :width="canvasWidth()"
                    height="900"></canvas>
          </div>
        </div>
        <div class="promo-slide__mobile-img"><img :src="mobileImgSrc" alt="ПЭТ"></div>
        <div class="promo-slide__content-inner" v-bind:data-num="contentDigit(index)">
          <div class="promo-slide__title"
               :class="{big: titleBig, 'promo-slide__title--small': titleSmall}">{{ title }}
          </div>
          <div class="promo-slide__desc">{{ desc }}</div>
          <div class="promo-slide__items" v-if="list">
            <ul>
              <li v-for="(i, index) in list" :key="index">{{ i }}</li>
            </ul>
          </div>
          <a v-if="buttonTitle" :href="buttonHref" class="promo-slide__button"><span
            class="promo-slide__button-text">Консультация специалиста</span></a>
          <button class="promo-slide__go-down" v-if="index === 0" @click.prevent="$emit('move-down-click');">
            <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M.4 11.8A.5.5 0 0 1 1 11l6.7 5.2a.5.5 0 1 1-.6.8L.4 11.8Z" fill="#1B2AC9"/>
              <path d="M14.1 10.9a.5.5 0 1 1 .6.8L8 16.9a.5.5 0 0 1-.6-.7l6.7-5.3Z" fill="#1B2AC9"/>
              <path d="M7 .5a.5.5 0 0 1 1 0v16a.5.5 0 0 1-1 0V.5Z" fill="#1B2AC9"/>
            </svg>
          </button>
        </div>
      </div>

      <button @click.prevent="$emit('promo-trigger-click')"
              class="promo-slide-trigger js-promo-slideshow-change-trigger"
              :id="[`promo-trigger-${bottleType}`]"
              v-if="index === 0">
        <img src="~/assets/img/water-i.svg" alt="icon">
        <span>Решение для воды</span>
      </button>
      <img v-if="index === 0" src="~/assets/img/big_bg.png" alt="bg" class="promo-slide__bg" aria-hidden="true">
    </div>
  </div>
</template>

<script>
export default {
  name: "PromoSlide.vue",
  props: {
    hasCanvas: Boolean,
    title: String,
    bottleType: String,
    desc: {
      type: String,
      required: false,
    },
    mobileImgSrc: {
      type: String,
    },
    titleBig: {
      type: Boolean,
      required: false
    },
    titleSmall: {
      type: Boolean,
      required: false
    },
    position: String,
    hasBg: Boolean,
    index: Number,
    isLast: {
      type: Boolean,
      default: () => false,
    },
    list: {
      type: Array,
      required: false,
    },
    buttonTitle: {
      type: String,
      required: false,
    },
    buttonHref: {
      type: String,
      required: false,
    },
  },
  methods: {
    contentDigit(index) {
      if (index === 0 || this.isLast) {
        return false;
      }
      return index;
    },
    canvasWidth() {
      return this.bottleType === 'beer' ? 1600 : 960;
    }
  },
}
</script>

<style lang="scss">

</style>
