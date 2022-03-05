<template >
  <div class="feedback-popup">
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          type="text"
          placeholder="Ваше имя"
          v-model="form.name"
          required
        ></b-form-input>
        <label for="input-1">Ваше имя</label>
        <svgicon name="require" />
      </b-form-group>
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          v-model="form.phone"
          id="input-2"
          type="text"
          placeholder="Телефон"
          required
        >
        </b-form-input>
        <label for="input-2">Телефон</label>
        <svgicon name="require" />
      </b-form-group>
      <b-form-group label-for="textarea">
        <b-form-textarea
          id="textarea"
          placeholder="Сообщение"
          v-model="form.text"
          no-resize
        ></b-form-textarea>
        <label for="textarea">Сообщение</label>
      </b-form-group>
      <div class="d-flex feedback-popup__footer">
        <button class="feedback-popup__submit" type="submit">Отправить</button>
        <b-form-checkbox
          id="checkbox-1"
          v-model="form.status"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
          required
        >
          Соглашаюсь на обработку персональных данных, согласно
          <a href="#">политики конфиденциальности</a>
        </b-form-checkbox>
      </div>
    </b-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        phone: "",
        text: "",
        status: "accepted",
      },
    };
  },

  methods: {
    onSubmit(event) {
      event.preventDefault();
      console.log(JSON.stringify(this.form));
    },
  },
};
</script>
<style lang="scss">
.feedback-popup {
  &__footer {
    align-items: center;
    justify-content: space-between;
    @media (max-width: 600px) {
      flex-wrap: wrap;
    }
  }
  &__submit {
    padding: 24px 44px 26px;
    background-color: $white;
    color: $primary;
    border: 1px solid $primary;
    flex: 1 0 215px;
    margin-right: 60px;
    font-size: 24px;
    transition: 0.3 ease-out;
    @media (max-width: 770px) {
      margin-right: 30px;
      padding: 12px 44px 17px;
      font-size: 20px;
    }
    @media (max-width: 600px) {
      order: 1;
      margin-top: 30px;
      margin-right: 0;
    }
    @media (max-width: 450px) {
      border-radius: 63px;
      flex: 0 1 150px;
      margin: 0 auto;
      margin-top: 30px;
      font-size: 18px;
      padding: 12px 20px 14px;
    }
    &:hover {
      background-color: $primary;
      color: $white;
      transition: 0.3 ease-out;
    }
  }
  .form-group {
    position: relative;
    .svg-icon {
      position: absolute;
      display: block;
      width: 12px;
      height: 18px;
      top: 40px;
      right: 28px;
      @media (max-width: 770px) {
        top: 24px;
      }
      @media (max-width: 390px) {
        top: 11px;
        right: 10px;
        width: 10px;
      }
    }
    label {
      position: absolute;
      top: -10px;
      left: 23px;
      padding: 0 8px;
      color: $grey;
      background-color: $white;
      opacity: 0;
    }
  }
  .form-control {
    padding: 49px 28px;
    border-radius: 0;
    border-color: $black;
    color: $black;
    font-size: 24px;
    transition: 0.3 ease-out;
    &::placeholder {
      font-family: inherit;
      font-size: 24px;
      line-height: 31px;
      color: $black;
    }
    @media (max-width: 770px) {
      padding: 30px 28px 34px;

      &::placeholder {
        font-size: 20px;
      }
    }
    @media (max-width: 450px) {
      border-color: $grey;
      font-size: 18px;

      padding: 32px 20px;
      &::placeholder {
        font-size: 18px;
      }
    }
    @media (max-width: 390px) {
      padding: 20px 10px;
    }
    &:hover {
      border-color: $primary;
      transition: 0.3 ease-out;
    }
    &:focus {
      box-shadow: none;
      border-color: $black;
      transition: 0.1s ease-out;
      &::placeholder {
        font-size: 0;
        transition: 0.1s ease-out;
      }
    }
  }
  #textarea {
    padding: 34px 28px;
    height: 245px;
    margin-bottom: 40px;
    @media (max-width: 770px) {
      padding: 28px;
    }
    @media (max-width: 450px) {
      margin-bottom: 70px;
      height: 160px;
      padding: 25px 20px;
    }
    @media (max-width: 390px) {
      margin-bottom: 50px;
    }
    @media (max-width: 390px) {
      padding: 5px 10px;
    }
  }
  .custom-control-label::before {
    width: 26px;
    height: 25px;
    background: #f2f3f7;
    border-radius: 0;
    border: 1px solid #f2f3f7;
    @media (max-width: 450px) {
      top: -35px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .custom-control-input:checked ~ .custom-control-label::before {
    border-color: #f2f3f7;
    background: #f2f3f7;
  }
  .custom-checkbox
    .custom-control-input:checked
    ~ .custom-control-label::after {
    background-image: url("~assets/svg/check.svg");
    width: 26px;
    height: 25px;
    @media (max-width: 450px) {
      top: -35px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .custom-control-label {
    cursor: pointer;
    font-size: 12px;
    line-height: 16px;
    padding-left: 15px;
    a {
      text-decoration: underline;
    }
    @media (max-width: 450px) {
      padding-left: 0;
      text-align: center;
    }
  }
  .custom-control {
    @media (max-width: 450px) {
      padding-left: 0;
    }
  }
}
</style>
