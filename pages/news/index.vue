<template>
  <div class="news-page">
    <h1 class="pages__title">{{ page.header }}</h1>
    <News :items="page.items" :width="width" />
    <Subscription />
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: this.page.seo.seo_title,
      description: this.page.seo.seo_description,
    };
  },
  data() {
    return {
      width: 0,

      page: [],
    };
  },
  async asyncData({ $axios }) {
    const page = await $axios.$get(`https://api.petexpert.pro/v1/pages/news/`);

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
.news-only,
.news-page {
  li {
    list-style: initial;
    margin-left: 18px;
  }
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
  .news {
    padding-bottom: 100px;
  }
  .pages__title {
    padding: 50px 0 65px;
    @media (max-width: 790px) {
      padding-bottom: 40px;
    }
    // @media (max-width: 768px) {
    //   padding-top: 40px;
    // }
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
