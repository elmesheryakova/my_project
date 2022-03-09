<template>
  <div class="">
    <section class="fullpage" style="background: green">
      <h1>Section 1</h1>
    </section>
    <section class="fullpage" style="background: blue">
      <h1>Section 2</h1>
    </section>
    <section class="fullpage" style="background: red">
      <Footer />
    </section>
  </div>
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
