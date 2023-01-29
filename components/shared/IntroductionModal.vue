<template>
  <div v-if="showModal" class="fixed top-40 left-0 z-10 w-full h-full overflow-auto backdrop-blur-sm">
    <div ref="modal" class="bg-white t-56 mt-auto mx-auto p-4 border-1 border-gray-50 w-2/3 rounded-md shadow-md">
      <span @click="closeModal" class="hover:text-black cursor-pointer text-gray-500 float-right font-bold text-4xl">&times;</span>
      <div class="flex flex-col justify-between items-center divide-y-1 p-4 gap-4 my-2 font-captainlight">
        <nuxt-img class="h-14 w-14" src="/aileron.png"/>
        <p class="text-md"> Welcome to my porfolio and thanks for visiting !</p>
        <p class="text-md text-center"> All my photographs were shot on 35mm film in various places around the world. All photos are available to be printed in different formats on cotton paper of great quality.</p>
        <p class="text-md"> <span class="italic">Curious ?</span> Take a look at <span class="underline decoration-3 cursor-pointer" @click="navigateToGallery">the final result</span> in the home of the people who took the plunge.</p>
        <p class="text-2xl font-handwritten">Captain Films.</p>
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
  methods: {
    closeModal() {
      this.showModal = false;
      this.$emit('close-modal');
    },
    navigateToGallery() {
      this.$emit('toggle-menu', { direction: 'right', index: 1 });
      this.$emit('close-modal');
    }
  },
  watch: {
    clickTarget(newValue) {
      this.showModal = false;
    }
  },
}
</script>
