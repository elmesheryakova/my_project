<template>
  <header class="header">
    <HeaderTop />
    <HeaderBottom />
  </header>
</template>

<script>
export default {};
</script>
<style lang="scss">
header {
  padding: 25px 0 20px;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  @media (max-width: 790px) {
    padding: 10px 0;
  }
}
</style>
