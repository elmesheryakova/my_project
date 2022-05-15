<template>
  <div>
    <b-modal id="modal-success" centered>
      <div class="modal-success">
        <div class="modal-success__title">Спасибо!</div>
        <svgicon name="iconLike" class="modal-success__icon" />
      </div>
      <div class="modal-success__text">Мы скоро с вами свяжемся</div>
    </b-modal>
  </div>
</template>
<style lang="scss">
.modal-success {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Gerbera";
  text-align: center;
  &__icon {
    width: 112px;
    height: 112px;
  }
  &__title {
    color: #151414;
    font-weight: 300;
    font-size: 64px;
    line-height: 77px;
    padding-bottom: 38px;
  }
  &__text {
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    padding-top: 58px;
  }
  @media (max-width: 450px) {
    &__title {
      font-size: 32px;
      line-height: 38px;
    }
    &__text {
      font-size: 18px;
      line-height: 21px;
    }
  }
}
</style>
