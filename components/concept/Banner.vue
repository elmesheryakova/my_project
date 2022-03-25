<template>
  <div :style="'background: #f2f3f6'" class="concept-banner-inner">
    <div class="concept-banner">
      <div class="concept-banner__info">
        <h3>Наша миссия:</h3>
        <p>
          Трансформировать мышление общества через внедрение ПЭТ-упаковки как
          наиболее технологичной, экологичной и удобной в использовании
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.concept-banner-inner {
  height: 930px;
  @media (max-width: 1400px) {
    height: 500px;
  }
  @media (max-width: 810px) {
    height: 460px;
  }
  @media (max-width: 490px) {
    height: 600px;
  }
  @media (max-width: 420px) {
    height: 500px;
  }
}
.concept-banner {
  position: relative;
  background: url("~/assets/img/banner-concept.jpg") no-repeat;
  background-size: cover;
  height: 930px;

  @media (max-width: 1400px) {
    height: 500px;
    background-position: bottom left;
  }
  @media (max-width: 810px) {
    height: 460px;
    transform: translateX(-100px);
    min-width: 120%;
  }
  @media (max-width: 490px) {
    transform: translateX(-140px);
    min-width: 200%;
    height: 600px;
  }
  @media (max-width: 420px) {
    height: 500px;
  }

  &__info {
    color: #fff;
    font-weight: 900;
    position: absolute;
    z-index: 2;
    top: 40%;
    left: 35%;
    transform: translateY(-50%);
    h3 {
      font-weight: 900;
      font-size: 64px;
    }
    p {
      margin-bottom: 0;
      font-size: 36px;
      max-width: 1000px;
    }
    @media (max-width: 1400px) {
      p {
        max-width: 800px;
        font-size: 30px;
      }
    }
    @media (max-width: 1190px) {
      left: 30%;
      p {
        max-width: 700px;
      }
    }
    @media (max-width: 960px) {
      left: 35%;
      h3 {
        font-size: 55px;
      }
      p {
        font-size: 20px;
        line-height: 24px;
        max-width: 500px;
      }
    }
    @media (max-width: 691px) {
      left: 45%;
      h3 {
        font-size: 32px;
        margin-bottom: 20px;
      }
      p {
        font-size: 18px;
        max-width: 350px;
      }
    }
    @media (max-width: 490px) {
      top: 30%;
      left: 30%;
    }
    @media (max-width: 420px) {
      p {
        font-size: 16px;
        font-weight: 600;
        max-width: 300px;
      }
    }
  }
}
</style>
