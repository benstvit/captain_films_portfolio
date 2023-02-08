<template>
  <section>
    <span
      @mouseover="leftArrowFill = '#000'"
      @mouseleave="leftArrowFill = 'none'"
      @click="toggleMenu('left')">
      <LeftArrowSvg
        v-if="pageIndex !== 1"
        :fill="leftArrowFill"/>
    </span>
    <span
      v-if="pageIndex === 1"
      class="flex justify-center items-center">
      <h2
        class="font-cormorant hover:cursor-pointer hover:font-bold text-black text-xl"
        @click="resetMenu">
        Home
      </h2>
    </span>
  </section>
</template>

<script>
import LeftArrowSvg from "../../svg/LeftArrowSvg.vue"

export default {
  name: 'NavigateLeft',
  components: {
    LeftArrowSvg
  },
  props: {
    pageIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      leftArrowFill: 'none',
    }
  },
  methods: {
    resetMenu() {
      this.$emit('reset-menu');
    },
    toggleMenu(direction) {
      this.$emit('toggle-menu', direction)
    }
  }
}
</script>
