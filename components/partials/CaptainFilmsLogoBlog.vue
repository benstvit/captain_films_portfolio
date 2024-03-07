<template>
  <div class="w-full mt-1 md:mt-4 opacity-80">
    <div class="flex flex-col items-center text-black">
      <nuxt-img
        format="webp"
        preload
        class="w-10 h-10 md:w-20 md:h-20"
        alt="loader-logo"
        src="/logo-solo.png"
      >
      </nuxt-img>
      <h1 class="font-captainlight text-center text-[0.6rem] md:text-sm">
        Captain Films
      </h1>
      <div
        class="font-captainlight text-center italic text-[0.5rem] md:text-xs sm:font-bold md:font-normal"
      >
        <p class="font-cormorant uppercase not-italic pt-1 ">
          {{pageCategory}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CaptainFilmsLogoBlog",
  props: {
    pageCategory: {
      type: String,
      default: 'Journal'
    }
  }
};
</script>
