<template>
  <div class="contacts-page">
    <ContactsSection :items="page.items" />
    <Feedback />
  </div>
</template>
<script>
export default {
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
}
</style>
