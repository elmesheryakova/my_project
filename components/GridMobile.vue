<template>
  <div class="container">
    <div class="grid">
      <div class="grid__item" v-for="(item, index) in items" :key="index">
        <div class="grid__item-img">
          <img :src="item.image" alt="img" />
        </div>
        <div class="grid__info">
          <h2 class="grid__info-title">{{ item.name }}</h2>
          <p class="grid__info-article">{{ item.sku }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    width: {
      type: Number,
    },
  },
};
</script>
<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 100px;
  &__item {
    width: 150px;
    margin: 0 auto;
    &-img {
      width: 150px;
      height: 180px;
      margin-bottom: 5px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    @media (max-width: 340px) {
      width: 140px;
      &-img {
        width: 140px;
      }
    }
  }

  &__info {
    text-align: left;
    &-title {
      font-size: 14px;
      line-height: 18px;
      margin-bottom: 5px;
      font-weight: 600;
    }
    &-article {
      font-size: 14px;
      color: #d1d0d0;
    }
  }
  @media (max-width: 525px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
}
</style>
