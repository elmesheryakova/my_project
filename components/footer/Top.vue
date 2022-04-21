<template>
  <div class="container">
    <div class="footer-top">
      <div class="footer-top__text">
        Выбор сделанный сегодня определяет <span>будущее!</span>
      </div>
      <ul class="footer-top__list">
        <li
          class="footer-top__item"
          v-for="(item, index) in links"
          :key="index"
        >
          <nuxt-link :to="item.link">{{ item.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      links: this.$store.state.headerLinks,
    };
  },
  computed: {},
};
</script>
<style lang="scss">
.footer-top {
  color: $primary;
  &__text {
    font-weight: bold;
    font-size: 64px;
    line-height: 86px;
    position: relative;
    letter-spacing: -0.02em;
    margin-bottom: 130px;
    max-width: 1200px;

    span {
      font-size: 144px;
      position: absolute;
      top: 100px;
      right: 93px;
    }
    @media (max-width: 1200px) {
      margin-bottom: 200px;
      span {
        font-size: 134px;
        top: 200px;
        right: 0;
        left: 0;
        text-align: center;
      }
    }
    @media (max-width: 856px) {
      font-size: 50px;
      line-height: 70px;
      span {
        top: 180px;
      }
    }
    @media (max-width: 678px) {
      font-size: 36px;
      line-height: 40px;
      span {
        top: 130px;
        font-size: 124px;
      }
    }
    @media (max-width: 615px) {
      margin-bottom: 170px;
      span {
        top: 120px;
        font-size: 100px;
      }
    }
    @media (max-width: 506px) {
      white-space: normal;
      margin-bottom: 120px;
      span {
        top: 100px;
        font-size: 64px;
      }
    }
    @media (max-width: 490px) {
      font-size: 32px;
      line-height: 40px;
    }
    @media (max-width: 337px) {
      span {
        top: 135px;
      }
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 36px;
    @media (max-width: 856px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 678px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }
    @media (max-width: 490px) {
      grid-template-columns: 1fr;
      gap: 25px;
    }
  }
  &__item {
    height: 55px;
    background: $white;
    cursor: pointer;
    transition: 0.3s ease-out;
    a {
      color: $primary;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    &:hover {
      background: $primary;
      color: $white;
      transition: 0.3s ease-out;
      a {
        color: $white;
      }
    }
    @media (max-width: 615px) {
      height: 48px;
    }
  }
}
</style>
