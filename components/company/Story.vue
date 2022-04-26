<template>
  <client-only>
    <div class="story">
      <b-card no-body>
        <b-tabs pills card vertical end>
          <h2 class="story__title">
            История <br />
            <span>развития</span>
          </h2>
          <b-tab v-for="(item, index) in items" :key="index">
            <template #title>
              <svgicon name="romb" />
              {{ item.name }}
            </template>

            <b-card-text>
              <div class="story__items">
                <div
                  class="story-item"
                  v-for="(item, index) in item.elements"
                  :key="index"
                >
                  <p class="story-item__num">{{ item.value }}</p>
                  <p class="story-item__subtitle">{{ item.title }}</p>
                  <p class="story-item__text" v-html="item.description"></p>
                </div>
              </div>
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </client-only>
</template>
<script>
export default {
  props: {
    width: {
      type: Number,
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      story: [
        {
          id: 1,
          year: 2006,
          info: [
            {
              num: "6540",
              subtitle: "Рост и развитие",
              description:
                "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством.",
            },
            {
              num: "+12%",
              subtitle: "Рост и развитие",
              description:
                "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.",
            },
            {
              num: ">20%",
              subtitle: "Рост и развитие",
              description:
                "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством продукции и подхода к клиентам. ",
            },
          ],
        },
        {
          id: 2,
          year: 2010,
          info: [
            {
              num: "3540",
              subtitle: "Рост и развитие",
              description:
                "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством.",
            },
            {
              num: "+11%",
              subtitle: "Рост и развитие",
              description:
                "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.",
            },
            {
              num: ">25%",
              subtitle: "Рост и развитие",
              description:
                "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством продукции и подхода к клиентам. ",
            },
          ],
        },
        {
          id: 3,
          year: 2012,
          info: [
            {
              num: "4540",
              subtitle: "Рост и развитие",
              description:
                "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством.",
            },
            {
              num: "+12%",
              subtitle: "Рост и развитие",
              description:
                "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.",
            },
            {
              num: ">20%",
              subtitle: "Рост и развитие",
              description:
                "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством продукции и подхода к клиентам. ",
            },
          ],
        },
        {
          id: 4,
          year: 2016,
          info: [
            {
              num: "6540",
              subtitle: "Рост и развитие",
              description:
                "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством.",
            },
            {
              num: "+11%",
              subtitle: "Рост и развитие",
              description:
                "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.",
            },
            {
              num: ">20%",
              subtitle: "Рост и развитие",
              description:
                "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством продукции и подхода к клиентам. ",
            },
          ],
        },
        {
          id: 5,
          year: 2018,
          info: [
            {
              num: "6540",
              subtitle: "Рост и развитие",
              description:
                "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством.",
            },
            {
              num: "+12%",
              subtitle: "Рост и развитие",
              description:
                "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.",
            },
            {
              num: ">50%",
              subtitle: "Рост и развитие",
              description:
                "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством продукции и подхода к клиентам. ",
            },
          ],
        },
        {
          id: 6,
          year: 2021,
          info: [
            {
              num: "6540",
              subtitle: "Рост и развитие",
              description:
                "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством.",
            },
            {
              num: "+12%",
              subtitle: "Рост и развитие",
              description:
                "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.",
            },
            {
              num: ">20%",
              subtitle: "Рост и развитие",
              description:
                "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством продукции и подхода к клиентам. ",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.story {
  position: relative;
  height: 100%;

  svg {
    width: 20px;
    height: 20px;
  }
  &__title {
    font-weight: 600;
    font-size: 64px;
    line-height: 77px;
    color: $primary;
    padding-bottom: 150px;
    position: relative;
    padding-left: 15px;
    margin-left: auto;
    width: 83%;
    &::after {
      position: absolute;
      content: "";
      top: 200px;
      left: 20px;

      height: 72px;
      width: 1px;
      background-color: $black;
    }
    span {
      color: $black;
    }
    @media (max-width: 1870px) {
      width: 85%;
    }
    @media (max-width: 1720px) {
      width: 87%;
    }
    @media (max-width: 1650px) {
      width: 90%;
    }
    @media (max-width: 1560px) {
      width: 92%;
    }
    @media (max-width: 1510px) {
      width: 94%;
    }
    @media (max-width: 1410px) {
      width: 97%;
    }
    @media (max-width: 1340px) {
      width: 99%;
    }
    @media (max-width: 1200px) {
      font-size: 50px;
      line-height: 60px;
      padding-bottom: 100px;
      &::after {
        top: 150px;
        height: 60px;
      }
    }
    @media (max-width: 1180px) {
      padding: 60px 0 40px;
      &::after {
        display: none;
      }
    }
    @media (max-width: 580px) {
      font-size: 36px;
      line-height: 45px;
      padding: 60px 0 20px;
    }
    @media (max-width: 500px) {
      font-size: 32px;
      line-height: 38px;
    }
  }
  .nav-link {
    font-size: 24px;
  }
  .tabs {
    background: #f2f3f6;
    height: auto;
    padding-top: 100px;
    @media (max-width: 1180px) {
      height: 100%;
      background: #fff;
      padding-top: 0;
    }
  }
  .card {
    border: none;
  }
  .card-body {
    padding-bottom: 0;
    @media (max-width: 1180px) {
      padding-left: 0;
      padding-right: 0;
    }
  }
  .card-text {
    margin-left: auto;
    width: 83%;
    @media (max-width: 1870px) {
      width: 85%;
    }
    @media (max-width: 1720px) {
      width: 87%;
    }
    @media (max-width: 1650px) {
      width: 90%;
    }
    @media (max-width: 1560px) {
      width: 92%;
    }
    @media (max-width: 1510px) {
      width: 94%;
    }
    @media (max-width: 1410px) {
      width: 97%;
    }
    @media (max-width: 1340px) {
      width: 99%;
    }
    @media (max-width: 1180px) {
      width: 100%;
      margin: 0;
    }
  }
  .tab-content {
    margin-top: auto;
  }
  .nav {
    position: absolute;
    top: 0;
    right: 0;
    width: 480px;
    background-color: #fff;
    justify-content: center;
    padding: 100px 0;
    flex-wrap: nowrap;
    &::after {
      position: absolute;
      content: "";
      top: 0;
      left: 50%;
      height: 100%;
      width: 1px;
      background-color: #f2f3f6;
      z-index: 1;
    }
    &-link {
      height: 100px;
      text-align: center;
      padding-left: 115px;
      svg {
        margin-right: 40px;
        position: relative;
        z-index: 2;
      }

      &.active {
        background-color: $primary;
        position: relative;
        border-radius: 0;
        height: 100px;
        align-items: center;
        display: flex;
        transform: translate(-90px, -25px);
        font-size: 36px;
        padding-left: 90px;
        z-index: 2;
        svg {
          z-index: -1;
          position: absolute;
          opacity: 0;
        }
        @media (max-width: 1870px) {
          transform: translate(-50px, -25px);
          padding-left: 50px;
        }
        @media (max-width: 1440px) {
          transform: translate(-30px, -25px);
          padding-left: 30px;
        }
        @media (max-width: 1440px) {
          height: 70px;
        }
        @media (max-width: 1200px) {
          font-size: 30px;
        }
        @media (max-width: 1180px) {
          transform: translate(0, 0);
          padding-left: 0;
          font-size: 24px;
          text-align: center;
          justify-content: center;
          height: 100%;
        }
        @media (max-width: 680px) {
          font-size: 18px;
        }
        @media (max-width: 500px) {
          font-size: 14px;
        }
      }
      @media (max-width: 1180px) {
        padding: 0;
        border: 1px solid #f2f3f6;
        width: 100%;
        text-align: center;
        align-items: center;
        justify-content: center;
        display: flex;
        height: 100%;
      }
      @media (max-width: 680px) {
        font-size: 18px;
      }
      @media (max-width: 500px) {
        font-size: 14px;
      }
    }
    @media (max-width: 1870px) {
      width: 400px;
    }
    @media (max-width: 1470px) {
      width: 350px;
    }
    @media (max-width: 1440px) {
      height: 70px;
    }
    @media (max-width: 1200px) {
      padding-bottom: 0;
      width: 300px;
    }
    @media (max-width: 1180px) {
      flex-direction: row !important;
      bottom: 0 !important;
      margin-top: auto !important;
      height: 80px !important;
      padding: 0;
      background-color: #fff;
      width: 100vw;
      position: relative;
      left: 0 !important;

      svg {
        display: none;
      }
      &::after {
        display: none;
      }
    }
    @media (max-width: 680px) {
      height: 72px !important;
    }
    @media (max-width: 500px) {
      height: 50px !important;
    }
  }
  .nav-item {
    @media (max-width: 1180px) {
      width: 100%;
    }
  }
  &__items {
    display: flex;
    gap: 20px;
    @media (max-width: 1180px) {
      gap: 0;
    }
    @media (max-width: 580px) {
      flex-wrap: wrap;
    }
  }
  &-item {
    display: flex;
    flex-direction: column;
    width: 300px;
    min-height: 430px;
    padding: 50px 30px 30px;
    background-color: #fff;
    &__num {
      font-weight: 600;
      font-size: 64px;
      line-height: 74px;
      color: $primary;
    }
    &__subtitle {
      font-size: 18px;
      color: $black;
      font-weight: 600;
    }
    &__text {
      font-size: 16px;
      line-height: 20px;
      color: $black;
      font-weight: 300;
    }
    @media (max-width: 1370px) {
      width: 250px;
      min-height: 380px;
      padding: 30px 20px 10px;
      &__num {
        font-size: 55px;
      }
      &__text {
        font-size: 14px;
        line-height: 18px;
      }
    }
    @media (max-width: 1180px) {
      width: 100%;
      min-height: 340px;
      border: 1px solid #f2f3f6;
    }
    @media (max-width: 680px) {
      padding: 20px 10px 10px;
      min-height: 100%;
      &__num {
        font-size: 30px;
        line-height: 35px;
      }
    }
  }
}
</style>
