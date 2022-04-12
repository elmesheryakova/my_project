<template>
  <div class="container">
    <div class="news">
      <h2 class="news__title" v-if="$route.name === 'company'">
        Новости <span>и статьи</span>
      </h2>
      <div
        class="news__item-top"
        v-for="(item, index) in items.slice(0, 1)"
        :key="index"
      >
        <div class="news__item-img">
          <img :src="require(`@/assets/img/${item.img}`)" alt="img" />
        </div>

        <div class="news__item-info">
          <h4>{{ item.title }}</h4>
          <p>{{ item.description }}</p>
          <nuxt-link
            class="advantages__item-link"
            :to="{ name: 'news-id', params: { id: item.id } }"
          >
            <p class="mb-0">Читать полностью</p>
            <svgicon name="arrow-blue" />
          </nuxt-link>
        </div>
      </div>
      <div class="news__block" v-if="width > 760">
        <div
          class="news__item"
          v-for="(item, index) in $route.name === 'news'
            ? items.slice(1)
            : items.slice(1, 4)"
          :key="index"
        >
          <div class="news__item-img">
            <img :src="require(`@/assets/img/${item.img}`)" alt="img" />
          </div>

          <div class="news__item-info">
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
            <nuxt-link
              class="advantages__item-link"
              :to="{ name: 'news-id', params: { id: item.id } }"
            >
              <p class="mb-0">Читать полностью</p>
              <svgicon name="arrow-blue" />
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="news__block-slider" v-else>
        <div v-swiper="swiperOption" ref="swiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide d-flex flex-column"
              v-for="(item, index) in items.slice(1, 4)"
              :key="`item-${index}`"
            >
              <div class="news__item">
                <div class="news__item-img">
                  <img :src="require(`@/assets/img/${item.img}`)" alt="img" />
                </div>

                <div class="news__item-info">
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.description }}</p>
                  <nuxt-link
                    class="advantages__item-link"
                    :to="{ name: 'news-id', params: { id: item.id } }"
                  >
                    <p class="mb-0">Читать полностью</p>
                    <svgicon name="arrow-blue" />
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nuxt-link
        class="advantages__item-link"
        :to="{ name: 'news' }"
        v-if="$route.name === 'company'"
      >
        <p class="mb-0">Смотреть все новости</p>
        <svgicon name="arrow-blue" />
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import { directive } from "vue-awesome-swiper";
export default {
  props: {
    width: {
      type: Number,
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      settings: {
        arrow: false,
        infinite: true,

        slidesToShow: 2,
        slidesToScroll: 2,
      },
      directives: {
        swiper: directive,
      },

      swiperOption: {
        loop: true,
        slidesPerView: 1.1,
        slidesPerGroup: 1,
        freeMode: true,
        breakpoints: {
          370: {
            slidesPerView: 1.1,
            slidesPerGroup: 1,
          },
          450: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
          },
          520: {
            slidesPerView: 1.7,
            slidesPerGroup: 1,
          },
          550: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          700: {
            slidesPerView: 2.1,
            slidesPerGroup: 1,
          },
        },
      },
    };
  },
};
</script>
<style lang="scss">
.news {
  padding-bottom: 160px;
  &__item-top {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 80px;
    background-color: #f4f6f6;
    .news__item-img {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    @media (max-width: 1200px) {
      margin-bottom: 50px;
    }

    @media (max-width: 760px) {
      grid-template-columns: 1fr;
      .news__item-info {
        p {
          margin-bottom: 30px;
        }
      }
    }
  }
  &__title {
    font-weight: 600;
    font-size: 64px;
    line-height: 77px;
    color: $primary;
    padding: 160px 0 80px;
    span {
      color: $black;
    }
    @media (max-width: 1200px) {
      font-size: 50px;
      line-height: 60px;
      padding: 100px 0 50px;
    }
    @media (max-width: 870px) {
      padding: 60px 0 40px;
    }
    @media (max-width: 680px) {
      padding-top: 20px;
      max-width: 240px;
    }
    @media (max-width: 580px) {
      font-size: 36px;
      line-height: 45px;
      max-width: 160px;
    }
    @media (max-width: 500px) {
      font-size: 32px;
      line-height: 38px;
    }
  }
  &__block {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-bottom: 60px;
    &-slider {
      margin-bottom: 60px;
    }
    @media (max-width: 870px) {
      gap: 10px;
    }
  }
  &__item {
    background-color: #f4f6f6;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &-img {
      height: 230px;
      @media (max-width: 870px) {
        height: 180px;
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 30px 25px;
      height: 100%;
      h4 {
        font-size: 24px;
        line-height: 28px;
        font-weight: 400;

        height: 60px;
      }
      p {
        max-width: 500px;
        margin-bottom: auto;
      }
      .advantages__item-link {
        margin-top: 25px;
      }
      @media (max-width: 1100px) {
        h4 {
          font-size: 19px;
          line-height: 23px;
          height: 50px;
        }
        p {
          font-size: 15px;
        }
        .advantages__item-link {
          font-size: 16px;
          svg {
            width: 30px;
            height: 30px;
          }
        }
      }
      @media (max-width: 991px) {
        padding: 10px 15px 20px;
        max-height: 250px;
      }
      @media (max-width: 870px) {
        padding: 10px;
        max-height: 220px;
        h4 {
          font-size: 18px;
          line-height: 22px;
        }
        p {
          font-size: 13px;
        }
        .advantages__item-link {
          margin-top: 10px;
        }
      }
    }
    @media (max-width: 760px) {
      width: 310px;
      height: 400px;
    }
    @media (max-width: 650px) {
      width: 260px;
      height: 365px;
    }
  }
  @media (max-width: 650px) {
    padding-bottom: 60px;
    .advantages__item-link {
      font-size: 18px;
      svg {
        width: 35px;
        height: 35px;
      }
    }
  }
}
</style>
