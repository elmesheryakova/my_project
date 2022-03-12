<template>
  <div class="info">
    <div class="d-flex">
      <div class="container">
        <div class="info__inner d-flex flex-column">
          <h2 class="block__title title-info">
            <span> Забота об экологии — </span><br />
            наш приоритет
          </h2>
          <p class="d-flex align-items-end">
            <span class="info__num">99</span
            ><span class="info__percent">%</span>
            <span class="info__text"
              >использованной тары поддаётся переработке и обретает новую
              жизнь</span
            >
          </p>
          <div class="info__img">
            <div class="info__img-item">
              <img :src="require(`@/assets/img/info-min1.jpg`)" alt="img" />
            </div>
            <div class="info__img-item">
              <img :src="require(`@/assets/img/info-min2.jpg`)" alt="img" />
            </div>
            <div class="info__img-item">
              <img :src="require(`@/assets/img/info-min3.jpg`)" alt="img" />
            </div>
          </div>
        </div>
      </div>
      <div class="info__bg">
        <img :src="require(`@/assets/img/info-bg.jpg`)" alt="img" />
      </div>
    </div>
    <div class="container">
      <div class="info__big">
        <img :src="require(`@/assets/img/info-big.jpg`)" alt="img" />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.info {
  position: relative;
  margin-bottom: 120px;
  .title-info {
    @media (max-width: 1190px) {
      margin-bottom: 40px;
    }
    @media (max-width: 610px) {
      margin-bottom: 30px;
    }
    @media (max-width: 360px) {
      font-size: 22px;
    }
  }
  &__bg {
    position: absolute;
    top: 0;
    right: 0;
    box-shadow: 0px 20px 60px 0px #17202929;
    width: 480px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media (max-width: 1420px) {
      width: 390px;
      top: 50px;
    }
    @media (max-width: 1190px) {
      top: 0;
    }
    @media (max-width: 1160px) {
      display: none;
    }
  }
  &__num {
    font-size: 240px;
    line-height: 240px;
    color: $primary;
    font-weight: 300;
    @media (max-width: 1190px) {
      font-size: 200px;
      line-height: 200px;
    }
    @media (max-width: 756px) {
      font-size: 144px;
      line-height: 144px;
    }
    @media (max-width: 530px) {
      font-size: 84px;
      line-height: 84px;
    }
    @media (max-width: 360px) {
      font-size: 70px;
      line-height: 70px;
    }
  }
  &__percent {
    font-size: 180px;
    line-height: 180px;
    color: $primary;
    align-self: flex-end;
    @media (max-width: 1190px) {
      font-size: 140px;
      line-height: 140px;
    }
    @media (max-width: 756px) {
      font-size: 100px;
      line-height: 100px;
    }
    @media (max-width: 530px) {
      font-size: 58px;
      line-height: 58px;
    }
    @media (max-width: 360px) {
      font-size: 44px;
      line-height: 44px;
    }
  }
  &__text {
    font-size: 36px;
    line-height: 47px;
    width: 500px;
    padding-left: 20px;
    padding-bottom: 10px;
    @media (max-width: 1600px) {
      font-size: 26px;
      line-height: 30px;
      width: 400px;
    }
    @media (max-width: 1190px) {
      font-size: 24px;
      width: 350px;
    }
    @media (max-width: 1160px) {
      width: 100%;
      padding-right: 50px;
    }
    @media (max-width: 620px) {
      font-size: 16px;
      line-height: 20px;
      padding-right: 0;
    }
    @media (max-width: 360px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
  &__img {
    margin-top: 100px;
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: repeat(3, 327px);
    gap: 40px;
    height: 275px;
    &-item {
      width: 327px;
      height: 275px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    @media (max-width: 1880px) {
      grid-template-columns: repeat(3, 250px);
      gap: 40px;
      height: 250px;
      margin-top: 50px;
      &-item {
        width: 250px;
        height: 250px;
      }
    }
    @media (max-width: 1270px) {
      height: 180px;
      gap: 10px;
      &-item {
        width: 200px;
        height: 180px;
      }
    }
    @media (max-width: 1160px) {
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 756px) {
      grid-template-columns: repeat(3, 1fr);

      gap: 20px;
    }
    @media (max-width: 670px) {
      margin-top: 20px;
      margin-bottom: 20px;
      height: 154px;
      &-item {
        width: 100%;
        height: 154px;
      }
    }
    @media (max-width: 530px) {
      gap: 5px;
      height: 100px;
      &-item {
        width: 100%;
        height: 100px;
      }
    }
  }
  &__big {
    @media (max-width: 1190px) {
      width: 110%;
      margin-left: -20px;
      margin-right: -20px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  @media (max-width: 530px) {
    margin-bottom: 80px;
  }
}
</style>
