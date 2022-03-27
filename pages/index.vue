<template>
  <div>
    <Header :view="'frontpage'"/>
    <div id="fullpage-promo" ref="fullpagePromoElem">
      <Promo>
        <template v-slot:main>
          <PromoVideo/>
        </template>
        <template v-slot:bottom>
          <ChooseItem @click="onChooseItemClick"/>
        </template>
      </Promo>

      <div v-if="activeBottleType == 'beer'" v-for="(item, index) in beerSlides" :key="index"
           class="js-section js-section-beer fp-auto-height" ref="beerSections">
        <div
          :class="['promo-slide promo-slide--beer', {'promo-slide-first js-promo-slide-first': index === 0}, `promo-slide--beer-${index+1}`]">
          <div class="promo-slide__content" :class="{left: item.position === 'left'}">
            <div class="anim-bottle" id="anim-beer-container" v-if="item.hasBg">
              <div class="anim-bottle__inner" id="anim-beer-inner-container">
                <canvas id="anim-beer" class="anim-bottle-canvas" width="1600" height="900"></canvas>
              </div>
            </div>
            <div class="promo-slide__mobile-img"><img :src="item.mobileImgSrc" alt="ПЭТ"></div>
            <div class="promo-slide__content-inner" v-bind:data-num="contentDigit(index)">
              <div class="promo-slide__title"
                   :class="{big: item.titleBig, 'promo-slide__title--small': item.titleSmall}">{{ item.title }}
              </div>
              <div class="promo-slide__desc">{{ item.desc }}</div>
              <div class="promo-slide__items" v-if="item.list">
                <ul>
                  <li v-for="(i, index) in item.list" :key="index">{{ i }}</li>
                </ul>
              </div>
              <a v-if="item.buttonTitle" :href="item.buttonHref" class="promo-slide__button"><span
                class="promo-slide__button-text">Консультация специалиста</span></a>
              <button class="promo-slide__go-down" v-if="index === 0" @click.prevent="moveSectionDown()">
                <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.4 11.8A.5.5 0 0 1 1 11l6.7 5.2a.5.5 0 1 1-.6.8L.4 11.8Z" fill="#1B2AC9"/>
                  <path d="M14.1 10.9a.5.5 0 1 1 .6.8L8 16.9a.5.5 0 0 1-.6-.7l6.7-5.3Z" fill="#1B2AC9"/>
                  <path d="M7 .5a.5.5 0 0 1 1 0v16a.5.5 0 0 1-1 0V.5Z" fill="#1B2AC9"/>
                </svg>
              </button>
            </div>
          </div>

          <button @click.prevent="onPromoTriggerClick" class="promo-slide-trigger js-promo-slideshow-change-trigger"
                  id="promo-trigger-beer"
                  data-bottle-type="water" v-if="index === 0">
            <img src="~/assets/img/water-i.svg" alt="icon">
            <span>Решение для воды</span>
          </button>
          <img v-if="index === 0" src="~/assets/img/big_bg.png" alt="bg" class="promo-slide__bg" aria-hidden="true">
        </div>
      </div>
      <div v-if="activeBottleType == 'water'" v-for="(item, index) in waterSlides" :key="index"
           class="js-section js-section-water fp-auto-height" ref="waterSections">
        <div
          :class="['promo-slide promo-slide--water', {'promo-slide-first js-promo-slide-first': index === 0}, `promo-slide--water-${index+1}`]">
          <div class="promo-slide__content" :class="{left: item.position === 'left'}">
            <div class="anim-bottle" id="anim-water-container" v-if="item.hasBg">
              <div class="anim-bottle__inner" id="anim-water-inner-container">
                <canvas id="anim-water" class="anim-bottle-canvas" width="960" height="900"></canvas>
              </div>
            </div>
            <div class="promo-slide__mobile-img"><img :src="item.mobileImgSrc" alt="ПЭТ"></div>
            <div class="promo-slide__content-inner" v-bind:data-num="contentDigit(index)">

              <div class="promo-slide__title"
                   :class="{big: item.titleBig, 'promo-slide__title--small': item.titleSmall}">{{ item.title }}
              </div>
              <div class="promo-slide__desc">{{ item.desc }}</div>
              <div class="promo-slide__items" v-if="item.list">
                <ul>
                  <li v-for="(i, index) in item.list" :key="index">{{ i }}</li>
                </ul>
              </div>
              <a v-if="item.buttonTitle" :href="item.buttonHref" class="promo-slide__button"><span
                class="promo-slide__button-text">Консультация специалиста</span></a>
              <button class="promo-slide__go-down" v-if="index === 0" @click.prevent="moveSectionDown()">
                <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.4 11.8A.5.5 0 0 1 1 11l6.7 5.2a.5.5 0 1 1-.6.8L.4 11.8Z" fill="#1B2AC9"/>
                  <path d="M14.1 10.9a.5.5 0 1 1 .6.8L8 16.9a.5.5 0 0 1-.6-.7l6.7-5.3Z" fill="#1B2AC9"/>
                  <path d="M7 .5a.5.5 0 0 1 1 0v16a.5.5 0 0 1-1 0V.5Z" fill="#1B2AC9"/>
                </svg>
              </button>
            </div>
          </div>
          <button @click.prevent="onPromoTriggerClick" class="promo-slide-trigger js-promo-slideshow-change-trigger"
                  id="promo-trigger-water"
                  data-bottle-type="beer" v-if="index === 0">
            <svg width="69" height="144" viewBox="0 0 69 144" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M34.8 2c3.5 0 8.5.7 8.7 1.7.2.9-.7 1.3-1 2.2-.4 1.4.2 2.3-.3 3.7-.3.8-1.1 1.1-1.2 2 0 .9 0 1.5.8 2 .7.6 13.2 4.8 18.4 11.4a25 25 0 0 1 6.5 16v74.7c0 3.4-1.2 6.2-4.8 10.5-3.5 4.4-5 4-6.5 6.2-1.5 2-5.1 8.5-8.3 8.7-3.2.2-8.9-4-11.5-3.6-2.6.4-5.8 4.8-10 4.5-4-.4-6.3-5.4-6.3-5.4s-3.8.1-5.5-1.2c-1.7-1.3-1.7-3.5-3.5-4.8-1.7-1.3-8.3-8-8.3-15V41.2c0-5.9 3-13.7 10-19 7-5.2 14.4-8 15.9-8.4 1.5-.4 1.1-1.2 1.1-2 0-1-.8-1.3-1.1-2.1-.6-1.6-.8-4.3-.8-4.3s0-1-.7-1.6c-.8-.6 5-1.7 8.4-1.7Z"
                stroke="url(#a2)" stroke-width="4" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M33.4 61v1c.2.9.3 1.9.2 2.6v.2H33c-1.5.2-2.9.5-4 1-.9.5-1.4.8-2.1 1.5-.7.6-1 1-1.4 1.6a11 11 0 0 0-1.8 4.7v.2h.3a17.2 17.2 0 0 0 6.1-1.3l.2.2a9.1 9.1 0 0 0 3.6 3l.3.2.2-.1 1.7-1a11 11 0 0 0 2.1-2.3l.4.2c1 .4 1.7.6 3 .8.8.2 1.8.3 2.5.3h.6v-.2a10.7 10.7 0 0 0-2.3-5.4c-.4-.5-1.5-1.4-2-1.8a10.5 10.5 0 0 0-4.9-1.5v-.3c0-1.2 0-2.3-.4-3.3-.2-.4-.4-.6-.8-.7-.4 0-.8.2-1 .5ZM25 76a5.6 5.6 0 0 0 .2 5.4l.3.3h.2a6 6 0 0 0 5-3.2l.6-1.7.1-.4-.2-.2-1-.8-.7-.7-.5.1a20.6 20.6 0 0 1-3.9.8l-.2.4Zm7.9 1.8a8.9 8.9 0 0 1-1.7 3v.6c.3 1.2 1 2.3 2 3l1 .7 1-.7c1-.7 1.7-1.7 2-3v-.5l-.3-.5a8.6 8.6 0 0 1-1.5-3 23.5 23.5 0 0 0-1.2.4l-.6-.2-.6-.2-.1.4Zm-6 6a5.7 5.7 0 0 0 2 4.5h.4A6.9 6.9 0 0 0 32 86l.2-.2-.7-.7-1-1a7.1 7.1 0 0 1-1-2l-.3.1a8.2 8.2 0 0 1-2.4 1v.4Zm10.2-7 .6 1.6c.4.7.6 1 1.3 1.7l1 .8c.7.4 1.3.6 2 .7h1l.3-.4c1-1.6 1-3.4.1-5.3l-.1-.3-.7-.1c-1-.1-2.6-.4-3.4-.7l-.3-.1-.7.7-1 .8-.2.2.1.4ZM33.5 87c-.3.5-.8 1-1.4 1.5l-.6.5.1.4c.5 1 1.4 2 2.4 2.5h.4c1-.5 1.9-1.5 2.4-2.5.1-.3.1-.4 0-.4l-.5-.5c-.7-.5-1-1-1.6-1.8H34c-.2 0-.2 0-.5.3Zm5.1-4.5c-.1.5-.4 1-.7 1.5l-1 1-.7.8.1.2a6.9 6.9 0 0 0 2.8 2c.2.2.3.2.4 0 .4-.2 1-.9 1.3-1.5a7 7 0 0 0 .7-2 5 5 0 0 0 0-1.3l-.3-.2a8.4 8.4 0 0 1-2.4-1s0 .3-.2.5Z"
                    fill="url(#b2)"/>
              <defs>
                <linearGradient id="a2" x1="67.7" y1="99.6" x2=".3" y2="98.6" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#1B2AC9" offset="0"/>
                  <stop offset="1" stop-color="#0073F0"/>
                </linearGradient>
                <linearGradient id="b2" x1="45.9" y1="86.2" x2="21.1" y2="66" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#1B2AC9" offset="0"/>
                  <stop offset="1" stop-color="#0073F0"/>
                </linearGradient>
              </defs>
            </svg>
            <span>Решение для пива</span>
          </button>
          <img v-if="index === 0" src="~/assets/img/big_bg.png" alt="bg" class="promo-slide__bg" aria-hidden="true">
        </div>
      </div>
      <!-- START normal-scroll-section -->

      <div class="js-section js-section-normal-scroll after-slides-section">
        <div class="container">
          <h2 class="block__title">
            <span>Группа товаров</span> для пивоварен и баров:
          </h2>
        </div>
        <Slider :items="productsGroup" v-if="width > 790"/>
        <GridMobile :items="productsGroup" :width="width" v-else/>
        <div class="test" v-if="width > 992">
          <SliderSolutions view="frontpage" ref="sliderSolutions"/>
        </div>
        <template v-else>
          <div class="container">
            <h2 class="block__title"><span>Решения</span> для других напитков</h2>
          </div>
          <SolutionMobile/>
        </template>
      </div>
      <!-- END normal-scroll-section -->

      <div class="promo-concepts-before-wave" aria-hidden="true">
        <img src="~assets/img/wave.svg" alt="wave">
      </div>
      <PromoConcept :slides="promoConceptsSlides" v-for="(_, index) in promoConceptsSlides" :key="'concepts' + index"
                    :index="index" ref="promoConcepts"/>
      <div class="promo-concepts-after-wave" aria-hidden="true">
        <img src="~assets/img/wave.svg" alt="wave">
      </div>
      <div class="js-section js-section-normal-scroll" data-offset-y="70">
        <TeamSlider :pin-section="true"/>
        <PartnersSlider/>
        <ContactsSection :staff="staff" />
        <Feedback />
        <Footer/>
      </div>
    </div>
  </div>
