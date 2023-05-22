<template>
  <div class="w-full mt-0 md:mt-4 opacity-80">
    <div class="flex flex-col items-center">
      <nuxt-img
        format="webp"
        preload
        class="w-12 h-12 md:w-20 md:h-20"
        alt="loader-logo"
        :src="'logo-solo.png'"
      >
      </nuxt-img>
      <h1 class="font-captainlight text-center text-[0.7rem] md:text-sm">
        Captain Films
      </h1>
      <div
        class="font-captainlight text-center italic text-[0.6rem] md:text-xs sm:font-bold md:font-normal text-black"
      >
        <p>Film Photography</p>
        <p class="font-cormorant font-bold uppercase not-italic pt-1">
          Le Blog
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CaptainFilmsLogoBlog",
};
</script>
