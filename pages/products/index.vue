<template>
 <div class="products">
  <div class="container">
   <h1 class="products__title">{{ page.header }}</h1>
   <div class="products__block">
    <nuxt-link
     v-for="(item, idx) in page.categories"
     :key="idx"
     :class="`img-${item.id}`"
     class="products__block-item"
     :to="
      item.name === 'Комплектующие'
       ? { name: 'accessories' }
       : { name: 'products-current', params: { current: item.slug } }
     "
    >
     <div class="item-title">{{ item.name }}</div>
     <img :src="item.image[0]" alt="img" v-if="item.image[0]" />
    </nuxt-link>
   </div>
  </div>
 </div>
</template>
<script>
export default {
 data() {
  return {
   page: [],
  };
 },
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

 async asyncData({ $axios }) {
  const page = await $axios.$get(
   `https://api.petexpert.pro/v1/pages/productions/`
  );
  return { page };
 },

 mounted() {},
};
</script>
<style lang="scss">
.products {
 padding: 230px 0 100px;
 background: #f2f3f7;
 @media (max-width: 1210px) {
  padding-top: 200px;
 }
 @media (max-width: 991px) {
  padding-top: 110px;
 }
 @media (max-width: 860px) {
  padding-bottom: 60px;
 }
 @media (max-width: 791px) {
  padding-top: 100px;
 }
 @media (max-width: 490px) {
  padding-top: 70px;
 }
 &__title {
  font-size: 124px;
  line-height: 146px;
  color: $primary;
  text-align: center;
  font-weight: 900;
  padding-bottom: 100px;
  @media (max-width: 1210px) {
   font-size: 90px;
   padding-bottom: 80px;
  }
  @media (max-width: 991px) {
   font-size: 70px;
   padding-bottom: 50px;
  }
  @media (max-width: 791px) {
   font-size: 48px;
  }
  @media (max-width: 490px) {
   padding-bottom: 20px;
  }
 }
 &__block {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 30px;

  &-item {
   position: relative;
   transition: 0.3s ease-in-out;
   .item-title {
    color: $primary;
    font-size: 36px;
    line-height: 41px;
    position: absolute;
    padding: 30px;
    font-weight: 600;
    transition: 0.3s ease-in-out;
    @media (max-width: 1210px) {
     font-size: 30px;
    }
    @media (max-width: 991px) {
     font-size: 22px;
    }
    @media (max-width: 791px) {
     font-size: 16px;
     padding: 10px;
    }
    @media (max-width: 510px) {
     font-size: 14px;
     line-height: 16px;
     padding-top: 10px;
    }
   }
   &:hover {
    box-shadow: 0px 20px 60px 0px #17202929;
    transition: 0.3s ease-in-out;
    .item-title {
     transition: 0.3s ease-in-out;
     font-weight: 900;
    }
   }
  }
  @media (max-width: 791px) {
   gap: 10px;
  }
  @media (max-width: 490px) {
   grid-template-columns: 1fr 1fr 1fr;
   grid-template-rows: 186px 186px 186px 186px;
   gap: 2px;
  }
 }
 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
 }
 .img-1 {
  grid-row: 1/2;
  grid-column: 1/3;
 }
 .img-2 {
  grid-row: 1/2;
  grid-column: 3/4;
 }
 .img-3 {
  grid-row: 2/4;
  grid-column: 1/2;
 }
 .img-4 {
  grid-row: 2/3;
  grid-column: 2/4;
 }
 .img-5 {
  grid-row: 3/4;
  grid-column: 2/3;
 }
 .img-6 {
  grid-row: 3/4;
  grid-column: 3/4;
 }
 @media (max-width: 490px) {
  .img-1 {
   grid-row: 1/2;
   grid-column: 1/4;
  }
  .img-2 {
   grid-row: 2/3;
   grid-column: 1/3;
  }
  .img-3 {
   grid-row: 2/3;
   grid-column: 3/3;
  }
  .img-4 {
   grid-row: 3/4;
   grid-column: 1/4;
  }
  .img-5 {
   grid-row: 4/5;
   grid-column: 1/2;
  }
  .img-6 {
   grid-row: 4/5;
   grid-column: 2/4;
  }
 }
}
</style>
