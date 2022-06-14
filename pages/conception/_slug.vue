<template>
 <div class="concept-item" v-if="width > 860">
  <div class="container">
   <h1 class="pages__title">{{ conceptionID.name }}</h1>
   <div
    class="concept-item__wrap"
    v-for="(item, index) in conceptionID.elements"
    :key="index"
   >
    <div class="concept-item__info">
     <h3>{{ item.name }}</h3>
     <div class="concept-item__description" v-html="item.description"></div>
    </div>
    <div class="concept-item__img">
     <img :src="item.image[0]" alt="img" />
    </div>
   </div>
  </div>
 </div>
 <div class="concept-item" v-else>
  <h1 class="pages__title">{{ conceptionID.name }}</h1>
  <Advantages :width="width" :items="conceptionID.elements" />
 </div>
</template>
<script>
export default {
 head() {
  return {
   title: this.conceptionID.seo.seo_title,

   meta: [
    {
     hid: `${this.conceptionID.id}-description`,
     name: "description",
     content: this.conceptionID.seo.seo_description,
    },
   ],
  };
 },
 data() {
  return {
   width: 0,
   conceptionID: {},
  };
 },
 async asyncData({ params, $axios }) {
  const conceptionID = await $axios.$get(
   `https://api.petexpert.pro/v1/conception/${params.slug}/`
  );
  return { conceptionID };
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
.concept-item {
 .advantages__item-info {
  margin-bottom: 0;
 }
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
 &__wrap {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px;
  &:not(:last-child) {
   margin-bottom: 160px;
  }
  @media (max-width: 950px) {
   gap: 30px;
  }
 }
 &__img {
  max-height: 670px;
  img {
   width: 100%;
   height: 100%;
   object-fit: cover;
  }
 }
 &__info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  li {
   list-style: inside;
   &:not(:last-child) {
    margin-bottom: 10px;
   }
  }
  h3 {
   color: $primary;
   font-size: 48px;
   font-weight: 600;
   padding-bottom: 80px;
  }
  p {
   max-width: 400px;
   line-height: 20px;
  }
  @media (max-width: 1100px) {
   h3 {
    font-size: 40px;
    padding-bottom: 120px;
   }
  }
  @media (max-width: 950px) {
   h3 {
    font-size: 32px;
    padding-bottom: 100px;
   }
  }
 }
 &__description {
  position: relative;
  &:after {
   content: "";
   position: absolute;
   top: -70px;
   left: 0;
   width: 1px;
   height: 50px;
   background: $black;
  }
 }
}
</style>
