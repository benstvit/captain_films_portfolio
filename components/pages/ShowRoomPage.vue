<template>
  <section>
    <ShowroomIntroduction
      :is-scrolling="isScrolling"
      :off-set="offSet"/>
    <ShowroomGallery id="gallery" />
  </section>
</template>

<script>
import ShowroomIntroduction from "../showroom/ShowroomIntroduction.vue"
import ShowroomGallery from "../showroom/ShowroomGallery.vue"

export default {
  name: 'ShowRoomPage',
  components: {
    ShowroomIntroduction,
    ShowroomGallery
  },
  data() {
    return {
      isScrolling: false,
      offSet: 0,
    }
  },
  created () {
    window.addEventListener('scroll', this.getGalleryPosition);
  },
  destroyed () {
    window.removeEventListener('scroll', this.getGalleryPosition);
  },
  methods: {
    getGalleryPosition() {
      const gallery = document.getElementById('gallery');
      console.log(gallery.getBoundingClientRect().top);
      this.offSet = gallery.getBoundingClientRect().top;
      this.isScrolling = this.offSet < 350;
    },
  }
}
</script>
