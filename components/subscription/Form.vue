<template>
  <div>
    <b-form @submit.prevent="checkForm">
      <b-form-group id="input-group-1" label-for="input-1">
        <fieldset>
          <legend :class="{ active: focusedPhone }">Ваше имя</legend>
          <b-form-input
            id="input-1"
            type="text"
            placeholder="Ваше имя"
            v-model.trim="form.name"
            :class="{ 'is-invalid': $v.form.name.$error }"
            @focus="focusedPhone = true"
            @blur="focusedPhone = false"
          ></b-form-input>

          <svgicon name="require" />
          <div
            v-if="$v.form.name.$dirty && !$v.form.name.required"
            class="invalid-feedback"
          >
            Обязательное поле
          </div>
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
            :class="{ 'is-invalid': $v.form.name.$error }"
            @focus="focusedMail = true"
            @blur="focusedMail = false"
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
        </fieldset>
      </b-form-group>

      <div class="file" v-if="$route.name === 'career'">
        <label>
          <input
            type="file"
            id="files"
            ref="files"
            @change="handleFileUploads()"
          />
        </label>
        <div
          @click="addFiles()"
          class="file-btn"
          :class="$v.form.files.$error ? 'is-invalid' : ''"
        >
          <svgicon name="clip" />
          <span v-if="!form.files.length">Прикрепите резюме</span>
          <span v-else v-for="(item, index) in form.files" :key="index">
            {{ item.name }}
          </span>
        </div>

        <div
          v-if="$v.form.files.$dirty && !$v.form.files.required"
          class="invalid-feedback"
        >
          Прикрепите файл
        </div>
      </div>
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
            :class="$v.form.status.$error ? 'is-invalid' : ''"
          >
            Соглашаюсь на обработку персональных данных, согласно
            <a href="/Policy.pdf" target="_blank"
              >политики конфиденциальности</a
            >
          </b-form-checkbox>
          <div v-if="!$v.form.status.sameAs" class="invalid-feedback">
            Прочтите соглашение
          </div>
        </div>
      </div>
    </b-form>
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, email, sameAs } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  data() {
    return {
      focusedPhone: false,
      focusedMail: false,
      form: {
        name: "",
        email: "",
        files: [],
        status: true,
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
      files: {
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
      for (var i = 0; i < this.form.files.length; i++) {
        let file = this.form.files[i];
        bodyFormData.append(`file`, file);
      }
      bodyFormData.append("name", this.form.name),
        bodyFormData.append("email", this.form.email),
        this.$axios({
          url: `https://api.petexpert.pro/v1/career/resume`,
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          data: bodyFormData,
        })
          .then(({ data }) => {
            this.form.files = [];
            this.form.name = "";
            this.form.email = "";
          })
          .catch((err) => {
            console.error(err);
          });
      this.bodyFormData = "";
    },
    handleFileUploads() {
      let uploadedFiles = this.$refs.files.files;

      for (var i = 0; i < uploadedFiles.length; i++) {
        this.form.files.push(uploadedFiles[i]);
      }
    },
    addFiles() {
      this.$refs.files.click();
    },
  },
};
</script>
<style lang="scss">
input[type="file"] {
  position: absolute;
  left: -1000px;
}

legend {
  color: #bdbbbb;
  font-size: 16px;
  width: auto;
  padding: 0 3px;
  background-color: #fff;
  position: relative;
  z-index: 1;
  opacity: 0;
  transform: translate(5px, 14px);
  transition: all 0.3s ease-in;
  &.active {
    opacity: 1;

    transition: all 0.3s ease-in;
  }
}
.file {
  margin-bottom: 30px;
  cursor: pointer;
}
.file-btn {
  font-size: 24px;
  color: $primary;

  svg {
    width: 40px;
    height: 60px;
    margin-right: 10px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
    svg {
      width: 30px;
      height: 40px;
    }
  }
}
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
  .error {
    background-color: red;
  }
}
</style>
