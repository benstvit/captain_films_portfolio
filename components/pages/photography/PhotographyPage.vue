<template>
  <section>
    <NavBar
      @active-submenu="setActiveSubmenu"
      :is-scrolling="galleryY"
      :is-loading="isLoading"
      :submenus="submenus"
    />
    <keep-alive>
      <PhotoGallery
        id="gallery"
        v-if="activeSubmenu.title"
        :active="activeSubmenu"
        @set-loading="setLoadingStatus"
      />
    </keep-alive>
  </section>
</template>

<script>
import NavBar from "../../shared/NavBar.vue";
import PhotoGallery from "./PhotoGallery.vue";

export default {
  name: "PhotographyPage",
  components: {
    NavBar,
    PhotoGallery,
  },
  data() {
    return {
      activeSubmenu: {},
      galleryY: false,
      isLoading: false,
      submenus: [
        { title: "New Arrival", active: true, page: "photo" },
        { title: "By the Seas", active: false, page: "photo" },
        { title: "Here, there & everywhere", active: false, page: "photo" },
        { title: "Live Music", active: false, page: "photo" },
        { title: "Portraits", active: false, page: "photo" },
        { title: "Wild Life", active: false, page: "photo" },
      ],
    };
  },
  created() {
    window.addEventListener("scroll", this.getGalleryPosition);
  },
  destroyed() {
    window.removeEventListener("scroll", this.getGalleryPosition);
  },
  methods: {
    getGalleryPosition() {
      const galleryY = document.getElementById("gallery");
      this.galleryY = galleryY.getBoundingClientRect().top < 65;
    },
    setActiveSubmenu(event) {
      this.activeSubmenu = event;
    },
    setLoadingStatus(payload) {
      this.isLoading = payload;
    },
  },
};
</script>
