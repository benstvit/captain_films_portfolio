<template>
  <section>
    <Loader v-if="!navigatingFromPage && isLoading" />
    <div v-if="!isLoading" :style="{ contain: 'paint' }">
      <MenuDisplay
        v-if="menuDisplay"
        :menus="bannerPhotos"
        @selected-menu="selectMenu"
      />
      <ContentDisplay
        v-else
        :banner-photos="bannerPhotos"
        @reset="reset"
        @reset-home="resetHome"
        @selected-menu="selectMenu"
        @set-menu="setMenu"
      />
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";

import ContentDisplay from "../components/ContentDisplay.vue";
import Loader from "../components/partials/Loader.vue";
import MenuDisplay from "../components/MenuDisplay.vue";

export default {
  name: "index",
  components: {
    ContentDisplay,
    Loader,
    MenuDisplay,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  provide() {
    return {
      resetHome: this.resetHome,
      selectMenu: this.selectMenu,
      setMenu: this.setMenu
    }
  },
  computed: {
    ...mapState("banner", { photosData: "data" }),

    navigatingFromPage() {
      return this.$nuxt.context.from ? true : false;
    },
    menuDisplay() {
      return this.bannerPhotos.filter((photo) => photo.enabled).length > 1;
    },
  },
  async created() {
    await this.fetchPhotos();
    this.isLoading = true;
    this.bannerPhotos = this.photosData;
    // this.redirect() ==> Développer l'idée de selectMenu(index) en fonction du route path
    if (this.navigatingFromPage) return this.isLoading = false;
    setInterval(() => {
      this.isLoading = false;
    }, 2600);
  },
  methods: {
    ...mapActions({ fetchPhotos: "banner/fetch" }),

    reset() {
      this.bannerPhotos.forEach((photo) => (photo.enabled = false));
    },
    resetHome() {
      this.bannerPhotos.forEach((photo) => (photo.enabled = true));
    },
    selectMenu(index) {
      this.bannerPhotos.forEach((menu) =>
        menu.index === index ? (menu.enabled = true) : (menu.enabled = false)
      );
    },
    setMenu(payload) {
      if (payload.direction === "rewind")
        return this.bannerPhotos.forEach((menu) =>
          menu.index === 1 ? (menu.enabled = true) : (menu.enabled = false)
        );
      const direction =
        payload.direction === "right" ? payload.index + 1 : payload.index - 1;
      this.reset();
      this.bannerPhotos.forEach((menu) =>
        menu.index === direction
          ? (menu.enabled = true)
          : (menu.enabled = false)
      );
    },
  },
};
</script>
