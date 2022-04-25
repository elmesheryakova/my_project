<template>
  <div class="career">
    <div class="container">
      <h1 class="pages__title">Карьера в PET-Expert</h1>
      <div class="career__block">
        <div
          header-tag="header"
          role="tab"
          v-for="(item, index) in career"
          :key="index"
          v-b-toggle="`accordion-${index}`"
          class="career__items"
        >
          <div class="career-city">
            {{ item.city }}
            <div class="career-city__icon">
              <svgicon name="arrow" />
            </div>
          </div>

          <b-collapse
            :id="`accordion-${index}`"
            visible
            accordion="my-accordion"
            role="tabpanel"
            class="career__item"
          >
            <div
              class="career-info"
              v-for="(item, index) in item.vacancy"
              :key="index"
            >
              <h4>{{ item.title }}</h4>
              <p class="mb-0" v-html="item.description"></p>
            </div>
            <p v-if="item.vacancy == 0">Вакансии отсутствуют</p>
          </b-collapse>
        </div>
      </div>
      <Subscribtion />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      career: [
        {
          city: "Москва",
          vacancy: [
            {
              id: 1,
              title: "Вакансия №1",
              description:
                "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.",
            },
            {
              id: 2,
              title: "Вакансия №2",
              description:
                "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.",
            },
            {
              id: 3,
              title: "Вакансия №3",
              description:
                "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.",
            },
            {
              id: 4,
              title: "Вакансия №4",
              description:
                "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.",
            },
            {
              id: 5,
              title: "Вакансия №5",
              description:
                "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.",
            },
            {
              id: 6,
              title: "Вакансия №6",
              description:
                "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.",
            },
          ],
        },

        {
          city: "Новосибирск",
          vacancy: [],
        },
        {
          city: "Краснодар",
          vacancy: [
            {
              id: 1,
              title: "Вакансия №1",
              description:
                "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.",
            },
            {
              id: 2,
              title: "Вакансия №2",
              description:
                "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.",
            },
            {
              id: 3,
              title: "Вакансия №3",
              description:
                "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.",
            },
            {
              id: 4,
              title: "Вакансия №4",
              description:
                "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.",
            },
            {
              id: 5,
              title: "Вакансия №5",
              description:
                "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.",
            },
            {
              id: 6,
              title: "Вакансия №6",
              description:
                "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.",
            },
          ],
        },
      ],
      width: 0,
    };
  },

  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
  },

  mounted() {
    window.addEventListener("resize", this.updateWidth);
    this.updateWidth();
  },
};
</script>
<style lang="scss">
.career {
  padding: 135px 0 0;

  @media (max-width: 991px) {
    padding-top: 90px;
  }

  @media (max-width: 791px) {
    padding-top: 60px;
  }
  &__item {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    @media (max-width: 991px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }
  &__items {
    &:not(:last-child) {
      margin-bottom: 80px;
    }

    .career-city {
      display: flex;
      // margin-bottom: 45px;
      font-size: 48px;
      line-height: 100px;
      font-weight: 600;
      position: relative;
      cursor: pointer;
      &__icon {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 20px;
        height: 20px;
        transition: 0.2s ease-out;
        display: block;
        margin-left: 100px;
        transform: translateY(-60px);
        svg {
          width: 20px;
          height: 20px;
        }
        @media (max-width: 410px) {
          margin-left: 50px;
        }
      }
      @media (max-width: 791px) {
        font-size: 36px;
      }
      @media (max-width: 410px) {
        font-size: 30px;
        line-height: 30px;
        margin-bottom: 20px;
      }
    }
    &.not-collapsed {
      .career-city__icon {
        transform: rotate(-180deg) translateY(-20px);
        transition: 0.2s ease-out;
      }
      .career-city {
        color: $primary;
      }
    }
  }
  &-info {
    padding: 25px;
    background-color: #f4f6f6;
    h4 {
      color: $primary;
      font-size: 24px;
      font-weight: 400;
      margin-bottom: 20px;
    }
    @media (max-width: 791px) {
      h4 {
        font-size: 20px;
      }
      p {
        font-size: 15px;
      }
    }
  }
}
</style>

