<template>
  <section v-if="musicPhotos">
    <div class="flex justify-center items-center h-screen px-12">
      <div class="relative w-full flex justify-center">
        <nuxt-img :src="musicPhotos[0].url" :alt="musicPhotos[0].title" class="w-5/6 mx-2"/>
        <h1 class="absolute top-2 font-captainbold text-5xl text-white">NAVAHO</h1>
        <span class="absolute bg-black h-18 w-28 rounded-full"/>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'MusicPage',
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
  },
  async mounted() {
    await this.fetchPhotos();
    this.musicPhotos = this.musicData
  }
}
</script>
