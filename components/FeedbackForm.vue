<template>
  <b-form @submit.prevent>
    <b-form-group id="input-group-1" label-for="input-1">
      <b-form-input
        id="input-1"
        type="text"
        placeholder="Ваше имя"
        v-model.trim="form.name"
        :class="$v.form.name.$error ? 'is-invalid' : ''"
      ></b-form-input>
      <label for="input-1">Ваше имя</label>
      <svgicon name="require" />
      <div
        v-if="$v.form.name.$dirty && !$v.form.name.required"
        class="invalid-feedback"
      >
        Обязательное поле
      </div>
    </b-form-group>
    <b-form-group id="input-group-3" label-for="input-3">
      <b-form-input
        v-model.trim="form.email"
        :class="$v.form.email.$error ? 'is-invalid' : ''"
        id="input-3"
        type="text"
        placeholder="Электронная почта"
      >
      </b-form-input>
      <label for="input-3">Электронная почта</label>
      <svgicon name="require" />
      <div
        v-if="$v.form.email.$dirty && !$v.form.email.email"
        class="invalid-feedback"
      >
        E-mail некорректный
      </div>
      <div
        v-if="$v.form.email.$dirty && !$v.form.email.required"
        class="invalid-feedback"
      >
        Обязательное поле
      </div>
    </b-form-group>
    <b-form-group id="input-group-2" label-for="input-2">
      <b-form-input
        v-model="form.phone"
        :class="$v.form.phone.$error ? 'is-invalid' : ''"
        id="input-2"
        type="text"
        placeholder="Телефон"
        required
      >
      </b-form-input>
      <label for="input-2">Телефон</label>
      <svgicon name="require" />
      <div
        v-if="$v.form.phone.$dirty && !$v.form.phone.numeric"
        class="invalid-feedback"
      >
        Телефон некорректный
      </div>
      <div
        v-if="$v.form.phone.$dirty && !$v.form.phone.required"
        class="invalid-feedback"
      >
        Обязательное поле
      </div>
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
      <button
        class="feedback-popup__submit"
        type="submit"
        @click="createdMessage"
      >
        Отправить
      </button>
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
import { validationMixin } from "vuelidate";
import { required, email, numeric } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  props: {
    isShow: {
      type: Boolean,
    },
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        text: "",
        status: "accepted",
      },
    };
  },
  validations: {
    form: {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      phone: {
        required,
        numeric,
      },
      status: {
        required,
      },
    },
  },
  methods: {
    checkForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$error) {
        console.log("success");
        // this.isSuccess = true;
      }
    },
    createdMessage() {
      this.checkForm();
      let bodyFormData = new FormData();
      bodyFormData.append("name", this.form.name),
        bodyFormData.append("email", this.form.email),
        bodyFormData.append("phone", this.form.phone),
        bodyFormData.append("message", this.form.text),
        this.$axios({
          url: `https://api.petexpert.pro/v1/feedback/partner`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: bodyFormData,
        })
          .then(({ data }) => {
            this.form.text = "";
            this.form.name = "";
            this.form.phone = "";
            this.form.email = "";
            this.$router.push({ name: "index" });
          })
          .catch((err) => {
            console.error(err);
          });
      this.bodyFormData = "";
    },
  },
};
</script>
