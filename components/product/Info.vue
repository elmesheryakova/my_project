<template>
  <client-only
    ><div>
      <div class="product-info">
        <div
          class="product-info__slider"
          :class="{ 'product-info__slider--img': item.images.length <= 1 }"
        >
          <LoadingImg v-show="!isImageFullyLoaded" />
          <SliderProduct :items="item.images" v-if="item.images.length > 1" />
          <img
            :src="item.image"
            alt="img"
            v-show="isImageFullyLoaded"
            @load="onImgLoad"
            v-else
            class="product-info__slider-img"
          />
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
      width: 0,
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
    updateWidth() {
      this.width = window.innerWidth;
    },
  },
  created() {},
  mounted() {
    window.addEventListener("resize", this.updateWidth);
    this.updateWidth();
  },
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
    img {
      max-width: 640px;
      width: 100%;
    }

    position: relative;
    background-color: #f2f3f6;
    &--img {
      background-color: #fff;
    }
    @media (max-width: 840px) {
      margin: 0 auto;
      margin-bottom: 60px;
      max-width: 550px;
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
          display: flex;
          gap: 5px;
        }
        &-svg {
          svg {
            width: 12px;
            height: 12px;
          }
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
        &-svg {
          svg {
            width: 12px;
            height: 12px;
          }
        }
      }
    }
  }
}
</style>
