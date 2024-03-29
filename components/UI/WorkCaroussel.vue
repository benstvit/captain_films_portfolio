<template>
  <div
    class="relative overflow-hidden w-full"
    :class="isActive ? 'saturate-100' : 'saturate-0'"
  >
    <div class="flex">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="w-full transition-opacity ease-in-out rounded-lg overflow-hidden border-2 border-black flex-shrink-0"
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
          class="videoplayer w-full h-full aspect-video object-cover"
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
          class="w-full aspect-video object-cover"
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
      class="absolute top-[45%] md:top-1/2 left-0 w-full flex justify-between items-center px-6 ease-in-out duration-300"
    >
      <button
        @click="prev"
        class="flex items-center justify-center opacity-90 hover:opacity-100 text-white font-bold bg-gray-700 w-8 h-8 md:w-10 md:h-10 rounded-full focus:outline-none"
      >
        &larr;
      </button>
      <button
        @click="next"
        class="flex items-center justify-center opacity-90 hover:opacity-100 text-white font-bold bg-gray-700 w-8 h-8 md:w-10 md:h-10 rounded-full focus:outline-none"
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
    this.disableAutoplayOnMobile();
  },
  methods: {
    disableAutoplayOnMobile() {
      if (window.innerWidth < 640) {
        const videoPlayer = document.querySelectorAll('.videoplayer');
        videoPlayer.forEach(video =>  {
        video.setAttribute('controls', true);
        video.setAttribute('playsinline', true);
        })
      }
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
      this.intervalId = setInterval(this.next, 8000);
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
