<template>
  <div class="team-page">
    <div class="container">
      <h1 class="pages__title">Наша команда</h1>
    </div>
    <SliderTeamSlider />
    <img :src="require(`@/assets/img/team-big.jpg`)" alt="img" />
  </div>
</template>
<style lang="scss">
.team-page {
  padding: 135px 0 0;

  @media (max-width: 991px) {
    padding-top: 90px;
  }

  @media (max-width: 791px) {
    padding-top: 60px;
  }
  .news__title {
    display: none;
  }
  .pages__title {
    padding-bottom: 20px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
