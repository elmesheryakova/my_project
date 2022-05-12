<template>
  <client-only
    ><div>
      <div class="product-info">
        <div class="product-info__slider">
          <LoadingImg v-show="!isImageFullyLoaded" />
          <VueSlickCarousel :settings="settings" v-if="item.images.length > 0">
            <div
              v-for="(item, index) in item.images"
              :key="`item-${index}`"
              :class="`item-${index}`"
            >
              <img
                :src="item"
                alt="img"
                v-show="isImageFullyLoaded"
                @load="onImgLoad"
              />
            </div>
          </VueSlickCarousel>
          <img :src="item.image" alt="img" v-else-if="item.image.length > 0" />
        </div>
        <div class="product-info__block">
          <h3 class="advantages__item-title">Преимущества</h3>
          <ul class="advantages__list">
            <li
              class="advantages__list-item"
              v-for="(item, index) in item.advantages"
              :key="index"
            >
              <div class="advantages__list-svg">
                <svgicon name="romb" />
              </div>

              {{ item.value }}
            </li>
          </ul>
        </div>
      </div>
      <h3 class="advantages__item-title">Технические данные:</h3>
      <ProductSpecifications
        :items="item.properties"
        v-if="item.properties.length > 0"
      />
    </div>
  </client-only>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: { VueSlickCarousel },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isImageFullyLoaded: false,
      settings: {
        arrow: true,
        infinite: true,
        edgeFriction: 0.35,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    };
  },

  computed: {},

  methods: {
    onImgLoad(el) {
      if (el.target.complete) this.isImageFullyLoaded = true;
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss" >
.product-info {
  display: grid;
  grid-template-columns: minmax(400px, 640px) 1fr;
  gap: 80px;
  margin-bottom: 50px;
  @media (max-width: 991px) {
    gap: 20px;
  }
  @media (max-width: 840px) {
    grid-template-columns: 1fr;
  }
  &__slider {
    max-width: 640px;

    position: relative;
    background-color: #f2f3f6;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    @media (max-width: 840px) {
      margin: 0 auto;
      margin-bottom: 60px;
    }
    @media (max-width: 700px) {
      max-width: 550px;
    }
    @media (max-width: 600px) {
      max-width: 400px;
    }
    @media (max-width: 450px) {
      max-width: 300px;
    }
    @media (max-width: 370px) {
      max-width: 280px;
    }
  }
  &__block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 1300px) {
      flex: 0 0 500px;
      width: 500px;
    }
    @media (max-width: 991px) {
      flex: 0 0 400px;
      width: 400px;
      .advantages__list {
        &-item {
          font-size: 16px;
          margin-bottom: 10px;
        }
        svg {
          width: 12px;
          height: 12px;
        }
      }
    }
    @media (max-width: 500px) {
      flex: 0 0 100%;
      width: 100%;
      .advantages__list {
        &-item {
          font-size: 14px;
          line-height: 20px;
          margin-bottom: 20px;
        }
        svg {
          width: 12px;
          height: 12px;
        }
      }
    }
  }
  .slick-slider {
    height: 100%;
    position: relative;
  }
  .slick-next {
    position: absolute;
    z-index: 10;

    &::before {
      position: absolute;
      content: "";
      width: 40px;
      height: 40px;
      background: url("~assets/svg/arrow-slider.svg") no-repeat;
      top: 0;
      right: 5px;
      opacity: 1;
    }
  }

  .slick-prev {
    position: absolute;
    z-index: 10;

    &::before {
      position: absolute;
      content: "";
      width: 40px;
      height: 40px;
      background: url("~assets/svg/arrow-slider.svg") no-repeat;
      top: 5px;
      left: 5px;
      transform: rotate(180deg);
      opacity: 1;
    }
  }
}
</style>
