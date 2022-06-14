<template>
 <client-only v-if="width > 1300">
  <div :style="'background: #f2f3f7;'">
   <full-page :options="options" ref="fullpage">
    <Fullscroll :width="width" class="section-top">
     <Banner />
     <div class="sections-menu" @click="scrollToSlide">
      <svgicon name="arrow-blue" />
     </div>
    </Fullscroll>

    <Fullscroll
     :width="width"
     v-for="(item, index) in clients.items"
     :key="index"
    >
     <div class="container"><AdvantagesItem :item="item" /></div>
    </Fullscroll>
    <Fullscroll :width="width"> <Footer /> </Fullscroll>
   </full-page>
  </div>
 </client-only>
 <div v-else class="partners-page">
  <Banner :width="width" />
  <Advantages :width="width" :items="clients.items" />
  <Footer />
 </div>
</template>
<script>
export default {
 layout: "fullscreen",
 head() {
  return {
   title: this.clients.seo.seo_title,
   meta: [
    {
     hid: `${this.clients.id}-description`,
     name: "description",
     content: this.clients.seo.seo_description,
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
   clients: {},
  };
 },
 async asyncData({ $axios }) {
  const clients = await $axios.$get(
   `https://api.petexpert.pro/v1/pages/to_clients/`
  );
  return { clients };
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
.partners-page {
 .advantages__item {
  margin-bottom: 150px;
  @media (max-width: 1300px) {
   &:first-child {
    padding-top: 100px;
   }
  }
  @media (max-width: 860px) {
   margin-bottom: 100px;
   &:first-child {
    padding-top: 0px;
   }
  }
  @media (max-width: 370px) {
   margin-bottom: 80px;
  }
 }
 .advantages__item-inner {
  flex-direction: column;
 }
 .advantages__item-info {
  margin-bottom: 20px;

  @media (max-width: 1300px) {
   margin-bottom: 50px;
  }
  @media (max-width: 860px) {
   padding: 10px 0;
   margin-bottom: 20px;
  }
 }
}
</style>
