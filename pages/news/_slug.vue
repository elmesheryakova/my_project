<template>
 <div class="news-only">
  <div class="container">
   <h1 class="pages__title">{{ item.name }}</h1>
   <div class="news-only__item">
    <div class="news-only__item-img">
     <img :src="item.image" alt="img" />
    </div>
    <div class="news-only__item-text" v-html="item.description"></div>
    <p class="news-only__item-date">{{ item.created_at }}</p>
   </div>
  </div>
  <Subscription />
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
   item: [],
  };
 },
 async asyncData({ params, $axios }) {
  const item = await $axios.$get(
   `https://api.petexpert.pro/v1/company/news/${params.slug}/`
  );
  return { item };
 },
};
</script>
<style lang="scss">
.news-only {
 .pages__title {
  padding: 50px 0 65px;
  @media (max-width: 790px) {
   padding-bottom: 40px;
  }
  // @media (max-width: 768px) {
  //   padding-top: 40px;
  // }
 }
 &__item {
  margin-bottom: 50px;
  background-color: #f4f6f6;
  &-img {
   width: 100%;
   height: 360px;
   img {
    width: 100%;
    height: 100%;
    object-fit: cover;
   }
  }
  &-text {
   columns: 2 auto;
   padding: 60px 80px 40px;
   gap: 100px;
  }
  &-date {
   text-align: right;
   padding: 0 80px 20px;
  }
  @media (max-width: 991px) {
   &-text {
    padding: 40px;
    gap: 60px;
   }
  }
  @media (max-width: 800px) {
   &-text {
    padding: 30px;
    gap: 30px;
   }
  }
  @media (max-width: 700px) {
   margin-right: -20px;
   margin-left: -20px;
   width: 110%;
   &-text {
    columns: 1;
    padding-right: 50px;
   }
  }
  @media (max-width: 450px) {
   &-text {
    padding-right: 30px;
    padding-left: 20px;
   }
  }
  @media (max-width: 370px) {
   &-text {
    padding-right: 15px;
   }
  }
 }
}
</style>
