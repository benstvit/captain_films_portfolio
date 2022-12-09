<template>
  <section v-if="musicPhotos">
    <BandSection
      class="mt-6"
      :photos="musicPhotos" />
  </section>
</template>

<script>
import BandSection from '../music/BandSection.vue'

import { mapState, mapActions } from 'vuex';

export default {
  name: 'MusicPage',
  components: {
    BandSection,
  },
  data() {
    return {
      musicPhotos: null,
    }
  },
  computed: {
    ...mapState('music', { musicData: 'data' }),
  },
  methods: {
    ...mapActions({ fetchPhotos: 'music/fetch'}),

    scrollHorizontaly() {

    }
  },
  async mounted() {
    await this.fetchPhotos();
    this.musicPhotos = this.musicData
  }
}
</script>
