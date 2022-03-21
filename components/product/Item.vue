<template>
  <div class="product-card">
    <div class="product-card__img">
      <img :src="require(`@/assets/img/${item.img}`)" alt="img" />
    </div>
    <div class="product-card__info">
      <h4 class="info-title">
        {{ item.title }}
      </h4>
      <ul class="info-list">
        <li class="info-list__item">
          <p>Назначение</p>
          <span></span>
          <p>{{ item.description }}</p>
        </li>
        <li class="info-list__item">
          <p>Цвет</p>
          <span></span>
          <p>{{ item.color }}</p>
        </li>
        <li class="info-list__item">
          <p>Вес с фитингом и трубкой</p>
          <span></span>
          <p>{{ item.weight }}</p>
        </li>
        <li class="info-list__item">
          <p>Материал преформы</p>
          <span></span>
          <p>{{ item.material }}</p>
        </li>
        <li class="info-list__item">
          <p>Тип фитинга</p>
          <span></span>
          <p>{{ item.type }}</p>
        </li>
        <li class="info-list__item">
          <p>Использование</p>
          <span></span>
          <p>{{ item.usage }}</p>
        </li>
      </ul>
      <nuxt-link
        class="advantages__item-link"
        :to="{ name: 'products-id', params: { id: item.id } }"
      >
        <p class="mb-0">Подробнее</p>
        <svgicon name="arrow-blue" />
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style lang="scss">
.product-card {
  display: grid;
  grid-template-columns: minmax(250px, 440px) 1fr;
  gap: 130px;
  margin-bottom: 125px;
  &__img {
    max-width: 440px;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .info-title {
      font-size: 36px;
      font-weight: 600;
      color: $primary;
      @media (max-width: 880px) {
        font-size: 25px;
      }
      @media (max-width: 755px) {
        padding-bottom: 60px;
      }
      @media (max-width: 460px) {
        font-size: 18px;
        padding-bottom: 20px;
      }
    }
    .info-list {
      @media (max-width: 755px) {
        display: none;
      }
    }
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
    @media (max-width: 755px) {
      justify-content: center;
      .advantages__item-link {
        font-size: 18px;
        svg {
          width: 35px;
          height: 35px;
        }
      }
    }
  }
  @media (max-width: 1170px) {
    gap: 30px;
  }
  @media (max-width: 755px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 460px) {
    gap: 10px;
    margin-bottom: 50px;
  }
}
</style>
