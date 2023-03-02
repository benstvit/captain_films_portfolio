<template>
  <div
    class="flex flex-col justify-center items-center mt-4 hover:cursor-pointer opacity-80 hover:opacity-100 text-center"
    @click="$emit('reset-menu')">
    <nuxt-img
      class="w-12 h-12 md:w-20 md:h-20"
      src="/logo-solo.png">
    </nuxt-img>
    <h1 class="font-captainlight text-center text-[0.7rem] md:text-sm text-black">
      Captain Films
    </h1>
    <p class="font-captainlight text-center italic text-[0.6rem] md:text-xs md:pb-4 text-black">
      Film Photography
    </p>
  </div>
</template>

<script>
export default {
  name: 'CaptainFilmsLogo'
}
</script>
