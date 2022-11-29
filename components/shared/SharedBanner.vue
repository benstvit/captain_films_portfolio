<template>
  <section v-show="photos">
    <div class="flex justify-center items-center mx-20 max-w-screen">
      <div class="grid grid-cols-6">
        <div id="image-wrapper" class="col-span-3 hover:cursor-pointer"
            v-for="photo in photos"
            @click="toggleTitle(photo.index)"
            :key="photo.id">
          <nuxt-img
            class="h-[50vh] w-full border border-white border-4 rounded-md"
            :src="photo.url"
            :alt="photo.title"/>
        </div>
        <!-- <div class="absolute flex justify-between w-full">
          <div
            id="left"
            class="col-span-2 flex justify-center items-start w-full p-4"
          >
            <p class="font-captainbold text-white text-4xl opacity-90" v-show="photoOpen">Photography</p>
          </div>
          <div
            id="center"
            class="col-span-2 flex justify-center items-end h-full w-full p-4"
          >
            <div
              id="captain-logo"
              class="flex flex-col items-center pb-10">
              <nuxt-img
                class="w-24 h-24"
                src="/logo-solo-white.png">
              </nuxt-img>
              <h1 class="font-captainbold text-center text-lg md:text-4xl lg:text-5xl pb-4 text-white opacity-90">
                Captain Films
              </h1>
            </div>
            <p class="font-captainbold text-white text-4xl opacity-90" v-show="musicOpen">Music</p>
          </div>
          <div
            id="right"
            class="col-span-2 flex justify-center items-end h-full w-full p-4"
          >
            <p class="font-captainbold text-white text-4xl opacity-90" v-show="webOpen">Web development</p>
          </div>
        </div> -->
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

    allClosed() {
      const isTrue = (element) => element === true;
      return [this.openPhotoNav, this.musicOpen, this.webOpen].some(isTrue)
    }
  },
  async mounted() {
    await this.fetchPhotos();
    this.photos = this.photosData,
    console.log(this.photos)
  },
  methods: {
    ...mapActions({ fetchPhotos: 'banner/fetch' }),

    openPhotoNav() {
      this.$emit('toggle-nav', { type: 'photo'})
    },
    openMusicNav() {
      this.$emit('toggle-nav', { type: 'music'})
    },
    openWebNav() {
      this.$emit('toggle-nav', { type: 'web'})
    },
    toggleTitle(index) {
      return index === 1 ? this.openPhotoNav() : (index === 2 ? this.openMusicNav() : this.openWebNav())
    }
  },
};
</script>
