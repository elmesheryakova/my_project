<template>
  <div class="news-page">
    <h1 class="pages__title">Новости и статьи</h1>
    <News :items="news" :width="width" />
    <Subscribtion />
  </div>
</template>
<script>
export default {
  data() {
    return {
      news: this.$store.state.news,
      width: 0,
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
.news-only,
.news-page {
  padding: 135px 0 100px;

  @media (max-width: 991px) {
    padding-top: 90px;
  }
  @media (max-width: 860px) {
    padding-bottom: 60px;
  }
  @media (max-width: 791px) {
    padding-top: 60px;
  }
  .footer-feedback__wrap {
    padding: 60px 0;
    @media (max-width: 791px) {
      padding: 20px 0;
    }
  }
  .footer-feedback__title span {
    white-space: normal;
  }
}
</style>
