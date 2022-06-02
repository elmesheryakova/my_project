<template>
 <section class="contacts">
  <div class="contacts__inner">
   <div class="container">
    <div class="contacts__left" id="contacts-info">
     <h2 class="contacts__title">Контакты</h2>
     <b-tabs content-class="mt-3" v-model="tabIndex">
      <b-tab
       v-for="(item, index) in items"
       :key="index"
       :title="item.region.name"
       @click="animateMap"
      >
       <div class="contacts__tab-contents">
        <a
         class="contacts__phone"
         :href="`tel:${item.phone}`"
         v-if="item.phone_str"
        >
         {{ item.phone_str }}
        </a>
        <a class="contacts__email" :href="`mailto:${item.email}`">
         {{ item.email }}
        </a>
        <div class="contacts__address">
         {{ item.address }}
        </div>
       </div>
       <!-- <div class="contacts__social-icons">
                <div class="contacts__social-icon-wrap">
                  <img :src="item.position_svg" alt="" />
                </div>
              </div> -->
      </b-tab>
     </b-tabs>
    </div>

    <div class="contacts__right">
     <template v-if="!isDesktop">
      <div
       class="contacts__person-slider swiper"
       v-swiper:mySwiper="swiperOption"
       v-if="items[tabIndex].employees.length > 3"
      >
       <div class="swiper-wrapper">
        <div
         class="contacts__person-slide swiper-slide"
         v-for="(item, index) in items[tabIndex].employees"
         :key="index"
        >
         <div class="contact-card">
          <div class="contact-card__img">
           <img :src="item.image" :alt="item.name" v-if="item.image" />
           <img
            :src="require(`@/assets/img/placeholder.jpg`)"
            :alt="item.name"
            v-else
           />
          </div>
          <div class="contact-card__full-name">
           <div class="contact-card__name">{{ item.name }}</div>
          </div>
          <div class="contact-card__job">
           <img :src="item.position_svg" alt="" />

           <div>{{ item.position }}</div>
          </div>
          <div class="contact-card__phone-add">
           (Доб.{{ item.phone_extra }})
          </div>
         </div>
        </div>
       </div>
      </div>
      <div v-else>
       <div v-for="(item, index) in items[tabIndex].employees" :key="index">
        <div class="contact-card">
         <div class="contact-card__img">
          <img :src="item.image" :alt="item.name" v-if="item.image" />
          <img
           :src="require(`@/assets/img/placeholder.jpg`)"
           :alt="item.name"
           v-else
          />
         </div>
         <div class="contact-card__full-name">
          <div class="contact-card__name">{{ item.name }}</div>
         </div>
         <div class="contact-card__job">
          <img :src="item.position_svg" alt="" />

          <div>{{ item.position }}</div>
         </div>
         <div class="contact-card__phone-add">(Доб.{{ item.phone_extra }})</div>
        </div>
       </div>
      </div>
     </template>

     <div class="contacts__person-slider swiper" v-else>
      <div class="swiper-wrapper">
       <div
        class="contacts__person-slide swiper-slide"
        v-for="(item, index) in items[tabIndex].employees"
        :key="index"
       >
        <div class="contact-card">
         <div class="contact-card__img">
          <img :src="item.image" :alt="item.name" v-if="item.image" />
          <img
           :src="require(`@/assets/img/placeholder.jpg`)"
           :alt="item.name"
           v-else
          />
         </div>
         <div class="contact-card__full-name">
          <div class="contact-card__name">{{ item.name }}</div>
         </div>
         <div class="contact-card__job">
          <img :src="item.position_svg" alt="" />
          <div>{{ item.position }}</div>
         </div>
         <div class="contact-card__phone-add">(Доб.{{ item.phone_extra }})</div>
        </div>
       </div>
      </div>
     </div>
    </div>

    <Map
     :tabIndex="tabIndex"
     :lat="items[tabIndex].lat"
     :lng="items[tabIndex].lng"
     :route_url="items[tabIndex].route_url"
    />
   </div>
  </div>
 </section>
</template>

<script>
import { directive } from "vue-awesome-swiper";

