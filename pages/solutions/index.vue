<template>
 <client-only v-if="width > 1300">
  <full-page :options="options" ref="fullpage">
   <Fullscroll :width="width" class="section-top">
    <Banner />
    <div class="sections-menu" @click="scrollToSlide">
     <svgicon name="arrow-blue" />
    </div>
   </Fullscroll>

   <Fullscroll :width="width">
    <Solution :items="page.items" />
   </Fullscroll>
   <Fullscroll :width="width"> <Footer /> </Fullscroll>
  </full-page>
 </client-only>
 <div v-else>
  <Banner />
  <SolutionMobile :items="page.items" />
  <Footer />
 </div>
</template>

<script>
export default {
 layout: "fullscreen",
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
   width: 0,
   options: {
    css3: true,
    activeSection: 0,
    mouseWheelSensitivity: 30,
    navigation: false,
    responsiveWidth: 1300,
   },
   page: [],
  };
 },

 async asyncData({ $axios }) {
  const page = await $axios.$get(
   `https://api.petexpert.pro/v1/pages/solutions/`
  );

  return { page };
 },
 methods: {
  updateWidth() {
   this.width = window.innerWidth;
  },
  scrollToSlide() {
   this.$refs.fullpage.api.moveTo(2);
  },
 },

 mounted() {
  window.addEventListener("resize", this.updateWidth);
  this.updateWidth();
 },
};
</script>
<style lang="scss">
.section {
 height: 100%;
 &-top {
  position: relative;
 }
}

.sections-menu {
 position: absolute;
 left: 50%;
 top: 80%;
 transform: translateX(-50%);
 width: 50px;
 height: 50px;
 z-index: 99999;

 cursor: pointer;
 svg {
  width: 100%;
  height: 100%;
  fill: transparent;
 }
 @media (max-width: 1300px) {
  display: none;
 }
}
</style>
