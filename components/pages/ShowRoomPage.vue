<template>
  <section>
    <ShowroomIntroduction :scroll-top="scrollTop" />
    <ShowroomGallery />
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
      scrollTop: 0,
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollTop = window.scrollY;
    },
  }
}
</script>
