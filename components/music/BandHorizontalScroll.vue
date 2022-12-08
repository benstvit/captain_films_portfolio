<template>
  <section>
    <div class="flex justify-center">
      <div
        id="musicSection"
        class="flex justify-center p-4 w-5/6 bg-yellow-100 h-screen rounded-lg">
        <h1 class="font-captainbold uppercase text-4xl font-bold">Ben And The Saints</h1>
      </div>
    </div>
  </section>
</template>

<script>
import IntersectionObserver from '../../mixins/intersection-observer.js'

export default {
  name: "BandHorizontalScroll",
  mixins: [IntersectionObserver],
  props: {
    photos: {
      type: Array,
      default: () => []
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
