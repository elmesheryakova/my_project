<template>
  <div class="container">
    <div class="header-bottom">
      <nav class="header-bottom__menu">
        <ul class="header-bottom__menu-list">
          <li
            class="header-bottom__menu-item item-menu"
            v-for="(item, index) in headerLinks"
            :key="index"
          >
            <nuxt-link to="#" class="item-menu__link">{{
              item.title
            }}</nuxt-link>
            <svgicon
              class="item-menu__icon"
              name="arrow-header"
              v-if="item.icon"
            />
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headerLinks: this.$store.state.headerLinks,
    };
  },
};
</script>
<style lang="scss">
.header-bottom {
  &__menu {
    &-list {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      column-gap: 48px;
      margin-bottom: 0;
    }
    .item-menu {
      border-top: 1px solid $grey;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 7px;
      &__link {
        color: $grey;
        font-size: 15px;
        font-weight: 300;
        letter-spacing: 1px;
      }
      &__icon {
        display: block;
        width: 5px;
        height: 3px;
      }
    }
  }
  @media (max-width: 991px) {
    display: none;
  }
}
</style>
