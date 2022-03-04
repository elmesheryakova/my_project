<template>
  <header class="header">
    <HeaderTop />
    <HeaderBottom />
  </header>
</template>
<style lang="scss">
header {
  padding: 25px 0 20px;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  @media (max-width: 790px) {
    padding: 10px 0;
  }
}
</style>
