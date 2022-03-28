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

    <div class="file" v-if="$route.name === 'career'">
      <label>
        <input
          type="file"
          id="files"
          ref="files"
          @change="handleFileUploads()"
        />
      </label>
      <div @click="addFiles()" class="file-btn">
        <svgicon name="clip" /> Прикрепите резюме
      </div>
    </div>
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
.file {
  margin-bottom: 30px;
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
}
</style>
