<template>
  <div
    @click.stop="handleBodyClick"
    class="fixed top-36 left-0 z-20 w-full h-full overflow-auto backdrop-blur-sm"
  >
    <div
      id="modal"
      class="relative bg-white t-56 mt-auto mx-auto p-4 border-2 md:border-1 border-gray-600 md:border-black md:border-2 w-2/3 rounded-sm md:rounded-none shadow-md"
    >
      <span
        @click="closeModal"
        class="absolute top-2 right-4 hover:text-black cursor-pointer text-gray-700 float-right font-bold text-2xl md:text-4xl"
        >&times;</span
      >
      <div
        class="flex flex-col justify-between items-center divide-y-1 p-4 gap-4 md:gap-3 my-0 font-captainlight text-center"
      >
        <nuxt-img
          format="webp"
          class="h-14 w-14 p-0 m-0"
          src="/aileron.png"
          alt="aileron"
        />
        <p class="font-cormorant text-sm md:text-lg">
          Welcome and thanks for visiting !
        </p>
        <p class="font-cormorant text-sm md:text-lg">
          All photographs were shot on 35mm film. They are all available to be printed and framed in different
          formats on cotton paper of 👌 quality.
        </p>
        <p class="font-cormorant text-sm md:text-lg">
          Curious ? Take a look at
          <span
            class="underline decoration-3 cursor-pointer hover:font-bold"
            @click="navigateToGallery"
            >the final result</span
          >
          in the home of the people who took the plunge.
        </p>
        <p class="font-cormorant text-sm md:text-lg">
          Oh, and as a front-end developer, I coded this portfolio from scratch in Vue.js if that means something to you 👾.
        </p>
        <p class="text-lg md:text-2xl font-handwritten">Captain Films.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['setMenu'],
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
    handleBodyClick(event) {
      const modal = document.getElementById("modal");
      if (event.target.closest("#modal") === modal) {
        this.closeModal();
      }
    },
    navigateToGallery() {
      this.setMenu({ direction: "right", index: 1 })
      this.$emit("close-modal");
    },
  },
};
</script>
