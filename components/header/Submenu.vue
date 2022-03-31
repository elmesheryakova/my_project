<template>
  <div class="submenu">
    <nuxt-link
      class="submenu__item"
      v-for="(item, idx) in submenu"
      :key="idx"
      :to="item.link"
      :style="`background-image: url('${require(`../../assets/img/${item.img}`)}')`"
    >
      <div class="submenu__item-wrap">
        <h4 class="submenu__item-title">{{ item.title }}</h4>
        <div class="submenu__item-btn"><svgicon name="arrow-slider" /></div>
      </div>
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
  top: 75px;
  left: 0;
  grid-template-columns: repeat(2, 220px);
  gap: 2px;
  z-index: 10;
  &__item-wrap {
    background: linear-gradient(
      180deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0.713542) 28.65%,
      rgba(255, 255, 255, 0) 100%
    );
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__item {
    cursor: pointer;
    height: 155px;
    background: $white;
    background-repeat: no-repeat;
    background-size: 0%;
    box-shadow: 0px 2px 2px 1px rgb(0 0 0 / 16%);
    overflow: hidden;

    &-title {
      font-size: 14px;
      transition: 0.3s ease-out;
      color: #57595a;
    }
    &-btn {
      width: 40px;
      height: 40px;
      margin-left: -6px;
      svg rect {
        &:first-child {
          fill: #57595a;
        }
      }
    }
    &:hover {
      background-size: 100%;
      .submenu__item-title {
        color: #1b2ac9;
      }

      .submenu__item-btn {
        svg rect {
          &:first-child {
            fill: #1b2ac9;
          }
        }
      }
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: -29px;
    left: -6px;
    background: url("~assets/svg/angle.svg") no-repeat;
    width: 100%;
    height: 40px;
    z-index: -1;
  }
}
</style>
