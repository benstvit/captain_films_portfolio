<template>
  <section>
    <div
      class="flex flex-col justify-center p-4 h-full rounded-lg bg-yellow-50">
      <div
        id="bandBanner"
        class="flex justify-around items-start my-12 mx-4">
        <nuxt-img
          :src="this.photos[0].url"
          :alt="this.photos[0].title"
          class="rounded-full h-96"/>
          <h1 class="items-start font-playfair text-5xl">NAVAHO</h1>
      </div>
      <div
        id="bandHorizontalScroll"
        class="flex justify-between items-center gap-24 scrollbar-hide overflow-x-scroll scroll-auto scroll-p-0 scroll-m-0 my-6 mx-4 px-12">
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
  data () {
    return {
      bandHorizontalScroll: null
    }
  },
  name: "BandSection",
  mixins: [IntersectionObserver],
  destroyed () {
    this.bandHorizontalScroll.removeEventListener('wheel', this.scrollHorizontaly);
  },
  props: {
    photos: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    scrollHorizontaly(event) {
      if (event.currentTarget.scrollLeft !== 0 || event.deltaY > 0) {
        event.preventDefault();
        event.currentTarget.scrollLeft += (event.deltaY + event.deltaX)
      }
    }
  },
  mounted () {
    const horizontalScroll = document.getElementById('bandHorizontalScroll');
    this.bandHorizontalScroll = horizontalScroll;
    this.bandHorizontalScroll.addEventListener('wheel', this.scrollHorizontaly);
  },
}
</script>
