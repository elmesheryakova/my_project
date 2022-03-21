<template>
  <div class="specifications">
    <h3 class="advantages__item-title">Технические данные:</h3>
    <ul class="info-list">
      <li class="info-list__item" v-for="(item, index) in items" :key="index">
        <p>{{ item.title }}</p>
        <span></span>
        <p>{{ item.descr }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.specifications {
  padding-bottom: 110px;
  .info-list__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
    span {
      height: 1px;
      background-color: #f2f3f6;
      width: 100%;
      display: block;
      margin: 0 10px;
      margin-bottom: 10px;
    }
    @media (max-width: 830px) {
      font-size: 14px;
    }
  }
}
</style>
