<template>
  <client-only>
    <div class="contacts-map">
      <!-- <div class="contacts-map__map" id="contact-map"></div> -->
      <div class="wrapper-map">
        <yandex-maps
          :coords="this.mapCoords"
          :placemarks="items"
          :zoom="zoom"
          @set-coords="coords = $event"
        >
        </yandex-maps>
      </div>
      <div class="contacts-map__bottom">
        <div class="contacts-map__route-title">
          <img src="~/assets/img/route-icon.svg" alt="Маршрут" />
          <span>Маршрут</span>
        </div>
        <div class="contacts-map__route-links">
          <a
            href="https://www.google.com/maps/dir//55.386574,36.728607"
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
            href="https://yandex.ru/maps/?mode=routes&rtext=~55.386574,36.728607&rtt=auto"
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
            href="https%3A%2F%2F2gis.ru%2Fdirections%2Fpoints%2F%7C36.728607%2C55.386574%3Fm%3D36.728607%2C55.386574"
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
  },
  data() {
    return {
      zoom: 15,
      items: [
        [55.386021, 36.728357],
        [54.983242, 82.870423],
        [45.034214, 39.014469],
      ],
      coords: [55.386021, 36.728357],
    };
  },
  computed: {
    mapCoords() {
      if (this.tabIndex === 0) {
        return [55.386021, 36.728357];
      } else if (this.tabIndex === 1) {
        return [54.983242, 82.870423];
      } else if (this.tabIndex === 2) {
        return [45.034214, 39.014469];
      }
    },
  },
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
}

.contacts-map__bottom {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
