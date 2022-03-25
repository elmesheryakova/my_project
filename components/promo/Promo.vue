<template>
  <div class="js-section fp-auto-height">
    <div class="promo js-promo">
      <div class="promo__main">
        <slot name="main"></slot>
      </div>
      <slot name="bottom"></slot>
    </div>
  </div>
</template>
<script>
import PromoVideo from "~/components/promo/PromoVideo";

export default {
  components: {PromoVideo},

  data() {
    return {
    };
  },
};
</script>
<style lang="scss">

.promo-slides-container {
  position: relative;
}

.promo {
  position: relative;
  height: 100vh;
  padding-top: var(--header-height);
  display: flex;
  flex-direction: column;
  z-index: 4;
}

.promo__main {
  width: 100%;
  position: relative;
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  padding-bottom: 30px;
  padding-left: 30px;
}

.promo__choose {
  flex-shrink: 1;
  flex-grow: 0;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 3;
  background-color: #fff;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    margin-left: -2px;
    pointer-events: none;
    width: 2px;
    height: 100%;
    background-color: $grayPet;
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    pointer-events: none;
    width: 100%;
    height: 2px;
    background-color: $grayPet;
  }
}


.promo__choose-title {
  display: none;
}

.promo__choose-item {
  padding: 35px 0 50px;
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid transparent;
  width: 50%;
  @include tr((background-color, border-color));

  span {
    color: $black;
  }

  svg path {
    @include tr((fill, stroke));
  }

  &:hover {
    border-color: $primary;
    text-decoration: none;

    span {
      color: $primary;
    }
  }

  &.active {
    border-color: $primary;
    background-color: $primary;

    .icon-fill {
      fill: white;
    }

    .icon-stroke {
      stroke: white;
    }

    span {
      color: white;
    }
  }

  &:first-of-type {
    width: calc(50% - 1px);
  }

  &:last-of-type {
    position: relative;
    left: -1px;
    width: calc(50% + 1px);
  }
}

.promo__choose-item span {
  margin-left: 25px;
  font-size: 24px;
  @include tr((color));
}


@include down('lg') {
  .promo {
    height: auto;
    padding-top: 90px;
    overflow: hidden;
  }

  .promo__main {
    position: relative;
    height: 0;
    padding-bottom: 62%;
  }

  .promo__choose {
    flex-wrap: wrap;
  }

  .promo__choose-title {
    display: flex;
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    position: relative;
    z-index: 1;
    font-size: 24px;
    padding-top: 28px;
    padding-bottom: 32px;
    line-height: 1.3;

    span {
      color: $primary;
    }
  }
  .promo__choose-title-inner {
    max-width: 300px;
  }

  .promo__choose-item {
    height: 100px;
    padding: 0;
    border-top-color: $grayPet;

    svg {
      max-width: 100%;
      max-height: 100%;
    }

    span {
      margin-left: 0;
      font-size: 18px;
    }
  }

  .promo__choose-item-icon {
    height: 70px;
  }

}

@include down('md') {
  .promo {
    padding-top: 60px;
  }
}

@include down('sm') {
  .promo__main {
    padding-bottom: 128%;
  }
}

@include down('xs') {
  .promo__choose-item {
    svg {
      width: auto;
      height: auto;
      margin-right: 16px;
    }
  }
  .promo__choose-item--2 {
    span {
      display: block;
      margin-top: 1px;
    }
  }
}

@media screen and (max-height: 800px) and (min-width: map-get($grid-breakpoints, 'lg')) {
  .promo__choose-item {
    height: 100px;
    padding: 0;

    svg {
      max-width: 100%;
      max-height: 100%;
    }

    span {
      margin-left: 4px;
    }
  }
  .promo__choose-item-icon {
    height: 80px;
  }
}
</style>
