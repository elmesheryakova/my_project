<template>
  <div
    class="advantages__item"
    :class="{
      'advantages__item--mb': $route.name === 'solutions-slug',
      'advantages__item--acc': $route.name === 'accessories',
    }"
  >
    <div class="advantages__item-inner">
      <div
        class="advantages__item-info"
        :class="{ 'advantages__item-info--white': $route.name === 'partners' }"
      >
        <h3 class="advantages__item-title">
          {{ item.name ? item.name : item.title ? item.title : item.header }}
        </h3>
        <p v-if="item.description" class="advantages__item-text">
          {{ item.description }}
        </p>
        <ul class="advantages__list">
          <li
            class="advantages__list-item"
            v-for="(item, index) in item.advantages
              ? item.advantages
              : item.elements_list"
            :key="index"
          >
            <div class="advantages__list-svg">
              <svgicon name="romb" />
            </div>
            {{ item.value }}
          </li>
        </ul>
        <ProductSpecifications
          :items="
            item.specifications
              ? item.specifications
              : item.properties.slice(0, 6)
          "
          v-if="item.specifications || item.properties"
        />
      </div>
      <nuxt-link
        :to="item.slug"
        class="advantages__item-link"
        v-if="$route.name === 'partners'"
      >
        <p class="mb-0">Подробнее</p>
        <svgicon name="arrow-blue" />
      </nuxt-link>
      <div class="advantages__item-num" v-else>
        <svgicon :name="item.icon" />
      </div>
    </div>
    <nuxt-link
      class="advantages__item-link advantages__item-link--concept"
      v-if="$route.name === 'concept'"
      :to="{ name: 'concept-slug', params: { slug: item.slug } }"
    >
      <p class="mb-0">Подробнее</p>
      <svgicon name="arrow-blue" />
    </nuxt-link>
    <div
      class="advantages__item-img"
      :class="{
        'advantages__item-img--even':
          item.index % 2 === 0 &&
          ($route.name === 'partners' || $route.name === 'accessories'),
      }"
    >
      <img v-if="$route.name === 'concept'" :src="item.images[0]" alt="img" />
      <img
        v-else
        :src="width > 860 ? item.image : item.image_mobile"
        alt="img"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    width: {
      type: Number,
    },
  },
  computed: {
    isEvenBlock() {
      if (this.item.id % 2 === 0) {
        return true;
      }
    },
    computed() {},

    mounted() {},
  },
};
</script>
<style lang="scss">
.advantages {
  &__item {
    gap: 80px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    &--mb {
      margin-bottom: 200px;
    }

    &-inner {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @media (max-width: 860px) {
        flex-direction: row;
        position: relative;
      }
    }
    &-info {
      min-height: 577px;
      height: 100%;
      box-shadow: 0px 20px 60px 0px #17202929;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10px 56px;
      position: relative;
      margin-bottom: 60px;
      &::after {
        position: absolute;
        content: "";
        width: 100%;
        bottom: -28px;
        left: 0;
        z-index: 8;
        border: 30px solid transparent;
        border-top: 0px solid transparent;
        border-left: 25px solid #fff;
      }
      &--white {
        background-color: #fff;
      }
      @media (max-width: 991px) {
        min-height: 400px;
        padding: 10px 30px;
      }
      @media (max-width: 860px) {
        box-shadow: none;
        min-height: 270px;
      }
      @media (max-width: 550px) {
        min-width: 100%;
        padding: 10px;
      }
    }
    &-title {
      color: $primary;
      font-size: 32px;
      font-weight: 600;
      margin-bottom: 35px;
      @media (max-width: 1130px) {
        font-size: 26px;
        margin-bottom: 28px;
      }
      @media (max-width: 365px) {
        font-size: 23px;
      }
    }
    &-img {
      max-width: 540px;
      max-height: 800px;
      margin-left: auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      @media (max-width: 860px) {
        min-width: 110%;
        order: -1;
        margin-right: -20px;
        margin-left: -20px;
      }
      &--even {
        margin-right: auto;
        order: -1;
      }
    }
    &-num {
      font-size: 64px;
      font-weight: 900;
      color: #f6f6f6;
      width: 160px;
      height: 160px;
      flex: 0 0 160px;
      background-color: $primary;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      svg {
        position: absolute;
        width: 30px;
        height: 50px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      @media (max-width: 1130px) {
        width: 120px;
        height: 120px;
        flex: 0 0 120px;
        font-size: 55px;
      }
      @media (max-width: 860px) {
        flex-direction: row;
        background: none;
        color: #f4f6f6;
        width: 100%;
        height: 100%;
        svg {
          width: 210px;
          height: 300px;
          left: 10%;
          z-index: -1;
        }
      }
      @media (max-width: 550px) {
        position: absolute;
        top: 0;
        left: 120px;
        svg {
          left: 0;
        }
      }
    }
    @media (max-width: 1320px) {
      gap: 30px;
    }
    @media (max-width: 860px) {
      grid-template-columns: 1fr;
      margin-bottom: 120px;
    }
    @media (max-width: 640px) {
      margin-bottom: 80px;
    }
    @media (max-width: 550px) {
      margin-bottom: 30px;
    }
    &-link {
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
    &--acc {
      &:not(:last-child) {
        margin-bottom: 200px;
      }

      gap: 10px;
      .advantages__item-info {
        box-shadow: none;
        padding: 10px;
      }
      .advantages__item-num {
        display: none;
      }
      .advantages__list {
        margin-bottom: 100px;
      }
      .advantages__list-item {
        font-size: 20px;
      }
      .advantages__list-item:not(:last-child) {
        margin-bottom: 10px;
      }
      .specifications {
        padding-bottom: 0;
        @media (max-width: 1130px) {
          .info-list__item {
            white-space: normal;
          }
          .list__item-descr {
            text-align: right;
          }
        }
      }
      @media (max-width: 991px) {
        &:not(:last-child) {
          margin-bottom: 150px;
        }
      }
      @media (max-width: 860px) {
        &:not(:last-child) {
          margin-bottom: 100px;
        }
        &:last-child {
          margin-bottom: 0px;
        }
        .advantages__item-img {
          margin-left: -30px;
        }
        .advantages__item-info {
          width: 100%;
        }
        .advantages__list {
          margin-bottom: 60px;
        }
      }
      @media (max-width: 640px) {
        .advantages__item-img {
          margin-right: -30px;
          width: 120%;
        }
      }
      @media (max-width: 450px) {
        &:not(:last-child) {
          margin-bottom: 50px;
        }
        .advantages__list-item {
          font-size: 18px;
          line-height: 24px;
        }
        .advantages__list-item:not(:last-child) {
          margin-bottom: 15px;
        }
      }
    }
  }
  &__list {
    &-item {
      display: flex;
      align-items: flex-start;
      font-weight: 400;
      font-size: 21px;
      line-height: 26px;
      &:not(:last-child) {
        margin-bottom: 30px;
      }
      @media (max-width: 1130px) {
        font-size: 18px;
        &:not(:last-child) {
          margin-bottom: 20px;
        }
      }
      @media (max-width: 550px) {
        font-size: 18px;
        line-height: 28px;
      }
      @media (max-width: 365px) {
        font-size: 16px;
        line-height: 26px;
      }
    }
    &-svg {
      width: 12px;
      height: 12px;
      margin-right: 18px;
      display: block;
      svg {
        width: 12px;
        height: 12px;
      }
    }
  }
}
</style>
