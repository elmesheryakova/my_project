<template>
  <div class="container">
    <div class="header-top">
      <a href="/" class="header-top__logo"><svgicon name="logo" /></a>
      <div class="header-top__search">
        <input
          class="header-top__search-input"
          type="search"
          placeholder="Поиск"
        />
        <svgicon class="header-top__search-icon" name="search" />
      </div>
      <div class="header-top__info">
        <a class="info-tel" href="tel:+74995770006">+7(499) 577-00-06 </a>
        <a href="mailto:info@petexpert.pro">info@petexpert.pro</a>
        <button class="header-top__feedback" v-b-modal.modal-header>
          Обратная связь
        </button>
      </div>
      <HeaderNavbar />
    </div>
    <ModalHeader />
  </div>
</template>
<style lang="scss">
.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  &__logo {
    margin-right: 20px;
    svg {
      height: 33px;
      @media (max-width: 790px) {
        height: 25px;
      }
    }
  }
  &__search {
    border-radius: 1px;
    flex: 0 1 320px;
    position: relative;
    margin-right: 20px;
    &-input {
      width: 100%;
      background: $lightGrey;
      padding: 10px 12px;
      &::placeholder {
        color: $grey;
        font-weight: 300;
      }
    }
    &-icon {
      width: 16px;
      height: 16px;
      position: absolute;
      top: 10px;
      right: 12px;
      cursor: pointer;
    }
    @media (max-width: 991px) {
      display: none;
    }
  }
  &__info {
    color: $primary;
    display: flex;
    align-items: center;
    a {
      margin-right: 30px;
      white-space: nowrap;
      font-weight: 500;
      &:not(:first-child) {
        font-weight: 300;
        @media (max-width: 520px) {
          display: none;
        }
      }
      @media (max-width: 790px) {
        font-size: 14px;
      }
      @media (max-width: 400px) {
        margin-right: 10px;
        font-size: 13px;
      }
    }
    @media (max-width: 991px) {
      margin-left: auto;
    }
  }
  &__feedback {
    background: linear-gradient(271.8deg, #1b2ac9 -0.56%, #0073f0 100.44%);
    border-radius: 44px;
    font-weight: 300;
    color: #fff;
    padding: 11px 26px 12px;
    white-space: nowrap;
    transition: 0.3 ease-out;
    @media (max-width: 790px) {
      display: none;
    }
    &:hover {
      background: $primary;
      transition: 0.3 ease-out;
    }
  }
}
</style>
