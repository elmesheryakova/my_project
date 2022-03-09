<template>
  <div
    class="fullscreen-banner"
    :style="`background-image: url('${require(`../../assets/img/2.jpg`)}')`"
  >
    .
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.fullscreen-banner {
  background: #f2f3f7;
  min-height: 100%;
  min-width: 100%;
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 50%;
}
</style>
