<template>
  <section>
    <BandHorizontalScroll
      class="mt-6"
      :photos="musicPhotos" />
  </section>
</template>

<script>
import BandHorizontalScroll from '../music/BandHorizontalScroll.vue'

import { mapState, mapActions } from 'vuex';

export default {
  name: 'MusicPage',
  components: {
    BandHorizontalScroll,
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
