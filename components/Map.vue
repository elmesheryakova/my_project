<template>
  <client-only>
    <div class="contacts-map">
      <!-- <div class="contacts-map__map" id="contact-map"></div> -->
      <div class="wrapper-map">
        <yandex-maps
          :zoom="zoom"
          @set-coords="coords = $event"
          :lat="lat"
          :lng="lng"
          :route_url="route_url"
        >
        </yandex-maps>
        <div class="animate-wrap">
          <div class="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div class="contacts-map__bottom">
        <div class="contacts-map__route-title">
          <img src="~/assets/img/route-icon.svg" alt="Маршрут" />
          <span>Маршрут</span>
        </div>
        <div class="contacts-map__route-links">
          <a
            :href="`https://www.google.com/maps/dir//${lat},${lng}`"
            target="_blank"
            class="
              contacts-map__route-link contacts-map__route-link--google
              js-route-google
            "
          >
            <div class="contacts-map__route-link-icon">
              <img src="~/assets/img/google-colored.svg" alt="Google maps" />
            </div>
            <span class="contacts-map__route-link-title">Google maps</span>
          </a>
          <a
            :href="`https://yandex.ru/maps/?mode=routes&rtext=~${lat},${lng}&rtt=auto`"
            target="_blank"
            class="
              contacts-map__route-link contacts-map__route-link--google
              js-route-yandex
            "
          >
            <div class="contacts-map__route-link-icon">
              <img
                src="~/assets/img/yandex-maps-colored.svg"
                alt="Яндекс карты"
              />
            </div>
            <span class="contacts-map__route-link-title">Яндекс карты</span>
          </a>
          <a
            :href="`${route_url}`"
            target="_blank"
            class="
              contacts-map__route-link contacts-map__route-link--2gis
              js-route-2gis
            "
          >
            <div class="contacts-map__route-link-icon">
              <img src="~/assets/img/2gis-colored.svg" alt="2 gis" />
            </div>
            <span class="contacts-map__route-link-title">2 gis</span>
          </a>
        </div>
      </div>
    </div></client-only
  >
</template>
<script>
import YandexMaps from "../components/YandexMaps";
export default {
  components: {
    YandexMaps,
  },
  props: {
    tabIndex: {
      type: Number,
    },
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
    route_url: {
      type: String,
    },
  },
  data() {
    return {
      zoom: 15,
    };
  },
  computed: {},
  created() {
    this.$bus.$on("get-data-point", (coords) => {});
  },
  beforeDestroy() {
    this.$bus.$off("get-data-point");
  },
};
</script>
<style lang="scss">
.wrapper-map * {
  touch-action: auto;
}
.wrapper-map {
  background-color: #ccc;
  height: 100%;
  width: 100%;
  position: relative;
  margin: 50px auto;

  [class*="ymaps-2"][class*="-ground-pane"] {
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
  }
  &.animate {
    .animate-wrap,
    .lds-ripple {
      display: block;
    }
  }
}
.animate-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f2f3f6;
  display: none;
}
.lds-ripple {
  // display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  display: none;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid rgb(146, 213, 247);
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
.contacts-map__bottom {
  position: absolute;
  bottom: 50px;
  left: 0;
  @media (max-width: 990px) {
    bottom: 0;
  }
}
</style>
