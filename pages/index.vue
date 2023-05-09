<template>
  <section>
    <Loader v-if="isLoading" />
    <section v-else>
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
        @set-menu="setMenu"
      />
    </section>
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
  computed: {
    ...mapState("banner", { photosData: "data" }),

    menuDisplay() {
      return this.bannerPhotos.filter((photo) => photo.enabled).length > 1;
    },
  },
  async mounted() {
    await this.fetchPhotos();
    this.bannerPhotos = this.photosData;
    setInterval(() => {
      this.isLoading = false;
    }, 3000);
  },
  methods: {
    ...mapActions({ fetchPhotos: "banner/fetch" }),

    selectMenu(index) {
      this.bannerPhotos.forEach(menu => menu.index === index ? menu.enabled = true : menu.enabled = false);
    },
    reset() {
      this.bannerPhotos.forEach(photo => photo.enabled = false);
    },
    resetHome() {
      this.bannerPhotos.forEach(photo => photo.enabled = true);
    },
    setMenu(payload) {
      if (payload.direction === "rewind")
        return this.bannerPhotos.forEach((menu) =>
          menu.index === 1 ? (menu.enabled = true) : (menu.enabled = false)
        );

      const direction = payload.direction === "right" ? payload.index + 1 : payload.index - 1;
      this.bannerPhotos.forEach((menu) =>
        menu.index === direction ? (menu.enabled = true) : (menu.enabled = false)
      );
    },
  },
};
</script>
