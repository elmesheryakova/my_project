<template>
  <!-- START contacts -->
  <section class="contacts">
    <div class="contacts__inner">
      <div class="container">
        <!-- START contacts__left -->
        <div class="contacts__left" id="contacts-info">
          <h2 class="contacts__title">Контакты</h2>
          <div class="contacts__tab-buttons">
            <!-- в своей верстке я вынес координаты и ссылки маршрутов в data аттрибуты, но во вью можно все вывести через пропсы -->
            <button class="contacts__tab-button js-contact-tab active" data-tab-trigger="#contact-tab-1"
                    data-coords="55.386574,36.728607"
                    data-route-yandex="https://www.google.com/maps/dir//55.386574,36.728607"
                    data-route-google="https://www.google.com/maps/dir//55.386574,36.728607"
                    data-route-2gis="https://2gis.ru/directions/points/|36.728607,55.386574?m=36.728607,55.386574">
              Москва
            </button>
            <button class="contacts__tab-button js-contact-tab" data-tab-trigger="#contact-tab-2"
                    data-coords="54.983242,82.870423"
                    data-route-yandex="https://www.google.com/maps/dir//54.983242,82.870423"
                    data-route-google="https://www.google.com/maps/dir//54.983242,82.870423"
                    data-route-2gis="https://2gis.ru/directions/points/|82.870423,54.983242?m=82.870423,54.983242">
              Новосибирск
            </button>
            <button class="contacts__tab-button js-contact-tab" data-tab-trigger="#contact-tab-3"
                    data-coords="45.034214,39.014469"
                    data-route-yandex="https://www.google.com/maps/dir//45.034214,39.014469"
                    data-route-google="https://www.google.com/maps/dir//45.034214,39.014469"
                    data-route-2gis="https://2gis.ru/directions/points/|39.014469,45.034214?m=39.014469,45.034214">
              Краснодар
            </button>
          </div>
          <div class="contacts__tab-contents">
            <div class="tab-content contacts__tab-content tab-active tab-visible" data-parent="#contacts-info"
                 id="contact-tab-1">
              <a class="contacts__phone" href="tel:74995770006">
                +7 (499) 577-00-06
              </a>
              <a class="contacts__email" href="mailto:info@petexpert.pro">
                info@petexpert.pro
              </a>
              <div class="contacts__address">143300, Московская область, г. Наро-Фоминск, площадь Свободы, 10</div>
            </div>
          </div>
          <div class="contacts__social-icons">
            <a href="#" class="contacts__social-icon contacts__social-icon--fb" target="_blank">
              <div class="contacts__social-icon-wrap">
                <svg width="12" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.7.3a4.3 4.3 0 0 0-3.8 3.6V8.1H.5V12h3.2v9.8h3.8v-9.9h3.2l.4-3.8H7.6V6.5l.1-1.8C8 4.2 8.3 4 9 4h2.4V.3h-.5C10 .2 8.1.1 7.7.2Z"
                        fill="currentColor"/>
                </svg>
              </div>
            </a>
            <a href="#" class="contacts__social-icon contacts__social-icon--insta" target="_blank">
              <div class="contacts__social-icon-wrap">
                <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.7 1.6A5.5 5.5 0 0 0 .9 5.8v.6a124.6 124.6 0 0 0 0 9.8h.2-.2A5.5 5.5 0 0 0 6 21v-.2.2h.5a124.8 124.8 0 0 0 9.8 0v-.2.2a5.5 5.5 0 0 0 4.9-5.5 122 122 0 0 0 0-9.8A5.5 5.5 0 0 0 16 1v.2-.2h-.5a139.4 139.4 0 0 0-9.8 0c-.7.1-1.5.4-2.1.7Zm0 0v.1Zm2.2.8a5.4 5.4 0 0 1 .4 0 156.2 156.2 0 0 1 4.8 0h5.4a4.1 4.1 0 0 1 3 3h.2-.2l.1.4V16.5a4.1 4.1 0 0 1-3 3v.2-.2l-.4.1H5.5a4.1 4.1 0 0 1-3-3l-.1-.4V5.5A4.1 4.1 0 0 1 6 2.4Zm0 0v-.2.2ZM17 3.5c.6.2 1.1.8 1.2 1.5.2 1.2-1 2.2-2.1 2-.7-.3-1.1-.7-1.3-1.4h.1c-.2-1 .4-1.8 1.4-2h.7Zm0 0a2 2 0 0 0-.7 0h.7Zm-.3 2h-.3a.3.3 0 0 1-.1-.5H16.7c.2 0 .2.3 0 .4Zm-6.6 0c-2.2.3-4 2-4.6 4.1-.5 2 0 4 1.5 5.3a5.5 5.5 0 0 0 7.8 0 5.5 5.5 0 0 0 0-7.8 5.5 5.5 0 0 0-4.7-1.6ZM8.1 8 8 8a4 4 0 0 1 6 0 4.1 4.1 0 0 1 0 6 4.1 4.1 0 0 1-6 0 4.1 4.1 0 0 1 0-6Z"
                    fill="currentColor" stroke="currentColor" stroke-width=".3"/>
                </svg>
              </div>
            </a>
            <a href="#" class="contacts__social-icon contacts__social-icon--tg" target="_blank">
              <div class="contacts__social-icon-wrap">
                <svg width="24" height="19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22.8 0 .7 8c-.8.3-1 .8-.4 1.3.3.2.5.3 3.2 1.1l2.6.9 6.4-3.7L20 3.2c.5 0 .6.1.3.5a524.2 524.2 0 0 1-10.9 9c0 .1 8.8 6.2 9 6.2.7.2 1.5 0 1.8-.6A624 624 0 0 0 24 .5c0-.4-.5-.6-1.2-.5Z"
                        fill="currentColor"/>
                </svg>
              </div>
            </a>
            <a href="#" class="contacts__social-icon contacts__social-icon--whatsapp" target="_blank">
              <div class="contacts__social-icon-wrap">
                <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M9.8.1c-7.6 1-12 8.8-8.6 15.6.4.8.4.3-.5 3.5A71 71 0 0 0 0 22a79 79 0 0 0 5.9-1.4c3.5 2.3 9.6 1.3 13-2C26 11.3 19.9-1.3 9.8 0Zm1.9 1.8a9 9 0 0 1 5.8 15.3 9 9 0 0 1-11.3 1.4l-.1-.1-1.7.4-1.7.4.4-1.7.5-1.5-.3-.6A9 9 0 0 1 11.7 2Zm-4.8 4c-1 .3-1.7 2.2-1.3 3.5a12 12 0 0 0 5.2 5.8c2.5 1.2 4 1.2 5.3 0 .7-.7.7-2 0-2l-1-.4c-1.3-.7-1.3-.7-1.8 0-.8 1-.8 1-1.6.6a7.3 7.3 0 0 1-3.2-2.9c-.3-.4-.3-.4.2-1l.5-.8-1-2.6c-.2-.3-.9-.4-1.3-.2Z"
                        fill="currentColor"/>
                </svg>
              </div>
            </a>
          </div>
        </div>
        <!-- END contacts__left -->

        <!-- START contacts__right -->
        <div class="contacts__right">
          <div class="contacts__person-slider swiper" v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
              <!-- START contacts__person-slide -->
              <div class="contacts__person-slide swiper-slide" v-for="(item, index) in staff" :key="index">
                <div class="contact-card">
                  <div class="contact-card__img">
                    <img
                      :src="require(`@/assets/img/${item.photo}`)"
                      :alt="item.person"
                      v-if="item.photo"
                    />
                    <img
                      :src="require(`@/assets/img/placeholder.jpg`)"
                      :alt="item.person"
                      v-else
                    />
                  </div>
                  <div class="contact-card__full-name">
                    <div class="contact-card__name">{{ item.person }}</div>
                  </div>
                  <div class="contact-card__job">
                    <svgicon :name="item.icon"/>
                    <div>{{ item.department }}</div>
                  </div>
                  <div class="contact-card__phone-add">({{ item.phone }})</div>
                </div>
              </div>
              <!-- END contacts__person-slide -->
            </div>
          </div>
        </div>
        <!-- END contacts__right -->

        <!-- START contacts-map -->
        <div class="contacts-map">
          <div class="contacts-map__map" id="contact-map"></div>
          <div class="contacts-map__bottom">
            <div class="contacts-map__route-title">
              <img src="~/assets/img/route-icon.svg" alt="Маршрут">
              <span>Маршрут</span>
            </div>
            <div class="contacts-map__route-links">
              <a href="https://www.google.com/maps/dir//55.386574,36.728607" target="_blank"
                 class="contacts-map__route-link contacts-map__route-link--google js-route-google">
                <div class="contacts-map__route-link-icon"><img src="~/assets/img/google-colored.svg" alt="Google maps">
                </div>
                <span class="contacts-map__route-link-title">Google maps</span>
              </a>
              <a href="https://yandex.ru/maps/?mode=routes&rtext=~55.386574,36.728607&rtt=auto" target="_blank"
                 class="contacts-map__route-link contacts-map__route-link--google js-route-yandex">
                <div class="contacts-map__route-link-icon"><img src="~/assets/img/yandex-maps-colored.svg"
                                                                alt="Яндекс карты">
                </div>
                <span class="contacts-map__route-link-title">Яндекс карты</span>
              </a>
              <a
                href="https%3A%2F%2F2gis.ru%2Fdirections%2Fpoints%2F%7C36.728607%2C55.386574%3Fm%3D36.728607%2C55.386574"
                target="_blank"
                class="contacts-map__route-link contacts-map__route-link--2gis js-route-2gis">
                <div class="contacts-map__route-link-icon"><img src="~/assets/img/2gis-colored.svg" alt="2 gis"></div>
                <span class="contacts-map__route-link-title">2 gis</span>
              </a>
            </div>
          </div>
        </div>
        <!-- END contacts-map -->
      </div>
    </div>

  </section>
  <!-- END contacts -->
