<template>
 <div class="container">
  <div class="footer-bottom">
   <div class="footer-bottom__contacts">
    <p>© {{ copyright }}</p>
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
     <a href="/Policy.pdf" target="_blank">Политика конфиденциальности</a>
     <a href="/cookie.pdf" target="_blank">Файлы cookie</a>
    </div>
    <div class="logo-wrap">
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

    <!-- <div class="awa-logo">
          <a href="http://awa.agency" target="_blank" class="logo-awa">
            <div class="logo-start">
              <svgicon name="start" />

            </div>
            <div class="logo-start1">
              <svgicon name="pre-finish" />

            </div>
            <div class="logo-finish">
              <svgicon name="finish" />

            </div>
          </a>
        </div> -->
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
  copyright: {
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
.logo-wrap {
 padding-right: 5px;
 margin-right: -5px;
}
.logo-awa {
 position: relative;
 width: 20px;
 height: 38px;
 cursor: pointer;
 display: block;
}

.logo-wrap:hover .logo-finish {
 opacity: 1;
 transform: translateX(-30px);
 transition: all 0.3s ease-out;
}

.logo-wrap:hover .logo-start1 {
 opacity: 1;
 transition: all 0.3s ease-out;
}

.logo-start1,
.logo-start {
 position: absolute;
 top: 0;
 right: 0;
 height: 16px;
 width: 100%;
}
.logo-start1 img,
.logo-start img {
 height: 100%;
}

.logo-start1 {
 opacity: 0;
 transition: all 0.3s ease-out;
}

.logo-finish {
 opacity: 0;
 transform: translateX(-20px);
 transition: all 0.3s ease-out;
 height: 25px;
 width: 100%;
}
.logo-finish img {
 height: 100%;
}
// .awa-logo {
//  padding: 5px;
// }
// .logo-awa {
//  position: relative;
//  width: 76px;
//  height: 20px;
//  cursor: pointer;
//  display: block;
// }

// .awa-logo:hover .logo-finish {
//  opacity: 1;
//  transform: translateX(25px);
//  transition: all 0.3s ease-out;
// }

// .awa-logo:hover .logo-start1 {
//  opacity: 1;
//  transition: all 0.3s ease-out;
// }

// .logo-start1,
// .logo-start {
//  position: absolute;
//  top: -4px;
//  right: 0;
//  width: 20px;
// }

// .logo-start1 {
//  opacity: 0;
//  transition: all 0.3s ease-out;
// }

// .logo-finish {
//  opacity: 0;
//  transform: translateX(30px);
//  transition: all 0.3s ease-out;
//  width: 50px;
//  height: 20px;
//  position: relative;
//  top: -1px;
//  svg {
//   height: auto;
//  }
// }
</style>
