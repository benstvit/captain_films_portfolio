<template>
  <section>
    <!-- <Loader v-if="!navigatingFromPage && isLoading" /> -->
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
  head() {
    return {
      title: "Captain Films - Film Photography & Journal",
      meta: [
        {
          hid: "og-title",
          property: "og:title",
          content: `Captain Films - Film Photography & Journal`,
        },
        { hid: "og-type", property: "og:type", content: "portfolio" },
        {
          hid: "og-desc",
          name: "description",
          content:
            "Un espace où photographie, musique, vidéo et blogging se rencontrent. Découvrez mon travail en photographie ainsi que le Journal de Captain Films, un blog aux multiples facettes.",
        },
        {
          hid: "og-image",
          itemprop: "image",
          property: "og:image",
          content: "cf-share-logo.png",
        },
        {
          hid: "og-image-alt",
          property: "og:image:alt	",
          content: "Captain Films - Film Photography & Journal",
        },
        {
          hid: "og-url",
          property: "og:url",
          content: "https://captain-films.com",
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Website",
            "headline": "Captain Films - Film Photography & Journal",
            "description": "Where film photography, music and blogging meet.",
            "author": {
              "@type": "Person",
              "name": "Benjamin Saint Viteux",
            },
            "logo": "cf-share-logo.png"
          })
        }
      ]
    };
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
    this.isLoading = false;
    this.bannerPhotos = this.photosData;
    if (this.navigatingFromPage) return this.isLoading = false;
    // setInterval(() => {
    //   this.isLoading = false;
    // }, 1800);
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
