<template>
  <div class="product-only">
    <div class="container">
      <ProductPreview />
      <h1 class="pages__title">ПЭТ-кег 35 л.</h1>
      <ProductInfo :items="productsId" />
      <p class="more">
        Подробнее о том что вляет на конечную стоимость <br />
        вы можете узнать на странице
        <nuxt-link :to="{ name: 'prices' }">ценообразование</nuxt-link>
      </p>

      <h3 class="advantages__item-title">Комплектующие:</h3>

      <Slider :items="productsGroup" v-if="width > 790" />
      <GridMobile :items="productsGroup" :width="width" v-else />
    </div>
    <Feedback />
  </div>
</template>
<script>
export default {
  data() {
    return {
      width: 0,
      productsId: this.$store.state.productsId,
      productsGroup: this.$store.state.productsGroup,
    };
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
  },
  mounted() {
    window.addEventListener("resize", this.updateWidth);
    this.updateWidth();
  },
};
</script>
<style lang="scss">
.product-only {
  .footer-feedback__wrap {
    @media (max-width: 790px) {
      padding-top: 0;
    }
  }
  .pages__title {
    @media (max-width: 670px) {
      padding-top: 80px;
      padding-bottom: 80px;
    }
    @media (max-width: 500px) {
      padding-bottom: 50px;
    }
  }
}
.more {
  margin-bottom: 110px;
  font-weight: 400;
  a {
    color: $primary;
    text-decoration: underline;
  }
  @media (max-width: 790px) {
    display: none;
  }
}
.accessories-slider {
  overflow: hidden;
  max-width: 1290px;
  padding: 0 10px;
  background-color: #fff;
  margin: 0 auto;

  .advantages__item-title {
    margin-bottom: 40px;
  }
}
</style>
