<template>
  <b-form @submit.prevent="checkForm">
    <b-form-group id="input-group-1" label-for="input-1">
      <fieldset>
        <legend :class="{ active: focusedName }">Ваше имя</legend>
        <b-form-input
          id="input-1"
          type="text"
          placeholder="Ваше имя"
          v-model.trim="form.name"
          @focus="focusedName = true"
          @blur="focusedName = false"
        ></b-form-input>

        <svgicon name="require" />
      </fieldset>
    </b-form-group>
    <b-form-group id="input-group-3" label-for="input-3">
      <fieldset>
        <legend :class="{ active: focusedMail }">Электронная почта</legend>
        <b-form-input
          id="input-3"
          type="text"
          placeholder="Электронная почта"
          v-model.trim="form.email"
          @focus="focusedMail = true"
          @blur="focusedMail = false"
        >
        </b-form-input>

        <label for="input-3">Электронная почта</label>
        <svgicon name="require" />
      </fieldset>
    </b-form-group>
    <b-form-group id="input-group-2" label-for="input-2">
      <fieldset>
        <legend :class="{ active: focusedPhone }">Телефон</legend>
        <b-form-input
          v-model="form.phone"
          id="input-2"
          type="text"
          placeholder="Телефон"
          @focus="focusedPhone = true"
          @blur="focusedPhone = false"
          v-mask="'+7(999)999-99-99'"
        >
        </b-form-input>

        <svgicon name="require" />
      </fieldset>
    </b-form-group>
    <b-form-group label-for="textarea">
      <fieldset>
        <legend :class="{ active: focusedText }">Сообщение</legend>
        <b-form-textarea
          id="textarea"
          placeholder="Сообщение"
          v-model="form.text"
          no-resize
          @focus="focusedText = true"
          @blur="focusedText = false"
        ></b-form-textarea>
        <svgicon name="require" class="svg-textarea" />
      </fieldset>
    </b-form-group>
    <span class="text-require"
      ><svgicon name="require" /> - Поля, обязательные для заполнения</span
    >

    <div class="d-flex feedback-popup__footer">
      <button
        class="feedback-popup__submit"
        :disabled="$v.$invalid"
        :class="{ 'feedback-popup__submit--disabled': $v.$invalid }"
        type="submit"
      >
        Отправить
      </button>
      <div class="d-flex flex-column">
        <b-form-checkbox
          id="checkbox-1"
          v-model="form.status"
          name="checkbox-1"
        >
          Соглашаюсь на обработку персональных данных, согласно
          <a href="/Policy.pdf" target="_blank">политики конфиденциальности</a>
        </b-form-checkbox>
      </div>
    </div>
  </b-form>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, email, sameAs } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  props: {
    isShow: {
      type: Boolean,
    },
  },
  data() {
    return {
      focusedName: false,
      focusedPhone: false,
      focusedMail: false,
      focusedText: false,
      form: {
        name: "",
        email: "",
        phone: "",
        text: "",
        status: true,
      },
    };
  },
  validations: {
    form: {
      name: {
        required,
      },
      text: {
        required,
      },
      email: {
        required,
        email,
      },
      phone: {
        required,
      },
      status: {
        required,
        sameAs: sameAs(() => true),
      },
    },
  },
  methods: {
    checkForm() {
      if (this.$v.$invalid) {
        this.$v.form.$touch();
        return;
      }
      if (!this.$v.form.$error) {
        this.createdMessage();
        this.$bvModal.show("modal-success");
      }
    },
    createdMessage() {
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
          })
          .catch((err) => {
            console.error(err);
          });
      this.bodyFormData = "";
    },
  },
};
</script>