</template>
<script>
import Promo from "~/components/promo/Promo";
import PromoVideo from "~/components/promo/PromoVideo";
import ChooseItem from "~/components/promo/ChooseItem";
import TeamSlider from "~/components/slider/TeamSlider";
import PartnersSlider from "~/components/slider/PartnersSlider";
import ContactsSection from "~/components/ContactsSection";
import Feedback from "~/components/Feedback";

export default {
  components: {Feedback, ContactsSection, PartnersSlider, TeamSlider, ChooseItem, PromoVideo, Promo},
  layout: 'fullscreen',
  data() {
    return {
      activeBottleType: 'water',
      width: 0,
      activeSectionIndex: 0,
      beerSlides: [{
        hasCanvas: true,
        title: 'Пиво',
        titleBig: true,
        desc: 'Замена металлических кег на ПЭТ',
        position: 'right',
        hasBg: true,
        mobileImgSrc: require('~/assets/img/promo-mobile-first.jpg'),
      },
        {
          hasCanvas: false,
          title: 'Эстетика упаковки',
          titleBig: false,
          position: 'right',
          hasBg: false,
          list: ['Низкая теплопроводность', 'Гарантия герметичности фитинга', 'Стерильная среда внутри кега'],
          mobileImgSrc: require('~/assets/img/promo-mobile1.jpg'),
        },
        {
          hasCanvas: false,
          title: 'Выгодная логистика',
          titleBig: false,
          position: 'left',
          hasBg: false,
          mobileImgSrc: require('~/assets/img/promo-mobile2.jpg'),
          list: ['Отсутствует необходимость возврата тары', 'ПЭТ-КЕГ в 16 раз легче металлической', 'Фура вмещает на 25% больше']
        },
        {
          hasCanvas: true,
          title: 'Сокращение издержек производства',
          titleBig: false,
          position: 'right',
          hasBg: false,
          mobileImgSrc: require('~/assets/img/promo-mobile3.jpg'),
          list: ['Разморозка денежных средств заложеных в тару', 'Сокращение площади хранения КЕГ', 'Отсутствие технического обслуживания и мойки', 'Сокращение фонда оплаты труда']
        },
        {
          hasCanvas: true,
          title: 'Оптимизируйте бизнес и расширьте географию сбыта!',
          titleBig: false,
          titleSmall: true,
          position: 'left',
          mobileImgSrc: require('~/assets/img/promo-mobile4.jpg'),
          hasBg: true,
          buttonTitle: 'Консультация специалиста',
          buttonHref: '#hello',
        },
      ],
      waterSlides: [{
        hasCanvas: true,
        title: 'Вода',
        titleBig: true,
        desc: 'Замена металлических кег на ПЭТ',
        position: 'right',
        hasBg: true,
        mobileImgSrc: require('~/assets/img/promo-mobile-first.jpg'),
      },
        {
          hasCanvas: false,
          title: 'Эстетика упаковки',
          titleBig: false,
          position: 'right',
          hasBg: false,
          list: ['Низкая теплопроводность', 'Гарантия герметичности фитинга', 'Стерильная среда внутри кега'],
          mobileImgSrc: require('~/assets/img/promo-mobile1.jpg'),
        },
        {
          hasCanvas: false,
          title: 'Выгодная логистика',
          titleBig: false,
          position: 'left',
          hasBg: false,
          mobileImgSrc: require('~/assets/img/promo-mobile2.jpg'),
          list: ['Отсутствует необходимость возврата тары', 'ПЭТ-КЕГ в 16 раз легче металлической', 'Фура вмещает на 25% больше']
        },
        {
          hasCanvas: true,
          title: 'Сокращение издержек производства',
          titleBig: false,
          position: 'right',
          hasBg: false,
          mobileImgSrc: require('~/assets/img/promo-mobile3.jpg'),
          list: ['Разморозка денежных средств заложеных в тару', 'Сокращение площади хранения КЕГ', 'Отсутствие технического обслуживания и мойки', 'Сокращение фонда оплаты труда']
        },
        {
          hasCanvas: true,
          title: 'Оптимизируйте бизнес и расширьте географию сбыта!',
          titleBig: false,
          titleSmall: true,
          position: 'left',
          mobileImgSrc: require('~/assets/img/promo-mobile4.jpg'),
          hasBg: true,
          buttonTitle: 'Консультация специалиста',
          buttonHref: '#hello',
        },
      ],
      promoConceptsSlides: [
        {
          img: require('~/assets/img/promo-concept1.jpg'),
          title: 'Качество',
          desc: 'Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.',
          href: '#hi',
        },
        {
          img: require('~/assets/img/promo-concept2.jpg'),
          title: 'Безопасность',
          desc: 'Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.',
          href: '#hi',
        },
        {
          img: require('~/assets/img/promo-concept3.jpg'),
          title: 'Доверие',
          desc: 'Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.',
          href: '#hi',
        },
      ],
      productsGroup: this.$store.state.productsGroup,
      staff: [
        {
          id: 1,
          person: "Владимир Константинов",
          department: "Продажи",
          icon: "sales",
          phone: "Доб.123",
          photo: "staff.jpg",
        },
        {
          id: 2,
          person: "Владимир Константинов",
          department: "Закупки",
          icon: "buy",
          phone: "Доб.123",
          photo: "",
        },
        {
          id: 3,
          person: "Владимир Константинов",
          department: "Секретарь",
          icon: "secretary",
          phone: "Доб.123",
          photo: "staff2.jpg",
        },
        {
          id: 4,
          person: "Владимир Константинов",
          department: "Дирекция",
          icon: "chief",
          phone: "Доб.123",
          photo: "staff3.jpg",
        },
        {
          id: 1,
          person: "Владимир Константинов",
          department: "Доставка",
          icon: "delivery",
          phone: "Доб.123",
          photo: "staff4.jpg",
        },
        {
          id: 1,
          person: "Владимир Константинов",
          department: "Качество",
          icon: "shield",
          phone: "Доб.123",
          photo: "staff5.jpg",
        },
      ]
    };
  },
  watch: {
    activeBottleType() {
      console.log('changed!');
    },
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
    moveSectionDown() {
      this.fpPromo.moveSectionDown();
    },
    onChooseItemClick(clickedBottleType) {
      if (this.activeBottleType === clickedBottleType) {
        this.fpPromo.moveSectionDown();
        return;
      }

      this.activeBottleType = clickedBottleType;

      if (this.isDesktop) {
        this.destroyFullpagePromo();
        var self = this;
        this.$nextTick(() => {
          self.initSlideShow(clickedBottleType);
          self.fpPromo.moveSectionDown();
        });
      }
    },
    onPromoTriggerClick() {
      var self = this;
      var newBottleType = this.activeBottleType === 'beer' ? 'water' : 'beer';
      this.sectionTimeline = null;
      this.$refs.fullpagePromoElem.classList.add('inactive');
      self.destroyFullpagePromo();
      setTimeout(function () {
        self.activeBottleType = newBottleType;
        self.$nextTick(() => {
          self.initSlideShow(newBottleType);
          self.fpPromo.silentMoveTo(2);
          self.$refs.fullpagePromoElem.classList.remove('inactive');
        });
      }, 701);
    },
    contentDigit(index) {
      var slidesLength = this.activeBottleType === 'beer' ? this.beerSlides.length - 1 : [];
      if (index === 0 || index === this.beerSlides.length - 1) {
        return false;
      }
      return index;
    },
    init() {
      var self = this;
      // @TODO: refactor this nightmare

      var SCREEN_UP_LG = '(min-width: 992px)';
      var SCREEN_DOWN_LG = '(max-width: 992px)';
      var SCREEN_UP_MD = '(min-width: 768px)';
      var SCREEN_DOWN_MD = '(max-width: 768px)';
      this.isDesktop = this.$mq === 'xl' || this.$mq === 'xl2';
      this.isTablet = this.$mq === 'lg' || this.$mq === 'md';

      // @TODO make this through mq
      var isTablet = window.matchMedia(SCREEN_DOWN_LG).matches && window.matchMedia(SCREEN_UP_MD).matches;
      var isMobile = window.matchMedia(SCREEN_DOWN_MD).matches;
      var promoSlideshowTriggerLocked = false;
      var scrollLocked = false;

      this.scrollEventRegistered = false;

      if (this.isDesktop) {
        this.$nextTick(() => {
          self.initSlideShow(self.activeBottleType);
          self.initSliderSolutionsTimeline();
          self.initPromoConceptsContentTimeline();
          self.initPromoConceptsTimeline();
        });
      }
    },
    initFullpagePromo() {
      var self = this;

      this.fpPromo = new this.$fullpage('#fullpage-promo', {
        //options here
        sectionSelector: '.js-section',
        scrollBar: true,
        fitToSection: false,
        verticalCentered: false,
        scrollingSpeed: 1300,

        onLeave: function (section, next, direction) {
          // @TODO: optimize animations
          var targets = next.item.querySelectorAll('.promo-slide__title, .promo-slide__desc, .promo-slide__items li');
          var button = next.item.querySelector('.promo-slide__button');
          var goDownButton = next.item.querySelector('.promo-slide__go-down');

          var tl = self.$gsap.timeline();

          if (section.index === 1 && direction === 'up') {
            self.$gsap.timeline()
              .set('.header', {display: 'block'})
              .to('.header', {alpha: 1});
          }

          // Появление первого слайда
          if (section.isFirst && direction === 'down') {
            self.$gsap.timeline()
              .to('.header', {alpha: 0})
              .set('.header', {display: 'none'});

            tl.fromTo(next.item.querySelector('.anim-bottle-canvas'), {
              alpha: 0,
              x: 30,
            }, {alpha: 1, x: 0, delay: 0.9, stagger: 0.1});

            tl.fromTo(next.item.querySelector('.promo-slide-trigger'), {
              alpha: 0,
            }, {alpha: 1, delay: 0.6});
          }

          if (targets && targets.length > 0) {
            tl.fromTo(targets, {
              alpha: 0,
              x: 30,
            }, {alpha: 1, x: 0, delay: 0.7, stagger: 0.1}, '0');
            if (button) {
              tl.fromTo(button, {
                alpha: 0,
                x: 30,
              }, {alpha: 1, x: 0}, '0.7');
            }
          }

          if (goDownButton) {
            tl.fromTo(goDownButton, {
              alpha: 0,
            }, {alpha: 1}, '1');
          }

          var doesNotContainNormalClass = !next.item.classList.contains('js-section-normal-scroll')

          if (doesNotContainNormalClass) {
            self.fpPromo.setAutoScrolling(true);
            self.fpPromo.setKeyboardScrolling(false);
          }

          var nextSectionIsNormal = next.item.classList.contains('js-section-normal-scroll');

          if (nextSectionIsNormal) {
            self.activeNormalSection = next.item;
            self.destroyFullpagePromo();
            var offsetY = direction === 'up' ? self.activeNormalSection.clientHeight - window.innerHeight : 0;

            self.$gsap.to(window, {
              duration: 1.3,
              ease: "power2.inOut",
              scrollTo: {
                y: self.activeNormalSection,
                offsetY: -offsetY
              },
              onComplete: function () {
                setTimeout(function () {
                  document.addEventListener('scroll', self.onNormalSectionScroll);
                }, 200);
              }
            });
            return false;
          }

          return true;
        },
        afterLoad: function (anchorLink, section) {
          if (section.item && section.item.classList.contains('js-section-normal-scroll')) {
            console.log('normal section started!');
            self.destroyFullpagePromo();
            self.activeNormalSection = section.item;
            if (!self.scrollEventRegistered) {
              document.addEventListener('scroll', self.onNormalSectionScroll);
              self.scrollEventRegistered = true;
            }
          } else {
            document.removeEventListener('scroll', self.onNormalSectionScroll);
            self.scrollEventRegistered = false;
          }
        }
      });
    },
    initSlideShow(bottleType) {
      var canvas = document.getElementById("anim-" + bottleType);
      var canvasContainer = document.getElementById("anim-" + bottleType + "-inner-container");
      var context = canvas.getContext("2d");
      var sections = this.activeBottleType === 'beer' ? this.$refs.beerSections : this.$refs.waterSections;
      var endTriggerElem = sections[sections.length - 1];

      var img = {
        width: bottleType === 'beer' ? 1600 : 960,
        height: 900,
      }

      var wrh = img.width / img.height;
      var newWidth = canvas.width;
      var newHeight = newWidth / wrh;
      if (newHeight > canvas.height) {
        newHeight = canvas.height;
        newWidth = newHeight * wrh;
      }

      var frameCount = bottleType === 'beer' ? 73 : 88;

      var images = [];
      var bottle = {
        frame: 0
      };

      if (!this.fpPromo) {
        this.initFullpagePromo();
      }

      if (this.bottleTimeline) {
        this.bottleTimeline.scrollTrigger.kill();
        this.bottleTimeline.kill();
      }

      this.bottleTimeline = this.$gsap.timeline(
        {
          ease: "none",
          scrollTrigger: {
            pin: true,
            trigger: '#anim-' + bottleType + "-container",
            spacer: false,
            pinSpacing: false,
            pinType: "fixed",
            pinnedContainer: null,
            start: 'top',
            endTrigger: endTriggerElem,
            end: 'bottom bottom',
            scrub: 0,
            ease: "none",
          },
        });

      this.bottleTimeline.to(bottle, {
        frame: frameCount - 1,
        ease: "none",
        snap: "frame",
        duration: 1,
        onUpdate: renderBottleSprite // use animation onUpdate instead of scrollTrigger's onUpdate
      });

      this.bottleTimeline.to(canvasContainer, {
        x: '100%',
        duration: '0.2',
        ease: "ease-in-out",
      }, '0.320');

      if (this.activeBottleType === 'water') {
        this.bottleTimeline.to(canvasContainer, {
          x: '-10%',
          duration: '0.2',
          ease: "ease-in-out",
        }, '0.100');
      }

      this.bottleTimeline.to(canvasContainer, {
        x: '-20%',
        duration: '0.20',
        ease: "ease-in-out",
      }, '0.564');

      this.bottleTimeline.to(canvasContainer, {
        x: '80%',
        duration: '0.20',
        ease: "ease-in-out",
      }, '0.838');

      if (this.triggerTl) {
        this.triggerTl.scrollTrigger.kill();
        this.triggerTl.kill();
      }

      var sectionHeight = sections[0].clientHeight;
      var triggerHeight = document.getElementById("promo-trigger-" + bottleType).clientHeight;

      this.triggerTl = this.$gsap.timeline({
        scrollTrigger: {
          trigger: '#anim-' + bottleType + "-container",
          spacer: true,
          pinSpacing: true,
          pin: "#promo-trigger-" + bottleType,
          start: 'top',
          endTrigger: endTriggerElem,
          end: '+=' + (sectionHeight * (sections.length - 2) + triggerHeight) + 'px',
          scrub: 0,
          ease: "none",
        },
      });

      for (var i = 0; i < frameCount; i++) {
        var img = new Image();
        img.src = renderBottleFrame(i, bottleType);
        images.push(img);
      }

      images[0].onload = renderBottleSprite;

      function renderBottleFrame(index, bottleType) {
        if (bottleType === 'beer') {
          return require(`@/assets/img/${bottleType}/${(index + 1)}.png`);
        } else {
          return require(`@/assets/img/${bottleType}-new/water (${(index + 1)}).png`);
        }
      }

      function renderBottleSprite() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        if (this.activeBottleType == 'beer') {
          context.drawImage(images[bottle.frame], 0, 0, newWidth, newHeight);
        } else {
          if (images[bottle.frame]) {
            context.drawImage(images[bottle.frame], 0, 0, newWidth, newHeight);
          }
        }
      }
    },
    destroyFullpagePromo() {
      var scrollY = window.scrollY;
      if (this.fpPromo) {
        this.fpPromo.setAutoScrolling(false);
        this.fpPromo.setKeyboardScrolling(false);
        this.fpPromo.setFitToSection(false);
        this.fpPromo.destroy('all');
        window.scrollTo(0, scrollY);
        this.fpPromo = undefined;
      }
    },
    initSliderSolutionsTimeline() {
      var sliderSolutionsTimeline = this.$gsap.timeline();

      sliderSolutionsTimeline.to(this.$refs.sliderSolutions.$el, {
        scrollTrigger: {
          trigger: this.$refs.sliderSolutions.$el,
          end: '+=200%',
          start: 'bottom bottom',
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
      });

    },
    initPromoConceptsContentTimeline() {
      var promoConceptsContentTimeline = this.$gsap.timeline();
      var promoConceptsSections = this.$refs.promoConcepts;
      promoConceptsContentTimeline.to(promoConceptsSections[0].$el, {
        scrollTrigger: {
          trigger: promoConceptsSections[0].$el.querySelector('.promo-concepts__inner'),
          end: '+=' + promoConceptsSections.length.toString() + '00%',
          start: 'top',
          pinSpacing: false,
          pin: true,
          scrub: true,
        },
      });
    },
    initPromoConceptsTimeline() {
      var promoConceptsSections = this.$refs.promoConcepts;
      var self = this;
      promoConceptsSections.forEach(function (item, index) {
        var content = promoConceptsSections[0].$el.querySelectorAll('.promo-concepts__item')[index];
        var image = promoConceptsSections[0].$el.querySelectorAll('.promo-concepts__image')[index];
        var logo = promoConceptsSections[0].$el.querySelector('.promo-concepts__logo');
        var sectionTitle = promoConceptsSections[0].$el.querySelector('.promo-concepts__section-title');
        var title = promoConceptsSections[0].$el.querySelectorAll('.promo-concepts__title')[index];
        var desc = promoConceptsSections[0].$el.querySelectorAll('.promo-concepts__desc')[index];
        var descParagraphs = desc.querySelectorAll('p');
        var link = promoConceptsSections[0].$el.querySelectorAll('.promo-concepts__link')[index];

        var splitTitle = new self.$SplitText(title, {type: 'lines'});

        var splitDesc = new self.$SplitText(descParagraphs, {type: 'lines'});
        new self.$SplitText(descParagraphs, {type: 'lines'});

        if (index === 0) {
          var container = item.$el.querySelector('.container');
          var logoTimeline = self.$gsap.timeline({
            scrollTrigger: {
              scrub: false,
              trigger: item.$el,
              start: '45% center',
              end: '51% center',
              onEnter: function () {
                logoTimeline.timeScale(1);
              },
              onLeaveBack: function () {
                logoTimeline.timeScale(3).reverse();
              }
            },
          });

          logoTimeline.fromTo(logo, {alpha: 0}, {alpha: 1}, '0');
          logoTimeline.fromTo(image, {alpha: 0, duration: 1}, {alpha: 1}, '0');
          logoTimeline.fromTo(sectionTitle, {alpha: 0}, {alpha: 1, y: 0}, '0.3');
        }

        var tl = self.$gsap.timeline({
          scrollTrigger: {
            trigger: item.$el,
            start: '45% center',
            end: '51% center',
            scrub: false,
            toggleActions: "restart none restart none",
            toggleClass: {targets: [content], className: "is-active"},
          }
        });

        tl.fromTo(splitTitle.lines, {
          y: '100%',
        }, {ease: "power2.out", y: 0, duration: 1});

        tl.fromTo(splitDesc.lines, {
          y: '150%',
        }, {ease: "power2.out", y: 0, duration: 0.7, stagger: 0.05}, '0.2');

        tl.fromTo(link, {
          alpha: 0
        }, {alpha: 1, duration: 1}, '-=0.4');

        if (index > 0) {
          var imagesTimeline = self.$gsap.timeline({
            scrollTrigger: {
              trigger: item.$el,
              end: '+=100%',
              scrub: 0.5,
            }
          });

          var prevImage = promoConceptsSections[0].$el.querySelectorAll('.promo-concepts__image')[index];

          imagesTimeline.fromTo(image, {y: '100%'}, {y: 0}, '0');
        }

        var isLast = index === promoConceptsSections.length - 1;
        if (!isLast) {
          var imagesParallaxTimeline = self.$gsap.timeline({
            scrollTrigger: {
              trigger: item.$el,
              start: 'bottom bottom',
              end: '+=100%',
              scrub: 0,
              immediateRender: false,
            }
          });
          imagesParallaxTimeline.to(image, {y: '-30%', immediateRender: false}, '0');
        }
      });
    },
    onNormalSectionScroll(e) {
      var self = this;
      if (this.activeNormalSection) {
        var offsetTop = this.activeNormalSection.offsetTop;

        if (offsetTop > window.scrollY) {

          document.removeEventListener('scroll', this.onNormalSectionScroll);
          var prevSection = this.activeNormalSection.previousElementSibling;

          // если предыдущий элемент не секция - пропускаем его и берем следующий
          // это нужно для обхода волны
          if (!prevSection.classList.contains('js-section')) {
            prevSection = prevSection.previousElementSibling;
          }

          self.$gsap.to(window, {
            duration: 1.3, ease: "power2.inOut", scrollTo: prevSection, onComplete: function () {
              prevSection.classList.add('active');
              self.activeNormalSection.classList.remove('active');
              self.initFullpagePromo();
            }
          });
        }

        // Если мы скроллим ниже секции с нормальным скроллом, то скролл анимируем вниз
        if (offsetTop + this.activeNormalSection.clientHeight < (window.scrollY + window.innerHeight)) {
          e.preventDefault();
          var promoConceptsSection = document.querySelector('.promo-concepts-section');
          document.removeEventListener('scroll', self.onNormalSectionScroll);

          self.$gsap.to(window, {
            duration: 1, ease: 'power2.inOut', scrollTo: promoConceptsSection, onComplete: function () {
              self.activeNormalSection.classList.remove('active');
              promoConceptsSection.classList.add('active');
              self.initFullpagePromo();
            }
          });

          document.removeEventListener('scroll', this.onNormalSectionScroll);
          var scrollLocked = true;
        }
      }
    }
  },

  beforeDestroy() {
    if (this.fpPromo) {
      this.destroyFullpagePromo();
    }
    if (this.bottleTimeline) {
      this.bottleTimeline.scrollTrigger.kill();
      this.bottleTimeline.kill();
    }

    if (this.triggerTl) {
      this.triggerTl.scrollTrigger.kill();
      this.triggerTl.kill();
    }
    return true;
  },
  mounted() {
    window.addEventListener("resize", this.updateWidth);
    this.updateWidth();
    this.init();
  },
};
</script>
<style lang="scss">
#fullpage-promo {
  overflow-x: hidden;
}

