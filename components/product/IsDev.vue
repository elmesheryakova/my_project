<template>
  <div class="isDev">
    <h1 class="pages__title">Данный продукт находится в разработке</h1>
    <img :src="require('@/assets/img/isDev.jpg')" alt="bg" />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.isDev {
  .pages__title {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: 60px;
  }
}
</style>