export default {
 name: "ContactsSection",

 props: {
  directives: {
   swiper: directive,
  },
  items: {
   type: Array,
   default: () => [],
  },
 },
 data() {
  var self = this;
  return {
   tabIndex: 0,

   swiperOption: {
    slidesPerView: 2,
    // loopedSlides: 4,
    loop: true,
    // watchSlidesVisibility: true,
    spaceBetween: 10,
    breakpoints: {
     450: {
      slidesPerView: 3,
     },
     700: {
      slidesPerView: 4,
     },
    },
   },
  };
 },
 computed: {
  isDesktop() {
   return this.$mq === "xl" || this.$mq === "xl2";
  },
 },
 methods: {
  animateMap() {
   const map = document.querySelector(".wrapper-map");
   const contacts = document.querySelectorAll(".contacts__tab-contents");
   const imgs = document.querySelectorAll(".contacts__person-slider");

   // contacts.forEach((el) => {
   //   el.classList.add("animate");
   //   setTimeout(() => {
   //     el.classList.remove("animate");
   //   }, 200);
   // });
   // if (this.isDesktop) {
   //   imgs.forEach((el) => {
   //     el.classList.add("animate");
   //     setTimeout(() => {
   //       el.classList.remove("animate");
   //     }, 400);
   //   });
   // }

   map.classList.add("animate");
   setTimeout(() => {
    map.classList.remove("animate");
   }, 500);
  },
 },
};
</script>

<style lang="scss">
/* start contacts */
.list-enter-active,
.list-leave-active {
 transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
 opacity: 0;
 transform: translateX(30px);
}
.contacts {
 position: relative;
 margin-bottom: 350px;

 &:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: calc(50% + 20px);
  height: 100%;
  background-color: $primary;
 }

 .container {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
 }
}

.contacts__left {
 width: calc(50% + 20px);
 padding-top: 35px;
 color: white;
 padding-right: 50px;
 .nav {
  justify-content: space-between;
  flex-wrap: nowrap;
  @media (max-width: 993px) {
   justify-content: start;
   gap: 30px;
  }
  @media (max-width: 600px) {
   gap: 10px;
   display: block;
   width: fit-content;
  }
 }
 .nav-tabs {
  border-bottom: none;
  // margin-right: 30px;
  // flex-wrap: wrap;
  li {
   margin-bottom: 10px;
  }
 }
 .nav-link {
  border: 1px solid $white;
  border-radius: 44px;
  height: 40px;
  padding: 0 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0.9;
  &.active {
   color: $primary;
  }
  &:hover {
   color: $primary;
   background-color: #fff;
  }
  @media (max-width: 1220px) {
   padding: 0 15px;
  }
  @media (max-width: 600px) {
   justify-content: flex-start;
   height: 35px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-bottom: 30px;
   width: fit-content;
   padding: 0 20px;
  }
 }
}

.contacts__right {
 width: calc(50% - 20px);
 position: relative;
 z-index: 1;
 padding-top: 40px;
 padding-right: 0;
 display: flex;
 justify-content: center;
 align-items: flex-start;
}

.contacts-map {
 position: relative;
 z-index: 1;
 width: 100%;
}

.contacts__title {
 font-size: 123px;
 line-height: 1;
 margin-bottom: 60px;
 font-weight: 700;
}

.contacts__tab-buttons {
 display: flex;
 justify-content: space-between;
 padding-right: 16px;
}

.contacts__tab-button {
 background-color: transparent;
 @include tr((background-color, color));
 border-radius: 999px;
 color: white;
 display: flex;
 padding-bottom: 3px;
 align-items: center;
 justify-content: center;
 height: 41px;
 font-size: 15px;
 border: 1px solid white;
 padding-left: 28px;
 padding-right: 28px;

 &:hover,
 &.active {
  background-color: white;
  border-color: white;
  color: $primary;
 }
}

.contacts__phone,
.contacts__email {
 color: white;
 display: block;
 @include tr((opacity));

 &:hover {
  opacity: 0.7;
  color: white;
  text-decoration: none;
 }
}

.contacts__tab-contents {
 margin: 60px 0 30px;
 transition: 0.3s ease-in-out;
 &.animate {
  opacity: 0.3;
  // transform: translateX(80px);
  transition: 0.3s ease-in-out;
 }
}

.contacts__phone {
 font-weight: 700;
 font-size: 36px;
 margin-bottom: 40px;
}

