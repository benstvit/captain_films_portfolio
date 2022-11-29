<template>
  <section v-show="filteredPhotos">
    <div class="flex justify-center items-center mx-20 max-w-screen">
      <div
        id="captain-logo"
        @click="resetMenu"
        v-if="!menuDisplay"
        class="absolute flex flex-col justify-center items-center hover:cursor-pointer top-6 left-6 text-center">
        <nuxt-img
          class="w-14 h-14"
          src="/logo-solo.png">
        </nuxt-img>
        <h1 class="font-captainbold text-center text-md pb-4 text-black">
          Captain Films
        </h1>
      </div>
      <div class="relative grid grid-cols-6">
        <div id="image-wrapper"
            class="relative flex justify-center hover:cursor-pointer transition-all duration-150 ease-in hover:opacity-90"
            @click="toggleMenu(photo.index)"
            v-for="photo in filteredPhotos"
            :class="customClass"
            :key="photo.id">
          <nuxt-img
            class="h-[50vh] w-full border border-white border-2 rounded-lg shadow-sm"
            :src="photo.url"
            :alt="photo.title"/>
          <h1
            class="absolute top-1/2 font-captainbold text-white text-4xl opacity-90">
            {{ photo.title }}
          </h1>
        </div>
        <div
        id="captain-logo"
        v-if="menuDisplay"
        class="absolute flex flex-col justify-center items-center hover:cursor-pointer top-6 left-6 text-center">
        <nuxt-img
          class="w-12 h-12"
          src="/logo-solo-white.png">
        </nuxt-img>
        <h1 class="font-captainbold text-center text-sm pb-4 text-white">
          Captain Films
        </h1>
      </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SharedBanner",
  props: {
    photos: {
      type: Array,
      default: () => [],
    },
    photoOpen: {
      type: Boolean,
      default: true,
    },
    musicOpen: {
      type: Boolean,
      default: true,
    },
    webOpen: {
      type: Boolean,
      default: true,
    }
  },
  computed: {
    customClass() {
      return this.filteredPhotos.length > 1 ? 'col-span-3' : 'col-span-6'
    },
    filteredPhotos() {
      if (!this.photos) return;
      return this.photos.filter(photo => photo.enabled);
    },
    menuDisplay() {
      if (!this.photos) return;
      return this.filteredPhotos.length === this.photos.length;
    }
  },
  methods: {
    openPhotoNav() {
      this.$emit('toggle-nav', { type: 'photo'});
    },
    openMusicNav() {
      this.$emit('toggle-nav', { type: 'music'})
    },
    openWebNav() {
      this.$emit('toggle-nav', { type: 'web'})
    },
    resetMenu() {
      this.$emit('reset-menu')
    },
    toggleMenu(index) {
      this.photos.filter(p => p.index !== index).forEach(photo => photo.enabled = false);
    },
  },
};
</script>
