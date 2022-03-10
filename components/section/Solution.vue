
<template>
  <!--
    <div v-swiper="swiperOption">
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
          <div class="solution-img">
            <img :src="require(`@/assets/img/${item.img1}`)" alt="fdhgdfg" />
            <img :src="require(`@/assets/img/${item.img2}`)" alt="fdhgdfg" />
          </div>
        </div>
      </div>
    </div> -->
  <div class="slider slider-thumbs">
    <!-- swiper1 -->
    <div class="slider-container">
      <swiper
        class="swiper-works swiper-works__double gallery-top"
        :options="swiperOptionTop"
        ref="swiperTop"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(item, index) in solutions" :key="`item-${index}`">
          <div class="solution-info">
            <h2 class="solution__title">{{ item.title }}</h2>
            <p class="solution__text">{{ item.description }}</p>
          </div>
          <div class="solution-img">
            <img :src="require(`@/assets/img/${item.img1}`)" alt="fdhgdfg" />
            <!-- <img :src="require(`@/assets/img/${item.img2}`)" alt="fdhgdfg" /> -->
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="slider-container">
      <swiper
        class="swiper gallery-thumbs"
        :options="swiperOptionThumbs"
        ref="swiperThumbs"
      >
        <swiper-slide v-for="(item, index) in solutions" :key="`item-${index}`">
          <div @click="onThumbClick(index)">
            <svgicon :name="item.svg" />
          </div>
        </swiper-slide>
      </swiper>
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
      //   direction: "vertical",
      slidesPerView: 1,
      slidesPerGroup: 1,
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
      this.$refs.swiperTop.$swiper.slideTo(ind);

      this.activeSlideInd = ind;
    },

    onSlideChange(e) {
      this.activeSlideInd = this.$refs.swiperTop.$swiper.activeIndex;
    },
  },
  created() {},
  mounted() {
    // this.$nextTick(() => {
    // 	const swiperTop = this.$refs.swiperTop.$swiper;
    // 	const swiperThumbs = this.$refs.swiperThumbs.$swiper;
    // 	swiperTop.controller.control = swiperThumbs;
    // 	swiperThumbs.controller.control = swiperTop;
    // });
    if (process.client) {
      this.$refs.swiperTop.$swiper.slideTo(this.clickedInd);
    }
  },
};
</script>
<style lang="scss">
.swiper-wrapper {
  display: flex;
  padding-top: 135px;
  @media (max-width: 991px) {
    padding-top: 90px;
  }
  @media (max-width: 791px) {
    padding-top: 60px;
  }
}
.gallery-top {
  .swiper-slide {
    min-width: 100%;
    display: flex;
  }
}

.gallery-thumbs {
  svg {
    width: 50px;
    height: 100px;
  }
}
</style>
