<template>
  <div class="container">
    <div class="error">
      <div class="error__inner">
        <svgicon name="num4" />
        <img :src="require(`@/assets/img/404.png`)" alt="img" />
        <svgicon name="num4" />
      </div>
      <p>Страница не найдена</p>
      <nuxt-link :to="{ name: 'index' }">
        <button class="error__btn">Перейти на главную</button>
      </nuxt-link>
    </div>
  </div>
</template>
<style lang="scss">
.error {
  padding: 150px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__inner {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__btn {
    width: 360px;
    height: 70px;
    background: linear-gradient(271.8deg, #1b2ac9 -0.56%, #0073f0 100.44%);
    border-radius: 40px;
    margin: 0 auto;
    color: #fff;
  }
  img {
    height: 520px;
    object-fit: cover;
  }
  svg {
    width: 237px;
  }
  p {
    color: $primary;
    font-size: 36px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 40px;
  }
  @media (max-width: 1070px) {
    padding: 100px 0;
    img {
      height: 400px;
    }
    svg {
      width: 200px;
    }
    p {
      font-size: 30px;
    }
    &__btn {
      width: 200px;
      height: 50px;
    }
  }
  @media (max-width: 800px) {
    padding-top: 150px;
    img {
      height: 300px;
    }
    svg {
      width: 150px;
    }
    p {
      font-size: 28px;
      margin-bottom: 20px;
    }
  }
  @media (max-width: 600px) {
    padding-top: 100px;
    img {
      height: 200px;
    }
    svg {
      width: 100px;
    }
    p {
      font-size: 22px;
      margin-bottom: 30px;
    }
    &__btn {
      width: 200px;
      height: 40px;
    }
  }
  @media (max-width: 410px) {
    padding-top: 130px;
    img {
      height: 150px;
    }
    svg {
      width: 80px;
    }
    p {
      font-size: 20px;
      margin-bottom: 30px;
    }
    &__btn {
      width: 200px;
      height: 40px;
    }
  }
}
</style>
