<template>
  <client-only
    ><div>
      <div class="product-info">
        <div class="product-info__slider">
          <VueSlickCarousel :settings="settings">
            <div
              v-for="(item, index) in items"
              :key="`item-${index}`"
              :class="`item-${index}`"
            >
              <img :src="require(`@/assets/img/${item.img}`)" alt="img" />
            </div>
            <template #prevArrow="arrowOption">
              <div class="custom-arrow">
                {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
              </div>
            </template>
          </VueSlickCarousel>
        </div>
        <div class="product-info__block">
          <h3 class="advantages__item-title">Преимущества ПЭТ-кеги</h3>
          <ul class="advantages__list">
            <li
              class="advantages__list-item"
              v-for="(item, index) in productOnly.advantages"
              :key="index"
            >
              <div class="advantages__list-svg">
                <svgicon name="romb" />
              </div>

              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <ProductSpecifications :items="productOnly.spicefication" />
    </div>
  </client-only>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: { VueSlickCarousel },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      settings: {
        arrow: true,
        infinite: true,
        edgeFriction: 0.35,

        slidesToShow: 1,
        slidesToScroll: 1,
      },
      productOnly: {
        advantages: [
          "Не требуется сложная перенастройка оборудования",
          "Не требуется инвестиций в оборудование",
          "Сопровождение и поддержка от технических специалистов компании ПЭТ-Эксперт",
          "Не требуется сложная перенастройка оборудования",
          "Не требуется инвестиций в оборудование",
          "Сопровождение и поддержка от технических специалистов компании ПЭТ-Эксперт",
        ],
        spicefication: [
          {
            title: "Назначение",
            descr: "хранение и транспортировка пищевых жидкостей",
          },
          {
            title: "Цвет",
            descr: "коричневый, прозрачный",
          },
          {
            title: "Вес с фитингом и трубкой",
            descr: "500 гр.+-10",
          },
          {
            title: "Материал преформы",
            descr: "ПЭТ (Полиэтилентерефталат)",
          },
          {
            title: "Тип фитинга",
            descr: "A",
          },
          {
            title: "Использование",
            descr: "одноразовый",
          },
          {
            title: "Назначение",
            descr: "хранение и транспортировка пищевых жидкостей",
          },
          {
            title: "Цвет",
            descr: "коричневый, прозрачный",
          },
          {
            title: "Вес с фитингом и трубкой",
            descr: "500 гр.+-10",
          },
          {
            title: "Материал преформы",
            descr: "ПЭТ (Полиэтилентерефталат)",
          },
          {
            title: "Тип фитинга",
            descr: "A",
          },
          {
            title: "Использование",
            descr: "одноразовый",
          },
        ],
      },
    };
  },

  computed: {},

  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="scss">
.product-info {
  display: grid;
  grid-template-columns: minmax(400px, 640px) 1fr;
  gap: 80px;
  margin-bottom: 50px;
  &__slider {
    max-width: 640px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  &__block {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
