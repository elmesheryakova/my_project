<template>
  <div class="container">
    <div class="footer-bottom">
      <div class="footer-bottom__contacts">
        <p>© 2021, Пэт-експерт</p>
        <p>{{ address }}</p>
        <a :href="`tel:${phone.replace(/[^+\d]/g, '')}`" v-if="phone">{{
          phone
        }}</a>
        <a :href="`mailto:${mail}`">{{ mail }}</a>
      </div>
      <div class="footer-bottom__social">
        <ul class="footer-bottom__social-list">
          <li class="footer-bottom__social-item">
            <a href="#"> <svgicon name="vk" /></a>
          </li>
          <!-- <li class="footer-bottom__social-item">
            <a href="#"> <svgicon name="fb" /></a>
          </li>
          <li class="footer-bottom__social-item">
            <a href="#"> <svgicon name="insta" /></a>
          </li> -->
          <li class="footer-bottom__social-item">
            <a href="#"> <svgicon name="telegram" /></a>
          </li>
          <li class="footer-bottom__social-item">
            <a href="#"> <svgicon name="youtube" /></a>
          </li>
        </ul>
      </div>
      <div class="footer-bottom__links">
        <div>
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Файлы cookie</a>
        </div>

        <div class="awa-logo">
          <a href="http://awa.agency" target="_blank" class="logo-awa">
            <div class="logo-start">
              <img :src="require('@/assets/svg/start.svg')" alt="awa" />
            </div>
            <div class="logo-start1">
              <img :src="require('@/assets/svg/pre-finish.svg')" alt="awa" />
            </div>
            <div class="logo-finish">
              <img :src="require('@/assets/svg/finish.svg')" alt="awa" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    phone: {
      type: String,
    },
    mail: {
      type: String,
    },
    address: {
      type: String,
    },
    copiright: {
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.footer-bottom {
  margin-top: 70px;
  padding-top: 60px;
  border-top: 1px solid $grey;
  &__contacts {
    margin-bottom: 40px;
    p {
      margin-bottom: 10px;
    }
    a {
      display: block;
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }

  &__social-list {
    display: flex;
    gap: 20px;
    margin-bottom: 50px;
    svg {
      width: 46px;
      height: 46px;
    }
    @media (max-width: 400px) {
      gap: 15px;
    }
  }
  &__links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      text-decoration: underline;
      &:not(:last-child) {
        margin-right: 60px;
      }
    }
    @media (max-width: 580px) {
      align-items: flex-end;
      & > div {
        a {
          display: block;
          &:not(:last-child) {
            margin-bottom: 25px;
          }
        }
      }
    }
  }
}
.logo-awa {
  position: relative;
  width: 76px;
  height: 26px;
  cursor: pointer;
  display: block;
}

.logo-awa:hover .logo-finish {
  opacity: 1;
  transform: translateX(0);
  transition: all 0.3s ease-out;
}

.logo-awa:hover .logo-start1 {
  opacity: 1;
  transition: all 0.3s ease-out;
}
.logo-finish,
.logo-start1,
.logo-start {
  position: absolute;
  top: 0;
  right: 0;
}

.logo-start1 {
  opacity: 0;
  transition: all 0.3s ease-out;
}

.logo-finish {
  opacity: 0;
  transform: translateX(4px);
  transition: all 0.3s ease-out;
}
</style>
