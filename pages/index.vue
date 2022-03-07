<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">Home ...</div>
      <div class="section"></div>
      <div class="section">
        <Footer />
      </div>
    </full-page>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: {
        anchors: ["home", "features", "team", "changelog", "download"],
        sectionsColor: ["#4285f4", "#ffffff", "#db4437", "#ffffff", "#4285f4"],
        navigation: true,
        scrollOverflow: "true",
      },
    };
  },
};
</script>
