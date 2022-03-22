<template>
  <div class="products-prew">
    <nuxt-link
      v-for="(item, idx) in products"
      :key="idx"
      class="prew-item"
      :to="
        item.title === 'Комплектующие'
          ? { name: 'accessories' }
          : { name: 'products-slug', params: { slug: item.slug } }
      "
    >
      <div class="prew-item__title">{{ item.title }}</div>
      <img :src="require(`@/assets/img/${item.imgPrew}`)" alt="img" />
    </nuxt-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: this.$store.state.products,
    };
  },
};
</script>
<style lang="scss">
.products-prew {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
  padding-top: 230px;

  @media (max-width: 991px) {
    padding-top: 150px;
    gap: 10px;
  }

  @media (max-width: 791px) {
    padding-top: 120px;
  }

  @media (max-width: 730px) {
    padding-top: 0;
    opacity: 0;
  }
  .prew-item {
    position: relative;
    transition: 0.3s ease-in-out;
    img {
      width: 100%;
    }
    &__title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      white-space: nowrap;
      font-weight: 600;
      color: $primary;
      @media (max-width: 1090px) {
        font-size: 12px;
      }
    }
    &:hover {
      box-shadow: 0px 20px 60px 0px #17202929;
      transition: 0.3s ease-in-out;
    }
  }
}
</style>
