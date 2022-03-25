<template>
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
    <b-form-group id="input-group-3" label-for="input-3">
      <b-form-input
        v-model="form.email"
        id="input-3"
        type="text"
        placeholder="Электронная почта"
        required
      >
      </b-form-input>
      <label for="input-3">Электронная почта</label>
      <svgicon name="require" />
    </b-form-group>
    <!-- <b-form-group v-if="$route.name === 'career'">
      <div class="form-file">
        <div class="form-file__icon"><svgicon name="clip" /></div>

        <p>Прикрепите резюме</p>
      </div>

      <b-form-file v-model="file" plain> </b-form-file>
    </b-form-group> -->

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
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        file: "",
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
.form-control-file {
  position: relative;
  color: #fff;
}
.form-file {
  &__icon {
    width: 50px;
    height: 70px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    svg {
      width: 40px !important;
      height: 60px !important;
    }
  }
}
</style>
