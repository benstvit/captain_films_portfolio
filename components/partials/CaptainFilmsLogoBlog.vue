<template>
  <nuxt-link
    class="flex flex-col justify-center items-center mt-4 hover:cursor-pointer opacity-80 hover:opacity-100 text-center"
    to="/"
  >
    <nuxt-img
      format="webp"
      preload
      class="w-14 h-14 md:w-20 md:h-20"
      alt="loader-logo"
      :src="'logo-solo.png'"
    >
    </nuxt-img>
    <h1 class="font-captainlight text-center text-[0.7rem] md:text-sm">
      Captain Films
    </h1>
    <div class="font-captainlight text-center italic text-[0.6rem] md:text-xs md:pb-4 sm:font-bold md:font-normal text-white md:text-black">
      <p>
        Film Photography
      </p>
      <p class="font-cormorant font-bold uppercase not-italic p-1">Le Blog</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "CaptainFilmsLogoBlog",
};
</script>
