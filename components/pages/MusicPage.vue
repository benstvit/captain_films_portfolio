<template>
  <section v-if="musicPhotos">
    <BandSection
      class="mt-6"
      :photos="photos"
      @update-photos="updatePhotos" />
  </section>
</template>

<script>
import BandSection from '../music/BandSection.vue'

import { mapState, mapActions } from 'vuex';

export default {
  name: 'MusicPage',
  data() {
    return {
      musicPhotos: null,
      key: 0
    }
  },
  components: {
    BandSection,
  },
  computed: {
    ...mapState('music', { musicData: 'data' }),

    photos() {
      return this.musicPhotos.map(photo => ({ ...photo, displayDescription: false, description: "Navaho was a really nice band. You should listen to it." }));
    }
  },
  methods: {
    ...mapActions({ fetchPhotos: 'music/fetch'}),

    updatePhotos(payload) {
      this.musicPhotos.find(band => band.index === payload).displayDescription = true;
      this.key ++
    }
  },
  async mounted() {
    await this.fetchPhotos();
    this.musicPhotos = this.musicData;
  }
}
</script>