.contacts__email {
 font-size: 24px;
 font-weight: 300;
 margin-bottom: 30px;
}

.contacts__address {
 font-size: 24px;
 font-weight: 300;
 line-height: 1.5;
 height: 80px;
}

.contacts__social-icons {
 display: flex;
 align-items: center;
 margin-bottom: 50px;
 @media (max-width: 600px) {
  margin-bottom: 10px;
 }
}

.contacts__social-icon {
 color: white;
 margin-right: 25px;
 border-radius: 50%;
 width: 46px;
 height: 46px;
 display: flex;
 align-items: center;
 justify-content: center;
 @include tr((background-color, color));
 svg {
  height: 25px;
 }
 &:hover {
  background-color: white;

  svg path {
   fill: $primary;
  }
 }
}

.contacts__social-icon-wrap {
 display: flex;
}

.contacts__social-icon--whatsapp .contacts__social-icon-wrap {
 margin-left: 2px;
}

.contacts__social-icon--tg .contacts__social-icon-wrap {
 margin-right: 2px;
 margin-top: 1px;
}

.contact-card {
 max-width: 130px;
 display: block;
 margin-bottom: 20px;
 transition: 0.3s ease-in-out;
 @media (max-width: 991px) {
  max-width: 200px;
 }
 &.animate {
  opacity: 0.3;
  // transform: translateX(80px);
  transition: 0.3s ease-in-out;
 }
}

.contact-card__img {
 margin-bottom: 14px;
 height: 128px;
 width: 128px;
 overflow: hidden;
}

.contact-card__full-name {
 font-size: 14px;
 line-height: 1.2;
 margin-bottom: 8px;
}

.contact-card__img img {
 width: 100%;

 transition: 0.7s ease-in;
}

.contact-card__job {
 display: flex;
 align-items: center;
 color: #8e95a7;

 img {
  margin-right: 5px;
  width: 20px;
  margin-top: 1px;
 }
 div {
  font-size: 14px;
 }
}

.contact-card__phone-add {
 font-weight: 700;
 color: $primary;
 margin-top: 6px;
}

.contacts-map {
 height: 585px;
 background-color: $lightGrey;
 width: 100%;
 display: flex;
 align-items: flex-end;
 position: relative;
 margin-bottom: -350px;
 margin-top: 50px;

 &:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
   180deg,
   rgba(255, 255, 255, 0) 34.58%,
   #ffffff 100%
  );
  pointer-events: none;
 }
}

.contacts-map__map {
 position: absolute;
 left: 0;
 top: 0;
 width: 100%;
 height: 100%;

 .ymaps-2-1-79-ground-pane {
  filter: grayscale(100%);
 }
}

.contacts-map__bottom {
 position: relative;
 z-index: 1;
 text-align: center;
 display: flex;
 align-items: center;
 justify-content: center;
 height: 78px;
 width: 100%;

 &:hover {
  .contacts-map__route-title {
   transform: translateX(-100px);
  }

  .contacts-map__route-links {
   transition-delay: 0.2s;
   opacity: 1;
  }
 }
}

.contacts-map__route-title {
 display: flex;
 align-items: center;
 justify-content: center;
 color: $primary;
 font-size: 24px;
 width: 100%;
 margin: 0;
 @include tr((transform), 0.4s);

 > img {
  margin-right: 16px;
 }
}

.contacts-map__route-links {
 position: absolute;
 left: 50%;
 width: 220px;
 margin-left: -100px;
 display: flex;
 height: 100%;
 justify-content: space-between;
 z-index: 1;
 opacity: 0;
 transform: translateX(100px);
 @include tr((transform, opacity), 0.4s);
 transition-delay: 0s;
}

.contacts-map__route-link {
 width: 58px;
 font-size: 15px;
 display: flex;
 flex-direction: column;
 align-items: center;
 color: black;
 @include tr((opacity));

 &:hover {
  opacity: 0.6;
  text-decoration: none;
 }
}

.contacts-map__route-link-icon {
 height: 38px;
 width: 38px;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-shrink: 0;
 flex-grow: 0;
 flex-basis: 38px;
}

.contacts-map__route-title {
 flex-grow: 1;
 font-size: 15px;
 line-height: 1;
}

