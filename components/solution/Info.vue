<template>
  <div class="info">
    <div class="info__wrapper">
      <div class="info__inner d-flex flex-column">
        <div class="wrap-height">
          <h2 class="block__title title-info">
            <span> Забота об экологии — </span><br />
            наш приоритет
          </h2>
          <div class="d-flex align-items-end info__inner-num">
            <svgicon name="99" class="info__percent" />
            <span class="info__text"
              >использованной тары поддаётся переработке и обретает новую
              жизнь</span
            >
          </div>
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
        <div class="info__big">
          <img :src="require(`@/assets/img/info-big.jpg`)" alt="img" />
        </div>
      </div>

      <div class="info__bg">
        <img :src="require(`@/assets/img/info-bg.jpg`)" alt="img" />
      </div>
    </div>
    <div class="container"></div>
  </div>
</template>
<style lang="scss">
.info {
  img {
    width: 100%;
  }
  .wrap-height {
    height: 850px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    @media (max-width: 1300px) {
      height: 710px;
      .title-info {
        padding-left: 20px;
        @media (max-width: 440px) {
          padding-left: 10px;
        }
      }
    }
    @media (max-width: 1120px) {
      height: 532px;
    }
    @media (max-width: 950px) {
      height: 443px;
    }
    @media (max-width: 860px) {
      height: 500px;
    }
    @media (max-width: 600px) {
      height: 430px;
    }
    @media (max-width: 440px) {
      height: 320px;
    }
    @media (max-width: 350px) {
      height: 270px;
    }
  }
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 480px;
    padding-left: 50px;
    padding-bottom: 140px;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr 400px;
      padding-left: 0px;
    }
    @media (max-width: 1120px) {
      grid-template-columns: 1fr 300px;
    }
    @media (max-width: 950px) {
      grid-template-columns: 1fr 250px;
    }
    @media (max-width: 860px) {
      grid-template-columns: 1fr;
    }
    @media (max-width: 680px) {
      padding-bottom: 100px;
    }
    @media (max-width: 420px) {
      padding-bottom: 80px;
    }
  }
  &__inner {
    margin-left: auto;
  }
  &__percent {
    width: 400px;
    @media (max-width: 1120px) {
      width: 250px;
    }
    @media (max-width: 950px) {
      width: 200px;
    }
    @media (max-width: 600px) {
      width: 150px;
    }
  }
  .info__inner-num {
    padding-bottom: 130px;
    padding-top: 30px;
    @media (max-width: 1300px) {
      padding-bottom: 100px;
      padding-top: 0;
      padding-left: 20px;
    }
    @media (max-width: 1120px) {
      padding-bottom: 50px;
    }
    @media (max-width: 950px) {
      padding-bottom: 20px;
    }
    @media (max-width: 860px) {
      padding-bottom: 40px;
    }
    @media (max-width: 440px) {
      padding-left: 10px;
    }
  }
  .title-info {
    @media (max-width: 1120px) {
      margin-bottom: 40px;
      font-size: 40px;
    }
    @media (max-width: 600px) {
      font-size: 35px;
      line-height: 38px;
    }
    @media (max-width: 440px) {
      font-size: 25px;
      line-height: 28px;
      margin-bottom: 30px;
    }
  }
  .info__text {
    font-size: 36px;
    max-width: 500px;
    padding-left: 20px;
    @media (max-width: 1120px) {
      font-size: 28px;
      max-width: 400px;
    }
    @media (max-width: 950px) {
      font-size: 25px;
    }
    @media (max-width: 600px) {
      font-size: 18px;
      max-width: 250px;
    }
    @media (max-width: 600px) {
      font-size: 16px;
    }
    @media (max-width: 380px) {
      font-size: 14px;
      max-width: 200px;
    }
  }
  .info__img {
    display: flex;
    gap: 45px;
    margin-bottom: 45px;
    &-item {
      &:last-child {
        margin-right: 45px;
      }
    }
    @media (max-width: 1120px) {
      gap: 10px;
      margin-bottom: 10px;
      &-item {
        &:last-child {
          margin-right: 10px;
        }
      }
    }
    @media (max-width: 860px) {
      &-item {
        &:first-child {
          margin-left: 10px;
        }
      }
    }
  }
  .info__bg {
    margin-bottom: auto;
    box-shadow: 0px 20px 60px 0px #17202929;

    img {
      height: 100%;
      object-fit: contain;
      @media (max-width: 1300px) {
        width: 400px;
      }
      @media (max-width: 1120px) {
        width: 100%;
      }
    }
    @media (max-width: 1300px) {
      margin-left: auto;
    }
    @media (max-width: 860px) {
      display: none;
    }
  }
}
</style>
