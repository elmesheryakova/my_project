<template>
  <div class="contacts-page">
    <ContactsSection :items="page.items" />
    <Feedback />
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
      page: {},
    };
  },
  async asyncData({ $axios }) {
    const page = await $axios.$get(
      `https://api.petexpert.pro/v1/pages/contacts/`
    );
    return { page };
  },
  mounted() {},
};
</script>
<style lang="scss">
.contacts-page {
  @media (max-width: 991px) {
    padding-top: 90px;
  }
  @media (max-width: 768px) {
    padding-top: 60px;
  }
  legend {
    color: #bdbbbb;
    font-size: 16px;
    width: auto;
    padding: 0 3px;
    background-color: #fff !important;
    position: relative;
    z-index: 1;
    opacity: 0;
    transform: translate(5px, 14px);
    transition: all 0.3s ease-in;
    &.active {
      opacity: 1;

      transition: all 0.3s ease-in;
    }
  }
}
</style>
