<template>
  <div
    class="solution-mobile"
    :class="{ 'solution-mobile--frontpage': view === 'frontpage' }"
  >
    <nuxt-link
      v-for="(item, index) in items"
      :key="`item-${index}`"
      :to="
        item.svg_icon
          ? { name: 'solutions-slug', params: { slug: item.slug } }
          : { name: 'conception-slug', params: { slug: item.slug } }
      "
    >
      <div class="solution-mobile__btn">
        <div class="btn-img" v-if="item.image_mobile">
          <img :src="item.image_mobile[0]" alt="img" />
        </div>

        <p class="mb-0">{{ item.name }}</p>
        <div>
          <svgicon name="arrow-blue" />
        </div>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    view: {
      type: String,
      default: () => "default",
    },
  },
  data() {
    return {};
  },
  computed: {},
};
</script>
<style lang="scss">
.solution-mobile {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  padding: 60px 20px;
  padding-top: 0;
  &__btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: $primary;
    font-weight: 600;
    background: #f2f3f7;
    border-radius: 50px;
    padding: 10px;
    cursor: pointer;
    svg {
      width: 48px;
      height: 48px;
      fill: transparent;
      transform: rotate(-90deg);
    }
    .btn-img {
      width: 152px;
      height: 82px;
      border-radius: 52px;
      img {
        border-radius: 52px;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      @media (max-width: 390px) {
        width: 131px;
        height: 67px;
      }
    }
  }
  @media (max-width: 1300px) {
    margin-top: 60px;
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 390px) {
    padding: 60px 10px;
    padding-top: 0;
    p {
      font-size: 13px;
    }
  }
}
</style>
