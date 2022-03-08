<template>
  <footer class="footer">
    <FooterTop />
    <FooterBottom />
  </footer>
</template>
<style lang="scss">
.footer {
  background: #e2e2e8;
  padding: 100px 0 70px;
  flex-shrink: 0;
  position: relative;
  height: 100%;
  @media (max-width: 856px) {
    padding: 60px 0 50px;
  }
}
</style>
