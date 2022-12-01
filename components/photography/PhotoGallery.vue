<template>
  <section>
    <div class="flex justify-between items-center w-full p-6 bg-gray-100">
      <silent-box
        :gallery="images"
        class="rounded-xl"/>
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

      return this.photosData.map(photo => {
        return {
          src: photo.url,
          description: photo.title,
          thumbnailWidth: '400',
          thumbnailHeight: '280',
          alt: photo.title,
          lazyLoading: true,
        }
      })
    }
  },
  watch: {
    active(newValue) {
      this.fetchPhotos({ payload: newValue});
    }
  },
  methods: {
    ...mapActions({ fetchPhotos: 'photography/fetch' })
  },
  async mounted() {
    await this.fetchPhotos({ payload: this.active });
  }
}
</script>
