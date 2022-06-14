<template>
 <div class="product-only">
  <div class="container">
   <ProductPreview />
   <h1 class="pages__title">{{ item.name }}</h1>
   <ProductInfo :item="item" />
   <p class="more">
    Подробнее о том, что влияет на конечную стоимость <br />
    вы можете узнать на странице
    <nuxt-link :to="{ name: 'prices' }">ценообразование</nuxt-link>
   </p>

   <h3 class="advantages__item-title" v-if="item.accessories.length > 0">
    Комплектующие:
   </h3>
   <Slider :items="item.accessories" v-if="width > 790" />
   <GridMobile :items="item.accessories" :width="width" v-else />
  </div>
  <Feedback />
 </div>
</template>
<script>
export default {
 head() {
  return {
   title: this.item.seo.seo_title,

   meta: [
    {
     hid: `${this.item.id}-description`,
     name: "description",
     content: this.item.seo.seo_description,
    },
   ],
  };
 },
 data() {
  return {
   width: 0,
   item: {},
  };
 },
 async asyncData({ params, $axios }) {
  const item = await $axios.$get(
   `https://api.petexpert.pro/v1/production/items/${params.slug}/`
  );
  return { item };
 },

 methods: {
  updateWidth() {
   this.width = window.innerWidth;
  },
 },
 created() {},
 mounted() {
  window.addEventListener("resize", this.updateWidth);
  this.updateWidth();
 },
 watch: {
  "$route.query": "$fetch",
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
  font-family: "Gerbera";
  color: $primary;
  font-size: 64px;
  font-weight: 600;
  @media (max-width: 860px) {
   font-size: 40px;
  }
  @media (max-width: 670px) {
   padding-top: 80px;
   padding-bottom: 80px;
  }
  @media (max-width: 500px) {
   font-size: 30px;
   padding: 50px 0;
   padding-top: 70px;
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
