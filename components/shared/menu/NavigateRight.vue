<template>
  <section>
    <div :class="pageIndex !== 1 ? 'hidden' : buttonClass">
      <span
        @mouseover="display(showroom)"
        @mouseleave="hide(showroom)"
        @click="toggleMenu('right')"
      >
        <div class="flex justify-center items-center h-fit gap-4">
          <div class="flex flex-col justify-center items-center">
            <ShowroomSvg :stroke="showroom.stroke" />
            <h2 class="font-cormorant text-base lg:text-lg">Gallery</h2>
          </div>
          <RightArrowSvg />
        </div>
      </span>
    </div>
    <div :class="pageIndex !== 2 ? 'hidden' : buttonClass">
      <span
        @mouseover="display(contact)"
        @mouseleave="hide(contact)"
        @click="toggleMenu('right')"
      >
        <div class="flex justify-center items-center h-fit gap-4">
          <div class="flex flex-col justify-center items-center">
            <ContactSvg :stroke="contact.stroke" />
            <h2 class="font-cormorant text-base lg:text-lg">Contact</h2>
          </div>
          <RightArrowSvg />
        </div>
      </span>
    </div>
    <div :class="pageIndex !== 3 ? 'hidden' : buttonClass">
      <span
        @mouseover="display(gallery)"
        @mouseleave="hide(gallery)"
        @click="toggleMenu('rewind')"
      >
        <div class="flex justify-center items-center h-fit gap-4">
          <div class="flex flex-col justify-center items-center">
            <GallerySvg :stroke="gallery.stroke" />
            <h2 class="font-cormorant text-base lg:text-lg">Photography</h2>
          </div>
          <RightArrowSvg />
        </div>
      </span>
    </div>
  </section>
</template>

<script>
import ContactSvg from "../../svg/ContactSvg.vue";
import GallerySvg from "../../svg/GallerySvg.vue";
import RightArrowSvg from "../../svg/RightArrowSvg.vue";
import ShowroomSvg from "../../svg/ShowroomSvg.vue";

export default {
  name: "NavigateRight",
  components: {
    ContactSvg,
    GallerySvg,
    RightArrowSvg,
    ShowroomSvg,
  },
  props: {
    pageIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      contact: { stroke: "#27272A" },
      gallery: { stroke: "#27272A" },
      showroom: { stroke: "#27272A" },
    };
  },
  computed: {
    buttonClass() {
      return "flex flex-col items-center h-6 w-6 md:h-10 md:w-10 xl:h-12 xl:w-12 ml-4 hover:cursor-pointer hover:text-teal-700";
    },
  },
  methods: {
    display(page) {
      page.stroke = "#0F766E";
    },
    hide(page) {
      page.stroke = "#27272A";
    },
    toggleMenu(direction) {
      this.$emit("toggle-menu", direction);
    },
  },
};
</script>