/* start promo-slides */
#fullpage-promo {
  height: auto !important;
  overflow: hidden;
  transition: opacity 0.3s !important;
  opacity: 1;

  > .js-section-normal-scroll {
    height: auto !important;
  }

  &.inactive {
    opacity: 0;
  }
}

.promo-slides-container {
  overflow: hidden;
}

.promo-slide .container {
  height: 100vh;
  display: flex;
}

.promo-slides {
  display: none;

  &.active {
    display: block;
  }
}

.anim-bottle {
  position: absolute;
  left: 0;
  display: block;
  height: 100%;
  top: 0;
  width: 50%;
  max-width: 1260px;
  margin: 0 auto;
  pointer-events: none;
}

.anim-bottle canvas {
  display: block;
  width: 150%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%) !important;
}

.promo-slide--water .anim-bottle canvas {
  width: 100%;
}

.anim-bottle__inner {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.anim-bottle--img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  transition: 0.3s top linear, 1.5s left ease;
  z-index: 999;
}

.promo-slide-trigger {
  position: absolute;
  right: 0;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  border: 1px solid #dedee3;
  background: #fff;
  z-index: 9999;
  cursor: pointer;
  width: 290px;
  box-sizing: border-box;
  @include tr((color, border-color));

  svg {
    width: 40px;
    height: auto;
    margin-right: 30px;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    border-color: $primary;
    color: $primary;
  }
}

