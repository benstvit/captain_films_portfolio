<template>
  <section>
    <div
      class="p-4 h-screen rounded-lg bg-yellow-50">
      <div
        id="bandBanner"
        class="w-2/3 h-2/3 my-12">
        <nuxt-img :src="this.photos[0].url" :alt="this.photos[0].title"/>
      </div>
      <div
        id="bandHorizontalScroll"
        class="flex justify-between items-center gap-24 scrollbar-hide overflow-x-scroll scroll-auto scroll-p-0 scroll-m-0 px-12">
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
export default {
  data () {
    return {
      bandHorizontalScroll: null
    }
  },
  name: "BandSection",
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
