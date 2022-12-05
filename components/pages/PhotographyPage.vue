<template>
  <section>
    <NavBar
      @active-submenu="setActiveSubmenu" />
    <keep-alive>
      <PhotoGallery
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
 data() {
  return {
    activeSubmenu: {},
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
 },
}
</script>
