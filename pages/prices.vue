<template>
  <div class="prices">
    <div class="container">
      <h1 class="pages__title">Ценообразование</h1>
      <Advantages :width="width" :items="prices" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      prices: this.$store.state.prices,
      width: 0,
      page: {},
    };
  },
  async asyncData({ $axios }) {
    const page = await $axios.$get(
      `https://api.petexpert.pro/v1/to_clients/pages/prices/`
    );
    return { page };
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
.prices {
  background: #f2f3f7;
  padding: 135px 0 160px;

  @media (max-width: 991px) {
    padding-top: 90px;
  }
  @media (max-width: 860px) {
    background: #fff;
    padding-bottom: 60px;
  }
  @media (max-width: 791px) {
    padding-top: 60px;
  }

  .advantages__item {
    &:not(:last-child) {
      margin-bottom: 200px;
    }
    @media (max-width: 860px) {
      margin-bottom: 60px !important;
    }
    @media (max-width: 410px) {
      margin-bottom: 30px !important;
    }
  }
  .advantages__item-info {
    min-height: 440px;
    background: #fff;
    z-index: 2;
    @media (max-width: 860px) {
      background: none;
      min-height: 300px;
    }
  }
  .advantages__item-img {
    @media (max-width: 860px) {
      margin-left: -30px;
      margin-right: -30px;
    }
  }
  .advantages__item-num svg {
    z-index: 0;
  }
}
</style>

