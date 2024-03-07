<template>
  <div class="overflow-y-hidden w-full border-black bg-black pb-1 border-b border-x rounded-b-xl bg-white">
    <div class="w-full overflow-hidden whitespace-nowrap bg-white rounded-t-none rounded-b-md shadow-md">
      <div
        class="w-full inline-block animate-scrollTextMobile md:animate-scrollTextMedium lg:animate-scrollTextLarge text-base md:text-lg text-black font-cormorant tracking-wide hover:cursor-pointer"
        :style="{ animationDuration: animationDuration }"
      >
        <span @click.stop="openSubscriptionModal">{{ scrollingText }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfiniteTextScrollBanner",
  props: {
    scrollingText: {
      type: String,
      default: "",
    }
  },
  data() {
    return {
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
