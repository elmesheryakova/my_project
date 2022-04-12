<template>
  <footer class="footer">
    <FooterTop />
    <FooterBottom />
  </footer>
</template>
<style lang="scss">
.footer {
  background: #f2f3f7;
  padding: 100px 0 70px;
  flex-shrink: 0;
  position: relative;
  height: 100%;
  min-height: 100vh;
  @media (max-width: 856px) {
    padding: 60px 0 50px;
    min-height: 0;
  }
  @media (min-width: 1700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
