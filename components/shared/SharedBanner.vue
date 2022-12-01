<template>
  <section v-show="enabledPhotos">
    <div class="flex justify-center items-center mx-24 max-w-screen">
        <div
          id="captain-logo"
          @click="resetMenu"
          v-if="!menuDisplay"
          class="absolute flex flex-col justify-center items-center hover:cursor-pointer top-6 left-14 text-center">
          <nuxt-img
            class="w-16 h-16"
            src="/logo-solo.png">
          </nuxt-img>
          <h1 class="font-captainbold text-center text-md pb-4 text-black">
            Captain Films
          </h1>
        </div>
      <div class="relative grid grid-cols-6">
        <div id="image-wrapper"
            v-for="photo in photos"
            :key="photo.id"
            class="relative flex justify-center"
            @click="toggleMenu(photo.index)"
            :class="menuDisplay ? 'hover:cursor-pointer hover:opacity-90 col-span-3' : 'col-span-6'">
          <nuxt-img
            v-if="photo.enabled"
            class="h-[50vh] w-full border border-white border-2 rounded-lg shadow-sm"
            :src="photo.url"
            :alt="photo.title"/>
          <h1
          v-if="photo.enabled"
          class="absolute top-[45%] font-captainbold text-white text-4xl opacity-90">
          {{ photo.title }}
          </h1>
        </div>
        <div
        id="captain-logo"
        v-if="menuDisplay"
        class="absolute flex flex-col justify-center items-center hover:cursor-pointer top-6 left-10 text-center">
        <nuxt-img
          class="w-14 h-14"
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
  },
  computed: {
    customClass() {
      return this.enabledPhotos.length > 1 ? 'col-span-3' : 'col-span-6'
    },
    enabledPhotos() {
      if (!this.photos) return;
      return this.photos.filter(photo => photo.enabled);
    },
    menuDisplay() {
      if (!this.photos) return;
      return this.enabledPhotos.length === this.photos.length;
    }
  },
  methods: {
    resetMenu() {
      this.$emit('reset-menu')
    },
    toggleMenu(index) {
      this.photos.filter(p => p.index !== index).forEach(photo => photo.enabled = false);
    },
  },
};
</script>