.promo-slide-trigger img {
  margin-right: 30px;
  width: 54px;
  height: 90px;
  object-fit: contain;
  object-position: center;
}

.promo-slide {
  position: relative;
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: contain;
}

.hidden {
  display: none !important;
}

.promo-slide__content {
  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 1260px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.promo-slide--beer-1,
.promo-slide--water-1 {
  z-index: 2;
}

.promo-slide__content.left {
  justify-content: flex-start;
}

.promo-slide__content-inner {
  width: 60%;
  flex-basis: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  &:before {
    content: attr(data-num);
    position: absolute;
    font-size: 1100px;
    line-height: 0.5;
    pointer-events: none;
    font-weight: 800;
    opacity: 0;
    z-index: -1;
    transition: opacity 0.7s 0.4s;
    top: 45%;
    transform: translateY(-50%);
    left: 20%;
    color: #f6f6f6;
  }
}

.promo-slide__content.left .promo-slide__content-inner:before {
  left: 0;
}

.promo-slide__mobile-img {
  display: none;

  img {
    width: 100%;
  }

  margin-bottom: 70px;
}

.promo-slide__button {
  height: 71px;
  padding-left: 20px;
  padding-right: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  position: relative;
  color: white;
  width: auto;
  overflow: hidden;
  background-color: $primary;
  max-width: 320px;
  margin-top: 50px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: $linear-gradient-primary;
    @include tr((opacity));
  }

  &-text {
    position: relative;
    z-index: 1;
  }

  &:hover {
    text-decoration: none;
    color: white;

    &::before {
      opacity: 0;
    }
  }
}

