<template>
  <div class="docs">
    <div class="container">
      <h1 class="pages__title">Документы</h1>
      <div class="docs__inner">
        <div class="docs__item"></div>
        <div class="docs__item"></div>
        <div class="docs__item"></div>
        <div class="docs__item"></div>
        <div class="docs__item"></div>
        <div class="docs__item"></div>
        <div class="docs__item"></div>
        <div class="docs__item"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.docs {
  padding: 135px 0 160px;
  background: #f2f3f7;
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
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    @media (max-width: 1300px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 970px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 460px) {
      gap: 10px;
    }
  }
  &__item {
    width: 300px;
    height: 400px;
    background-color: #fff;
    margin: 0 auto;
    @media (max-width: 660px) {
      width: 250px;
      height: 350px;
    }
    @media (max-width: 550px) {
      width: 200px;
      height: 300px;
    }
    @media (max-width: 460px) {
      width: 150px;
      height: 220px;
    }
    @media (max-width: 340px) {
      width: 145px;
      height: 200px;
    }
  }
}
</style>
