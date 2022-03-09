<template>
  <no-ssr>
    <full-page :options="options">
      <div class="section">First section ...</div>
      <div class="section">Second section ...</div>
      <div class="section"><Footer /></div>
    </full-page>
  </no-ssr>
</template>
<script>
export default {
  data() {
    return {
      options: {
        licenseKey: null,
        menu: "#menu",
        anchors: ["page1", "page2", "page3"],
        sectionsColor: ["#41b883", "#ff5f45", "#0798ec"],
      },
    };
  },
};
</script>
