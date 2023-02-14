<template>
  <section>
      <div :class="pageIndex !== 1 ? 'hidden' : buttonClass">
        <span
          @mouseover="display(showroom)"
          @mouseleave="hide(showroom)"
          @click="toggleMenu('right')">
          <ShowroomSvg :stroke="showroom.stroke" />
        </span>
        <h2 v-if="showroom.hover" class="font-cormorant text-lg">Showroom</h2>
      </div >
      <div :class="pageIndex !== 2 ? 'hidden' : buttonClass">
        <span
          @mouseover="display(contact)"
          @mouseleave="hide(contact)"
          @click="toggleMenu('right')">
          <ContactSvg :stroke="contact.stroke" />
        </span>
        <h2 v-if="contact.hover" class="font-cormorant text-lg">Contact</h2>
      </div >
     <div :class="pageIndex !== 3 ? 'hidden' : buttonClass">
        <span
          @mouseover="display(gallery)"
          @mouseleave="hide(gallery)"
          @click="toggleMenu('rewind')">
          <GallerySvg :stroke="gallery.stroke" />
        </span>
        <h2 v-if="gallery.hover" class="font-cormorant text-lg">Gallery</h2>
     </div >
  </section>
</template>

<script>
import ContactSvg from "../../svg/ContactSvg.vue"
import GallerySvg from "../../svg/GallerySvg.vue"
import ShowroomSvg from "../../svg/ShowroomSvg.vue"

export default {
  name: 'NavigateRight',
  components: {
    ContactSvg,
    GallerySvg,
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
      contact: {stroke: '#000', hover: false },
      gallery: {stroke: '#000', hover: false },
      showroom: {stroke: '#000', hover: false }
    }
  },
  computed: {
    buttonClass() {
      return 'flex flex-col items-center h-6 w-6 md:h-10 md:w-10 xl:h-12 xl:w-12 hover:cursor-pointer hover:text-teal-600'
    }
  },
  methods: {
    display(page) {
      page.stroke = '#0D9488'
      page.hover = true
    },
    hide(page) {
      page.stroke = '#000'
      page.hover = false
    },
    toggleMenu(direction) {
      this.$emit('toggle-menu', direction)
    }
  }
}
</script>
