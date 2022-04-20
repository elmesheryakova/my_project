<template>
  <div class="product-card">
    <div class="product-card__img" v-if="item.image.length > 0">
      <img :src="item.image" alt="img" />
    </div>
    <div class="product-card__info">
      <h4 class="info-title">
        {{ item.name }}
      </h4>
      <ul class="info-list">
        <li
          class="info-list__item"
          v-for="(item, index) in item.properties"
          :key="index"
        >
          <p>{{ item.name }}</p>
          <span></span>
          <p>{{ item.value }}</p>
        </li>
      </ul>
      <nuxt-link
        class="advantages__item-link"
        :to="`/products/${slug}/${item.slug}/`"
      >
        <p class="mb-0">Подробнее</p>
        <svgicon name="arrow-blue" />
      </nuxt-link>
    </div>
  </div>
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
  methods: {},
};
</script>
<style lang="scss">
.product-card {
  display: grid;
  grid-template-columns: minmax(250px, 440px) 1fr;
  gap: 130px;
  margin-bottom: 125px;
  &__img {
    max-width: 440px;
    img {
      width: 100%;
      object-fit: cover;
    }
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
