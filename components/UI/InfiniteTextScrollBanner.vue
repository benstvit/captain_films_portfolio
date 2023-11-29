<template>
  <div class="overflow-visible whitespace-nowrap bg-black w-full p-2 my-2">
    <div
      class="w-full inline-block animate-scrollText text-white uppercase font-cormorant"
      :style="{ animationDuration: animationDuration }"
    >
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "InfiniteTextScrollBanner",
  data() {
    return {
      text: "Your scrolling text goes here",
      animationDuration: "16s", // Adjust as needed
    };
  },
};
</script>
