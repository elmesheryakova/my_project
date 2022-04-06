<template>
  <div>
    <div v-if="isTabletOrDesktop">
      <video
        :poster="require('~/assets/img/banner.jpg')"
        autoplay="autoplay"
        :muted="!toggled"
        loop="loop"
        :controls="toggled"
        @click="
          toggled ? (toggled = false) : true;
          $emit('video-change', false);
        "
        class="promo__video js-promo-video"
        :src="videoSrc"
        data-autoplay
      ></video>
      <a
        v-if="!toggled"
        href="#"
        role="button"
        class="promo__play-video-button js-promo-play-video"
        @click.prevent="
          toggled = !toggled;
          $emit('video-change', toggled);
        "
      >
        <img
          :src="require('@/assets/img/play.svg')"
          alt="Воспроизвести видео"
        />
      </a>
    </div>
    <div v-else>
      <PromoMobileSlider :images="mobileSliderImages" />
    </div>
  </div>
</template>
<script>
import PromoMobileSlider from "~/components/promo/PromoMobileSlider";

export default {
  name: "PromoVideo",
  components: { PromoMobileSlider },
  computed: {
    isTabletOrDesktop() {
      return (
        this.$mq === "md" ||
        this.$mq === "lg" ||
        this.$mq === "xl" ||
        this.$mq === "xl2"
      );
    },
    videoSrc() {
      return this.toggled
        ? require("@/assets/video/video1.mp4")
        : require("@/assets/video/video-thumb.webm");
    },
  },

  data() {
    return {
      width: 0,
      mobileSliderImages: [
        {
          src: "m-banner.png",

          alt: "img",
          text: "Новая норма упаковки",
        },
        // {
        //   src: 'https://images.unsplash.com/photo-1570102881689-c04ab4cf1f4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        //   alt: 'img'
        // },
        // {
        //   src: 'https://images.unsplash.com/photo-1647034166469-22eac250676a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        //   alt: 'img'
        // },
      ],
      toggled: false,
    };
  },
};
</script>

<style lang="scss">
.promo__video {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.promo__play-video-button {
  position: absolute;
  z-index: 2;
  opacity: 0.6;
  bottom: 30px;
  left: 30px;
  @include tr((opacity));

  &:hover {
    opacity: 1;
  }
}

@include up("lg") {
  .promo__play-video-button {
    display: none;
  }
}

@include down("sm") {
  .promo__video {
    display: none;
  }

  .promo__mobile-slider {
    display: flex;
  }
}
</style>
