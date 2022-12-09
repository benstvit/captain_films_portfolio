<template>
  <section>
    <div
      class="flex flex-col justify-center p-4 h-full my-12 rounded-lg bg-gray-50">
      <div
        class="flex justify-around items-center my-8 mx-4"
        v-for="photo in photos"
        :key="photo.index">
        <nuxt-img
          v-parallax="-0.15"
          :src="photo.url"
          :alt="photo.title"
          class="rounded-full h-96"/>
          <h1
            @mouseover="displayDescription(photo.index)"
            class="hover:cursor-pointer items-start transition ease-out"
            :class="photo.displayDescription ? 'font-italic font-cormorant text-lg' : 'font-playfair font-bold text-5xl'">
            {{ photo.title }}
          </h1>
          <p v-if="photo.displayDescription">{{ photo.description }}</p>
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
  name: "BandSection",
  mixins: [IntersectionObserver],
  data () {
    return {
      bandHorizontalScroll: null,
    }
  },
  destroyed () {
    this.bandHorizontalScroll?.removeEventListener('wheel', this.scrollHorizontaly);
  },
  props: {
    photos: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    photos(newValue) {
      console.log(newValue);
    }
  },
  methods: {
    bandInfo(band) {
      return band.displayDescription ? band.description : band.title;
    },
    displayDescription(index) {
      this.$emit('update-photos', index)
    },
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
