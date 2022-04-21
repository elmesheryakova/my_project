<template>
  <div class="container">
    <div class="solution-modal d-flex justify-content-between">
      <div class="d-flex flex-column justify-content-center">
        <h3 class="solution-modal__title">
          Оптимизируйте бизнес и расширьте географию сбыта!
        </h3>
        <button class="solution-modal__btn" v-b-modal.modal-header>
          Консультация специалиста
        </button>
      </div>
      <div class="solution-modal__img" v-if="item.length">
        <img :src="item" alt="img" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss">
.solution-modal {
  margin-bottom: 200px;
  &__title {
    font-weight: 600;
    font-size: 36px;
    color: $primary;
    margin-bottom: 70px;
    width: 400px;
    gap: 30px;
    @media (max-width: 880px) {
      font-size: 32px;
      margin-bottom: 40px;
    }
    @media (max-width: 430px) {
      width: 100%;
    }
    @media (max-width: 360px) {
      font-size: 28px;
    }
  }
  &__btn {
    width: 320px;
    height: 70px;
    background: linear-gradient(271.8deg, #1b2ac9 -0.56%, #0073f0 100.44%);
    border-radius: 40px;
    color: $white;
    @media (max-width: 880px) {
      width: 288px;
      height: 52px;
    }
    @media (max-width: 360px) {
      margin: 0 auto;
    }
  }
  &__img {
    max-width: 780px;
    max-height: 615px;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (max-width: 750px) {
      order: -1;
      margin-left: -20px;
      margin-right: -20px;
      width: 110%;
      margin-bottom: 85px;
    }
    @media (max-width: 560px) {
      margin-bottom: 40px;
    }
  }
  @media (max-width: 850px) {
    margin-bottom: 120px;
  }
  @media (max-width: 750px) {
    flex-wrap: wrap;
  }
}
</style>
