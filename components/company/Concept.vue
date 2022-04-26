<template>
  <div class="company-concept">
    <div class="company-concept__title">
      <h2 class="company__concept-title">
        Концепция <br />
        <span>компании</span>
      </h2>
      <nuxt-link class="advantages__item-link" :to="{ name: 'concept' }">
        <p class="mb-0">Узнайте более подробно</p>
        <svgicon name="arrow-blue" />
      </nuxt-link>
    </div>
    <div class="company-concept__info">
      <nuxt-link
        :to="{ name: 'concept-slug', params: { slug: item.slug } }"
        class="company-concept__item"
        v-for="(item, index) in items"
        :key="index"
      >
        <div class="company-concept__img" v-if="item.image_mobile">
          <img :src="item.image_mobile[0]" alt="img" />
        </div>
        <div class="company-concept__text">
          <h4>{{ item.name }}</h4>
          <p v-html="item.description"></p>
        </div>
        <div class="company-concept__link-wrap">
          <div class="company-concept__link">
            <svgicon name="arrow-fullscreen" />
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="scss">
.company-concept {
  padding-top: 215px;
  background: #f2f3f6;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  &__link-wrap {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #fff;
    height: 100%;
    width: 100px;
    transition: 0.3s ease-in-out;
    z-index: -1;
    @media (max-width: 1100px) {
      z-index: 1;
    }
  }
  &__link {
    width: 160px;
    height: 160px;
    background-color: $primary;
    border-radius: 50%;
    position: relative;
    display: block;
    align-self: center;
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    transition: 0.2s ease-in-out;
    opacity: 0;
    svg {
      width: 47px;
      height: 47px;
      fill: transparent;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;

      path {
        stroke: $white;
      }
    }
    @media (max-width: 1490px) {
      width: 120px;
      height: 120px;
    }
    @media (max-width: 1100px) {
      opacity: 1;
    }
    @media (max-width: 730px) {
      width: 80px;
      height: 80px;
      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
  &__title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin: 0 auto;
    padding-left: 60px;
    @media (max-width: 1870px) {
      padding-left: 0;
    }
    @media (max-width: 1670px) {
      padding-right: 95px;
    }
    @media (max-width: 1490px) {
      padding-right: 165px;
    }
    @media (max-width: 1400px) {
      padding-right: 210px;
    }
    @media (max-width: 1350px) {
      padding: 0;
      margin-left: 30px;
    }
    @media (max-width: 1180px) {
      margin-left: 10px;
    }
    @media (max-width: 680px) {
      padding-top: 70px;
    }
    .advantages__item-link {
      font-size: 18px;
      svg {
        width: 35px;
        height: 35px;
      }
      @media (max-width: 1100px) {
        margin-bottom: 100px;
      }
      @media (max-width: 991px) {
        margin-bottom: 60px;
      }
      @media (max-width: 680px) {
        display: none;
      }
    }
  }
  &__item {
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 70px;
    background-color: #fff;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    position: relative;
    &:hover {
      box-shadow: 0px 20px 60px 0px #17202929;
      transform: translateX(-100px);

      transition: 0.3s ease-in-out;
      .company-concept__link-wrap {
        right: -100px;
        transition: 0.3s ease-in-out;
      }
      .company-concept__link {
        opacity: 1;
        transition: 0.2s ease-in-out;
      }
      @media (max-width: 1100px) {
        box-shadow: none;
        transform: translateX(0);
        .company-concept__link-wrap {
          right: 0;
        }
      }
    }
    @media (max-width: 1670px) {
      grid-template-columns: 240px 500px;
      padding-right: 20px;
    }
    @media (max-width: 1490px) {
      gap: 30px;
      grid-template-columns: 240px 400px;
    }
    @media (max-width: 1400px) {
      grid-template-columns: 200px 400px;
    }
    @media (max-width: 1100px) {
      grid-template-columns: 200px 1fr;
      &:not(:last-child) {
        border-bottom: 1px solid #f2f3f6;
      }
    }
    @media (max-width: 730px) {
      padding-right: 0;
    }
  }
  &__img {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__info {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
  }
  &__text {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h4 {
      font-size: 24px;
      font-weight: 400;
      padding-bottom: 10px;
    }
    p {
      max-width: 410px;
      font-size: 14px;
      margin-right: 5px;
      @media (max-width: 1100px) {
        max-width: 70%;
      }
    }
  }
  @media (max-width: 1400px) {
    padding-top: 100px;
  }
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    background-color: #fff;
  }
  @media (max-width: 991px) {
    padding-top: 60px;
  }
}
.company__concept-title {
  font-weight: 600;
  font-size: 64px;
  line-height: 77px;
  color: $primary;
  padding-bottom: 150px;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    top: 200px;
    left: 5px;
    height: 72px;
    width: 1px;
    background-color: $black;
  }
  span {
    color: $black;
  }
  @media (max-width: 1200px) {
    font-size: 50px;
    line-height: 60px;
    padding-bottom: 100px;
    &::after {
      top: 150px;
      height: 60px;
    }
  }
  @media (max-width: 1100px) {
    padding-bottom: 30px;
    &::after {
      display: none;
    }
  }
  @media (max-width: 680px) {
    padding-bottom: 0;
  }
  @media (max-width: 580px) {
    font-size: 36px;
    line-height: 45px;
  }
  @media (max-width: 500px) {
    font-size: 32px;
    line-height: 38px;
  }
}
</style>
