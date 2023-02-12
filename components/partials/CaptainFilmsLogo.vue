<template>
  <div
    id="captain-logo"
    v-if="menuDisplay"
    class="flex flex-col justify-center items-center mx-2 lg:w-44 xl:w-36 text-center">
    <nuxt-img
      class="md:h-20 md:w-20 lg:h-28 lg:w-28"
      src="/logo-solo.png">
    </nuxt-img>
    <h1 class="font-captainbold font-bold text-center text-sm text-black">
      Captain Films
    </h1>
    <p class="font-captainlight text-center italic text-xs pb-4 text-black">
      Film Photography
    </p>
  </div>
</template>

<script>
export default {
  name: 'CaptainFilmsLogo',
  props: {
    menuDisplay: {
      type: Boolean,
      default: false
    }
  }
}
</script>
