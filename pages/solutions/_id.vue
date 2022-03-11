<template>
  <div>
    <div class="solution-item">
      <div class="container">
        <div class="solution-item__inner">
          <div class="solution-item__info">
            <h1 class="solution-item__title">Пиво</h1>
            <p class="solution-item__text">
              Международный бренд по производству ПЭТ-тары, отличающийся
              высочайшим качеством материалов, продукции и подхода к клиентам.
              Международный бренд отличающийся высочайшим качеством.
            </p>
          </div>
          <div class="solution-item__imgbig">
            <img :src="require(`@/assets/img/photo-id1.jpg`)" alt="img" />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="solution-item__img">
          <img :src="require(`@/assets/img/photo-id2.jpg`)" alt="img" />
        </div>
      </div>
    </div>
    <Advantages :width="width" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      width: 0,
    };
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
  },
  mounted() {
    window.addEventListener("resize", this.updateWidth);
    this.updateWidth();
  },
};
</script>
<style lang="scss">
.solution-item {
  padding-bottom: 150px;
  overflow-x: hidden;
  &__inner {
    justify-content: space-between;
    display: flex;
    position: relative;
  }
  &__imgbig {
    width: 970px;
    height: 570px;
    margin-right: -330px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media (max-width: 1600px) {
      height: 480px;
      width: 800px;
      margin-right: -200px;
    }
    @media (max-width: 1350px) {
      height: 450px;
      width: 700px;
      margin-right: -90px;
    }
    @media (max-width: 990px) {
      height: 350px;
      width: 600px;
      margin-right: -90px;
    }
    @media (max-width: 630px) {
      height: 300px;
      width: 400px;
      margin-right: -70px;
    }
    @media (max-width: 480px) {
      height: 200px;
      width: 170px;
      margin-right: -20px;
    }
    @media (max-width: 340px) {
      height: 190px;
      width: 150px;
      margin-right: -20px;
    }
  }

  &__img {
    width: 940px;
    height: 363px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media (max-width: 1350px) {
      height: 300px;
      width: 890px;
    }
    @media (max-width: 990px) {
      height: 250px;
      width: 700px;
    }
    @media (max-width: 768px) {
      width: 505px;
      margin-left: -20px;
      height: 190px;
    }
    @media (max-width: 500px) {
      width: 320px;
      height: 125px;
    }
    @media (max-width: 340px) {
      width: 300px;
      height: 100px;
    }
  }

  &__title {
    max-width: 475px;
    color: $primary;
    font-size: 64px;
    font-weight: 900;
    padding-bottom: 120px;
    position: relative;
    &:after {
      position: absolute;
      content: "";
      height: 62px;
      width: 1px;
      background-color: $black;
      top: 105px;
      left: 3px;
    }
    @media (max-width: 990px) {
      font-size: 50px;
      padding-bottom: 10px;
      &:after {
        display: none;
      }
    }
    @media (max-width: 768px) {
      position: absolute;
      top: -120px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 36px;
    }
    @media (max-width: 600px) {
      top: -90px;
    }
  }
  &__text {
    max-width: 475px;
    padding-right: 30px;
    @media (max-width: 990px) {
      font-size: 14px;
      line-height: 18px;
    }
    @media (max-width: 630px) {
      max-width: 200px;
    }
    @media (max-width: 340px) {
      font-size: 13px;
      padding-right: 10px;
    }
  }
  &__info {
    align-self: center;
  }
  @media (max-width: 768px) {
    padding-top: 200px;
  }
  @media (max-width: 600px) {
    padding-top: 150px;
    padding-bottom: 50px;
  }
}
</style>
