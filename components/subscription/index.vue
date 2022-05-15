<template>
  <div class="footer-feedback--white footer-feedback--news">
    <div class="footer-feedback__wrap">
      <div class="container d-flex justify-content-between">
        <h3
          class="footer-feedback__title"
          v-if="$route.name === 'news' || $route.name === 'news-slug'"
        >
          Подпишитесь <br />
          <span> на рассылку новостей</span>
        </h3>
        <h3 class="footer-feedback__title" v-if="$route.name === 'career'">
          Присоединяйтесь <br />
          <span> к нашей команде</span>
        </h3>
        <SubscriptionForm />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.footer-feedback--news {
  .footer-feedback__wrap {
    z-index: -1;
    min-height: auto;
  }
}
</style>
