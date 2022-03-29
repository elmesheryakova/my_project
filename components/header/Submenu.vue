<template>
  <div class="submenu">
    <nuxt-link
      class="submenu__item"
      v-for="(item, idx) in submenu"
      :key="idx"
      :to="item.link"
      :style="`background-image: url('${require(`../../assets/img/${item.img}`)}')`"
    >
      <h4 class="submenu__item-title">{{ item.title }}</h4>
      <div class="submenu__item-btn"><svgicon name="arrow-slider" /></div>
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
    background-repeat: no-repeat;
    background-size: 0%;
    box-shadow: 0px 1px 3px rgba(189, 187, 187, 0.25);
    padding: 20px;

    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &-title {
      font-size: 14px;
      transition: 0.3s ease-out;
      color: #1b2ac9;
    }
    &-btn {
      width: 40px;
      height: 40px;
      margin-left: -6px;
    }
    &:hover {
      background-size: 100%;
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
    border-left: 25px solid #fff;
  }
}
</style>