.js-section.active .promo-slide__content-inner:before {
  opacity: 1;
}

.js-section.active .promo-slide__bg {
  opacity: 1;
}

.js-promo-slide-last .promo-slide__bg {
  transform: translateY(-90%);
  left: 0;
}

.promo-slide__title {
  font-weight: 700;
  font-size: 56px;
  line-height: 1.2;
  color: #1b2ac9;
  position: relative;
  z-index: 1;

  &--small {
    font-size: 48px;
    max-width: 540px;
  }
}

.promo-slide__title.big {
  font-size: 96px;
}

.promo-slide__desc {
  margin-left: 5px;
  margin-top: 20px;
  font-size: 30px;
  line-height: 1.5;
  position: relative;
  z-index: 1;
}

.promo-slide__items {
  margin-top: 30px;
}

.promo-slide__items ul {
  margin: 0;
  padding: 0;
  font-size: 24px;
  position: relative;
  z-index: 1;
}

.promo-slide__items ul li {
  position: relative;
  padding-left: 30px;
  margin-bottom: 10px;
  list-style: none;
  line-height: 1.45;

  &:last-of-type {
    margin-bottom: 0;
  }
}

.promo-slide__items ul li::before {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  top: calc(50% - 6px);
  left: 0;
  background: linear-gradient(271.8deg, #1b2ac9 -0.56%, #0073f0 100.44%);
}

.promo-slide__bg {
  position: absolute;
  left: -200px;
  top: 50%;
  transform: translateY(-50%);
  z-index: -1;
  transition: opacity 0.7s 0.3s;
  max-width: 1811px;
}

.promo-slide__go-down {
  background-color: transparent;
  width: 47px;
  height: 47px;
  @include tr((background-color));
  border-radius: 50%;
  margin-top: 50px;
  border: 1px solid $primary;
  display: flex;
  justify-content: center;
  align-items: center;

  svg path {
    @include tr((fill));
  }

  &:hover {
    background-color: $primary;

    svg path {
      fill: white;
    }
  }
}

.promo-slide--beer-1 {
  .promo-slide__content-inner {
    width: 60%;
    flex-basis: 60%;
  }
}

.promo-slide--beer-3 .promo-slide__content-inner:before,
.promo-slide--beer-4 .promo-slide__content-inner:before {
  left: -10%;
}

.block__title {
  font-weight: 900;
  font-size: 48px;
  color: $black-dark;
  margin-bottom: 70px;

  span {
    color: $primary;
  }

  @media (max-width: 860px) {
    font-size: 32px;
    margin-bottom: 50px;
  }
  @media (max-width: 550px) {
    font-size: 28px;
    margin-bottom: 40px;
  }
}

.after-slides-section {
  padding-top: 40px;
}

@include down('xl') {
  .promo-slide__title.big {
    font-size: 80px;
  }
  .promo-slide__title {
    font-size: 60px;
  }
  .promo-slide__title--small {
    font-size: 46px;
  }
  .promo-slide__content-inner:before {
    font-size: 600px;
  }
  .promo-slide__desc {
    font-size: 24px;
  }
  .promo-slide__items ul li {
    font-size: 18px;
  }
}

@media screen and (max-width: 1400px) {
  .promo-slide__bg {
    max-width: 1411px;
    left: 0;
  }
}

@include down('lg') {
  .promo-slide {
    height: auto;
    padding-bottom: 130px;

    .container {
      display: block;
      height: auto;
      padding-left: 0;
      padding-right: 0;
    }

    .anim-bottle {
      display: none;
    }
  }

  .promo-slide {
    padding-bottom: 150px;
  }

  .promo-slide--beer-1, .promo-slide--water-1 {
    padding-bottom: 100px;
  }
  .promo-slide--beer-3, .promo-slide--water-3 {
    .promo-slide__content-inner:before {
      top: 42px;
    }
  }
  .promo-slide-last {
    padding-bottom: 120px;
  }
  .promo-slide__content {
    padding: 0;
    margin: 0;
    height: auto;
    flex-direction: column;
    justify-content: flex-start;
  }
  .promo-slide__content-inner {
    width: 100%;
    flex-basis: 100%;
    padding-left: 26px;
    padding-right: 26px;

    &:before {
      font-size: 400px;
      opacity: 1;
      top: 10px;
      transform: none;
      left: auto !important;
      right: 20px;
    }
  }

  .promo-slide__title, .promo-slide__desc, .promo-slide__items {
    max-width: 384px;
  }

  .promo-slide__items ul li {
    font-size: 18px;

    &:before {
      top: 0.4em;
    }
  }

  .promo-slide__content-inner:before {
    top: -10px;
  }

  .promo-slide-last .promo-slide__title {
    font-size: 31px;
  }

  .promo-slide__mobile-img {
    width: 100%;
    display: block;
  }

  .promo-slide__mobile-img img {
    width: 100%;
  }

  .promo-slide--beer-1 .promo-slide__content-inner,
  .promo-slide--water-1 .promo-slide__content-inner {
    width: 100%;
    flex-basis: 100%;
  }

  .promo-slide--beer-1 .promo-slide__mobile-img,
  .promo-slide--water-1 .promo-slide__mobile-img {
    margin-top: 20px;
    margin-bottom: -140px;
    margin-right: -40px;
    text-align: right;

    img {
      width: auto;
    }
  }

  .promo-slide__content-inner:before {
    z-index: -1;
  }

  .promo-slide__title {
    font-size: 32px;

    &--small {
      max-width: 340px;
    }
  }
  .promo-slide__title.big {
    font-size: 48px;
  }
  .promo-slide__desc {
    font-size: 18px;
  }
  .promo-slide__go-down {
    display: none;
  }

  .promo-slide__bg {
    display: none;
  }
  .promo-slide-trigger {
    display: none;
  }
  .promo-slide__button {
    max-width: 288px;
    font-size: 18px;
    height: 51px;
    padding-bottom: 2px;
  }
}

@include down('md') {
  .promo-slide {
    padding-bottom: 85px;
  }
  .promo-slide--beer-1, .promo-slide--water-1 {
    padding-bottom: 60px;
  }

  .promo-slide--beer-1 .promo-slide__mobile-img, .promo-slide--water-1 .promo-slide__mobile-img {
    margin-right: -20px;
    margin-bottom: -100px;
    top: -26px;
    margin-top: 0;
    margin-left: auto;
  }

  .promo-slide--beer-1 .promo-slide__mobile-img img, .promo-slide--water-1 .promo-slide__mobile-img img {
    max-width: 100%;
  }

  .promo-slide__content-inner:before {
    right: 0;
    left: auto;
    z-index: -1;
    top: -60px;
    line-height: 0.7;
  }
  .promo-slide--beer-3 .promo-slide__content-inner:before, .promo-slide--water-3 .promo-slide__content-inner:before {
    top: -30px;
  }
}

@include down('sm') {
  .promo-slide .promo-slide__content-inner:before {
    top: -30px;
    right: auto;
    left: 0;
  }
}

@media screen and (max-width: 350px) {
  .promo-slide__content-inner {
    padding-left: 15px;
    padding-right: 15px;
  }
}

/* end promo-slides */
</style>
