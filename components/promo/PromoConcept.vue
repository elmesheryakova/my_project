<template>
  <!-- Все концепции содержатся в 1 блоке, остальные секции нужны лишь для пространства -->
  <div
    class="promo-concepts-section promo-concepts-section--first js-section"
    v-if="index === 0"
  >
    <div class="promo-concepts__wrap">
      <div class="promo-concepts__inner">
        <div class="container">
          <div class="promo-concepts__top">
            <div class="promo-concepts__logo">
              <svg
                width="130"
                height="31"
                viewBox="0 0 130 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.7.7A72 72 0 0 0 .4 13a8.5 8.5 0 0 0 0 5.1c.2.6 2.3 3.4 4.8 6 7.8 8.8 10.2 9 17.2 1.5 2.3-2.4 3.9-3.8 4.4-3.8.5 0 2 1.4 4.3 3.8 4.8 5 6.8 6 10.3 5 1.1-.4 2.5-1.6 5.3-4.6 2.2-2.3 4.2-4.2 4.5-4.2 1.1 0 2.6 1.2 5.5 4.4 4.2 4.8 6.7 5.7 10.2 4 2-1 10-9.5 11-11.7a7 7 0 0 0 .3-5.3A69.9 69.9 0 0 0 66.8.8c-1.8-1-4-1-5.8 0-.8.4-2.8 2.2-4.3 4C53.7 8 52.3 9 51.2 9 51 9.1 49 7.3 46.7 5c-4-4.2-5.2-5-7.7-5-1.9 0-3.6 1.2-7.5 5.2-2.6 2.7-4 4-4.7 4-.6 0-2-1.2-4.5-3.9C17.3.1 15.1-.9 11.7.7ZM15.4 11c2.8 1.3 2.3 5.4-.8 6-1.2.3-1.2.3-1.2 2 0 1.6-.1 1.8-.8 1.7-.8-.1-.9-.3-1-4.7l.1-5c.3-.7 2.1-.7 3.7 0Zm26.2.8c0 1-.1 1-1.6 1-1.4 0-1.6.1-1.6.8 0 .7.2.8 1.4.8 1.4 0 1.5 0 1.5 1.2 0 1.1-.1 1.2-1.5 1.2-1.2 0-1.4.1-1.4.8 0 .6.3.8 1.5.8 1.4.2 1.5.3 1.5 1.2 0 1 0 1-2.3 1h-2.4v-5l-.2-4.8h2.6c2.5 0 2.5 0 2.5 1Zm25.7 0c0 .9-.1 1-1.2 1h-1.3v3.9c-.2 3.6-.2 3.9-.9 3.9s-.7-.3-.8-4l-.1-3.8h-1.3c-1 0-1.2-.1-1.2-1 0-1 0-1 3.4-1s3.4 0 3.4 1Zm22-.7c-.1.1-.2 2.3-.2 4.8v4.5h2.3c2.1 0 2.4-.1 2.4-.8 0-.6-.3-.8-1.6-1-1.3 0-1.5-.1-1.5-1s.2-1 1.4-1.1c1-.1 1.3-.3 1.3-1 0-.5-.3-.7-1.3-.8-1.1 0-1.4-.3-1.5-1-.1-.8 0-.9 1.5-.9s1.7 0 1.7-1-.1-1-2.1-1c-1.2 0-2.3.1-2.4.3Zm6.3.6L97 14l1 1.4-1.4 2.3a22 22 0 0 0-1.3 2.4l.8.2c.6 0 1.2-.6 1.8-1.7l1-1.6 1 1.6c.7 1.2 1.2 1.7 1.9 1.7 1 0 1 .2-1.3-3.6l-.8-1.3 1.3-2c1.4-2.4 1.5-2.7.5-2.7-.4 0-1.2.7-1.8 1.5l-1 1.5-.8-1.5c-.6-1-1-1.5-1.7-1.5-.8 0-.9.1-.5 1Zm8.3 3.9c0 4.5 0 4.8.7 4.8s.8-.3.8-1.8 0-1.8.7-1.8c1.2 0 2.5-.9 2.9-2 .8-2.2-.9-4-3.9-4H104v4.8Zm6.9 0v4.8h2.4c2 0 2.3-.1 2.3-.8 0-.7-.2-.8-1.6-.8-1.6 0-1.6 0-1.6-1.2 0-1.1 0-1.2 1.4-1.2 1.2 0 1.5-.2 1.5-.8 0-.6-.3-.8-1.4-.9-1.1 0-1.4-.3-1.5-1 0-.8 0-.9 1.6-.9 1.5 0 1.6 0 1.6-1s0-1-2.3-1h-2.4v4.8Zm6.5 0c0 4.5 0 4.8.7 4.8s.8-.3.8-1.8c0-1 .1-1.8.3-1.8l1.1 1.8c.7 1.3 1.1 1.8 1.7 1.8h.9l-1-2-.9-2 .8-1c1.5-2.3.5-4.2-2.6-4.5l-1.8-.2v4.8Zm6.2-3.8c0 .9.1 1 1.2 1h1.3v3.8c0 3.5 0 3.8.7 3.8s.8-.3.8-3.8v-3.8h1.2c1.1 0 1.3-.1 1.3-1 0-1 0-1-3.3-1-3.2 0-3.2 0-3.2 1Zm-110.1 2c0 .9.1 1 .8 1 .5-.2.8-.5.8-1s-.3-.8-.8-1c-.7 0-.8.1-.8 1Zm94-.5c.7.6 0 1.5-1.2 1.5-.6 0-.8-.2-.8-1s.2-1 .8-1c.5 0 1 .2 1.3.5Zm13.4.1c.3.7-.4 1.4-1.4 1.4-.4 0-.6-.3-.6-1 0-.8.2-1 .9-1 .5 0 1 .3 1.1.6Zm-89.4 2.3c-.1.9-.2.9-4.5 1l-4.5.1v-2H27c4.5 0 4.5 0 4.4.9Zm24.6 0c0 .9-.2.9-4.5 1l-4.4.1v-2h4.5c4.5 0 4.6 0 4.4.9Z"
                  fill="#fff"
                />
              </svg>
            </div>
            <div class="promo-concepts__section-title">Концепция компании</div>
          </div>

          <div class="promo-concepts__items">
            <div
              class="promo-concepts__item"
              v-for="(slide, index) in slides"
              :key="'concept-item-' + index"
            >
              <div class="promo-concepts__mobile-img" v-if="slide.image_mobile">
                <img :src="slide.image_mobile[1]" :alt="slide.name" />
              </div>
              <div class="promo-concepts__item-wrap">
                <h2 class="promo-concepts__title">{{ slide.name }}</h2>
                <div
                  class="promo-concepts__desc"
                  v-html="slide.description"
                ></div>
                <nuxt-link
                  :to="{ name: 'concept-slug', params: { slug: slide.slug } }"
                  class="promo-concepts__link"
                >
                  <div class="promo-concents__icon">
                    <svg
                      width="18"
                      height="16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="11.5"
                        y="16"
                        width="1"
                        height="9.5"
                        rx=".5"
                        transform="rotate(-142 11.5 16)"
                        fill="#fff"
                      />
                      <rect
                        width="1"
                        height="9.6"
                        rx=".5"
                        transform="rotate(-38 7.4 -14.6)"
                        fill="#fff"
                      />
                      <rect
                        y="9"
                        width="1"
                        height="17"
                        rx=".5"
                        transform="rotate(-90 0 9)"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>

        <div class="promo-concepts__images">
          <div
            class="promo-concepts__image"
            v-for="(slide, index) in slides"
            :key="'concept-img-' + index"
          >
            <div class="promo-concepts__image-inner">
              <img :src="slide.image_mobile[1]" :alt="slide.name" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="promo-concepts-section js-section" v-else></div>
