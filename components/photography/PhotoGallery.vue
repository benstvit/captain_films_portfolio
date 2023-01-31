<template>
  <section>
    <div class="grid grid-cols-9 flex justify-center items-center h-full py-4 px-12 bg-gray-100">
      <div
        v-for="image in images"
        :key="image.title"
        class="col-span-3 m-4">
          <silent-box
            :image="image"
            :lazy-loading="true"/>
      </div>
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
    // console.log(this.active);
    await this.fetchPhotos({ payload: this.active });
  }
}
</script>
