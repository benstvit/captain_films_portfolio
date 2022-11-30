<template>
  <section>
    <div class="flex justify-between items-center w-full p-6 mx-4 bg-gray-100">
      <div
        v-for="photo in photos"
        :key="photo.id"
        class="flex justify-between items-center"
      >
      <nuxt-img
        :src="photo.url"
        :alt="photo.title"
        class="h-72 w-full rounded-sm"
      />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'PhotoGallery',
  data() {
    return {
      photos: null
    }
  },
  props: {
    active: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    ...mapState('photography', { photosData: 'data'}),
  },
  methods: {
    ...mapActions({ fetchPhotos: 'photography/fetch' })
  },
  async mounted() {
    await this.fetchPhotos({ payload: this.active });
    this.photos = this.photosData;
  }
}
</script>
