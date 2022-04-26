<template>
  <div class="equipment">
    <div class="container">
      <h1 class="pages__title">{{ page.header }}</h1>
      <div v-for="(item, index) in page.items" :key="index">
        <h2 class="equipment__subtitle">{{ item.name }}</h2>
        <div class="equipment__video">
          <video loop="loop" :src="item.video" muted controls></video>
          <!-- <svgicon name="play" class="play" /> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      width: 0,
      item: {},
      page: {},
    };
  },
  async asyncData({ $axios }) {
    const page = await $axios.$get(
      `https://api.petexpert.pro/v1/pages/equipment/`
    );
    return { page };
  },
};
</script>
<style lang="scss">
.equipment {
  padding: 135px 0 160px;
  background: #f2f3f7;
  @media (max-width: 991px) {
    padding-top: 90px;
  }
  @media (max-width: 860px) {
    padding-bottom: 60px;
    .pages__title {
      padding-bottom: 40px;
    }
  }
  @media (max-width: 791px) {
    padding-top: 60px;
  }
  &__video {
    position: relative;
    width: 100%;
    cursor: pointer;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 142px;
      height: 142px;
      cursor: pointer;
      @media (max-width: 860px) {
        width: 80px;
        height: 80px;
      }
      @media (max-width: 390px) {
        width: 50px;
        height: 50px;
      }
    }
  }
  &__subtitle {
    font-size: 48px;
    line-height: 57px;
    color: $primary;
    font-weight: 600;
    margin-bottom: 50px;
    @media (max-width: 991px) {
      font-size: 35px;
    }
    @media (max-width: 860px) {
      font-size: 30px;
      line-height: 35px;
      margin-bottom: 30px;
    }
    @media (max-width: 500px) {
      font-size: 25px;
      line-height: 28px;
    }
  }
}
</style>
