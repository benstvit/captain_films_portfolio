<template>
  <section>
    <NavBar
      @active-submenu="setActiveSubmenu"
      :is-scrolling="galleryY" />
    <keep-alive>
      <PhotoGallery
        id="gallery"
        v-if="activeSubmenu.title"
        :active="activeSubmenu"
      />
    </keep-alive>
  </section>
</template>

<script>
import NavBar from "../photography/NavBar.vue";
import PhotoGallery from "../photography/PhotoGallery.vue";

export default {
  name: 'PhotographyPage',
  created () {
    window.addEventListener('scroll', this.getGalleryPosition);
  },
  destroyed () {
    window.removeEventListener('scroll', this.getGalleryPosition);
  },
  data() {
    return {
      activeSubmenu: {},
      galleryY: false
    }
  },
  components: {
    NavBar,
    PhotoGallery
  },
  methods: {
    setActiveSubmenu(event) {
      this.activeSubmenu = event
    },
    getGalleryPosition() {
      const galleryY = document.getElementById('gallery');
      this.galleryY = galleryY.getBoundingClientRect().top < 65;
    }
  },
}
</script>
