<template>
  <div class="service">
    <div class="container">
      <h1 class="pages__title">Поддержка и сервис</h1>
      <div class="service__inner">
        <div class="service__info">
          <h2 class="service__info-title">
            Легкий и быстрый переход с металла на ПЭТ-КЕГ
          </h2>
          <p class="service__info-subtitle">
            ПЭТ-КЕГ подходит под все типы линий розлива в т.ч. с использованием
            адаптера
          </p>
          <ul class="service__list">
            <li class="service__list-item d-flex">
              <div class="shipment__list-svg">
                <svgicon name="romb" />
              </div>
              Для перехода не требуется сложная перенастройка оборудования
            </li>
            <li class="service__list-item d-flex">
              <div class="shipment__list-svg">
                <svgicon name="romb" />
              </div>
              Не требуется инвестиций в оборудование
            </li>
            <li class="service__list-item d-flex">
              <div class="shipment__list-svg">
                <svgicon name="romb" />
              </div>
              Настройку, консультации и инструктаж проведет команда технических
              специалистов компании «ПЭТ-Эксперт»
            </li>
          </ul>
        </div>
        <div class="service__img">
          <img :src="require(`@/assets/img/service.jpg`)" alt="img" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.service {
  padding: 135px 0 160px;

  @media (max-width: 991px) {
    padding-top: 90px;
  }
  @media (max-width: 860px) {
    padding-bottom: 60px;
  }
  @media (max-width: 791px) {
    padding-top: 60px;
  }
  &__info {
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    &-subtitle {
      padding-bottom: 30px;
      @media (max-width: 1200px) {
        padding-bottom: 10px;
      }
    }
    @media (max-width: 1300px) {
      font-size: 22px;
    }
    @media (max-width: 1200px) {
      font-size: 20px;
    }
    @media (max-width: 1040px) {
      font-size: 18px;
      line-height: 22px;
    }
    @media (max-width: 640px) {
      padding-top: 40px;
      font-size: 16px;
    }
    @media (max-width: 370px) {
      font-size: 16px;
    }
  }
  &__info-title {
    color: $primary;
    font-size: 48px;
    line-height: 57px;
    font-weight: 600;
    padding-bottom: 40px;
    @media (max-width: 1300px) {
      font-size: 40px;
      line-height: 42px;
    }
    @media (max-width: 1200px) {
      font-size: 36px;
      padding-bottom: 20px;
    }
    @media (max-width: 1040px) {
      font-size: 30px;
      line-height: 32px;
      padding-bottom: 20px;
    }
  }
  &__inner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 70px;
    @media (max-width: 1040px) {
      gap: 20px;
    }
    @media (max-width: 860px) {
      grid-template-columns: 1fr;
    }
  }
  &__img {
    img {
      width: 100%;
    }
    @media (max-width: 860px) {
      margin-right: -20px;
      margin-left: -20px;
      img {
        width: 110%;
      }
    }
    @media (max-width: 640px) {
      order: -1;
    }
  }
  &__list {
    &-item {
      &:not(:last-child) {
        margin-bottom: 25px;
        @media (max-width: 1200px) {
          margin-bottom: 15px;
        }
      }
    }
  }
}
</style>
