<template>
  <div
    :class="[`js-section js-section-${bottleType} fp-auto-height`]"
    ref="beerSections"
  >
    <div
      :class="[
        [`promo-slide promo-slide--${bottleType}`],
        { 'promo-slide-first js-promo-slide-first': index === 0 },
        `promo-slide--${bottleType}-${index + 1}`,
      ]"
    >
      <div class="promo-slide__content" :class="{ left: position === 'left' }">
        <div
          class="anim-bottle-wrap"
          :id="[`anim-${bottleType}-wrap`]"
          v-if="index === 0"
        >
          <div class="anim-bottle" :id="[`anim-${bottleType}-container`]">
            <div
              class="anim-bottle__inner"
              :id="[`anim-${bottleType}-inner-container`]"
            >
              <canvas
                :id="[`anim-${bottleType}`]"
                class="anim-bottle-canvas"
                :width="canvasWidth()"
                height="900"
              ></canvas>
            </div>
          </div>
        </div>
        <div class="promo-slide__mobile-img">
          <img :src="mobileImgSrc" alt="ПЭТ" />
        </div>
        <div
          class="promo-slide__content-inner"
          v-bind:data-num="contentDigit(index)"
          :class="{ safari: this.$device.isMacOS }"
        >
          <div
            class="promo-slide__title"
            :class="{ big: titleBig, 'promo-slide__title--small': titleSmall }"
          >
            {{ title }}
          </div>
          <div class="promo-slide__desc" v-if="desc">{{ desc }}</div>
          <div class="promo-slide__items" v-if="list">
            <ul>
              <li v-for="(i, index) in list" :key="index">{{ i }}</li>
            </ul>
          </div>

          <button
            class="promo-slide__button"
            v-if="buttonTitle"
            v-b-modal.modal-header
          >
            <span class="promo-slide__button-text"
              >Консультация специалиста</span
            >
          </button>
          <button
            class="promo-slide__go-down"
            v-if="index === 0"
            @click.prevent="$emit('move-down-click')"
          >
            <svg
              width="15"
              height="18"
              viewBox="0 0 15 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M.4 11.8A.5.5 0 0 1 1 11l6.7 5.2a.5.5 0 1 1-.6.8L.4 11.8Z"
                fill="#1B2AC9"
              />
              <path
                d="M14.1 10.9a.5.5 0 1 1 .6.8L8 16.9a.5.5 0 0 1-.6-.7l6.7-5.3Z"
                fill="#1B2AC9"
              />
              <path
                d="M7 .5a.5.5 0 0 1 1 0v16a.5.5 0 0 1-1 0V.5Z"
                fill="#1B2AC9"
              />
            </svg>
          </button>
        </div>
      </div>

      <button
        @click.prevent="$emit('promo-trigger-click')"
        class="promo-slide-trigger js-promo-slideshow-change-trigger"
        :id="[`promo-trigger-${bottleType}`]"
        v-if="index === 0 && bottleType === 'beer'"
      >
        <img src="~/assets/img/water-i.svg" alt="icon" />
        <span>Решение для воды</span>
      </button>

      <button
        @click.prevent="$emit('promo-trigger-click')"
        class="promo-slide-trigger js-promo-slideshow-change-trigger"
        :id="[`promo-trigger-${bottleType}`]"
        v-if="index === 0 && bottleType === 'water'"
      >
        <svg
          width="69"
          height="144"
          viewBox="0 0 69 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34.8 2c3.5 0 8.5.7 8.7 1.7.2.9-.7 1.3-1 2.2-.4 1.4.2 2.3-.3 3.7-.3.8-1.1 1.1-1.2 2 0 .9 0 1.5.8 2 .7.6 13.2 4.8 18.4 11.4a25 25 0 0 1 6.5 16v74.7c0 3.4-1.2 6.2-4.8 10.5-3.5 4.4-5 4-6.5 6.2-1.5 2-5.1 8.5-8.3 8.7-3.2.2-8.9-4-11.5-3.6-2.6.4-5.8 4.8-10 4.5-4-.4-6.3-5.4-6.3-5.4s-3.8.1-5.5-1.2c-1.7-1.3-1.7-3.5-3.5-4.8-1.7-1.3-8.3-8-8.3-15V41.2c0-5.9 3-13.7 10-19 7-5.2 14.4-8 15.9-8.4 1.5-.4 1.1-1.2 1.1-2 0-1-.8-1.3-1.1-2.1-.6-1.6-.8-4.3-.8-4.3s0-1-.7-1.6c-.8-.6 5-1.7 8.4-1.7Z"
            stroke="url(#a2)"
            stroke-width="4"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33.4 61v1c.2.9.3 1.9.2 2.6v.2H33c-1.5.2-2.9.5-4 1-.9.5-1.4.8-2.1 1.5-.7.6-1 1-1.4 1.6a11 11 0 0 0-1.8 4.7v.2h.3a17.2 17.2 0 0 0 6.1-1.3l.2.2a9.1 9.1 0 0 0 3.6 3l.3.2.2-.1 1.7-1a11 11 0 0 0 2.1-2.3l.4.2c1 .4 1.7.6 3 .8.8.2 1.8.3 2.5.3h.6v-.2a10.7 10.7 0 0 0-2.3-5.4c-.4-.5-1.5-1.4-2-1.8a10.5 10.5 0 0 0-4.9-1.5v-.3c0-1.2 0-2.3-.4-3.3-.2-.4-.4-.6-.8-.7-.4 0-.8.2-1 .5ZM25 76a5.6 5.6 0 0 0 .2 5.4l.3.3h.2a6 6 0 0 0 5-3.2l.6-1.7.1-.4-.2-.2-1-.8-.7-.7-.5.1a20.6 20.6 0 0 1-3.9.8l-.2.4Zm7.9 1.8a8.9 8.9 0 0 1-1.7 3v.6c.3 1.2 1 2.3 2 3l1 .7 1-.7c1-.7 1.7-1.7 2-3v-.5l-.3-.5a8.6 8.6 0 0 1-1.5-3 23.5 23.5 0 0 0-1.2.4l-.6-.2-.6-.2-.1.4Zm-6 6a5.7 5.7 0 0 0 2 4.5h.4A6.9 6.9 0 0 0 32 86l.2-.2-.7-.7-1-1a7.1 7.1 0 0 1-1-2l-.3.1a8.2 8.2 0 0 1-2.4 1v.4Zm10.2-7 .6 1.6c.4.7.6 1 1.3 1.7l1 .8c.7.4 1.3.6 2 .7h1l.3-.4c1-1.6 1-3.4.1-5.3l-.1-.3-.7-.1c-1-.1-2.6-.4-3.4-.7l-.3-.1-.7.7-1 .8-.2.2.1.4ZM33.5 87c-.3.5-.8 1-1.4 1.5l-.6.5.1.4c.5 1 1.4 2 2.4 2.5h.4c1-.5 1.9-1.5 2.4-2.5.1-.3.1-.4 0-.4l-.5-.5c-.7-.5-1-1-1.6-1.8H34c-.2 0-.2 0-.5.3Zm5.1-4.5c-.1.5-.4 1-.7 1.5l-1 1-.7.8.1.2a6.9 6.9 0 0 0 2.8 2c.2.2.3.2.4 0 .4-.2 1-.9 1.3-1.5a7 7 0 0 0 .7-2 5 5 0 0 0 0-1.3l-.3-.2a8.4 8.4 0 0 1-2.4-1s0 .3-.2.5Z"
            fill="url(#b2)"
          />
          <defs>
            <linearGradient
              id="a2"
              x1="67.7"
              y1="99.6"
              x2=".3"
              y2="98.6"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1B2AC9" offset="0" />
              <stop offset="1" stop-color="#0073F0" />
            </linearGradient>
            <linearGradient
              id="b2"
              x1="45.9"
              y1="86.2"
              x2="21.1"
              y2="66"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1B2AC9" offset="0" />
              <stop offset="1" stop-color="#0073F0" />
            </linearGradient>
          </defs>
        </svg>
        <span>Решение для пива</span>
      </button>

      <img
        v-if="index === 0"
        src="~/assets/img/big_bg.png"
        alt="bg"
        class="promo-slide__bg"
        aria-hidden="true"
      />
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
      required: false,
    },
    titleSmall: {
      type: Boolean,
      required: false,
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
      return this.bottleType === "beer" ? 1240 : 960;
    },
  },
};
</script>

<style lang="scss">
</style>
