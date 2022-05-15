<template>
  <div class="company-banner">
    <div class="company-banner__img">
      <picture>
        <source
          :srcset="require('@/assets/img/company1-500.jpg')"
          type="image/png"
          media="(max-width: 600px)"
        />
        <img :src="require(`@/assets/img/company1.jpg`)" alt="img" />
      </picture>

      <h3 class="company-banner__title">
        PET-EXPERT <br /><span>это новая норма</span>
      </h3>
    </div>
    <div class="company-banner__text">
      <p>самовыражения</p>
      <p>развития</p>
      <p>общения</p>
      <p>бизнеса</p>
      <p>партнерства</p>
      <p>самореализации</p>
    </div>
  </div>
</template>
<style lang="scss">
.company-banner {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
  background: #f2f3f6;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
  &__img {
    position: relative;
    img {
      height: 100vh;
      width: 100%;
      object-fit: cover;
    }

    @media (max-width: 1400px) {
      img {
        height: 100%;
      }
    }

    @media (max-width: 600px) {
      img {
        width: 100vw;
      }
    }
  }
  &__title {
    position: absolute;
    display: block;
    top: 50%;
    left: 200px;
    transform: translateY(-50%);
    width: 100%;
    font-size: 96px;
    line-height: 150px;
    font-weight: 600;
    color: $primary;
    padding-top: 80px;
    span {
      color: $white;
      font-size: 64px;
    }
    @media (max-width: 1690px) {
      left: 150px;
    }
    @media (max-width: 1530px) {
      left: 100px;
    }
    @media (max-width: 1400px) {
      font-size: 60px;
      line-height: 90px;
      span {
        font-size: 35px;
      }
    }
    @media (max-width: 991px) {
      padding-top: 20px;
      left: 50px;
    }
    @media (max-width: 825px) {
      left: 30px;
    }
    @media (max-width: 740px) {
      font-size: 40px;
      line-height: 80px;
      span {
        font-size: 20px;
      }
    }
    @media (max-width: 640px) {
      padding-top: 0;
      top: 130px;
      left: 0;
      line-height: 70px;
      text-align: center;
      font-size: 50px;
      span {
        font-size: 30px;
      }
    }
    @media (max-width: 600px) {
      top: 170px;
      line-height: 80px;
    }
    @media (max-width: 505px) {
      top: 140px;
    }
    @media (max-width: 485px) {
      top: 130px;
    }
    @media (max-width: 430px) {
      font-size: 32px;
      line-height: 50px;
      top: 100px;
      span {
        font-size: 18px;
      }
    }

    @media (max-width: 360px) {
      top: 80px;
    }
  }
  &__text {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 64px;
    line-height: 77px;
    color: $primary;
    font-weight: 600;
    padding-left: 116px;
    @media (max-width: 1400px) {
      padding-left: 70px;
      font-size: 40px;
      line-height: 50px;
    }
    @media (max-width: 905px) {
      font-size: 30px;
      line-height: 35px;
      padding-left: 40px;
    }
    @media (max-width: 740px) {
      font-size: 22px;
      line-height: 28px;
    }
    @media (max-width: 640px) {
      position: absolute;
      top: 230px;

      left: 0;
      background: none;
      text-align: center;
      padding-left: 0;
    }
    @media (max-width: 600px) {
      top: 300px;
    }
    @media (max-width: 505px) {
      top: 270px;
    }
    @media (max-width: 485px) {
      top: 250px;
    }
    @media (max-width: 430px) {
      font-size: 18px;
      line-height: 22px;
      top: 180px;
    }

    @media (max-width: 360px) {
      top: 150px;
    }
  }
}
</style>
