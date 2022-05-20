<template>
  <yandex-map
    :coords="[lat, lng]"
    :controls="['zoomControl']"
    :zoom="15"
    :scrollZoom="false"
    :multiTouch="true"
    @map-was-initialized="initHandler"
    :options="{
      suppressMapOpenBlock: true,
      autoFitToViewport: 'always',
    }"
    :cluster-options="{
      1: {
        clusterDisableClickZoom: false,
        hasBalloon: false,
      },
    }"
  >
    <ymap-marker
      marker-type="placemark"
      :coords="[lat, lng]"
      :callbacks="{ click: getDataOfCoords }"
      cluster-name="1"
      :icon="{
        layout: 'default#image',
        imageHref: require(`@/assets/svg/map.svg`),
        imageSize: [30, 40],
        imageOffset: [-15, -35],
      }"
    ></ymap-marker>
  </yandex-map>
</template>

<script>
export default {
  components: {},
  props: {
    zoom: {
      type: Number,
      default: 15,
      required: true,
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
      map: {},
    };
  },
  methods: {
    getDataOfCluster(obj) {
      // const coords = obj.get('coords').join()
      // const clust = this.map.geoObjects.get(0)
      const zoom = this.map.getZoom();

      if (zoom > 9) {
        this.getDataOfCoords(obj);
      }
    },
    getDataOfCoords(obj) {
      this.$emit("set-coords", obj.get("coords"));
      const coords = obj.get("coords").join();
      const clust = this.map.geoObjects.get(0);

      this.$bus.$emit("get-data-point", coords);
    },
    initHandler(obj) {
      this.map = obj;
      // event.behaviors.disable(["drag", "multiTouch"]);
    },
  },

  mounted() {},
};
</script>

<style scoped>
.ymap-container {
  height: 100%;
}
</style>

