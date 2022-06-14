<template>
 <div class="docs">
  <div class="container">
   <h1 class="pages__title">Документы</h1>
   <div class="docs__inner">
    <div class="docs__item" v-for="item in page.elements" :key="item.id">
     <img :src="item.images[0]" :alt="item.name" v-if="item.images" />
     <div class="docs__hover">
      <a :href="item.file" target="_blank"> <svgicon name="search-w" /></a>

      <a href="#" @click.prevent="downloadItem(item.file)"
       ><svgicon name="download" class="download" />
      </a>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>
<script>
import axios from "axios";
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
   `https://api.petexpert.pro/v1/to_clients/pages/docs/`
  );
  return { page };
 },
 computed: {},
 methods: {
  downloadItem(file) {
   axios({
    url: file,
    method: "GET",
    responseType: "blob",
   }).then((response) => {
    var fileURL = window.URL.createObjectURL(new Blob([response.data]));
    var fileLink = document.createElement("a");
    fileLink.href = fileURL;
    fileLink.setAttribute("download", `file.${file.replace(/.*\./, "")}`);
    document.body.appendChild(fileLink);
    fileLink.click();
   });
  },
 },
};
</script>
<style lang="scss">
.reviews,
.docs {
 padding: 135px 0 160px;
 background: #f2f3f7;
 @media (max-width: 991px) {
  padding-top: 90px;
 }
 @media (max-width: 860px) {
  padding-bottom: 60px;
 }
 @media (max-width: 791px) {
  padding-top: 60px;
 }
 &__inner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media (max-width: 1300px) {
   grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 970px) {
   grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 460px) {
   gap: 10px;
  }
 }
 &__item {
  width: 300px;
  height: 400px;
  background-color: #fff;
  margin: 0 auto;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  &:hover {
   .docs__hover {
    opacity: 1;

    visibility: visible;
    transition: 0.5s ease-in-out;
   }
  }
  img {
   width: 100%;
   height: 100%;
   object-fit: cover;
  }
  @media (max-width: 660px) {
   width: 250px;
   height: 350px;
  }
  @media (max-width: 550px) {
   width: 200px;
   height: 300px;
  }
  @media (max-width: 460px) {
   width: 150px;
   height: 220px;
  }
  @media (max-width: 340px) {
   width: 145px;
   height: 200px;
  }
 }
 &__hover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba($color: #f2f3f7, $alpha: 0.6);
  opacity: 0;
  visibility: hidden;
  height: 100%;
  transition: 0.5s ease-in-out;
  cursor: initial;
  svg {
   width: 32px;
   height: 32px;
   padding: 6px;
   border-radius: 50%;
   background: linear-gradient(271.8deg, #1b2ac9 -0.56%, #0073f0 100.44%);
   cursor: pointer;
   position: absolute;
   bottom: 16px;
   right: 25px;
   transition: 0.5s ease-in-out;
   &:hover {
    width: 38px;
    height: 38px;
    transition: 0.5s ease-in-out;
   }
  }
  .download {
   bottom: 60px;
   padding: 0px;
  }
 }
}
</style>
