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
  // position: fixed;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  @media (max-width: 860px) {
    // padding: 10px 0;
    box-shadow: 0px 1px 6px 0px #00000029;
  }
  @media (max-width: 791px) {
    padding: 10px 0;
  }
}
</style>
