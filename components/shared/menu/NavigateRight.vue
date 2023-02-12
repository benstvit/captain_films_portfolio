<template>
  <section>
    <span
      @mouseover="rightArrowFill = '#000'"
      @mouseleave="rightArrowFill = 'none'"
      @click="toggleMenu('right')">
      <RightArrowSvg
        v-if="pageIndex !== 3"
        :fill="rightArrowFill"/>
    </span>
    <div
      v-if="pageIndex === 3"
      class="flex justify-center items-center">
      <span
        @mouseover="stopFill = '#000'"
        @mouseleave="stopFill = 'none'"
        @click="toggleMenu('rewind')">
        <StopSvg  :fill="stopFill" />
      </span>
    </div>
  </section>
</template>

<script>
import RightArrowSvg from "../../svg/RightArrowSvg.vue"
import StopSvg from "../../svg/StopSvg.vue"

export default {
  name: 'NavigateRight',
  components: {
    RightArrowSvg,
    StopSvg
  },
  props: {
    pageIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      rightArrowFill: 'none',
      stopFill: 'none'
    }
  },
  methods: {
    toggleMenu(direction) {
      this.$emit('toggle-menu', direction)
    }
  }
}
</script>
