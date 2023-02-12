<template>
  <section>
    <div class="flex flex-col justify-center items-center h-full mt-16 py-8 px-12">
    <GalleryLoader v-if="isLoading" />
      <div
        v-else
        v-for="photo in photos"
        :key="photo.title"
        class="my-2 py-4"
        :class="photo.index % 2 === 0 ? 'self-center sm:self-end mx-2 sm:mx-0 sm:mr-12' : 'self-center sm:self-start mx-2 sm:mx-0 sm:ml-12'"
        data-aos-easing="ease-in-sine"
        data-aos="fade-in"
        :data-aos-offset="photo.index === 1 ? '20' : '200'">
        <viewer>
          <keep-alive>
            <nuxt-img
              class="h-[30vh] md:h-[35vh] lg:h-[50vh] object-cover rounded-md shadow-md hover:shadow-lg xl:hover:opacity-80 hover:cursor-zoom-in"
              v.prlx.mobile
              v-prlx="photo.index % 2 === 0 ? {speed: 0.1} : { disabled: true }"
              :src="photo.url"
              :alt="photo.title"/>
          </keep-alive>
        </viewer>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import aos from "../../mixins/aos"
import GalleryLoader from "../partials/GalleryLoader.vue"

export default {
  name: 'ShowroomGallery',
  mixins: [aos],
  components: {
    GalleryLoader
  },
  data() {
    return {
      isLoading: true
    }
  },
  computed: {
    ...mapState('showroom', { showroomData: 'data'}),

    photos() {
      if (!this.showroomData) return;
      return this.showroomData
    }
  },
  methods: {
    ...mapActions({ fetchPhotos: 'showroom/fetch' }),
  },
  async mounted() {
    await this.fetchPhotos();
    this.isLoading = false;
  }
}
</script>