</template>

<script>
import {directive} from "vue-awesome-swiper";

export default {
  name: "ContactsSection",
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        loopedSlides: 4,
        loop: true,
        watchSlidesVisibility: true,
        spaceBetween: 38,
        breakpoints: {
          600: {
            slidesPerView: 3,
          }
        }
      }
    }
  },
  props: {
    directives: {
      swiper: directive,
    },
    staff: Array,
    default: () => []
  }
}
</script>

<style lang="scss">

/* start contacts */
.contacts {
  position: relative;
  margin-bottom: 350px;

  &:before {
    content: '';
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
  padding-top: 84px;
  color: white;
  padding-right: 50px;
}

.contacts__right {
  width: calc(50% - 20px);
  padding-top: 104px;
  position: relative;
  z-index: 1;
  padding-left: 50px;
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

  &:hover, &.active {
    background-color: white;
    border-color: white;
    color: $primary;
  }
}

.contacts__phone, .contacts__email {
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
}

.contacts__phone {
  font-weight: 700;
  font-size: 36px;
  margin-bottom: 20px;
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
}

.contacts__social-icons {
  display: flex;
  align-items: center;
}

.contacts__social-icon {
  color: white;
  margin-right: 10px;
  border-radius: 50%;
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  @include tr((background-color, color));

  &:hover {
    background-color: white;
    color: $primary;
  }
}

.contacts__social-icon-wrap {
  display: flex;
}

.contacts__social-icon--insta .contacts__social-icon-wrap {
  //margin-top: -1px;
}

.contacts__social-icon--whatsapp .contacts__social-icon-wrap {
  margin-left: 2px;
}

.contacts__social-icon--tg .contacts__social-icon-wrap {
  margin-right: 2px;
  margin-top: 1px;
}

.contact-card {
  max-width: 128px;
  display: block;
  margin-bottom: 50px;
}

.contact-card__img {
  margin-bottom: 14px;
}

.contact-card__full-name {
  font-size: 14px;
  line-height: 1.2;
  margin-bottom: 8px;
}


.contact-card__img img {
  width: 100%;
}

.contact-card__job {
  display: flex;
  align-items: center;
  color: #8E95A7;

  > svg {
    margin-right: 10px;
    fill: white;
    width: 23px;
    margin-top: 1px;
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
  margin-bottom: -300px;
  margin-top: 50px;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 76.58%, #FFFFFF 100%);
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
}

@media screen and (min-width: map-get($grid-breakpoints, 'lg')) {
  .contacts__person-slider .swiper-wrapper {
    flex-wrap: wrap;
  }
  .contacts__person-slide {
    flex: 0 0 33.3333%;
  }
}

@include down('xl') {
  .contacts__title {
    font-size: 84px;
  }
  .contacts__left {
    padding-right: 30px;
  }
  .contacts__right {
    padding-left: 30px;
  }
  .contacts__tab-buttons {
    padding-right: 0;
  }
  .contacts__phone {
    font-size: 36px;
  }
  .contacts__email, .contacts__address {
    font-size: 24px;
  }
}

@include down('lg') {
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
    padding-left: 30px;
    padding-right: 30px;
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
    padding-left: 30px;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .contacts-map {
    margin-top: 0;
    height: 666px;
  }
  .contacts-map__bottom {
    flex-direction: column;
    width: 228px;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    padding-top: 24px;
    padding-left: 30px;
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
      content: 'Построить маршрут:';
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

    .contact-card {
      margin: 0;
    }

    &.swiper-slide-visible {
      opacity: 1;
    }
  }

  .contacts__right {
    padding-right: 100px;
  }
  .contacts-map {
    height: 666px;
  }
}

@include down('md') {
  .contacts__title {
    margin-bottom: 28px;
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

@include down('sm') {
  .contacts__right {
    padding-left: 24px;
    padding-right: 60px;
  }
  .contacts__phone {
    font-size: 32px;
  }
  .contacts__email, .contacts__address{
    font-size: 24px;
  }
}

@include down('xs') {
  .contacts__phone {
    font-size: 26px;
  }
  .contacts__email, .contacts__address{
    font-size: 18px;
  }
}

/* end contacts */
</style>
