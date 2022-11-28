<template>
  <section v-show="photos">
    <div class="grid grid-cols-6">
      <div class="col-span-2"
          v-for="photo in photos"
          :key="photo.id">
        <nuxt-img class="h-full border border-white border-4 rounded-md" :src="photo.url" :alt="photo.title"></nuxt-img>
      </div>
      <div class="absolute flex justify-between top-44 w-full">
        <div
          id="left"
          @click="openPhotoNav"
          class="col-span-2 hover:cursor-pointer flex justify-center items-end w-full p-4"
        >
          <p class="font-captainbold text-white text-4xl opacity-90" v-show="photoOpen">Photography</p>
        </div>
        <div
          id="center"
          @click="openMusicNav"
          class="col-span-2 hover:cursor-pointer flex flex-col items-center w-full p-4 gap-4"
        >
          <div
            id="captain-logo" class="flex items-end pb-10">
            <nuxt-img
              class="w-24 h-24"
              src="/logo-solo-white.png">
            </nuxt-img>
            <h1 class="text-center font-captainbold text-6xl pb-4 text-white opacity-90">
              Captain Films
            </h1>
          </div>
          <p class="font-captainbold text-white text-4xl opacity-90" v-show="musicOpen">Music</p>
        </div>
        <div
          id="right"
          @click="openWebNav"
          class="col-span-2 hover:cursor-pointer flex flex-col items-center justify-end w-full p-4"
        >
          <p class="font-captainbold text-white text-4xl opacity-90" v-show="webOpen">Web development</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: "SharedBanner",
  props: {
    photoOpen: {
      type: Boolean,
      default: false,
    },
    musicOpen: {
      type: Boolean,
      default: false,
    },
    webOpen: {
      type: Boolean,
      default: false,
    }
  },
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

    reset() {
      this.photoOpen = false;
      this.musicOpen = false;
      this.webOpen = false
    },
    openPhotoNav() {
      this.reset();
      this.photoOpen = true;
    },
    openMusicNav() {
      this.reset();
      this.musicOpen = true;
    },
    openWebNav() {
      this.reset();
      this.webOpen = true;
    },
  },
};
</script>
