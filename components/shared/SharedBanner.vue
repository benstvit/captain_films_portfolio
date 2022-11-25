<template>
  <section v-show="photos">
    <div class="grid grid-cols-6">
      <div class="col-span-2"
          v-for="photo in photos"
          :key="photo.id">
        <nuxt-img class="h-full border border-white border-4 rounded-md" :src="photo.url" :alt="photo.title"></nuxt-img>
      </div>
      <div class="absolute flex items-center w-full">
        <div
          id="left"
          class="col-span-2 flex flex-col justify-end items-center w-full p-4"
        >
          <p class="font-cormorant text-white text-3xl">Photography</p>
        </div>
        <div
          id="center"
          class="col-span-2 flex flex-col items-center w-full p-4 gap-4"
        >
          <nuxt-img class="w-24 h-24" src="/logo-solo-white.png"></nuxt-img>
          <h1 class="text-center font-captainbold text-6xl pb-4 text-white">
            Captain Films
          </h1>
          <p class="text-white font-cormorant text-3xl">Music</p>
        </div>
        <div
          id="right"
          class="col-span-2 flex flex-col items-center justify-end w-full p-4"
        >
          <p class="font-cormorant text-white text-3xl">Web development</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: "SharedBanner",
  data () {
    return {
      photos: null,
    }
  },
  computed: {
    ...mapState('banner', { photosData: 'data'}),
  },
  async mounted() {
    await this.fetchPhotos();
    this.photos = this.photosData;
  },
  methods: {
    ...mapActions({ fetchPhotos: 'banner/fetch' }),
  },
};
</script>
