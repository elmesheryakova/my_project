<template>
  <div class="specifications">
    <ul class="info-list">
      <li class="info-list__item" v-for="(item, index) in items" :key="index">
        <p>{{ item.title }}</p>
        <span></span>
        <p class="list__item-descr">{{ item.descr }}</p>
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
  padding-bottom: 90px;
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
    @media (max-width: 560px) {
      white-space: normal;

      p {
        &:not(:last-child) {
          white-space: nowrap;
          @media (max-width: 440px) {
            white-space: normal;
          }
        }
        width: 100%;
      }
      span {
        display: none;
      }
      .list__item-descr {
        width: 100%;
        text-align: right;
      }
    }
  }
}
</style>
