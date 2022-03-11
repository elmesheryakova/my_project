<template>
  <div class="container">
    <div class="advantages">
      <h2 class="advantages__title">
        <span>4 причины</span> заменить металлические кеги на ПЭТ
      </h2>
      <div
        class="advantages__item"
        v-for="(item, index) in advantages"
        :key="index"
      >
        <div class="advantages__item-inner">
          <div class="advantages__item-info">
            <h3 class="advantages__item-title">{{ item.title }}</h3>
            <ul class="advantages__list">
              <li
                class="advantages__list-item"
                v-for="(item, index) in item.list"
                :key="index"
              >
                <div class="advantages__list-svg"><svgicon name="romb" /></div>

                {{ item }}
              </li>
            </ul>
          </div>

          <!-- <div class="advantages__item-num">{{ item.id }}</div> -->
          <div class="advantages__item-num"><svgicon :name="item.num" /></div>
        </div>
        <div class="advantages__item-img">
          <img
            :src="
              require(`@/assets/img/${width > 860 ? item.img : item.imgMobile}`)
            "
            alt="img"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: Number,
    },
  },
  data() {
    return {
      advantages: this.$store.state.advantages,
    };
  },
};
</script>
<style lang="scss">
.advantages {
  &__title {
    font-weight: 900;
    font-size: 48px;
    color: $black-dark;
    margin-bottom: 70px;
    span {
      color: $primary;
    }
    @media (max-width: 860px) {
      font-size: 32px;
    }
    @media (max-width: 550px) {
      font-size: 28px;
      margin-bottom: 40px;
    }
  }
  &__item {
    gap: 80px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 200px;
    &-inner {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 860px) {
        flex-direction: row;
        position: relative;
      }
    }
    &-info {
      min-height: 577px;
      height: 100%;
      box-shadow: 0px 20px 60px 0px #17202929;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10px 56px;
      position: relative;
      margin-bottom: 60px;
      &::after {
        position: absolute;
        content: "";
        width: 100%;
        bottom: -28px;
        left: 0;
        z-index: 8;
        border: 30px solid transparent;
        border-top: 0px solid transparent;
        border-left: 25px solid #fff;
      }

      @media (max-width: 991px) {
        min-height: 400px;
        padding: 10px 30px;
      }
      @media (max-width: 860px) {
        box-shadow: none;
        min-height: 270px;
      }
      @media (max-width: 550px) {
        min-width: 100%;
        padding: 10px;
      }
    }
    &-title {
      color: $primary;
      font-size: 36px;
      font-weight: 600;
      margin-bottom: 50px;
      @media (max-width: 1130px) {
        font-size: 28px;
        margin-bottom: 30px;
      }
      @media (max-width: 365px) {
        font-size: 23px;
      }
    }
    &-img {
      max-width: 540px;
      max-height: 800px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      @media (max-width: 860px) {
        min-width: 110%;
        order: -1;
        margin-right: -20px;
        margin-left: -20px;
      }
    }
    &-num {
      font-size: 64px;
      font-weight: 900;
      // color: #f6f6f6;
      width: 160px;
      height: 160px;
      flex: 0 0 160px;
      background-color: $primary;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      svg {
        position: absolute;
        width: 30px;
        height: 50px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      @media (max-width: 1130px) {
        width: 120px;
        height: 120px;
        flex: 0 0 120px;
        font-size: 55px;
      }
      @media (max-width: 860px) {
        flex-direction: row;
        background: none;
        color: #f4f6f6;
        width: 100%;
        height: 100%;
        svg {
          width: 210px;
          height: 300px;
          left: 10%;
          z-index: -1;
        }
      }
      @media (max-width: 550px) {
        position: absolute;
        top: 0;
        left: 120px;
        svg {
          left: 0;
        }
      }
    }
    @media (max-width: 1320px) {
      gap: 30px;
    }
    @media (max-width: 860px) {
      grid-template-columns: 1fr;
      margin-bottom: 120px;
    }
    @media (max-width: 640px) {
      margin-bottom: 80px;
    }
    @media (max-width: 550px) {
      margin-bottom: 30px;
    }
  }
  &__list {
    &-item {
      display: flex;
      align-items: flex-start;
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
      &:not(:last-child) {
        margin-bottom: 30px;
      }
      @media (max-width: 1130px) {
        font-size: 20px;
        &:not(:last-child) {
          margin-bottom: 20px;
        }
      }
      @media (max-width: 550px) {
        font-size: 18px;
        line-height: 28px;
      }
      @media (max-width: 365px) {
        font-size: 16px;
        line-height: 26px;
      }
    }
    &-svg {
      width: 12px;
      height: 12px;
      margin-right: 18px;
      display: block;
      svg {
        width: 12px;
        height: 12px;
      }
    }
  }
}
</style>
