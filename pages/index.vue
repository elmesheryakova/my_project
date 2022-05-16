<template>
  <div>
    <Header :view="'frontpage'" :disableHeader="disableHeader" ref="header" />
    <div id="fullpage-promo" ref="fullpagePromoElem">
      <Promo>
        <template v-slot:main>
          <PromoVideo @video-change="onPromoVideoPlayClick" />
        </template>

        <template v-slot:bottom v-if="showPromoBottom">
          <ChooseItem @click="onChooseItemClick" />
        </template>
      </Promo>

      <PromoSlide
        v-if="activeBottleType === 'beer'"
        v-for="(item, index) in beerSlides"
        :key="index + 'beerSlides'"
        :bottleType="'beer'"
        :desc="item.desc"
        :list="item.list"
        :position="item.position"
        :index="index"
        :mobileImgSrc="item.mobileImgSrc"
        :titleSmall="item.titleSmall"
        :title="item.title"
        :titleBig="item.titleBig"
        :buttonTitle="item.buttonTitle"
        :buttonHref="item.buttonHref"
        @promo-trigger-click="onPromoTriggerClick"
        :isLast="item.isLast"
        @move-down-click="moveSectionDown"
        ref="beerSections"
      />

      <PromoSlide
        v-if="activeBottleType === 'water'"
        v-for="(item, index) in waterSlides"
        :key="index + 'waterSlides'"
        :bottleType="'water'"
        :desc="item.desc"
        :list="item.list"
        :position="item.position"
        :index="index"
        :mobileImgSrc="item.mobileImgSrc"
        :titleSmall="item.titleSmall"
        :title="item.title"
        :titleBig="item.titleBig"
        :buttonTitle="item.buttonTitle"
        :buttonHref="item.buttonHref"
        @promo-trigger-click="onPromoTriggerClick"
        :isLast="item.isLast"
        @move-down-click="moveSectionDown"
        ref="waterSections"
      />

      <!-- START normal-scroll-section -->

      <div class="js-section js-section-normal-scroll after-slides-section">
        <div class="container">
          <h2 class="block__title block__title--frontpage">
            <span>Группа товаров</span>
            {{
              activeBottleType === "beer"
                ? solutionBeer.group_products.header
                : solutionWater.group_products.header
            }}:
          </h2>
        </div>
        <template v-if="width > 790">
          <Slider
            :items="solutionBeer.group_products.items"
            v-if="activeBottleType === 'beer'"
          />
          <SliderWater :items="solutionWater.group_products.items" v-else />
        </template>

        <GridMobile
          :items="
            activeBottleType === 'beer'
              ? solutionBeer.group_products.items.slice(0, 6)
              : solutionWater.group_products.items.slice(0, 6)
          "
          :width="width"
          v-else
        />
        <div class="test" v-if="width > 992">
          <SliderSolutions
            view="frontpage"
            ref="sliderSolutions"
            :items="solutions.items"
          />
        </div>
        <template v-else>
          <div class="container">
            <h2 class="block__title block__title--frontpage">
              <span>Готовые решения</span> для вашего бизнеса
            </h2>
          </div>
          <SolutionMobile :items="solutions.items" view="frontpage" />
        </template>
      </div>
      <!-- END normal-scroll-section -->

      <div class="promo-concepts-before-wave" aria-hidden="true">
        <img src="~assets/img/wave.svg" alt="wave" />
      </div>
      <PromoConcept
        :slides="conception.items"
        v-for="(_, index) in conception.items"
        :key="'concepts' + index"
        :index="index"
        ref="promoConcepts"
      />
      <div class="promo-concepts-after-wave" aria-hidden="true">
        <img src="~assets/img/wave.svg" alt="wave" />
      </div>
      <div
        class="js-section js-section-normal-scroll"
        data-offset-y="70"
        id="fix-up"
      >
        <TeamSlider :pin-section="true" :items="team.employees" />
        <PartnersSlider :items="reviews.items" />
        <ContactsSection :items="contacts.items" />
        <Feedback />
        <Footer />
      </div>
    </div>
    <div class="arrow-up" @click="updatePage">
      <svgicon name="ar-bl" class="arr-bl" />
      <svgicon name="ar-w" class="arr-w" />
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
  components: {
    Feedback,
    ContactsSection,
    PartnersSlider,
    TeamSlider,
    ChooseItem,
    PromoVideo,
    Promo,
  },
  layout: "fullscreen",
  data() {
    return {
      solutionBeer: {},
      solutionWater: {},
      solutions: {},
      conception: {},
      contacts: {},
      reviews: {},
      team: {},
      activeBottleType: "beer",
      showPromoBottom: true,
      width: 0,
      activeSectionIndex: 0,
      disableHeader: false,
      beerSlides: [
        {
          hasCanvas: true,
          title: "Пиво",
          titleBig: true,
          desc: "Замена металлических кег на ПЭТ",
          position: "right",
          hasBg: true,
          mobileImgSrc: require("~/assets/img/promo-mobile-first.jpg"),
        },
        {
          hasCanvas: false,
          title: "Эстетика упаковки",
          titleBig: false,
          position: "right",
          hasBg: false,
          list: [
            "Низкая теплопроводность",
            "Гарантия герметичности фитинга",
            "Стерильная среда внутри кега",
          ],
          mobileImgSrc: require("~/assets/img/promo-mobile1.jpg"),
        },
        {
          hasCanvas: false,
          title: "Выгодная логистика",
          titleBig: false,
          position: "left",
          hasBg: false,
          mobileImgSrc: require("~/assets/img/promo-mobile2.jpg"),
          list: [
            "Отсутствует необходимость возврата тары",
            "ПЭТ-КЕГ в 16 раз легче металлической",
            "Фура вмещает на 25% больше",
          ],
        },
        {
          hasCanvas: true,
          title: "Сокращение издержек производства",
          titleBig: false,
          position: "right",
          hasBg: false,
          mobileImgSrc: require("~/assets/img/promo-mobile3.jpg"),
          list: [
            "Разморозка денежных средств заложеных в тару",
            "Сокращение площади хранения КЕГ",
            "Отсутствие технического обслуживания и мойки",
            "Сокращение фонда оплаты труда",
          ],
        },
        {
          hasCanvas: true,
          title: "Оптимизируйте бизнес и расширьте географию сбыта!",
          titleBig: false,
          isLast: true,
          titleSmall: true,
          position: "left",
          mobileImgSrc: require("~/assets/img/promo-mobile4.jpg"),
          hasBg: true,
          buttonTitle: "Консультация специалиста",
          buttonHref: "#hello",
        },
      ],
      waterSlides: [
        {
          hasCanvas: true,
          title: "Вода",
          titleBig: true,
          desc: "Замена стеклянной тары, ПВХ или поликарбонат на ПЭТ-бутыль",
          position: "right",
          hasBg: true,
          mobileImgSrc: require("~/assets/img/promo-mobile-first-w.jpg"),
        },
        {
          hasCanvas: false,
          title: "Безопасность",
          titleBig: false,
          position: "right",
          hasBg: false,
          list: [
            "Не содержит Бисфенол-А",
            "Полностью пригодна к переработке",
            "Стерильная среда внутри ПЭТ-бутыли",
            "Не пропускает кислород, не выделяет токсины",
          ],
          mobileImgSrc: require("~/assets/img/promo-mobile1-w.jpg"),
        },
        {
          hasCanvas: false,
          title: "Качество",
          titleBig: false,
          position: "left",
          hasBg: false,
          mobileImgSrc: require("~/assets/img/promo-mobile2-w.jpg"),
          list: [
            "Отличная ударная прочность и усиленное дно",
            "Легкость и прозрачность",
            "Высокая стойкость к низким температурам",
            "Сохраняет питьевую воду до 1 года без потери качества",
            "Легко устанавливается на  кулер и другое оборудование",
          ],
        },
        {
          hasCanvas: true,
          title: "Сокращение издержек производства",
          titleBig: false,
          position: "right",
          hasBg: false,
          mobileImgSrc: require("~/assets/img/promo-mobile3-w.jpg"),
          list: [
            "Перевозка на большие расстояния",
            "Не требует затрат на санитарную обработку",
            "Отсутствие расходов на хранение и перевозку пустых бутылей",
          ],
        },
        {
          hasCanvas: true,
          title: "Оптимизируйте бизнес и расширьте географию сбыта!",
          titleBig: false,
          titleSmall: true,
          isLast: true,
          position: "left",
          mobileImgSrc: require("~/assets/img/promo-mobile4-w.jpg"),
          hasBg: true,
          buttonTitle: "Консультация специалиста",
          buttonHref: "#hello",
        },
      ],
    };
  },
  async asyncData({ $axios }) {
    const solutionBeer = await $axios.$get(
      `https://api.petexpert.pro/v1/solutions/beer/`
    );
    const solutionWater = await $axios.$get(
      `https://api.petexpert.pro/v1/solutions/water/`
    );

    const solutions = await $axios.$get(
      `https://api.petexpert.pro/v1/solutions/`
    );
    const conception = await $axios.$get(
      `https://api.petexpert.pro/v1/conception/`
    );
    const contacts = await $axios.$get(
      `https://api.petexpert.pro/v1/pages/contacts/`
    );
    const reviews = await $axios.$get(
      `https://api.petexpert.pro/v1/company/reviews/`
    );
    const team = await $axios.$get(
      `https://api.petexpert.pro/v1/pages/our_team/`
    );
    return {
      solutions,
      solutionBeer,
      solutionWater,
      conception,
      contacts,
      reviews,
      team,
    };
  },
  methods: {
    updatePage() {
      location.reload();
    },
    updateWidth() {
      this.width = window.innerWidth;
    },
    moveSectionDown() {
      this.fpPromo.moveSectionDown();
    },
    onChooseItemClick(clickedBottleType) {
      if (this.activeBottleType === clickedBottleType && this.fpPromo) {
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
      } else {
        this.$nextTick(() => {
          var sections =
            this.activeBottleType === "beer"
              ? this.$refs.beerSections
              : this.$refs.waterSections;
          this.$gsap.to(window, {
            scrollTo: { y: sections[0].$el },
            duration: 1.3,
          });
        });
      }
    },
    onPromoVideoPlayClick(isToggled) {
      this.showPromoBottom = !isToggled;
    },
    onPromoTriggerClick() {
      var self = this;
      var newBottleType = this.activeBottleType === "beer" ? "water" : "beer";
      this.sectionTimeline = null;
      this.$refs.fullpagePromoElem.classList.add("inactive");
      self.destroyFullpagePromo();
      setTimeout(function () {
        self.activeBottleType = newBottleType;
        self.$nextTick(() => {
          self.initSlideShow(newBottleType);
          self.fpPromo.silentMoveTo(2);
          self.$refs.fullpagePromoElem.classList.remove("inactive");
        });
      }, 701);
    },
    init() {
      var self = this;
      // @TODO: refactor this nightmare

      var SCREEN_UP_LG = "(min-width: 992px)";
      var SCREEN_DOWN_LG = "(max-width: 992px)";
      var SCREEN_UP_MD = "(min-width: 768px)";
      var SCREEN_DOWN_MD = "(max-width: 768px)";
      this.isDesktop = this.$mq === "xl" || this.$mq === "xl2";
      this.isTablet = this.$mq === "lg" || this.$mq === "md";

      this.bottleData = {
        frame: 0,
      };

      // @TODO make this through mq
      var isTablet =
        window.matchMedia(SCREEN_DOWN_LG).matches &&
        window.matchMedia(SCREEN_UP_MD).matches;
      var isMobile = window.matchMedia(SCREEN_DOWN_MD).matches;
      var promoSlideshowTriggerLocked = false;
      var scrollLocked = false;

      this.scrollEventRegistered = false;

      this.beerMoves = {
        1: {
          duration: 1.3,
          xPercent: -23,
          delay: 0.5,
          frame: 0,
        },
        2: {
          duration: 1.2,
          xPercent: -28,
          delay: 0.2,
          frame: 23,
        },
        3: {
          duration: 1.2,
          xPercent: 30,
          delay: 0.1,
          frame: 73,
        },
        4: {
          duration: 1.2,
          delay: 0.1,
          frame: 99,
          xPercent: -35,
        },
        5: {
          duration: 1.3,
          delay: 0.1,
          frame: 114,
          xPercent: 30,
        },
      };

      this.waterMoves = {
        1: {
          duration: 1.3,
          xPercent: -15,
          delay: 0.5,
          frame: 0,
        },
        2: {
          duration: 1.2,
          xPercent: -20,
          delay: 0.2,
          frame: 17,
        },
        3: {
          duration: 1.2,
          xPercent: 62,
          delay: 0.2,
          frame: 65,
        },
        4: {
          duration: 1.2,
          delay: 0.2,
          frame: 107,
          xPercent: -28,
        },
        5: {
          duration: 1.3,
          delay: 0.2,
          frame: 129,
          xPercent: 53,
        },
      };

      let root = document.documentElement;
      root.style.setProperty("--screen-height", root.clientHeight + "px");

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

      this.fpPromo = new this.$fullpage("#fullpage-promo", {
        //options here
        sectionSelector: ".js-section",
        scrollBar: true,
        fitToSection: false,
        verticalCentered: false,
        scrollingSpeed: 1300,

        onLeave: function (section, next, direction) {
          var targets = next.item.querySelectorAll(
            ".promo-slide__title, .promo-slide__desc, .promo-slide__items li"
          );
          var button = next.item.querySelector(".promo-slide__button");
          var goDownButton = next.item.querySelector(".promo-slide__go-down");

          var tl = self.$gsap.timeline();

          if (section.index === 1 && direction === "up") {
            self.disableHeader = false;
            if (self.$refs.header.$el) {
              self.$refs.header.$el.classList.remove("header--hidden");
            }
          }

          // Появление первого слайда
          if (section.isFirst && direction === "down") {
            tl.fromTo(
              next.item.querySelector(".anim-bottle-canvas"),
              {
                alpha: 0,
                x: 30,
              },
              { alpha: 1, x: 0, delay: 1.2 }
            );

            tl.fromTo(
              next.item.querySelector(".promo-slide-trigger"),
              {
                alpha: 0,
              },
              { alpha: 1, delay: 1.4 }
            );
          }

          if (targets && targets.length > 0) {
            tl.fromTo(
              targets,
              {
                alpha: 0,
                x: 30,
              },
              { alpha: 1, x: 0, delay: 0.7, stagger: 0.1 },
              "0"
            );
            if (button) {
              tl.fromTo(
                button,
                {
                  alpha: 0,
                  x: 30,
                },
                { alpha: 1, x: 0 },
                "1"
              );
            }
          }

          if (goDownButton) {
            tl.fromTo(
              goDownButton,
              {
                alpha: 0,
              },
              { alpha: 1 },
              "1"
            );
          }

          var doesNotContainNormalClass = !next.item.classList.contains(
            "js-section-normal-scroll"
          );

          if (doesNotContainNormalClass) {
            self.fpPromo.setAutoScrolling(true);
            self.fpPromo.setKeyboardScrolling(false);
          }

          var nextSectionIsNormal = next.item.classList.contains(
            "js-section-normal-scroll"
          );

          if (next.index > 0 && next.index < 6) {
            self.animateBottle(next.index, direction);
          }

          if (nextSectionIsNormal) {
            self.activeNormalSection = next.item;
            self.destroyFullpagePromo();
            var offsetY =
              direction === "up"
                ? self.activeNormalSection.clientHeight - window.innerHeight
                : 0;

            self.$gsap.to(window, {
              duration: 1.3,
              ease: "power2.inOut",
              scrollTo: {
                y: self.activeNormalSection,
                offsetY: -offsetY,
              },
              onComplete: function () {
                self.disableHeader = false;
                setTimeout(function () {
                  document.addEventListener(
                    "scroll",
                    self.onNormalSectionScroll
                  );
                }, 200);
              },
            });
            return false;
          }

          return true;
        },
        afterLoad: function (anchorLink, section) {
          if (
            section.item &&
            section.item.classList.contains("js-section-normal-scroll")
          ) {
            self.destroyFullpagePromo();
            self.activeNormalSection = section.item;
            if (!self.scrollEventRegistered) {
              document.addEventListener("scroll", self.onNormalSectionScroll);
              self.scrollEventRegistered = true;
            }
          } else {
            // self.disableHeader = true;
            console.log("triggered!");
            if (section.index !== 0) {
              self.disableHeader = true;
            }
            document.removeEventListener("scroll", self.onNormalSectionScroll);
            self.scrollEventRegistered = false;
          }
        },
      });
    },
    initSlideShow(bottleType) {
      this.canvas = document.getElementById("anim-" + bottleType);
      this.canvasContainer = document.getElementById(
        "anim-" + bottleType + "-inner-container"
      );
      this.canvasContext = this.canvas.getContext("2d");
      var sections =
        this.activeBottleType === "beer"
          ? this.$refs.beerSections
          : this.$refs.waterSections;
      var endTriggerElem = sections[sections.length - 1].$el;

      var img = {
        width: bottleType === "beer" ? 1240 : 960,
        height: 900,
      };

      var wrh = img.width / img.height;

      this.newWidth = this.canvas.width;
      this.newHeight = this.newWidth / wrh;

      if (this.newHeight > this.canvas.height) {
        this.newHeight = this.canvas.height;
        this.newWidth = this.newHeight * wrh;
      }

      // 1 цифра это бутылка с пивом, вторая вода
      // кадры с бутылкой пива в папке beer, а булылки воды в water-new
      this.frameCount = bottleType === "beer" ? 115 : 130;

      this.spriteImages = [];
      if (!this.fpPromo) {
        this.initFullpagePromo();
      }

      if (this.bottlePinTimeline) {
        this.bottlePinTimeline.scrollTrigger.kill();
        this.bottlePinTimeline.kill();
      }

      this.bottlePinTimeline = this.$gsap.timeline({
        ease: "none",
        scrollTrigger: {
          pin: true,
          trigger: "#anim-" + bottleType + "-wrap",
          spacer: false,
          pinSpacing: false,
          // pinType: "transform",
          pinnedContainer: null,
          start: "top",
          endTrigger: endTriggerElem,
          end: "bottom bottom",
          scrub: 0,
          ease: "none",
        },
      });

      if (this.triggerTl) {
        this.triggerTl.scrollTrigger.kill();
        this.triggerTl.kill();
      }

      var sectionHeight = sections[0].$el.clientHeight;
      var triggerHeight = document.getElementById(
        "promo-trigger-" + bottleType
      ).clientHeight;
      console.log(sections.length - 2 + "00%");

      this.triggerTl = this.$gsap.timeline({
        scrollTrigger: {
          trigger: "#anim-" + bottleType + "-container",
          spacer: true,
          pinSpacing: true,
          pin: "#promo-trigger-" + bottleType,
          start: "top",
          endTrigger: endTriggerElem,
          end: "+=" + (sections.length - 2) + `00%+=${triggerHeight}px`,
          scrub: 0,
          ease: "none",
          invalidateOnRefresh: true,
          refreshPriority: 1,
        },
      });

      for (var i = 0; i < this.frameCount; i++) {
        var img = new Image();
        img.src = renderBottleFrame(i, bottleType);
        this.spriteImages.push(img);
      }

      this.spriteImages[0].onload = this.renderBottleSprite;

      function renderBottleFrame(index, bottleType) {
        // тут пути прописаны до файлов.

        if (bottleType === "beer") {
          return require(`@/assets/img/${bottleType}/beer(${index + 1}).png`);
        } else {
          return require(`@/assets/img/${bottleType}-new/wa (${
            index + 1
          }).png`);
        }
      }
    },

    renderBottleSprite() {
      this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
      if (this.activeBottleType == "beer") {
        this.canvasContext.drawImage(
          this.spriteImages[this.bottleData.frame],
          0,
          0,
          this.newWidth,
          this.newHeight
        );
      } else {
        if (this.spriteImages[this.bottleData.frame]) {
          this.canvasContext.drawImage(
            this.spriteImages[this.bottleData.frame],
            0,
            0,
            this.newWidth,
            this.newHeight
          );
        }
      }
    },
    destroyFullpagePromo() {
      var scrollY = window.scrollY;
      if (this.fpPromo) {
        this.fpPromo.setAutoScrolling(false);
        this.fpPromo.setKeyboardScrolling(false);
        this.fpPromo.setFitToSection(false);
        this.fpPromo.destroy("all");
        window.scrollTo(0, scrollY);
        this.fpPromo = undefined;
      }
    },
    initSliderSolutionsTimeline() {
      var sliderSolutionsTimeline = this.$gsap.timeline();

      sliderSolutionsTimeline.to(this.$refs.sliderSolutions.$el, {
        scrollTrigger: {
          trigger: this.$refs.sliderSolutions.$el,
          end: "+=200%",
          start: "bottom bottom",
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
      });
    },
    initPromoConceptsContentTimeline() {
      var promoConceptsContentTimeline = this.$gsap.timeline();
      var promoConceptsSections = this.$refs.promoConcepts;
      var end = "+=" + (promoConceptsSections.length - 1).toString() + "00%";
      promoConceptsContentTimeline.to(promoConceptsSections[0].$el, {
        scrollTrigger: {
          trigger: promoConceptsSections[0].$el.querySelector(
            ".promo-concepts__inner"
          ),
          end: end,
          start: "top",
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
        var content = promoConceptsSections[0].$el.querySelectorAll(
          ".promo-concepts__item"
        )[index];
        var image = promoConceptsSections[0].$el.querySelectorAll(
          ".promo-concepts__image"
        )[index];
        var logo = promoConceptsSections[0].$el.querySelector(
          ".promo-concepts__logo"
        );
        var sectionTitle = promoConceptsSections[0].$el.querySelector(
          ".promo-concepts__section-title"
        );
        var title = promoConceptsSections[0].$el.querySelectorAll(
          ".promo-concepts__title"
        )[index];
        var desc = promoConceptsSections[0].$el.querySelectorAll(
          ".promo-concepts__desc"
        )[index];
        var descParagraphs = desc.querySelectorAll("p");
        var link = promoConceptsSections[0].$el.querySelectorAll(
          ".promo-concepts__link"
        )[index];

        var splitTitle = new self.$SplitText(title, { type: "lines" });

        var splitDesc = new self.$SplitText(descParagraphs, { type: "lines" });
        new self.$SplitText(descParagraphs, { type: "lines" });

        if (index === 0) {
          var container = item.$el.querySelector(".container");
          var logoTimeline = self.$gsap.timeline({
            scrollTrigger: {
              scrub: false,
              trigger: item.$el,
              start: "45% center",
              end: "51% center",
              onEnter: function () {
                logoTimeline.timeScale(1);
              },
              onLeaveBack: function () {
                logoTimeline.timeScale(3).reverse();
              },
            },
          });

          logoTimeline.fromTo(logo, { alpha: 0 }, { alpha: 1 }, "0");
          logoTimeline.fromTo(
            image,
            { alpha: 0, duration: 1 },
            { alpha: 1 },
            "0"
          );
          logoTimeline.fromTo(
            sectionTitle,
            { alpha: 0 },
            { alpha: 1, y: 0 },
            "0.3"
          );
        }

        var tl = self.$gsap.timeline({
          scrollTrigger: {
            trigger: item.$el,
            start: "45% center",
            end: "51% center",
            scrub: false,
            toggleActions: "restart none restart none",
            toggleClass: { targets: [content], className: "is-active" },
          },
        });

        tl.fromTo(
          splitTitle.lines,
          {
            y: "100%",
          },
          { ease: "power2.out", y: 0, duration: 1 }
        );

        tl.fromTo(
          splitDesc.lines,
          {
            y: "150%",
          },
          { ease: "power2.out", y: 0, duration: 0.7, stagger: 0.05 },
          "0.2"
        );

        tl.fromTo(
          link,
          {
            alpha: 0,
          },
          { alpha: 1, duration: 1 },
          "-=0.4"
        );

        if (index > 0) {
          var imagesTimeline = self.$gsap.timeline({
            scrollTrigger: {
              trigger: item.$el,
              end: "+=100%",
              scrub: 0.5,
            },
          });

          var prevImage = promoConceptsSections[0].$el.querySelectorAll(
            ".promo-concepts__image"
          )[index];

          imagesTimeline.fromTo(image, { y: "100%" }, { y: 0 }, "0");
        }

        var isLast = index === promoConceptsSections.length - 1;
        if (!isLast) {
          var imagesParallaxTimeline = self.$gsap.timeline({
            scrollTrigger: {
              trigger: item.$el,
              start: "bottom bottom",
              end: "+=100%",
              scrub: 0,
              immediateRender: false,
            },
          });
          imagesParallaxTimeline.to(
            image,
            { y: "-30%", immediateRender: false },
            "0"
          );
        }
      });
    },
    onNormalSectionScroll(e) {
      var self = this;
      if (this.activeNormalSection) {
        var offsetTop = this.activeNormalSection.offsetTop;

        if (offsetTop > window.scrollY) {
          self.disableHeader = true;
          if (self.$refs.header.$el) {
            self.$refs.header.$el.classList.add("header--hidden");
          }
          document.removeEventListener("scroll", this.onNormalSectionScroll);
          var prevSection = this.activeNormalSection.previousElementSibling;

          // если предыдущий элемент не секция - пропускаем его и берем следующий
          // это нужно для обхода волны
          if (!prevSection.classList.contains("js-section")) {
            prevSection = prevSection.previousElementSibling;
          }

          self.$gsap.to(window, {
            duration: 1,
            ease: "power2.inOut",
            scrollTo: prevSection,
            onComplete: function () {
              prevSection.classList.add("active");
              self.activeNormalSection.classList.remove("active");
              self.initFullpagePromo();
            },
          });
        }

        // Если мы скроллим ниже секции с нормальным скроллом, то скролл анимируем вниз
        if (
          offsetTop + this.activeNormalSection.clientHeight <
          window.scrollY + window.innerHeight
        ) {
          e.preventDefault();
          self.disableHeader = true;
          var promoConceptsSection = document.querySelector(
            ".promo-concepts-section"
          );
          document.removeEventListener("scroll", self.onNormalSectionScroll);

          self.$gsap.to(window, {
            duration: 1,
            ease: "power2.inOut",
            scrollTo: promoConceptsSection,
            onComplete: function () {
              self.activeNormalSection.classList.remove("active");
              promoConceptsSection.classList.add("active");
              self.initFullpagePromo();
            },
          });

          document.removeEventListener("scroll", this.onNormalSectionScroll);
          var scrollLocked = true;
        }
      }
    },
    animateBottle(nextSectionIndex, direction) {
      if (this.activeBottleType === "beer") {
        var progress = (nextSectionIndex - 1) / 4;
        var toFrame = Math.floor(progress * (this.frameCount - 1));

        this.$gsap.to(this.bottleData, {
          frame: this.beerMoves[nextSectionIndex].frame,
          ease: "power2.inOut",
          snap: "frame",
          duration: 1.3,
          onUpdate: this.renderBottleSprite, // use animation onUpdate instead of scrollTrigger's onUpdate
        });
        this.$gsap.to(this.canvasContainer, {
          ease: "power2.inOut",
          duration: this.beerMoves[nextSectionIndex].duration,
          delay: this.beerMoves[nextSectionIndex].delay,
          xPercent: this.beerMoves[nextSectionIndex].xPercent,
        });
      }

      if (this.activeBottleType === "water") {
        this.$gsap.to(this.bottleData, {
          frame: this.waterMoves[nextSectionIndex].frame,
          ease: "power2.inOut",
          snap: "frame",
          duration: 1.3,
          onUpdate: this.renderBottleSprite, // use animation onUpdate instead of scrollTrigger's onUpdate
        });

        this.$gsap.to(this.canvasContainer, {
          xPercent: this.waterMoves[nextSectionIndex].xPercent,
          duration: this.waterMoves[nextSectionIndex].duration,
          delay: this.waterMoves[nextSectionIndex].delay,
          ease: "power2.inOut",
        });
      }
    },
  },
  // сначала надо распаковать архив с кадрами. Где они?
  // отключи сервер. который nuxt dev. Он иногда не дает перезаписать старые кадры
  // Кадры залили. теперь ставим количество кадров.
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
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 2500);
    });
    window.addEventListener("resize", this.updateWidth);
    this.updateWidth();
    this.init();
    var heightSection = document.getElementById("fix-up").offsetHeight;
    var arrowUP = document.querySelector(".arrow-up");

    function getBodyScrollTop() {
      var offset =
        self.pageYOffset ||
        (document.documentElement && document.documentElement.scrollTop) ||
        (document.body && document.body.scrollTop);

      if (offset > heightSection) {
        arrowUP.style.display = "block";
      }
      if (offset < heightSection) {
        arrowUP.style.display = "none";
      }
    }

    window.addEventListener("scroll", getBodyScrollTop);
  },
};
</script>
<style lang="scss">
.arrow-up {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border: 1px solid $primary;
  z-index: 999999;
  border-radius: 50%;
  display: none;
  cursor: pointer;

  .arr-bl,
  .arr-w {
    position: absolute;
    height: 20px;
    top: 15px;
    left: 15px;
    transition: 0.2s ease-in-out;
  }

  .arr-w {
    transform: rotate(-90deg);
    opacity: 0;
  }

  &:hover {
    background: $primary;

    .arr-bl {
      opacity: 0;
      transition: 0.2s ease-in-out;
    }

    .arr-w {
      opacity: 1;
      top: 10px;
      left: 12px;
    }
  }
}

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

