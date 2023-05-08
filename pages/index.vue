<template>
  <section>
    <Loader v-if="!isLoaded" />
    <section v-else>
      <MenuDisplay
        v-if="menuDisplay"
        :menus="bannerPhotos"
        @selected-menu="selectMenu"
      />
      <ContentDisplay v-else :selected-page="enabledMenu" />
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
      isLoaded: false,
    };
  },
  computed: {
    ...mapState("banner", { photosData: "data" }),

    enabledMenu() {
      if (!this.bannerPhotos) return;

      return this.bannerPhotos.filter((photo) => photo.enabled);
    },
    menuDisplay() {
      console.log(this.enabledMenu)
      return this.enabledMenu.length === 3;
    },
  },
  async mounted() {
    await this.fetchPhotos();
    this.bannerPhotos = this.photosData;
    setInterval(() => {
      this.isLoaded = true;
    }, 3000);
  },
  methods: {
    ...mapActions({ fetchPhotos: "banner/fetch" }),

    selectMenu(index) {
      this.bannerPhotos.forEach((menu) =>
        menu.index === index ? (menu.enabled = true) : (menu.enabled = false)
      );
    },
  },
};
</script>
