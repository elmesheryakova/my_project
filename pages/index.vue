<template>
  <div id="fullpage-promo">
    <Promo>
      <template v-slot:main>
        <PromoVideo />
      </template>
      <template v-slot:bottom>
        <ChooseItem @click="onChooseItemClick"/>
      </template>
    </Promo>
  </div>
</template>
<script>
import Promo from "~/components/promo/Promo";
import PromoVideo from "~/components/promo/PromoVideo";
import ChooseItem from "~/components/promo/ChooseItem";
export default {
  components: {ChooseItem, PromoVideo, Promo},
  data() {
    return {};
  },
  methods: {
    onChooseItemClick(clickedBottleType) {
      console.log(clickedBottleType);
    }
  }
};
</script>
<style lang="scss">
#fullpage-promo {
  overflow-x: hidden;
}
</style>
