<template>
  <section>
    <Loader v-if="!isLoaded" />
    <section v-else>
      <MenuDisplay v-if="menuDisplay" :menus="bannerPhotos" />
      <h1 v-else>CONTENT</h1>
    </section>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Loader from "../components/partials/Loader.vue";
import MenuDisplay from "../components/MenuDisplay.vue";

export default {
  name: "index",
  components: {
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
      return this.bannerPhotos.length === 3;
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
  },
};
</script>
