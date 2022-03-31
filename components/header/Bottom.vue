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
            <nuxt-link :to="item.link" class="item-menu__link">{{
              item.title
            }}</nuxt-link>
            <div class="icon-wrap">
              <svgicon
                class="item-menu__icon"
                name="arrow-header"
                v-if="item.icon"
              />
              <div class="submenu-wrapper" v-if="item.submenu">
                <HeaderSubmenu :submenu="item.submenu" />
              </div>
            </div>
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
  computed: {},
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
      transition: 0.3s ease-out;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 7px;
      padding-bottom: 20px;
      position: relative;
      cursor: pointer;
      &:hover {
        transition: 0.3s ease-out;
        .item-menu__icon {
          path {
            fill: $primary !important;
            transition: 0.3s ease-out;
          }
        }
        .item-menu__link {
          color: $primary;
          transition: 0.3s ease-out;
        }
        .submenu {
          height: auto;
          opacity: 1;
          visibility: visible;
          transition: 0.3s ease-out;
        }
      }
      &__link {
        color: $grey;
        font-size: 15px;
        font-weight: 300;
        letter-spacing: 1px;
        width: 100%;
        transition: 0.3s ease-out;
      }
      .icon-wrap {
        width: 40px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      &__icon {
        display: block;
        width: 5px;
        height: 3px;
      }
      &:hover {
        border-top: 1px solid $primary;
        transition: 0.3s ease-out;
        .item-menu__link {
          color: $primary;
          transition: 0.3s ease-out;
          & + .item-menu__icon {
            path {
              fill: $primary !important;
              transition: 0.3s ease-out;
            }
          }
        }
        // .submenu {
        //   height: auto;
        //   opacity: 1;
        //   visibility: visible;
        //   transition: 0.3s ease-out;
        // }
      }
    }
  }
  @media (max-width: 991px) {
    display: none;
  }
}
</style>
