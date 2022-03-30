<template>
  <yandex-map
    :coords="coords"
    :controls="[]"
    :behaviors="{
      scrollZoom: false,
      drag: false,
    }"
    :zoom="12"
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
      v-for="(location, index) in placemarks"
      :key="index"
      :marker-id="index"
      marker-type="placemark"
      :coords="location"
      :callbacks="{ click: getDataOfCoords }"
      cluster-name="1"
    ></ymap-marker>
  </yandex-map>
</template>

<script>
export default {
  components: {},
  props: {
    placemarks: {
      type: Array,
      required: true,
    },
    coords: {
      type: Array,
      required: true,
    },
    zoom: {
      type: Number,
      default: 12,
      required: true,
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
    },
  },
};
</script>

<style scoped>
.ymap-container {
  height: 100%;
}
</style>

