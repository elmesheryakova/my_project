<template>
 <div class="service">
  <div class="container">
   <h1 class="pages__title">{{ page.header }}</h1>
   <div
    class="service__inner"
    v-for="(item, index) in page.elements"
    :key="index"
   >
    <div class="service__info">
     <h2 class="service__info-title">
      {{ item.name }}
     </h2>
     <div class="service__info-subtitle" v-html="item.description"></div>
     <ul class="service__list">
      <li
       class="service__list-item d-flex"
       v-for="(list, idx) in item.elements_list"
       :key="idx"
      >
       <div class="shipment__list-svg">
        <svgicon name="romb" />
       </div>
       {{ list.value }}
      </li>
     </ul>
    </div>
    <div class="service__img" v-if="item.images">
     <img :src="item.images[0]" alt="img" />
    </div>
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
   page: {},
  };
 },
 async asyncData({ $axios }) {
  const page = await $axios.$get(
   `https://api.petexpert.pro/v1/to_clients/pages/service/`
  );
  return { page };
 },
 methods: {},

 mounted() {},
};
</script>
<style lang="scss">
.service {
 padding: 135px 0 160px;

 @media (max-width: 991px) {
  padding-top: 90px;
 }
 @media (max-width: 860px) {
  padding-bottom: 60px;
 }
 @media (max-width: 791px) {
  padding-top: 60px;
 }
 &__info {
  font-size: 21px;
  font-weight: 400;
  line-height: 28px;
  justify-content: center;

  display: flex;
  flex-direction: column;
  &-subtitle {
   padding-bottom: 30px;
   @media (max-width: 1200px) {
    padding-bottom: 10px;
   }
  }
  @media (max-width: 1300px) {
   font-size: 22px;
  }
  @media (max-width: 1200px) {
   font-size: 20px;
  }
  @media (max-width: 1040px) {
   font-size: 18px;
   line-height: 22px;
  }
  @media (max-width: 640px) {
   padding-top: 40px;
   font-size: 16px;
  }
  @media (max-width: 370px) {
   font-size: 16px;
  }
 }
 &__info-title {
  color: $primary;
  font-size: 42px;
  line-height: 52px;
  font-weight: 600;
  padding-bottom: 40px;
  @media (max-width: 1300px) {
   font-size: 40px;
   line-height: 42px;
  }
  @media (max-width: 1200px) {
   font-size: 36px;
   padding-bottom: 20px;
  }
  @media (max-width: 1040px) {
   font-size: 30px;
   line-height: 32px;
   padding-bottom: 20px;
  }
 }
 &__inner {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 70px;
  @media (max-width: 1040px) {
   gap: 20px;
  }
  @media (max-width: 860px) {
   grid-template-columns: 1fr;
  }
 }
 &__img {
  img {
   width: 100%;
  }
  @media (max-width: 860px) {
   margin-right: -20px;
   margin-left: -20px;
   img {
    width: 110%;
    max-height: 400px;
    object-fit: cover;
   }
  }
  @media (max-width: 640px) {
   order: -1;
   img {
    max-height: 360px;
   }
  }
 }
 &__list {
  &-item {
   &:not(:last-child) {
    margin-bottom: 25px;
    @media (max-width: 1200px) {
     margin-bottom: 15px;
    }
   }
  }
 }
}
</style>
