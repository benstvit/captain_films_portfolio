<template>
  <div
    class="relative overflow-hidden w-full"
    :class="isActive ? 'saturate-100' : 'saturate-0'"
    @mouseover="activateCard(data.id)"
  >
    <div class="flex">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="w-full transition-opacity ease-in-out rounded-lg border-2 border-black flex-shrink-0"
        :class="{
          block: index === currentIndex,
          hidden: index !== currentIndex,
        }"
      >
        <video
          v-if="image.url.includes('videos')"
          autoplay
          muted
          loop
          class="w-full h-full aspect-video object-cover rounded-lg"
        >
          <source :src="image.url" type="video/mp4" />
          Votre navigateur ne semble pas supporter le tag video.
        </video>
        <nuxt-img
          v-else
          v-show="imageLoaded"
          @load="imageLoaded = true"
          preload
          format="webp"
          class="w-full aspect-video object-cover rounded-lg"
          :alt="image.title"
          :src="image.url"
        ></nuxt-img>
        <div
          v-show="!imageLoaded"
          class="w-full bg-gray-100 animate-pulse rounded-lg hover:cursor-pointer aspect-video object-cover"
        />
      </div>
    </div>
    <div
      v-if="carousselIsActive && imageLoaded"
      class="absolute top-1/2 left-0 w-full flex justify-between items-center px-6 ease-in-out duration-300"
    >
      <button
        @click="prev"
        class="opacity-90 hover:opacity-100 text-white font-bold bg-gray-700 px-4 py-2 rounded-full focus:outline-none"
      >
        &larr;
      </button>
      <button
        @click="next"
        class="opacity-90 hover:opacity-100 text-white font-bold bg-gray-700 px-4 py-2 rounded-full focus:outline-none"
      >
        &rarr;
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageLoaded: false,
      currentIndex: 0,
      intervalId: null
    };
  },
  props: {
    data: {
      type: Object,
      default: {},
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    carousselIsActive() {
      return this.images.length > 1;
    },
    images() {
      return this.data.imagesCollection.items;
    },
  },
  mounted() {
    this.startCaroussel();
  },
  methods: {
    activateCard(cardId) {
      this.$emit("activate-card", cardId);
    },
    next(event) {
      if (event) this.stopCaroussel();

      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.images.length - 1;
      }
    },
    startCaroussel() {
      this.intervalId = setInterval(this.next, 6000);
    },
    stopCaroussel() {
      clearInterval(this.intervalId);
    }
  },
  beforeDestroy() {
    this.stopCaroussel();
  }
};
</script>

<style scoped>
/* You can customize styles here */
</style>
