<template>
 <div class="shipment">
  <div class="container">
   <h1 class="pages__title">{{ page.header }}</h1>
  </div>

  <div
   class="shipment__item"
   v-for="(item, index) in page.elements"
   :key="index"
   :class="{ 'order-1': item.id % 2 === 0 }"
  >
   <div
    class="shipment__item-img"
    :class="{
     'order-1': item.id % 2 === 1,
     'order-2': item.id % 2 === 0 && width < 920,
    }"
    v-if="item.images"
   >
    <img :src="item.images[0]" alt="img" />
   </div>
   <div
    class="shipment__item-info"
    :class="{ 'ml-auto': item.id % 2 === 1 && width > 919 }"
   >
    <h2 class="shipment__item-title">{{ item.name }}</h2>
    <p
     class="shipment__list"
     v-if="item.description"
     v-html="item.description"
    ></p>
    <ul class="shipment__list">
     <li
      class="shipment__list-item d-flex"
      v-for="(item, index) in item.elements_list"
      :key="index"
     >
      <div class="shipment__list-svg">
       <svgicon name="romb" />
      </div>

      {{ item.value }}
     </li>
    </ul>
   </div>
  </div>
  <div class="shipment__item-bg">
   <div class="container">
    <img :src="require(`@/assets/img/shipment2.jpg`)" alt="img" />
   </div>
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
   width: 0,
   page: {},
  };
 },
 async asyncData({ $axios }) {
  const page = await $axios.$get(
   `https://api.petexpert.pro/v1/to_clients/pages/shipment/`
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
.shipment {
 padding: 135px 0 160px;
 display: flex;
 flex-direction: column;
 max-width: 2000px;
 margin: 0 auto;
 @media (max-width: 991px) {
  padding-top: 90px;
 }
 @media (max-width: 860px) {
  padding-bottom: 60px;
 }
 @media (max-width: 791px) {
  padding-top: 60px;
 }
 &__item {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 90px;
  &-title {
   color: $primary;
   font-size: 46px;
   padding-bottom: 30px;
   font-weight: 600;

   @media (max-width: 1410px) {
    padding: 10px 0;
    font-size: 40px;
    margin-right: 90px;
   }
   @media (max-width: 1210px) {
    margin-right: 60px;
   }
   @media (max-width: 1144px) {
    margin-right: 0px;
   }
   @media (max-width: 1030px) {
    font-size: 32px;
   }
   @media (max-width: 920px) {
    padding-bottom: 30px;
   }
   @media (max-width: 520px) {
    font-size: 25px;
    padding-bottom: 10px;
   }
  }
  &-bg,
  &-img {
   img {
    width: 100%;
   }
  }
  &-img {
   img {
    @media (max-width: 920px) {
     max-height: 400px;
     object-fit: cover;
    }
   }
  }
  &-bg {
   @media (max-width: 920px) {
    margin-left: -20px;
    margin-right: -20px;
    margin-bottom: 50px;
    img {
     width: 110%;
    }
   }
  }
  &-info {
   display: flex;
   flex-direction: column;
   justify-content: center;
   text-align: left;
   padding-left: 10px;
   @media (max-width: 920px) {
    order: 1;
    padding: 0 20px 50px;
   }
  }
  @media (max-width: 1410px) {
   gap: 40px;
  }
  @media (max-width: 920px) {
   grid-template-columns: 1fr;
  }
 }
 &__list {
  max-width: 550px;

  p,
  li {
   list-style: inside;
   font-size: 21px;
   font-weight: 400;

   line-height: 31px;
   &:not(:last-child) {
    margin-bottom: 20px;
   }
   @media (max-width: 1650px) {
    font-size: 22px;
    &:not(:last-child) {
     margin-bottom: 10px;
    }
   }
   @media (max-width: 1650px) {
    font-size: 18px;
   }
   @media (max-width: 1030px) {
    font-size: 16px;
    line-height: 20px;
    &:not(:last-child) {
     margin-bottom: 5px;
    }
   }
   @media (max-width: 920px) {
    font-size: 18px;
    line-height: 28px;
    &:not(:last-child) {
     margin-bottom: 10px;
    }
   }
   @media (max-width: 520px) {
    font-size: 16px;
    line-height: 22px;
    &:not(:last-child) {
     margin-bottom: 8px;
    }
   }
  }
  &-svg {
   width: 12px;
   height: 12px;
   margin-right: 18px;
   display: block;
   svg {
    width: 12px;
    height: 12px;
   }
   @media (max-width: 520px) {
    margin-right: 10px;
   }
  }
 }
}
</style>
