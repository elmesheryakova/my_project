<template>
 <div class="team-page">
  <div class="container">
   <h1 class="pages__title">{{ page.header }}</h1>
  </div>
  <SliderTeamSlider :items="page.employees" />
  <div class="team-page__banner">
   <img :src="require(`@/assets/img/team-big.jpg`)" alt="img" />
  </div>
 </div>
</template>
<script>
export default {
 head() {
  return {
   title: this.page.seo.seo_title,
   meta: [
    {
     hid: `${this.page.id}-description`,
     name: "description",
     content: this.page.seo.seo_description,
    },
   ],
  };
 },
 data() {
  return {
   page: {},
  };
 },
 async asyncData({ $axios }) {
  const page = await $axios.$get(
   `https://api.petexpert.pro/v1/pages/our_team/`
  );
  return { page };
 },
 mounted() {},
};
</script>

<style lang="scss">
.team-page {
 padding: 60px 0 0;
 margin-bottom: -40px;
 @media (max-width: 1131px) {
  padding-top: 120px;
  .team__slider {
   margin-top: 60px;
  }
 }
 @media (max-width: 991px) {
  padding-top: 90px;
  .team__slider {
   margin-top: 00px;
  }
 }

 @media (max-width: 791px) {
  padding-top: 60px;
 }
 .news__title {
  display: none;
 }
 .pages__title {
  padding-bottom: 20px;
 }
 &__banner {
  position: relative;
  top: -40px;
  z-index: 2;

  img {
   width: 100%;
   height: 100%;
   object-fit: cover;
  }
  @media (max-width: 991px) {
   top: 0;
  }
 }

 .team__slide-content {
  height: 80px;

  width: 125%;
  bottom: -75px;
 }
}
</style>
