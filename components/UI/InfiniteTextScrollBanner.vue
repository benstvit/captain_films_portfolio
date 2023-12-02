<template>
  <div class="overflow-y-hidden w-full border-black bg-black pb-1 border-b border-x rounded-b-xl bg-white">
    <div class="w-full overflow-hidden whitespace-nowrap bg-white rounded-t-none rounded-b-md shadow-md">
      <div
        class="w-full inline-block animate-scrollText text-base md:text-lg text-black font-cormorant tracking-wide hover:cursor-pointer"
        :style="{ animationDuration: animationDuration }"
      >
        <span @click.stop="openSubscriptionModal">{{ text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfiniteTextScrollBanner",
  data() {
    return {
      text: "💌 Hello ! Clique-moi dessus pour t'abonner 💌",
      animationDuration: "12s", // Adjust as needed
    };
  },
  methods: {
    openSubscriptionModal() {
      this.$parent.$emit('open-subscription-modal')
    }
  }
};
</script>
