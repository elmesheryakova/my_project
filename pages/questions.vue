<template>
  <div class="questions">
    <div class="container">
      <h1 class="pages__title">Вопросы и ответы</h1>
      <div class="questions__inner" role="tablist">
        <div class="questions__block">
          <div
            header-tag="header"
            role="tab"
            class="questions__item"
            v-for="(item, index) in questions"
            :key="index"
            v-b-toggle="`accordion-${index}`"
          >
            <div class="item-question">
              {{ item.question }}
              <div class="questions-item__icon">
                <svgicon name="arrow" />
              </div>
            </div>

            <b-collapse
              :id="`accordion-${index}`"
              visible
              accordion="my-accordion"
              role="tabpanel"
              class="questions-submenu__list"
            >
              <p class="mb-0 item-answer">{{ item.answer }}</p>
            </b-collapse>
          </div>
        </div>
        <div class="questions__block">
          <div
            header-tag="header"
            role="tab"
            class="questions__item"
            v-for="(item, index) in questions2"
            :key="index"
            v-b-toggle="`accord-${index}`"
          >
            <div class="item-question">
              {{ item.question }}
              <div class="questions-item__icon">
                <svgicon name="arrow" />
              </div>
            </div>

            <b-collapse
              :id="`accord-${index}`"
              visible
              accordion="my-accordion"
              role="tabpanel"
              class="questions-submenu__list"
            >
              <p class="mb-0 item-answer">{{ item.answer }}</p>
            </b-collapse>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      questions: this.$store.state.questions,
      questions2: this.$store.state.questions2,
    };
  },
  computed: {},
};
</script>
<style lang="scss">
.contacts-page,
.questions {
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
  &__inner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    @media (max-width: 790px) {
      grid-template-columns: 1fr;
    }
  }
  &-item__icon {
    width: 20px;
    height: 20px;
    transition: 0.3s ease-out;
    display: block;
    margin-left: 10px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
  &__item {
    background-color: #f2f3f6;
    align-self: start;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &.not-collapsed {
      .questions-item__icon {
        transform: rotate(180deg);
        transition: 0.3s ease-out;
      }
      .item-question {
        color: $primary;
      }
    }
  }

  .item-answer {
    background-color: #fff;
    padding: 10px;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    @media (max-width: 1130px) {
      font-size: 18px;
    }
    @media (max-width: 790px) {
      font-size: 16px;
    }
    @media (max-width: 370px) {
      font-size: 14px;
    }
  }
  .item-question {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 125px;
    font-weight: 400;
    font-size: 22px;
    line-height: 24px;
    cursor: pointer;
    @media (max-width: 1130px) {
      min-height: 100px;
      font-size: 20px;
    }
    @media (max-width: 790px) {
      font-size: 18px;
      min-height: 80px;
    }
    @media (max-width: 370px) {
      font-size: 16px;
    }
  }
}
</style>
