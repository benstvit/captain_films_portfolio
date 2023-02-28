<template>
  <section>
    <NavBar
      @active-submenu="setActiveSubmenu"
      :is-scrolling="galleryY"
      :submenus="submenus" />
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
import NavBar from "../shared/NavBar.vue";
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
      galleryY: false,
      submenus: [
        { title: 'New Arrival', active: false, page: 'photo' },
        { title: 'By the Seas', active: true, page: 'photo' },
        { title: 'Here, there & everywhere', active: false, page: 'photo' },
        { title: 'Live Music', active: false, page: 'photo' },
        { title: 'Portraits', active: false, page: 'photo' },
        { title: 'Wild Life', active: false, page: 'photo' }],
    }
  },
  components: {
    NavBar,
    PhotoGallery
  },
  methods: {
    getGalleryPosition() {
      const galleryY = document.getElementById('gallery');
      this.galleryY = galleryY.getBoundingClientRect().top < 65;
    },
    setActiveSubmenu(event) {
      this.activeSubmenu = event
    }
  },
}
</script>
