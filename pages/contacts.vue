<template>
  <div>
    <div class="contacts">
      <div class="container">
        <div class="contacts-inner">
          <div class="contacts__info">
            <h1 class="contacts-title">Контакты</h1>
            <div class="contacts-btns">
              <button class="contact-btn active">Москва</button>
              <button class="contact-btn">Новосибирск</button>
              <button class="contact-btn">Краснодар</button>
            </div>
            <div class="contacts__list">
              <a class="contact-phone" href="tel:+74995770006"
                >+7 (499) 577-00-06</a
              >
              <a class="contact-mail" href="mailto:info@petexpert.pro"
                >info@petexpert.pro</a
              >
              <p class="contact-address">
                143300, Московская область, г. Наро-Фоминск, площадь Свободы, 10
              </p>
            </div>

            <ul class="contacts__social-list">
              <li class="contact__social-item">
                <a href="#"> <svgicon name="facebook" /></a>
              </li>
              <li class="contact__social-item">
                <a href="#"> <svgicon name="instagram" /></a>
              </li>
              <li class="contact__social-item">
                <a href="#"> <svgicon name="telegramm" /></a>
              </li>
              <li class="contact__social-item">
                <a href="#"> <svgicon name="whatsapp" /></a>
              </li>
            </ul>
          </div>
          <div class="contacts__staff">
            <div class="staff" v-for="(item, index) in staff" :key="index">
              <div class="staff__img">
                <img
                  :src="require(`@/assets/img/${item.photo}`)"
                  alt="photo"
                  v-if="item.photo"
                />
                <img
                  :src="require(`@/assets/img/placeholder.jpg`)"
                  alt="photo"
                  v-else
                />
              </div>
              <div class="staff__name">{{ item.person }}</div>
              <div class="staff__department d-flex">
                <svgicon :name="item.icon" />
                <p>{{ item.department }}</p>
              </div>
              <div class="staff__phone">({{ item.phone }})</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Feedback />
  </div>
</template>
<script>
export default {
  data() {
    return {
      staff: [
        {
          id: 1,
          person: "Владимир Константинов",
          department: "Продажи",
          icon: "sales",
          phone: "Доб.123",
          photo: "staff.jpg",
        },
        {
          id: 2,
          person: "Владимир Константинов",
          department: "Закупки",
          icon: "buy",
          phone: "Доб.123",
          photo: "",
        },
        {
          id: 3,
          person: "Владимир Константинов",
          department: "Секретарь",
          icon: "secretary",
          phone: "Доб.123",
          photo: "staff2.jpg",
        },
        {
          id: 4,
          person: "Владимир Константинов",
          department: "Дирекция",
          icon: "chief",
          phone: "Доб.123",
          photo: "staff3.jpg",
        },
        {
          id: 1,
          person: "Владимир Константинов",
          department: "Доставка",
          icon: "delivery",
          phone: "Доб.123",
          photo: "staff4.jpg",
        },
        {
          id: 1,
          person: "Владимир Константинов",
          department: "Качество",
          icon: "shield",
          phone: "Доб.123",
          photo: "staff5.jpg",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.contacts {
  padding: 180px 0 160px;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: $primary;
    z-index: -1;
    @media (max-width: 970px) {
      width: 100%;
      height: 50%;
    }
  }
  &-title {
    font-size: 124px;
    line-height: 129px;
    font-weight: 600;
    margin-bottom: 60px;
    @media (max-width: 1300px) {
      font-size: 90px;
    }
    @media (max-width: 1060px) {
      margin-bottom: 30px;
      font-size: 85px;
    }
    @media (max-width: 970px) {
      text-align: center;
    }
  }
  &-btns {
    margin-bottom: 60px;
    .contact-btn {
      font-size: 15px;
      font-weight: 400;
      padding: 11px 28px 12px;
      background: transparent;
      border-radius: 44px;
      border: 1px solid #fff;
      color: #fff;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      &:not(:last-child) {
        margin-right: 80px;
      }
      &:hover {
        background: #fff;
        color: $primary;
        transition: 0.3s ease-in-out;
      }
      &.active {
        background: #fff;
        color: $primary;
      }
      @media (max-width: 1300px) {
        &:not(:last-child) {
          margin-right: 40px;
        }
      }
      @media (max-width: 1060px) {
        &:not(:last-child) {
          margin-right: 20px;
        }
        font-size: 12px;
      }
    }
    @media (max-width: 1060px) {
      margin-bottom: 50px;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    .contact-phone {
      font-size: 36px;
      font-weight: 600;
      margin-bottom: 30px;
      @media (max-width: 1060px) {
        font-size: 30px;
      }
    }
    .contact-mail,
    .contact-address {
      font-size: 24px;
      margin-bottom: 30px;
      font-weight: 300;
      @media (max-width: 1300px) {
        font-size: 18px;
        max-width: 450px;
      }
      @media (max-width: 1060px) {
        margin-bottom: 20px;
      }
      @media (max-width: 970px) {
        min-width: 100%;
      }
    }
    .contact-address {
      margin-bottom: 50px;
    }
  }
  &__social-list {
    display: flex;
    gap: 40px;
    svg {
      width: 22px;
      height: 22px;
    }
  }
  &-inner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 970px) {
      grid-template-columns: 1fr;
      gap: 80px;
    }
  }
  @media (max-width: 991px) {
    padding-top: 140px;
  }
  @media (max-width: 860px) {
    padding-bottom: 60px;
  }
  @media (max-width: 791px) {
    padding-top: 60px;
  }
  &__info {
    color: $white;
  }
  &__staff {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    svg {
      fill: transparent;
      width: 18px;
      height: 18px;
    }
    @media (max-width: 1300px) {
      gap: 10px;
    }
  }
  .staff {
    padding: 15px 30px;
    &__img {
      width: 128px;
      height: 123px;
      margin-bottom: 15px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__name {
      margin-bottom: 10px;
    }
    &__department {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      svg {
        width: 22px;
        height: 22px;
      }
      p {
        color: #8e95a7;
        margin-left: 10px;
        margin-bottom: 0;
      }
    }
    &__phone {
      color: $primary;
      font-weight: 600;
    }
    @media (max-width: 1300px) {
      padding: 10px;
    }
  }
}
</style>
