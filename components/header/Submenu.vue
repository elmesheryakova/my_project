<template>
  <div class="submenu">
    <nuxt-link
      class="submenu__item"
      v-for="(item, idx) in submenu"
      :key="idx"
      :to="item.link"
      :style="`background-image: url('${require(`../../assets/img/1.jpg`)}')`"
    >
      <h4 class="submenu__item-title">{{ item.title }}</h4>
      <div class="submenu__item-btn"><svgicon name="arrow-submenu" /></div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    submenu: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="scss">
.submenu {
  display: grid;
  transition: 0.3s ease-out;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 50px;
  left: 0;
  grid-template-columns: repeat(2, 220px);
  gap: 2px;
  z-index: 10;
  &__item {
    cursor: pointer;
    height: 155px;
    background: $white;
    box-shadow: 0px 1px 3px rgba(189, 187, 187, 0.25);
    padding: 20px;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    transition: 0.3s ease-out;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &-title {
      font-size: 14px;
      transition: 0.3s ease-out;
      color: $white;
    }
    &-btn {
      width: 40px;
      height: 40px;
      transform: rotate(-90deg);
      margin-left: -6px;
    }
    &:hover {
      -webkit-filter: grayscale(0%);
      filter: grayscale(0%);
      transition: 0.3s ease-out;
      .submenu__item-title {
        color: $primary;
        transition: 0.3s ease-out;
      }
    }
  }
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    top: -28px;
    left: 0;
    z-index: 8;
    border: 30px solid transparent;
    border-bottom: 0px solid transparent;
    border-left: 25px solid #c4c4c420;
  }
}
</style>
