<template>
  <div class="page-search">
    <div class="container">
      <form class="search-inner" @submit.prevent="getData">
        <input type="search" v-model.trim="value" autofocus />
        <button>Найти</button>
      </form>
      <div class="search-body">
        <div class="search-block">
          <h4 class="search-title">Информация</h4>
          <template v-if="info.length">
            <div
              class="search-info"
              v-for="(item, index) in showMoreInfo ? info : info.slice(0, 3)"
              :key="index"
            >
              <nuxt-link
                :to="
                  item.type_content === '/company/news/'
                    ? `/news/${item.slug}`
                    : item.type_content === '/to_clients/pages/'
                    ? `/${item.slug}`
                    : `${item.type_content}${item.slug}`
                "
              >
                <h5 class="search-info__title">{{ item.title }}</h5></nuxt-link
              >
              <p class="search-info__text" v-html="item.description"></p>
            </div>
          </template>
          <div v-else class="search-info__none">Нет результатов поиска</div>

          <div
            v-if="info.length > 4"
            class="advantages__item-link"
            @click="showMoreInfo = !showMoreInfo"
            :class="{ 'advantages__item-link--rotate': showMoreInfo }"
          >
            <p class="mb-0">Больше результатов</p>
            <svgicon name="arrow-blue" />
          </div>
        </div>
        <div class="search-block">
          <h4 class="search-title">Продукция</h4>
          <template v-if="production.length">
            <div
              class="search-info"
              v-for="(item, index) in showMoreProducts
                ? production
                : production.slice(0, 6)"
              :key="index"
            >
              <nuxt-link
                :to="
                  item.type_content === '/production/items/'
                    ? `/products/${item.parent_slug[0].slug}/${item.slug}`
                    : `/products`
                "
              >
                <h5 class="search-info__title">{{ item.title }}</h5></nuxt-link
              >
              <p class="search-info__text" v-html="item.description"></p>
            </div>
          </template>
          <div v-else class="search-info__none">Нет результатов поиска</div>
          <div
            v-if="production.length > 6"
            class="advantages__item-link"
            @click="showMoreProducts = !showMoreProducts"
            :class="{ 'advantages__item-link--rotate': showMoreProducts }"
          >
            <p class="mb-0">Больше результатов</p>
            <svgicon name="arrow-blue" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMoreInfo: false,
      showMoreProducts: false,
      value: "",
      page: {},
      info: [],
      production: [],
    };
  },
  async asyncData({ $axios }) {
    const page = await $axios.$get(`https://api.petexpert.pro/v1/search`);
    return { page };
  },
  methods: {
    getData() {
      this.$axios({
        url: `https://api.petexpert.pro/v1/search?query='${this.value}'/`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(({ data }) => {
          this.info = data.info;
          this.production = data.production;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
<style lang="scss">
.page-search {
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
  background: #f2f3f7;
  .search-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    padding-top: 80px;
    @media (max-width: 890px) {
      grid-template-columns: 1fr;
      padding-top: 60px;
    }
  }
  .search-info {
    margin-bottom: 40px;
    &__title {
      font-size: 18px;
      font-weight: 600;
      color: #1b2ac9;
      @media (max-width: 890px) {
        font-size: 16px;
      }
    }
    &__text {
      color: #151414;
    }
    &__none {
      font-weight: 600;
      color: #151414;
      font-size: 18px;
    }
  }
  .search-title {
    font-family: Gerbera;
    font-weight: 600;
    font-size: 36px;
    color: #1b2ac9;
    margin-bottom: 50px;
    @media (max-width: 890px) {
      font-size: 32px;
      margin-bottom: 30px;
    }
  }
  .search-inner {
    display: grid;
    grid-template-columns: 1fr 135px;
    gap: 20px;
    margin-top: 140px;
    height: 70px;
    width: 100%;
    input {
      min-width: 100%;
      height: 100%;
      padding: 0 20px;
      @media (max-width: 430px) {
        height: 40px;
      }
    }
    button {
      background: linear-gradient(271.8deg, #1b2ac9 -0.56%, #0073f0 100.44%);
      border-radius: 40px;
      font-size: 18px;
      color: #fff;
      font-family: Gerbera;
      @media (max-width: 430px) {
        height: 40px;
      }
    }
    @media (max-width: 991px) {
      margin-top: 80px;
    }
    @media (max-width: 890px) {
      height: 52px;
    }
    @media (max-width: 430px) {
      grid-template-columns: 1fr;
      margin-bottom: 40px;
    }
  }
  .search-block {
    @media (max-width: 890px) {
      &:not(:last-child) {
        margin-bottom: 100px;
      }
    }
    @media (max-width: 430px) {
      &:not(:last-child) {
        margin-bottom: 60px;
      }
    }
  }
  .advantages__item-link {
    display: flex;
    align-items: center;
    margin-top: 100px;
    color: $primary;
    font-size: 24px;
    cursor: pointer;

    p {
      color: $primary;
    }
    svg {
      fill: transparent;
      width: 47px;
      height: 47px;
      transform: rotate(0deg);
      margin-left: 15px;
    }
    @media (max-width: 890px) {
      font-size: 20px;
      line-height: 25px;
      margin-top: 40px;
      svg {
        width: 30px;
        height: 30px;
      }
    }
    &--rotate {
      svg {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
