<template>
  <client-only>
    <div class="product-card">
      <div class="product-card__img" v-if="item.image.length > 0">
        <LoadingImg v-show="!isImageFullyLoaded" />
        <img
          :src="item.image"
          alt="img"
          v-show="isImageFullyLoaded"
          @load="onImgLoad"
        />
      </div>

      <div class="product-card__info">
        <h4 class="info-title">
          {{ item.name }}
        </h4>
        <ul class="info-list">
          <li
            class="info-list__item"
            v-for="(item, index) in item.properties.slice(0, 6)"
            :key="index"
          >
            <p>{{ item.name }}</p>
            <span></span>
            <p>{{ item.value }}</p>
          </li>
        </ul>
        <nuxt-link :to="`/products/${slug}/${item.slug}/`">
          <div class="advantages__item-link">
            <p class="mb-0">Подробнее</p>
            <svgicon name="arrow-blue" />
          </div>
        </nuxt-link>
      </div>
    </div>
  </client-only>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    slug: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    isImageFullyLoaded: false,
  }),
  methods: {
    onImgLoad(el) {
      if (el.target.complete) this.isImageFullyLoaded = true;
    },
  },
};
</script>
<style lang="scss">
.advantages__item-link {
  display: flex;
  align-items: center;
  color: $primary;
  font-size: 24px;
  &--concept {
    padding-left: 30px;
    @media (max-width: 550px) {
      padding-left: 10px;
      margin-top: -100px;
    }
  }
  p {
    color: $primary;
  }
  svg {
    fill: transparent;
    width: 47px;
    height: 47px;
    transform: rotate(-90deg);
    margin-left: 15px;
  }
  @media (max-width: 550px) {
    font-size: 20px;
    line-height: 25px;
    svg {
      width: 30px;
      height: 30px;
    }
  }
}
.product-card {
  display: grid;
  grid-template-columns: minmax(250px, 440px) 1fr;
  gap: 130px;
  margin-bottom: 125px;
  &__img {
    max-width: 440px;
    max-height: 660px;

    position: relative;
    background-color: #f2f3f6;
    img {
      width: 100%;
      object-fit: cover;
    }
    // .loader-svg {
    //   position: absolute;
    //   top: 50%;
    //   left: 50%;
    //   transform: translate(-50%, -50%);
    //   width: 100%;
    //   max-width: 100px;
    //   max-height: 80px;
    //   animation: loader-spin 1.7s infinite linear;
    // }

    // @keyframes loader-spin {
    //   to {
    //     transform: translate(-50%, -50%) rotate(360deg);
    //   }
    // }
  }
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .info-title {
      font-size: 36px;
      font-weight: 600;
      color: $primary;
      @media (max-width: 880px) {
        font-size: 25px;
      }
      @media (max-width: 755px) {
        padding-bottom: 60px;
      }
      @media (max-width: 460px) {
        font-size: 18px;
        padding-bottom: 20px;
      }
    }
    .info-list {
      @media (max-width: 755px) {
        display: none;
      }
    }
    .info-list__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      white-space: nowrap;
      span {
        height: 1px;
        background-color: #f2f3f6;
        width: 100%;
        display: block;
        margin: 0 10px;
        margin-bottom: 10px;
      }
      @media (max-width: 830px) {
        font-size: 14px;
      }
    }
    @media (max-width: 755px) {
      justify-content: center;
      .advantages__item-link {
        font-size: 18px;
        svg {
          width: 35px;
          height: 35px;
        }
      }
    }
  }
  @media (max-width: 1170px) {
    gap: 30px;
  }
  @media (max-width: 755px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 460px) {
    gap: 10px;
    margin-bottom: 50px;
  }
}
</style>
