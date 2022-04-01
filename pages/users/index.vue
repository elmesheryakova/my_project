<template>
  <div>
    <div v-for="(item, idx) in users" :key="idx">
      <div class="users">
        <nuxt-link
          no-prefetch
          :to="{ name: 'users-id', params: { id: item.id } }"
        >
          <h5>
            {{ item.name }}
          </h5></nuxt-link
        >
        <p>{{ item.phone }}</p>
      </div>
    </div>
    <div class="block">
      <SliderSolutions ref="block" />
    </div>
    <Feedback :offsetTop="offsetTop" />
    <Footer />
  </div>
</template>
<script>
export default {
  layout: "fullscreen",
  data() {
    return {
      users: [],
      offsetTop: 0,
      elemOffsetTop: 0,
      elemHeight: 0,
    };
  },

  async fetch() {
    const data = await (
      await fetch("https://jsonplaceholder.typicode.com/users/")
    ).json();

    this.users = data;
  },
  methods: {
    scrollTop() {
      const elem = document
        .querySelector(".slider-sol")
        .getBoundingClientRect().top;
      this.offsetTop = elem;
      console.log(elem);
    },

    initBlock() {
      var initBlock = this.$gsap.timeline();

      initBlock.to(this.$refs.block.$el, {
        scrollTrigger: {
          trigger: this.$refs.block.$el,
          end: "+=200%",
          start: "bottom bottom",
          pin: true,
          pinSpacing: false,
          scrub: true,
          markers: true,
        },
      });
    },

    init() {
      var self = this;
      this.isDesktop = this.$mq === "xl" || this.$mq === "xl2";
      if (this.isDesktop) {
        this.$nextTick(() => {
          self.initBlock();
        });
      }
    },
  },
  mounted() {
    this.init();
    window.addEventListener("scroll", this.scrollTop);
  },
};
</script>
<style lang="scss">
.block1 {
  height: 600px;
}
</style>
