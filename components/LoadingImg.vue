<template>
  <svgicon name="loader" class="loader-svg" />
</template>

<script>
export default {};
</script>

<style lang="scss">
.loader-svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 100px;
  max-height: 80px;
  animation: loader-spin 1.7s infinite linear;
}

@keyframes loader-spin {
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
