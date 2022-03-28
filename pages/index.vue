<template>
  <div>
    <Header :view="'frontpage'"/>
    <div id="fullpage-promo" ref="fullpagePromoElem">
      <Promo>
        <template v-slot:main>
          <PromoVideo @video-change="onPromoVideoPlayClick"/>
        </template>
        <template v-slot:bottom v-if="showPromoBottom">
          <ChooseItem @click="onChooseItemClick"/>
        </template>
      </Promo>

      <PromoSlide v-if="activeBottleType === 'beer'" v-for="(item, index) in beerSlides" :key="index + 'beerSlides'"
                  :bottleType="'beer'" :desc="item.desc"
                  :list="item.list" :position="item.position" :index="index" :mobileImgSrc="item.mobileImgSrc"
                  :titleSmall="item.titleSmall" :title="item.title" :titleBig="item.titleBig"
                  :buttonTitle="item.buttonTitle"
                  :buttonHref="item.buttonHref" @promo-trigger-click="onPromoTriggerClick" :isLast="item.isLast"
                  @move-down-click="moveSectionDown" ref="beerSections"/>

      <PromoSlide v-if="activeBottleType === 'water'" v-for="(item, index) in waterSlides" :key="index + 'waterSlides'"
                  :bottleType="'water'" :desc="item.desc"
                  :list="item.list" :position="item.position" :index="index" :mobileImgSrc="item.mobileImgSrc"
                  :titleSmall="item.titleSmall" :title="item.title" :titleBig="item.titleBig"
                  :buttonTitle="item.buttonTitle"
                  :buttonHref="item.buttonHref" @promo-trigger-click="onPromoTriggerClick" :isLast="item.isLast"
                  @move-down-click="moveSectionDown" ref="waterSections"/>

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
        <ContactsSection :staff="staff"/>
        <Feedback/>
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
      showPromoBottom: true,
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
          isLast: true,
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
          isLast: true,
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
    onPromoVideoPlayClick(isToggled) {
      console.log(isToggled);
      this.showPromoBottom = !isToggled;
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
        scrollingSpeed: 1000,

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
            }, {alpha: 1, x: 0, delay: 0.8, stagger: 0.1});

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
              }, {alpha: 1, x: 0}, '0.8');
            }
          }

          if (goDownButton) {
            tl.fromTo(goDownButton, {
              alpha: 0,
            }, {alpha: 1}, '1.2');
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
              duration: 1,
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
      var endTriggerElem = sections[sections.length - 1].$el;

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

      var frameCount = bottleType === 'beer' ? 73 : 68;

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

      var sectionHeight = sections[0].$el.clientHeight;
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
      var end = '+=' + (promoConceptsSections.length - 1).toString() + '00%';
      promoConceptsContentTimeline.to(promoConceptsSections[0].$el, {
        scrollTrigger: {
          trigger: promoConceptsSections[0].$el.querySelector('.promo-concepts__inner'),
          end: end,
          start: 'top',
          pinSpacing: true,
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
            duration: 1, ease: "power2.inOut", scrollTo: prevSection, onComplete: function () {
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
      top: 20px;
    }
  }
  .promo-slide--beer-4, .promo-slide--water-4 {
    .promo-slide__content-inner:before {
      top: 40px;
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
    padding-left: 23px;
    padding-right: 23px;

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
}

@include down('sm') {
  .promo-slide__title--small {
    font-size: 26px;
    max-width: 300px;
  }
  .promo-slide .promo-slide__content-inner:before {
    top: -30px;
    right: auto;
    left: 0;
  }

  .promo-slide--beer-2, .promo-slide--water-2 {
    .promo-slide__content-inner:before {
      top: -60px;
      margin-left: -4px;
    }
  }
  .promo-slide--beer-3, .promo-slide--water-3 {
    .promo-slide__content-inner:before {
      top: -50px;
    }
  }
  .promo-slide--beer-4, .promo-slide--water-4 {
    .promo-slide__content-inner:before {
      top: 40px;
    }
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
