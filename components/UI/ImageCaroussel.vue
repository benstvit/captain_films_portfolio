<template>
  <div class="relative">
    <div class="overflow-hidden w-full">
      <div class="flex">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="w-full ease-in-out duration-200 rounded-lg hover:cursor-pointer border-2 border-black flex-shrink-0"
          :class="{ 'ml-0': index === 0, 'ml-[100%]': index !== currentIndex, 'ml-0': index === currentIndex }"
        >
          <nuxt-img
            v-show="imageLoaded"
            @load="imageLoaded = true"
            preload
            format="webp"
            class="w-full aspect-[3/2] object-cover"
            :alt="image.title"
            :src="image.url"
          ></nuxt-img>
        </div>
          <div
            v-show="!imageLoaded"
            class="bg-gray-100 animate-pulse rounded-lg hover:cursor-pointer border-2 border-black aspect-[3/2] object-cover"
          />
      </div>
    </div>

    <div class="absolute top-1/2 left-0 w-full flex justify-between px-4">
      <button
        @click="prev"
        class="text-white bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded-full focus:outline-none"
      >
        &larr;
      </button>
      <button
        @click="next"
        class="text-white bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded-full focus:outline-none"
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
  mounted() {
    console.log(this.images);
  },
  methods: {
    next() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
          console.log("Next clicked, currentIndex:", this.currentIndex);

    },
    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.images.length - 1;
      }
          console.log("Prev clicked, currentIndex:", this.currentIndex);

    },
  },
};
</script>

<style scoped>
/* You can customize styles here */
</style>
