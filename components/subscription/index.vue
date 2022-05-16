<template>
  <div class="footer-feedback--white footer-feedback--news">
    <div class="footer-feedback__wrap">
      <div
        class="container d-flex justify-content-between"
        v-if="$route.name === 'news' || $route.name === 'news-slug'"
      >
        <h3 class="footer-feedback__title">
          Подпишитесь <br />
          <span> на рассылку новостей</span>
        </h3>
        <SubscriptionNews />
      </div>
      <div
        class="container d-flex justify-content-between"
        v-if="$route.name === 'career'"
      >
        <h3 class="footer-feedback__title">
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
