<template>
  <div class="relative overflow-hidden w-full">
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
        <nuxt-img
          v-show="imageLoaded"
          @load="imageLoaded = true"
          preload
          format="webp"
          class="w-full aspect-[3/2] object-cover rounded-lg"
          :alt="image.title"
          :src="image.url"
        ></nuxt-img>
        <div
          v-show="!imageLoaded"
          class="bg-gray-100 animate-pulse rounded-lg hover:cursor-pointer border-2 border-black aspect-[3/2] object-cover"
        />
      </div>
    </div>
    <div
      v-if="carousselIsActive"
      class="absolute top-1/2 left-0 w-full flex justify-between items-center px-6 ease-in-out duration-300"
    >
      <button
        @click="prev"
        class="opacity-80 hover:opacity-100 text-white bg-gray-700 px-4 py-2 rounded-full focus:outline-none"
      >
        &larr;
      </button>
      <button
        @click="next"
        class="opacity-80 hover:opacity-100 text-white bg-gray-700 px-4 py-2 rounded-full focus:outline-none"
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
    };
  },
  props: {
    images: {
      type: Array,
      default: [],
    },
  },
  computed: {
    carousselIsActive() {
      return this.images.length > 1;
    },
  },
  methods: {
    next() {
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
  },
};
</script>

<style scoped>
/* You can customize styles here */
</style>