.contacts-map__route-link-icon img {
 display: block;
}

.contacts__person-slider {
 overflow: visible;
 &.animate {
  opacity: 0.3;
  // transform: translateX(80px);
  transition: 0.3s ease-in-out;
 }
}
// .contact-card__name {
//   min-height: 40px;
// }
@media screen and (min-width: map-get($grid-breakpoints, "lg")) {
 .contacts__person-slider .swiper-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 60px;
 }
}
@media (max-width: 1190px) {
 .contacts__person-slider .swiper-wrapper {
  column-gap: 30px;
 }
}
@media (max-width: 990px) {
 .contacts__person-slider .swiper-wrapper {
  column-gap: 0;
 }
}
@include down("xl") {
 .contacts__title {
  font-size: 84px;
 }
 .contacts__left {
  padding-right: 30px;
 }
 // .contacts__right {
 //   padding-left: 30px;
 // }
 .contacts__tab-buttons {
  padding-right: 0;
 }
 .contacts__phone {
  font-size: 36px;
 }
 .contacts__email,
 .contacts__address {
  font-size: 24px;
 }
}

@include down("lg") {
 .contacts__title {
  font-size: 48px;
 }
 .contacts:before {
  display: none;
 }
 .contacts .container {
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 0;
  width: 100%;
  max-width: 100%;
 }
 .contacts__left {
  background-color: $primary;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 65px;
 }
 .contacts__tab-contents {
  max-width: 600px;
 }
 .contacts__tab-buttons {
  justify-content: flex-start;
 }
 .contacts__tab-button {
  margin-right: 54px;

  &:last-of-type {
   margin-right: 0;
  }
 }
 .contacts__right {
  width: 100%;
  // padding-left: 30px;
  // padding-top: 60px;
  margin: 40px 0;
  margin-top: 20px;
 }
 .contacts-map {
  // margin-top: 0;
  height: 500px;
 }
 .contacts-map__bottom {
  flex-direction: column;
  width: 228px;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  padding-top: 24px;
  padding-left: 30px;
  left: 50% !important;
  transform: translate(-50%);
  background-color: white;
 }
 .contacts-map__route-links {
  flex-direction: column;
  opacity: 1;
  position: static;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  left: 0;
  margin-left: 0;
  transform: none;
  margin-top: 20px;
 }
 .contacts-map__route-link {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: auto;
  padding-top: 10px;
  padding-bottom: 10px;
 }
 .contacts-map__route-link-icon {
  margin-right: 6px;
 }
 .contacts-map__route-title {
  color: black;
  text-align: left;
  display: block;

  &:after {
   content: "Построить маршрут:";
   font-size: 16px;
   font-weight: 700;
   display: block;
  }

  span {
   color: black;
   display: none;
  }

  img {
   display: none;
  }
 }
 .contacts-map__bottom {
  &:hover {
   .contacts-map__route-title {
    opacity: 1;
    transform: none !important;
   }
  }
 }

 .contacts__person-slide {
  opacity: 0.4;
  transition: opacity 0.4s;
  min-width: 180px;
  .contact-card {
   margin: 0;
  }

  &.swiper-slide-visible {
   opacity: 1;
  }
  @media (max-width: 990px) {
   opacity: 1;
   min-width: auto;
  }
 }
}

@include down("md") {
 .contacts__title {
  text-align: center;
 }
 .contacts__tab-buttons {
  flex-direction: column;
 }
 .contacts__tab-button {
  align-self: flex-start;
  margin-bottom: 18px;

  &:last-of-type {
   margin-bottom: 0;
  }
 }
 .contacts__tab-contents {
  margin-top: 40px;
 }
 .contacts__person-slide {
  .contact-card {
   margin: 0;
  }
 }
}

@include down("sm") {
 .contacts__right {
  // padding-left: 24px;
  padding-bottom: 30px;

  margin: 0;
 }
 .contacts__phone {
  font-size: 32px;
 }
 .contacts__email,
 .contacts__address {
  font-size: 24px;
 }
}

@include down("xs") {
 .contacts__phone {
  font-size: 26px;
 }
 .contacts__email,
 .contacts__address {
  font-size: 18px;
 }
}

/* end contacts */
</style>
