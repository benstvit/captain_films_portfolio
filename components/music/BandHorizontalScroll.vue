<template>
  <section>
    <div
      id="musicSection"
      class="flex justify-between items-center gap-24 overflow-x-scroll scroll-smooth scroll-p-0 scroll-m-0 p-4 h-screen rounded-lg">
      <h1 class="whitespace-nowrap font-captainbold uppercase text-4xl font-bold">Ben And The Saints</h1>
      <nuxt-img
        class="w-96 h-72 bg-black rounded-full"
        src="@/static/logo-solo.png">
      </nuxt-img>
      <nuxt-img
        class="w-96 h-72 bg-black rounded-full"
        src="@/static/logo-solo.png">
      </nuxt-img>
      <nuxt-img
        class="w-96 h-72 bg-black rounded-full"
        src="@/static/logo-solo.png">
      </nuxt-img>
      <nuxt-img
        class="w-96 h-72 bg-black rounded-full"
        src="@/static/logo-solo.png">
      </nuxt-img>
      <nuxt-img
        class="w-96 h-72 bg-black rounded-full"
        src="@/static/logo-solo.png">
      </nuxt-img>
      <nuxt-img
        class="w-96 h-72 bg-black rounded-full"
        src="@/static/logo-solo.png">
      </nuxt-img>
    </div>
  </section>
</template>

<script>
import IntersectionObserver from '../../mixins/intersection-observer.js'

export default {
  name: "BandHorizontalScroll",
  mixins: [IntersectionObserver],
  created () {
    window.addEventListener('scroll', this.scrollHorizontaly);
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollHorizontaly);
  },
  props: {
    photos: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    scrollHorizontaly() {
      const horizontalScroll = document.getElementById('musicSection');
      horizontalScroll.addEventListener('wheel', (event) => {
        event.preventDefault();  // stop scrolling in another direction
        horizontalScroll.scrollLeft += (event.deltaY + event.deltaX );
    });
    }
  }
}
</script>
  // <section v-if="photos"
  // <div class="flex justify-center items-center h-screen px-12">
  //   <div class="relative w-full flex justify-center">
  //     <nuxt-img :src="photos[0].url" :alt="photos[0].title" class="w-5/6 mx-2"/>
  //     <h1 class="absolute top-2 font-captainbold text-5xl text-white">NAVAHO</h1>
  //     <span class="absolute bg-black h-18 w-28 rounded-full"/>
  //   </div>
  // </div>
  // </section>