.anim-bottle-wrap {
  position: absolute;
  left: 0;
  display: block;
  height: 100%;
  top: 0;
  width: 90%;
  max-width: 1260px;
  margin: 0 auto;
  pointer-events: none;
}

#anim-water-wrap {
  width: 60%;
}

.anim-bottle canvas {
  display: block;
  width: 110%;
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
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  border: 1px solid #dedee3;
  background: #fff;
  z-index: 9999;
  cursor: pointer;
  width: 290px;
  //top: auto !important;
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

  &.safari:before {
    top: 65%;
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
    content: "";
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

@include down("xl") {
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

@include down("lg") {
  .promo-slide {
    height: auto;
    padding-bottom: 130px;

    .container {
      display: block;
      height: auto;
      padding-left: 0;
      padding-right: 0;
    }

    .anim-bottle-wrap {
      display: none;
    }
  }

  .promo-slide--beer-1,
  .promo-slide--water-1 {
    padding-bottom: 100px;
  }

  // .promo-slide--beer-3,
  // .promo-slide--water-3 {
  //   .promo-slide__content-inner:before {
  //     top: 20px;
  //   }
  // }
  .promo-slide--beer-4,
  .promo-slide--water-4 {
    .promo-slide__content-inner:before {
      top: 0px;
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

  .promo-slide__title,
  .promo-slide__desc,
  .promo-slide__items {
    max-width: 384px;
  }

  .promo-slide__items ul li {
    font-size: 18px;

    &:before {
      top: 0.4em;
    }
  }

  // .promo-slide__content-inner:before {
  //   top: -10px;
  // }

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
  .block__title--frontpage {
    max-width: 350px;
  }

  .block__title--frontpage--wide {
    max-width: 360px;
  }
}

@include down("md") {
  .promo-slide {
    // padding-bottom: 85px;
  }
  .promo-slide--beer-1,
  .promo-slide--water-1 {
    padding-bottom: 60px;
  }

  .promo-slide--beer-1 .promo-slide__mobile-img,
  .promo-slide--water-1 .promo-slide__mobile-img {
    margin-right: -20px;
    margin-bottom: -100px;
    top: -26px;
    margin-top: 0;
    margin-left: auto;
  }

  .promo-slide--beer-1 .promo-slide__mobile-img img,
  .promo-slide--water-1 .promo-slide__mobile-img img {
    max-width: 100%;
  }

  .promo-slide__content-inner:before {
    right: 0;
    left: auto;
    z-index: -1;
    top: -30px;
    line-height: 0.7;
  }
}

@include down("sm") {
  .promo-slide__title--small {
    font-size: 26px;
    max-width: 300px;
  }
  .promo-slide .promo-slide__content-inner:before {
    top: -30px;
    right: auto;
    left: 0;
  }

  .promo-slide--beer-2,
  .promo-slide--water-2 {
    .promo-slide__content-inner:before {
      top: 0;
      margin-left: -4px;
    }
  }
  .promo-slide--beer-3,
  .promo-slide--water-3 {
    .promo-slide__content-inner:before {
      top: 14px;
    }
  }
  .promo-slide--beer-4,
  .promo-slide--water-4 {
    .promo-slide__content-inner:before {
      top: 87px;
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
