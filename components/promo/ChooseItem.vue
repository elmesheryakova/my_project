<template>
  <div class="promo__choose">
    <div class="promo__choose-title">
      <div class="promo__choose-title-inner">
        Комплексные решения для <span>Вашего бизнеса</span>
      </div>
    </div>
    <a href="#" role="button" class="promo__choose-item promo__choose-item--1 js-promo-tab-trigger"
       data-bottle-type="beer" @click.prevent="clickedItem = 'beer', $emit('click', 'beer')">
      <div class="promo__choose-item-icon">
        <svg width="69" height="144" viewBox="0 0 69 144" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M34.8 2c3.5 0 8.5.7 8.7 1.7.2.9-.7 1.3-1 2.2-.4 1.4.2 2.3-.3 3.7-.3.8-1.1 1.1-1.2 2 0 .9 0 1.5.8 2 .7.6 13.2 4.8 18.4 11.4a25 25 0 0 1 6.5 16v74.7c0 3.4-1.2 6.2-4.8 10.5-3.5 4.4-5 4-6.5 6.2-1.5 2-5.1 8.5-8.3 8.7-3.2.2-8.9-4-11.5-3.6-2.6.4-5.8 4.8-10 4.5-4-.4-6.3-5.4-6.3-5.4s-3.8.1-5.5-1.2c-1.7-1.3-1.7-3.5-3.5-4.8-1.7-1.3-8.3-8-8.3-15V41.2c0-5.9 3-13.7 10-19 7-5.2 14.4-8 15.9-8.4 1.5-.4 1.1-1.2 1.1-2 0-1-.8-1.3-1.1-2.1-.6-1.6-.8-4.3-.8-4.3s0-1-.7-1.6c-.8-.6 5-1.7 8.4-1.7Z"
            stroke="url(#a4)" class="icon-stroke" stroke-width="4" stroke-linejoin="round"/>
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M33.4 61v1c.2.9.3 1.9.2 2.6v.2H33c-1.5.2-2.9.5-4 1-.9.5-1.4.8-2.1 1.5-.7.6-1 1-1.4 1.6a11 11 0 0 0-1.8 4.7v.2h.3a17.2 17.2 0 0 0 6.1-1.3l.2.2a9.1 9.1 0 0 0 3.6 3l.3.2.2-.1 1.7-1a11 11 0 0 0 2.1-2.3l.4.2c1 .4 1.7.6 3 .8.8.2 1.8.3 2.5.3h.6v-.2a10.7 10.7 0 0 0-2.3-5.4c-.4-.5-1.5-1.4-2-1.8a10.5 10.5 0 0 0-4.9-1.5v-.3c0-1.2 0-2.3-.4-3.3-.2-.4-.4-.6-.8-.7-.4 0-.8.2-1 .5ZM25 76a5.6 5.6 0 0 0 .2 5.4l.3.3h.2a6 6 0 0 0 5-3.2l.6-1.7.1-.4-.2-.2-1-.8-.7-.7-.5.1a20.6 20.6 0 0 1-3.9.8l-.2.4Zm7.9 1.8a8.9 8.9 0 0 1-1.7 3v.6c.3 1.2 1 2.3 2 3l1 .7 1-.7c1-.7 1.7-1.7 2-3v-.5l-.3-.5a8.6 8.6 0 0 1-1.5-3 23.5 23.5 0 0 0-1.2.4l-.6-.2-.6-.2-.1.4Zm-6 6a5.7 5.7 0 0 0 2 4.5h.4A6.9 6.9 0 0 0 32 86l.2-.2-.7-.7-1-1a7.1 7.1 0 0 1-1-2l-.3.1a8.2 8.2 0 0 1-2.4 1v.4Zm10.2-7 .6 1.6c.4.7.6 1 1.3 1.7l1 .8c.7.4 1.3.6 2 .7h1l.3-.4c1-1.6 1-3.4.1-5.3l-.1-.3-.7-.1c-1-.1-2.6-.4-3.4-.7l-.3-.1-.7.7-1 .8-.2.2.1.4ZM33.5 87c-.3.5-.8 1-1.4 1.5l-.6.5.1.4c.5 1 1.4 2 2.4 2.5h.4c1-.5 1.9-1.5 2.4-2.5.1-.3.1-.4 0-.4l-.5-.5c-.7-.5-1-1-1.6-1.8H34c-.2 0-.2 0-.5.3Zm5.1-4.5c-.1.5-.4 1-.7 1.5l-1 1-.7.8.1.2a6.9 6.9 0 0 0 2.8 2c.2.2.3.2.4 0 .4-.2 1-.9 1.3-1.5a7 7 0 0 0 .7-2 5 5 0 0 0 0-1.3l-.3-.2a8.4 8.4 0 0 1-2.4-1s0 .3-.2.5Z"
                fill="url(#b4)" class="icon-fill" />
          <defs>
            <linearGradient id="a4" x1="67.7" y1="99.6" x2=".3" y2="98.6" gradientUnits="userSpaceOnUse">
              <stop stop-color="#1B2AC9" offset="0"/>
              <stop offset="1" stop-color="#0073F0"/>
            </linearGradient>
            <linearGradient id="b4" x1="45.9" y1="86.2" x2="21.1" y2="66" gradientUnits="userSpaceOnUse">
              <stop stop-color="#1B2AC9" offset="0"/>
              <stop offset="1" stop-color="#0073F0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span>Пиво</span>
    </a>
    <a href="#" role="button"
       class="promo__choose-item promo__choose-item--2 js-promo-tab-trigger" data-bottle-type="water"
       @click.prevent="clickedItem = 'beer', $emit('click', 'water')">
      <div class="promo__choose-item-icon">
        <svg width="78" height="144" viewBox="0 0 78 144" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M30.7 17.4V2.9s5-.9 7.4-.9c2.4 0 7 .9 7 .9v14.5S65.7 35.8 69.6 40l.1.2c4 4 5.3 5.6 5.3 14.4v68.6c.2 5-2 9.2-5 12.9-2.9 3.7-19.5 5.8-30 5.9-10.4.1-29.4-2.1-32.2-5a19.3 19.3 0 0 1-5.5-13.2V54.6s-1.8-6 3.5-12.9c5.3-6.8 24.9-24.3 24.9-24.3Z"
            stroke="url(#a99)" class="icon-stroke" stroke-width="4" stroke-linejoin="round"/>
          <path fill-rule="evenodd" clip-rule="evenodd"
                class="icon-fill"
                d="M32 68.5c-3 3.7-5.1 7.3-5.5 9.2a5.9 5.9 0 0 0 4.7 6.3v-.6c0-1.5.6-3.3 1.8-5.5a41.7 41.7 0 0 1 3-5 57.6 57.6 0 0 0-3.5-5l-.5.6Zm9.4 1.4a45.6 45.6 0 0 0-7.3 11.4 5 5 0 0 0-.4 2.2c.1 2 1 3.7 2.4 5.1a8.7 8.7 0 0 0 4.4 2.3c.7.2 2.6.1 3.4 0 3.3-.7 5.8-3 6.5-6.2v-2.3c-.3-2-2-5-4.7-8.8a56.8 56.8 0 0 0-3.6-4.5l-.7.8Zm5.7 11c.5.4 1 1.2 1.1 2v1c-.3 1-.5 1.4-.9 2-.3.5-.6.8-1.1 1-.5.3-1.4.6-1.8.6l-1-.1.9-.9 1.2-1.2a7 7 0 0 0 1.2-4v-.7l.4.2Z"
                fill="url(#b99)"/>
          <defs>
            <linearGradient id="a99" x1="76.2" y1="99.6" x2=".1" y2="98.3" gradientUnits="userSpaceOnUse">
              <stop stop-color="#1B2AC9" offset="0"/>
              <stop offset="1" stop-color="#0073F0"/>
            </linearGradient>
            <linearGradient id="b99" x1="50.9" y1="84" x2="25.9" y2="83.2" gradientUnits="userSpaceOnUse">
              <stop stop-color="#1B2AC9" offset="0"/>
              <stop offset="1" stop-color="#0073F0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span>Вода</span>
    </a>
  </div>
</template>

<script>

// @TODO: move svgs to svg-icon plugin
export default {
  name: "ChooseItem",
  data() {
    return {
    }
  },
  props: {
    mobileTitle: String,
  }
}
</script>

<style scoped>

</style>
