<template>
  <client-only>
    <full-page :options="options" id="fullpage">
      <div class="section">First section ...</div>
      <div class="section">Second section ...</div>
      <div class="section">Second section ...</div>
      <div class="section">Second section ...</div>
    </full-page>
  </client-only>
</template>
<script>
export default {
  data() {
    return {
      options: {
        activeSection: 0,
        mouseWheelSensitivity: 10,
        showIndicators: false,
      },
    };
  },
};
</script>