</template>

<script>
export default {
  name: "PromoConcept",
  props: {
    index: Number,
    slides: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
/* start promo-concepts */
.promo-concepts-before-wave {
  margin-bottom: -80vw;
  background-color: #f2f3f7;

  img {
    position: relative;
    width: 100%;
    z-index: 3;
  }

  @include down("lg") {
    background-color: transparent;
  }
}

.promo-concepts-after-wave {
  z-index: 3;
  position: relative;
  overflow: hidden;
  margin-top: -1px;

  img {
    margin-top: -80vw;
    width: 100%;
    position: relative;
    z-index: 3;
    display: block;
  }
}

.promo-concepts-section {
  background-color: $primary;
  color: white;
  padding-top: 0;
  padding-bottom: 0;
  position: relative;
  height: 100vh !important;
  display: flex !important;
  z-index: 4;

  .fp-tableCell {
    display: flex !important;
    align-items: center;
  }

  .container {
    height: 100vh;
  }

  &--first {
    z-index: 5;
  }
}

.promo-concepts__inner {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  .container {
    position: relative;
  }
}

.promo-concepts__top {
  padding-top: 40px;
}

.promo-concepts__mobile-img {
  display: none;
}

.promo-concepts__logo {
  padding-bottom: 86px;
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    width: 1px;
    height: 72px;
    background-color: white;
    left: 0;
    bottom: 0;
    position: absolute;
    //transform: translateY(100%);
    //transition: transform 0.8s 0.2s;
  }

  &.is-active::after {
    transform: none;
  }
}

.promo-concepts__section-title {
  font-size: 24px;
  margin-top: 14px;
}

.promo-concepts__items {
  position: relative;
  z-index: 1;
  width: 410px;
}

.promo-concepts__item {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  padding-right: 40px;
  opacity: 0;
  transition: opacity 0.2s;

  &.is-active {
    z-index: 1;
    opacity: 1;
  }
}

.promo-concepts__images {
  position: absolute;
  top: 0;
  left: calc(50% - 230px);
  width: calc(50% + 230px);
  height: 100%;
  overflow: hidden;
}

.promo-concepts__wrap {
  height: 100vh;
  position: relative;
  z-index: 1;
  width: 100%;
}

.promo-concepts__image {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.promo-concepts__image-inner {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
}

.promo-concepts__image-inner img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: none;
}

.promo-concepts__title {
  font-size: 124px;
  margin-left: -0.05em;
  width: 250%;
  font-weight: 700;
  line-height: 1;
  overflow: hidden;
  margin-top: 34px;
  margin-bottom: 50px;
}

.promo-concepts__desc {
  font-weight: 300;
  width: 100%;
  line-height: 1.5;

  > p > div {
    overflow: hidden;
  }

  p:last-of-type {
    //margin-bottom: 0;
  }
}

.promo-concepts__link {
  width: 47px;
  height: 47px;
  border-radius: 50%;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  @include tr((background-color));

  &:hover {
    background-color: white;

    svg rect {
      fill: $primary;
    }
  }
}

.promo-concents__icon {
  margin-top: -1px;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
}

@include down("xl") {
  .promo-concepts__title {
    font-size: 80px;
  }
  .promo-concepts__section-title {
    font-size: 18px;
  }
  .promo-concepts__desc {
    font-size: 14px;
  }
  .promo-concepts__items {
    width: 300px;
  }
  .promo-concepts__item {
    padding-right: 10px;
  }
  .promo-concepts__images {
    width: calc(50% + 150px);
    left: calc(50% - 150px);
  }
}

@include down("lg") {
  .promo-concepts-section:not(.promo-concepts-section--first) {
    display: none !important;
  }

  .promo-concepts-section {
    height: auto;

    .container {
      height: auto;
      max-width: 100%;
      padding-left: 24px;
      padding-right: 0;
    }
  }

  .promo-concepts__inner {
    position: relative;
    overflow: hidden;
  }

  .promo-concepts-section--first {
    height: auto !important;
  }

  .promo-concepts__images {
    position: static;
    height: auto;
    overflow: visible;
    top: 300px;
    left: calc(100% + 177px);
    width: calc(100% - 177px);
    display: none;
  }
  .promo-concepts__image {
    position: absolute;
    left: 0;
    top: 0;
    height: 0;
    padding-bottom: 100%;
  }

  .promo-concepts__mobile-img {
    display: block;
    width: calc(100% - 150px);
    margin-left: auto;
  }

  .promo-concepts__item {
    opacity: 1;
    position: relative;
    top: 0;
    left: 0;
  }

  .promo-concepts__item-wrap {
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 20px;
  }

  .promo-concepts__desc {
    display: none;
  }

  .promo-concepts__top {
    position: relative;
    z-index: 1;
    padding-top: 0;
    margin-bottom: 80px;
  }

  .promo-concepts__logo {
    margin-bottom: 40px;
    padding-bottom: 140px;

    &:after {
      height: 105px;
    }
  }

  .promo-concepts__section-title {
    font-weight: 800;
    font-size: 32px;
  }
  .promo-concepts__logo svg {
    width: 306px;
    height: auto;
  }

  .promo-concepts__title {
    font-size: 48px;
  }

  .promo-concepts__items {
    width: 100%;
  }
  .promo-concepts__item {
    padding-right: 0;
  }

  .promo-concepts__mobile-img {
    img {
      width: 100%;
    }
  }

  .promo-concepts__wrap {
    height: auto;
  }
  .promo-concepts-after-wave {
    margin-top: -1px;
  }
}

@include down("sm") {
  .promo-concepts__title {
    font-size: 32px;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  .promo-concepts__item-wrap {
    padding-top: 0;
  }
  .promo-concepts__mobile-img {
    width: calc(100% - 80px);
  }
  .promo-concepts__logo svg {
    width: 180px;
  }
  .promo-concepts__section-title {
    padding-right: 20px;
  }
}

@media screen and (max-width: 360px) {
  .promo-concepts__title {
    font-size: 26px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
}

/* end promo-concepts */
</style>
