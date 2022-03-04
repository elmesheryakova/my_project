<template>
  <div class="burger-wrapper">
    <b-button v-b-toggle.sidebar-backdrop class="burger-menu">
      <span></span
    ></b-button>

    <b-sidebar
      id="sidebar-backdrop"
      title="Sidebar with backdrop"
      right
      backdrop
      shadow
      no-header
      @change="toggleBodyScrollbar"
    >
      <div class="subnav-menu__inner">
        <div class="subnav-menu__wrapper">
          <a href="/" class="subnav-menu__logo"><svgicon name="logo" /></a>
          <a class="subnav-menu__tel" href="tel:+74995770006"
            >+7(499) 577-00-06
          </a>
        </div>

        <nav class="subnav__menu">
          <ul class="subnav__menu-list">
            <li
              class="subnav__menu-item"
              v-for="(item, index) in headerLinks"
              :key="index"
            >
              <nuxt-link to="#" class="subnav__menu-item__link">{{
                item.title
              }}</nuxt-link>
              <svgicon
                class="subnav__menu-item__icon"
                name="arrow-submenu"
                v-if="item.icon"
              />
            </li>
          </ul>
        </nav>
        <div class="subnav__menu-search">
          <input
            class="subnav__menu-search-input"
            type="search"
            placeholder="Поиск"
          />
          <div class="search-icon__wrap">
            <svgicon class="subnav__menu-search-icon" name="search-blue" />
          </div>
        </div>
        <div class="subnav__menu-btn">
          <button class="subnav__menu-feedback">Обратная связь</button>
        </div>
        <div class="subnav__menu-social">
          <ul class="subnav__menu-social__list">
            <li class="subnav__menu-social__item">
              <a href="#"> <svgicon name="fb-nav" /></a>
            </li>
            <li class="subnav__menu-social__item">
              <a href="#"> <svgicon name="insta-nav" /></a>
            </li>
            <li class="subnav__menu-social__item">
              <a href="#"> <svgicon name="telegram-nav" /></a>
            </li>
            <li class="subnav__menu-social__item">
              <a href="#"> <svgicon name="whatsapp-nav" /></a>
            </li>
          </ul>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headerLinks: this.$store.state.headerLinks,
    };
  },
  methods: {
    toggleBodyScrollbar(visible) {
      const html = document.getElementsByTagName("html")[0];
      const burger = document.querySelector(".burger-menu");

      if (visible) {
        html.style.overflow = "hidden";
        burger.classList.add("active");
      } else {
        html.style.overflow = "auto";
        burger.classList.remove("active");
      }
    },
  },
};
</script>
<style lang="scss">
.burger-wrapper {
  display: none;
  .b-sidebar {
    background-color: $white !important;
    width: 375px;
    @media (max-width: 400px) {
      width: 100%;
    }
  }
  @media (max-width: 991px) {
    display: block;
    position: relative;
    z-index: 999;
  }

  .burger-menu {
    flex: 0 0 40px;
    height: 40px;
    width: 40px;
    background-color: $primary;
    border-color: $primary;
    box-shadow: none;
    border: none;
    border-radius: 50%;
    position: relative;
    z-index: 9999;
    margin-left: 20px;
    padding: 0;
    span {
      position: absolute;
      width: 20px;
      height: 1px;
      background-color: $white;
      top: 18px;
      left: 10px;
      transition: 0.3s ease-out;
      &::after {
        content: "";
        position: absolute;
        top: 5px;
        left: 0;
        width: 20px;
        height: 1px;
        background-color: $white;
        display: block;
        transition: 0.3s ease-out;
      }
    }

    @media (max-width: 790px) {
      margin-left: 0;
    }
  }

  .btn-secondary:hover,
  .btn-secondary:focus,
  .btn-secondary:hover,
  .btn-secondary:not(:disabled):not(.disabled):active,
  .btn-secondary:not(:disabled):not(.disabled).active,
  .show > .btn-secondary.dropdown-toggle {
    background-color: $primary;
    border-color: $primary;
    box-shadow: none;
    padding: 0;
    &.active {
      background-color: $white;
      border: none;
      span {
        transition: 0.3s ease-out;
        left: 10px;
        top: 20px;
        transform: rotate(45deg);
        background-color: $primary;
        &::after {
          transform: rotate(90deg);
          transition: 0.3s ease-out;
          top: 0;
          background-color: $primary;
        }
      }
    }
  }
  .subnav-menu__inner {
    padding: 10px;
    overflow-y: auto;
    height: 100%;
    @media (max-width: 790px) {
      padding: 10px 3px 10px 0;
    }
  }
  .subnav-menu__wrapper {
    display: flex;
    align-items: center;
    padding: 20px;
    padding-top: 33px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    width: 100%;
    @media (max-width: 790px) {
      padding: 10px;
      padding-top: 17px;
    }
  }
  .subnav-menu__logo {
    display: inline-block;
    margin-right: 30px;
    svg {
      height: 25px;
      @media (max-width: 360px) {
        height: 23px;
      }
    }
    @media (max-width: 360px) {
      margin-right: 15px;
    }
  }
  .subnav-menu__tel {
    font-weight: 500;
    font-size: 14px;
    color: $black;
    @media (max-width: 360px) {
      font-size: 13px;
    }
  }
  .subnav__menu {
    padding: 80px 0px 20px 10px;
    &-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &__link {
        font-size: 24px;
        line-height: 32px;
        color: $black;
      }
      &__icon {
        width: 50px;
        height: 50px;
      }
      &:not(:last-child) {
        margin-bottom: 25px;
      }
      &:last-child {
        margin-top: 35px;
      }
    }
    @media (max-width: 780px) {
      padding-right: 7px;
      padding-top: 60px;
    }
    @media (max-width: 400px) {
      padding-right: 3px;
    }
    &-search {
      border-radius: 1px;
      position: relative;
      margin: 0 10px 35px;
      flex: 0 1 320px;
      &-input {
        width: 100%;
        background: $lightGrey;
        padding: 14px 12px;
        &::placeholder {
          color: $grey;
          font-weight: 300;
        }
      }
      .search-icon__wrap {
        width: 45px;
        height: 45px;
        background-color: $white;
        border: 1px solid $primary;
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &-icon {
        width: 16px;
        height: 16px;
        cursor: pointer;
      }
    }
    &-btn {
      text-align: center;
      margin-bottom: 30px;
    }
    &-feedback {
      border: 1px solid $primary;
      background-color: $white;
      border-radius: 44px;
      font-weight: 300;
      color: $primary;
      padding: 16px 30px;
      white-space: nowrap;
    }
  }
  .subnav__menu-social {
    &__list {
      display: flex;
      justify-content: center;
    }
    &__item {
      &:not(:last-child) {
        margin-right: 20px;
      }
      svg {
        width: 46px;
        height: 46px;
      }
    }
  }
}
</style>
