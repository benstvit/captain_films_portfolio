<template>
  <div
    class="flex flex-col justify-center items-center mt-4 hover:cursor-pointer opacity-80 hover:opacity-100 text-center"
    @click="$emit('reset-menu')">
    <nuxt-img
      :class="{'hidden': menuDisplay, 'w-14 h-14 md:w-20 md:h-20': !loader, 'w-80 h-80': loader }"
      :src="'logo-solo.png'">
    </nuxt-img>
    <nuxt-img
      class="w-14 h-14 md:w-20 md:h-20"
      :class="menuDisplay ? 'block md:hidden' : 'hidden'"
      src="logo-solo-white.png">
    </nuxt-img>
    <h1
      class="font-captainlight text-center text-[0.7rem] md:text-sm"
      :class="menuDisplay ? 'font-bold text-white' : 'font-normal text-black'">
      Captain Films
    </h1>
    <p
      class="font-captainlight text-center italic text-[0.6rem] md:text-xs md:pb-4 sm:font-bold md:font-normal text-white md:text-black"
      :class="menuDisplay ? 'text-white' : 'font-normal text-black'">
      Film Photography
    </p>
  </div>
</template>

<script>
export default {
  name: 'CaptainFilmsLogo',
  props: {
    loader: {
      type: Boolean,
      default: false
    },
    menuDisplay: {
      type: Boolean,
      default: true
    }
  }
}
</script>
