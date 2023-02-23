<template>
  <section>
    <div class="flex justify-center items-center h-full py-2 md:py-8 px-12">
      <GalleryLoader v-if="isLoading" />
      <viewer v-else :images="images" class="grid grid-cols-12 flex items-start">
        <img v-for="image in images"
            :key="image.src"
            :src="image.src"
            :alt="image.alt"
            class="col-span-12 md:col-span-6 lg:col-span-4 flex items-center hover:cursor-zoom-in hover:opacity-90 border border-1 border-white">
      </viewer>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import GalleryLoader from '../partials/GalleryLoader'

export default {
  name: 'PhotoGallery',
  props: {
    active: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    GalleryLoader
  },
  data() {
    return {
      isLoading: true,
      backgroundPhoto: null
    }
  },
  computed: {
    ...mapState('photography', { photosData: 'data'}),

    backgroundImage() {
      if (this.backgroundPhoto) return;

      return this.photosData?.filter(photo => photo.title === 'Two religions').pop()
    },
    images() {
      if (!this.photosData.length) return;

      return this.photosData.map((photo, index) => {
        return {
          alt: photo.title,
          description: photo.title,
          index: index,
          src: photo.url,
        }
      })
    },
  },
  watch: {
    async active(newValue) {
      console.log(newValue.title);
      this.isLoading = true;
      await this.fetchPhotos({ payload: newValue});
      this.isLoading = false;
    }
  },
  methods: {
    ...mapActions({ fetchPhotos: 'photography/fetch' }),
  },
  async mounted() {
    await this.fetchPhotos({ payload: this.active });
    this.isLoading = false;
  }
}
</script>
