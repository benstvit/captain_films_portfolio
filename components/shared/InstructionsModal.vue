<template>
  <div v-if="showModal" class="fixed top-40 left-0 z-10 w-full h-full overflow-auto backdrop-blur-sm">
    <div ref="modal" class="bg-white t-56 mt-auto mx-auto p-4 border-1 border-gray-50 w-2/3 rounded-md shadow-md">
      <span @click="showModal = false" class="hover:text-black cursor-pointer text-gray-500 float-right font-bold text-4xl">&times;</span>
      <div class="flex flex-col justify-between items-center p-4 gap-4 my-2 font-captainlight">
        <span>🎞 You will find here a selection of my photographs.</span>
        <span>📸 All photographs were shot on 35mm film in various places around the world.</span>
        <span>🖼 All photos are available to be printed in different formats on cotton paper of great quality.</span>
        <span>👉 Curious ? Take a look at the final result in the home of the people who took the plunge.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: true,
      test: null
    }
  },
  props: {
    clickTarget: {
      type: Function,
      default: () => {}
    }
  },
  watch: {
    test(newValue) {
      console.log(newValue);
    }
  },
  mounted() {
    this.test = this.clickTarget;
    console.log(this.test);
    // console.log(this.$refs.modal)
  },
}
</script>
