<template>
  <section>
    <div
      class="p-4 h-screen rounded-lg bg-yellow-50">
      <div
        id="musicSection"
        class="flex justify-between items-center gap-24 overflow-x-scroll scroll-auto scroll-p-0 scroll-m-0 px-12">
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
    </div>
  </section>
</template>

<script>
import IntersectionObserver from '../../mixins/intersection-observer.js'

export default {
  name: "BandHorizontalScroll",
  mixins: [IntersectionObserver],
  mounted () {
    const horizontalScroll = document.getElementById('musicSection');
    horizontalScroll.addEventListener('wheel', this.scrollHorizontaly);
  },
  destroyed () {
    const horizontalScroll = document.getElementById('musicSection');
    horizontalScroll.removeEventListener('wheel', this.scrollHorizontaly);
  },
  props: {
    photos: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    scrollHorizontaly(event) {
      console.log(event);
      if (event.currentTarget.scrollLeft !== 0 || event.deltaY === 1) {
        event.preventDefault();
        event.currentTarget.scrollLeft += (event.deltaY + event.deltaX)
      }
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
