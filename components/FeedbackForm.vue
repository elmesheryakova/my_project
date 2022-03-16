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
