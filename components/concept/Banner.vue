<template>
  <div :style="'background: #f2f3f6'" class="concept-banner-inner">
    <div class="concept-banner">
      <div class="concept-banner__info container">
        <h3>Наша миссия:</h3>
        <p>
          Улучшение качества жизни и качества бизнеса партнеров через внедрение
          ПЭТ упаковки как наиболее технологичной, экологичной и удобной в
          использовании
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
  background: url("~/assets/img/banner-concept.jpg") top right no-repeat;
  background-size: cover;
  height: 930px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1400px) {
    height: 500px;
    min-width: 110%;
  }

  @media (max-width: 490px) {
    height: 600px;
    min-width: 130%;
  }
  @media (max-width: 420px) {
    height: 500px;
  }

  &__info {
    color: #fff;
    font-weight: 900;
    position: relative;
    z-index: 9999;

    h3 {
      font-weight: 900;
      font-size: 64px;
    }
    p {
      margin-bottom: 0;
      font-size: 36px;
      max-width: 900px;
    }
    @media (max-width: 1400px) {
      p {
        max-width: 800px;
        font-size: 30px;
        line-height: 40px;
      }
    }

    @media (max-width: 960px) {
      h3 {
        font-size: 55px;
      }
      p {
        font-size: 20px;
        line-height: 24px;
        max-width: 500px;
      }
    }

    @media (max-width: 500px) {
      h3 {
        font-size: 32px;
        margin-bottom: 20px;
      }
      p {
        font-size: 18px;
        font-weight: 600;
        max-width: 320px;
      }
    }
  }
}
</style>
