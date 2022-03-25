<template>
  <div class="footer-feedback--white">
    <div class="footer-feedback__wrap">
      <div class="container d-flex justify-content-between">
        <h3 class="footer-feedback__title" v-if="$route.name === 'news'">
          Подпишитесь <br />
          <span> на рассылку новостей</span>
        </h3>
        <h3 class="footer-feedback__title" v-if="$route.name === 'career'">
          Присоединяйтесь <br />
          <span> к нашей команде</span>
        </h3>
        <SubscribtionForm />
      </div>
    </div>
  </div>
</template>
