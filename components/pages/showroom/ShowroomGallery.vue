<template>
  <section>
    <div class="flex flex-col justify-center items-center h-full mt-4 md:mt-16 py-8 lg:px-12">
    <GalleryLoader v-if="isLoading" />
      <div
        v-else
        v-for="photo in photos"
        :key="photo.title"
        class="my-4 py-4"
        :class="photo.index % 2 === 0 ? 'self-center sm:self-end mx-2 sm:mx-0 sm:mr-12' : 'self-center sm:self-start mx-2 sm:mx-0 sm:ml-12'"
        data-aos-easing="ease-in-sine"
        data-aos="fade-in"
        data-aos-duration="500"
        :data-aos-offset="photo.index === 1 ? '300' : '200'">
        <viewer>
          <keep-alive>
            <nuxt-img
              format="webp"
              class="h-[30vh] md:h-[35vh] lg:h-[45vh] object-cover rounded-sm shadow-md hover:shadow-lg xl:hover:opacity-80 hover:cursor-zoom-in"
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
import aos from "../../../mixins/aos"
import GalleryLoader from "../../partials/GalleryLoader.vue"

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

      const shuffledArray = this.showroomData.sort((a, b) => 0.5 - Math.random());
      return shuffledArray.map((e, i) => ({...e, index: i + 1}))
    }
  },
  methods: {
    ...mapActions({ fetchPhotos: 'showroom/fetch' }),
  },
  async created() {
    await this.fetchPhotos();
    this.isLoading = false;
  }
}
</script>
