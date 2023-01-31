<template>
  <section>
    <div class="flex justify-center items-center h-full py-8 px-12 bg-gray-100">
      <viewer :images="images" class="grid grid-cols-9 flex items-start bg-white">
        <img v-for="image in images"
            :key="image.src"
            :src="image.src"
            :alt="image.alt"
            class="col-span-3 flex items-center hover:cursor-pointer px-2 py-4 bg-white">
      </viewer>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'PhotoGallery',
  props: {
    active: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    ...mapState('photography', { photosData: 'data'}),

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
    active(newValue) {
      this.fetchPhotos({ payload: newValue});
    }
  },
  methods: {
    ...mapActions({ fetchPhotos: 'photography/fetch' }),
  },
  async mounted() {
    await this.fetchPhotos({ payload: this.active });
  }
}
</script>
