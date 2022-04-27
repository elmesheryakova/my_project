<template>
  <div class="docs">
    <div class="container">
      <h1 class="pages__title">Сертификаты</h1>
      <div class="docs__inner">
        <div class="docs__item" v-for="item in page.items" :key="item.id">
          <img :src="item.image" :alt="item.name" />
          <div class="docs__hover">
            <a :href="item.image" target="_blank">
              <svgicon name="search-w"
            /></a>
            <!-- @click.prevent="downloadItem()" -->
            <a :href="item.image" :download="item.image"
              ><svgicon name="download" class="download" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: {},
    };
  },
  async asyncData({ $axios }) {
    const page = await $axios.$get(
      `https://api.petexpert.pro/v1/company/certificates/`
    );
    return { page };
  },
  // computed: {
  //   formatFile() {
  //     let url = this.item.file;
  //     return url.replace(/.*\./, "");
  //   },
  // },
  // methods: {
  //   downloadItem() {
  //     axios({
  //       url: this.item.file,
  //       method: "GET",
  //       responseType: "blob",
  //     }).then((response) => {
  //       var fileURL = window.URL.createObjectURL(new Blob([response.data]));
  //       var fileLink = document.createElement("a");
  //       fileLink.href = fileURL;
  //       fileLink.setAttribute("download", `file.${this.formatFile}`);
  //       document.body.appendChild(fileLink);
  //       fileLink.click();
  //     });
  //   },
  // },
};
</script>
<style lang="scss">
.docs {
  padding: 135px 0 160px;
  background: #f2f3f7;
  @media (max-width: 991px) {
    padding-top: 90px;
  }
  @media (max-width: 860px) {
    padding-bottom: 60px;
  }
  @media (max-width: 791px) {
    padding-top: 60px;
  }

  &__inner {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    @media (max-width: 1300px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 970px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 460px) {
      gap: 10px;
    }
  }
  &__item {
    width: 300px;
    height: 400px;
    background-color: #fff;
    margin: 0 auto;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    &:hover {
      .docs__hover {
        opacity: 1;

        visibility: visible;
        transition: 0.5s ease-in-out;
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media (max-width: 660px) {
      width: 250px;
      height: 350px;
    }
    @media (max-width: 550px) {
      width: 200px;
      height: 300px;
    }
    @media (max-width: 460px) {
      width: 150px;
      height: 220px;
    }
    @media (max-width: 340px) {
      width: 145px;
      height: 200px;
    }
  }
  &__hover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba($color: #f2f3f7, $alpha: 0.6);
    opacity: 0;
    visibility: hidden;
    height: 100%;
    transition: 0.5s ease-in-out;
    cursor: initial;
    svg {
      width: 32px;
      height: 32px;
      padding: 6px;
      border-radius: 50%;
      background: linear-gradient(271.8deg, #1b2ac9 -0.56%, #0073f0 100.44%);
      cursor: pointer;
      position: absolute;
      bottom: 16px;
      right: 25px;
      transition: 0.5s ease-in-out;
      &:hover {
        width: 38px;
        height: 38px;
        transition: 0.5s ease-in-out;
      }
    }
    .download {
      bottom: 60px;
      padding: 0px;
    }
  }
}
</style>
