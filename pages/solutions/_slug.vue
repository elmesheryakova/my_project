<template>
  <client-only>
    <div>
      <div class="solution-item">
        <div class="container">
          <div class="solution-item__inner">
            <div class="solution-item__info">
              <h1 class="solution-item__title">{{ item.name }}</h1>
              <p class="solution-item__text" v-html="item.description"></p>
            </div>
            <div class="solution-item__imgbig" v-if="item.image">
              <img :src="item.image[0]" alt="img" />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="solution-item__img" v-if="item.image">
            <img :src="item.image[1]" alt="img" />
          </div>
        </div>
      </div>
      <div class="container" v-if="item.reasons.length">
        <h2 class="block__title" v-if="item.name === 'Вода'">
          <span>4 причины</span> использовать ПЭТ бутыль для воды
        </h2>
        <h2 class="block__title" v-else>
          <span>4 причины</span> заменить металлические кеги на ПЭТ
        </h2>
      </div>

      <Advantages :width="width" :items="item.reasons" />
      <SolutionConsultation :item="item.image[2]" />

      <template v-if="item.group_products.items.length">
        <div class="container">
          <h2 class="block__title">
            <span>Группа товаров</span> {{ item.group_products.header }}:
          </h2>
        </div>
        <Slider :items="item.group_products.items" v-if="width > 790" />
        <GridMobile :items="item.group_products.items" :width="width" v-else />
      </template>

      <SolutionInfo />
      <div class="test" v-if="width > 870" ref="sectionBeforeRef">
        <SliderSolutions :items="page.items" />
      </div>

      <template v-else>
        <div class="container">
          <h2 class="block__title"><span>Решения</span> для других напитков</h2>
        </div>
        <SolutionMobile :items="page.items"
      /></template>
      <Feedback :enableWaveAnimation="true" />
    </div>
  </client-only>
</template>
<script>
export default {
  data() {
    return {
      width: 0,
      item: {},
      page: {},
    };
  },
  async asyncData({ params, $axios }) {
    const item = await $axios.$get(
      `https://api.petexpert.pro/v1/solutions/${params.slug}/`
    );
    const page = await $axios.$get(
      `https://api.petexpert.pro/v1/pages/solutions/`
    );
    return { item, page };
  },

  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
  },
  created() {},
  mounted() {
    window.addEventListener("resize", this.updateWidth);
    this.updateWidth();
    this.item.reasons.forEach((el, i) => {
      this.$set(el, "icon", `num${i + 1}`);
    });
  },
};
</script>
<style lang="scss">
.solution-item {
  padding: 170px 0 150px;

  @media (max-width: 991px) {
    padding-top: 100px;
  }
  @media (max-width: 860px) {
    padding-bottom: 60px;
  }
  @media (max-width: 791px) {
    padding-top: 102px;
  }
  overflow-x: hidden;
  &__inner {
    justify-content: space-between;
    display: flex;
    position: relative;
    align-items: center;
  }
  &__imgbig {
    width: 970px;
    height: 570px;
    margin-right: -330px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media (max-width: 1600px) {
      height: 480px;
      width: 800px;
      margin-right: -200px;
    }
    @media (max-width: 1350px) {
      height: 450px;
      width: 700px;
      margin-right: -90px;
    }
    @media (max-width: 990px) {
      height: 350px;
      width: 600px;
      margin-right: -90px;
    }
    @media (max-width: 740px) {
      display: none;
    }
  }

  &__img {
    width: 940px;
    height: 363px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media (max-width: 1350px) {
      height: 300px;
      width: 890px;
    }
    @media (max-width: 990px) {
      height: 250px;
      width: 700px;
    }
    @media (max-width: 768px) {
      width: 505px;
      margin-left: -20px;
      height: 190px;
    }
    @media (max-width: 740px) {
      min-width: 100%;
      margin-left: 0;
    }
    @media (max-width: 520px) {
      margin-left: -20px;
    }
  }

  &__title {
    max-width: 475px;
    color: $primary;
    font-size: 64px;
    line-height: 64px;
    font-weight: 900;
    padding-bottom: 60px;
    position: relative;
    &:after {
      position: absolute;
      content: "";
      height: 30px;
      width: 1px;
      background-color: $black;
      top: 80px;
      left: 3px;
    }
    @media (max-width: 990px) {
      font-size: 50px;
      padding-bottom: 10px;
      &:after {
        display: none;
      }
    }
    @media (max-width: 740px) {
      position: absolute;
      top: -90px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 36px;
    }
  }
  &__text {
    max-width: 600px;
    min-width: 480px;
    padding-right: 30px;
    @media (max-width: 990px) {
      font-size: 14px;
      line-height: 18px;
    }
    @media (max-width: 740px) {
      padding-right: 0;
      min-width: 100%;
    }

    // @media (max-width: 340px) {
    //   font-size: 13px;
    //   padding-right: 10px;
    // }
  }
  &__info {
    align-self: center;
    @media (max-width: 740px) {
      min-width: 100%;
    }
  }
  @media (max-width: 740px) {
    padding-top: 172px;
  }
  @media (max-width: 600px) {
    padding-top: 150px;
    padding-bottom: 50px;
  }
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
</style>
