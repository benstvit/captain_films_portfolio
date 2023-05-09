<template>
  <section>
      <div :class="pageIndex !== 1 ? 'hidden' : buttonClass">
        <span
          @mouseover="display(home)"
          @mouseleave="hide(home)"
          @click="resetMenu">
          <div class="flex justify-center items-center h-fit gap-4">
            <LeftArrowSvg />
            <div class="flex flex-col justify-center items-center">
              <HomeSvg :stroke="home.stroke" />
              <h2 class="font-cormorant text-base lg:text-lg">Home</h2>
            </div >
          </div >
        </span>
      </div >
    <div :class="pageIndex !== 2 ? 'hidden' : buttonClass">
      <span
        @mouseover="display(gallery)"
        @mouseleave="hide(gallery)"
        @click="toggleMenu()">
        <div class="flex justify-center items-center h-fit gap-4">
          <LeftArrowSvg />
          <div class="flex flex-col justify-center items-center">
            <GallerySvg :stroke="gallery.stroke" />
            <h2 class="font-cormorant text-base lg:text-lg">Gallery</h2>
          </div >
        </div>
      </span>
    </div >
    <div :class="pageIndex !== 3 ? 'hidden' : buttonClass">
      <span
        @mouseover="display(showroom)"
        @mouseleave="hide(showroom)"
        @click="toggleMenu()">
        <div class="flex justify-center items-center h-fit gap-4">
          <LeftArrowSvg />
          <div class="flex flex-col justify-center items-center">
            <ShowroomSvg :stroke="showroom.stroke" />
            <h2 class="font-cormorant text-base lg:text-lg">Showroom</h2>
          </div >
        </div>
      </span>
    </div >
  </section>
</template>

<script>
import GallerySvg from "../../svg/GallerySvg.vue"
import HomeSvg from "../../svg/HomeSvg.vue"
import LeftArrowSvg from "../../svg/LeftArrowSvg.vue"
import ShowroomSvg from "../../svg/ShowroomSvg.vue"

export default {
  name: 'NavigateLeft',
  components: {
    GallerySvg,
    HomeSvg,
    LeftArrowSvg,
    ShowroomSvg
  },
  props: {
    pageIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      home: {stroke: '#27272A'},
      gallery: {stroke: '#27272A'},
      left: {stroke: '#27272A'},
      showroom: {stroke: '#27272A'}
    }
  },
  computed: {
    buttonClass() {
      return 'flex flex-col items-center h-6 w-6 md:h-10 md:w-10 xl:h-12 xl:w-12 mr-4 hover:cursor-pointer hover:text-teal-700'
    }
  },
  mounted() {
    console.log(this.pageIndex)
  },
  methods: {
    display(page) {
      page.stroke = '#0F766E'
    },
    hide(page) {
      page.stroke = '#27272A'
    },
    resetMenu() {
      this.$emit('reset-menu');
    },
    toggleMenu() {
      this.$emit('toggle-menu', 'left')
    }
  }
}
</script>
