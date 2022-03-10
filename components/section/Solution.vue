
<template>
  <div class="slider slider-thumbs">
    <div class="container">
      <div
        v-swiper="swiperOptionTop"
        class="swiper-works swiper-works__double gallery-top"
        ref="swiperTop"
        @slideChange="onSlideChange"
      >
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in solutions"
            :key="`item-${index}`"
          >
            <div class="solution-info">
              <h2 class="solution__title">{{ item.title }}</h2>
              <p class="solution__text">{{ item.description }}</p>
            </div>
            <div class="solution-img d-flex">
              <img :src="require(`@/assets/img/${item.img1}`)" alt="fdhgdfg" />
              <img :src="require(`@/assets/img/${item.img2}`)" alt="fdhgdfg" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="slider-container">
      <div
        v-swiper="swiperOptionThumbs"
        class="swiper gallery-thumbs"
        ref="swiperThumbs"
      >
        <div class="swiper-wrapper">
          <div
            class="
              swiper-slide
              d-flex
              align-items-center
              justify-content-center
            "
            v-for="(item, index) in solutions"
            :key="`item-${index}`"
            :class="{ 'active-thumb': activeSlideInd == index }"
            @click="onThumbClick(index)"
          >
            <div class="gallery-thumbs__svg">
              <svgicon :name="item.svg" />
            </div>
            <p class="gallery-trumbs__text">
              {{ item.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { directive } from "vue-awesome-swiper";
export default {
  data: () => ({
    directives: {
      swiper: directive,
    },
    solutions: [
      {
        id: 1,
        title: "Вода",
        description:
          "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.",
        img1: "water.jpg",
        img2: "water1.jpg",
        svg: "water",
      },
      {
        id: 1,
        title: "Пиво",
        description:
          "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. ",
        img1: "beer.jpg",
        img2: "beer1.jpg",
        svg: "beer",
      },
      {
        id: 1,
        title: "Квас",
        description:
          "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. ",
        img1: "water.jpg",
        img2: "water1.jpg",
        svg: "kvass",
      },
      {
        id: 1,
        title: "Сидр",
        description:
          "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. ",
        img1: "water.jpg",
        img2: "water1.jpg",
        svg: "cider",
      },
      {
        id: 1,
        title: "Вино",
        description:
          "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. ",
        img1: "water.jpg",
        img2: "water1.jpg",
        svg: "vine",
      },
      {
        id: 1,
        title: "Кофе",
        description:
          "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. ",
        img1: "water.jpg",
        img2: "water1.jpg",
        svg: "coffe",
      },
    ],
    activeSlideInd: 0,

    swiperOptionTop: {
      speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      spaceBetween: 10,
      slidesPerView: 1,
      slidesPerGroup: 1,
      on: {
        init() {
          this.el.addEventListener("mouseenter", () => {
            this.autoplay.stop();
          });

          this.el.addEventListener("mouseleave", () => {
            this.autoplay.start();
          });
        },
      },
    },

    swiperOptionThumbs: {
      // direction: "vertical",

      slidesPerView: 3,
      slidesPerGroup: 3,
      touchRatio: 0.2,
      spaceBetween: 10,
      navigation: {
        nextEl: ".slider-button-next-thumb",
        prevEl: ".slider-button-prev-thumb",
      },

      breakpoints: {
        375: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
        // 768: {
        // 	slidesPerView: 8,
        // 	slidesPerGroup: 8
        // },
        // 992: {
        // 	slidesPerView: 10,
        // 	slidesPerGroup: 10
        // }
      },
    },

    doubleCount: 3,
  }),

  computed: {},

  methods: {
    onThumbClick(ind) {
      this.$refs.swiperTop.swiper.slideTo(ind);

      this.activeSlideInd = ind;
    },

    onSlideChange(e) {
      this.activeSlideInd = this.$refs.swiperTop.swiper.activeIndex;
    },
  },
  created() {},
  mounted() {
    this.$refs.swiperTop.swiper.slideTo(this.clickedInd);
  },
};
</script>
<style lang="scss">
.slider-thumbs {
  padding-top: 135px;

  @media (max-width: 991px) {
    padding-top: 90px;
  }
  @media (max-width: 791px) {
    padding-top: 60px;
  }
}
.gallery-top {
  overflow: hidden;
  .swiper-wrapper {
    padding-top: 80px;
    display: flex;
  }
  .swiper-slide {
    min-width: 100%;
    display: flex;
  }
}

.gallery-thumbs {
  .swiper-wrapper {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin-bottom: 20px;
  }
  .swiper-slide {
    width: 100%;
    padding: 10px 0;
    cursor: pointer;
    font-weight: normal;
    font-size: 24px;
    &.active-thumb {
      background-color: $primary;
      color: $white;
      .gallery-thumbs__svg {
        svg {
          stroke: $white;
          path {
            stroke: $white;
          }
        }
      }
    }
    &:hover {
      border: 2px solid $primary;
      padding: 6px 0;
    }
  }
  &__svg {
    padding-right: 35px;

    svg {
      width: 50px;
      height: 140px;
      fill: transparent;
    }
  }
}
</style>
