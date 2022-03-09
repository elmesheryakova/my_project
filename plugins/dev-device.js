import Vue from "vue";
export default function (ctx, inject) {
  const mixin = {
    computed: {
      $isMobile() {

        return this.$mq === "sm";
      }
    },
    watch: {
      $mq() {
        console.log(this.$mq);
      }
    }
  };
  ctx.app.mixins = [mixin];
}
