<template>
  <div
    id="captain-logo"
    v-if="menuDisplay"
    class="absolute flex flex-col justify-center items-center text-center"
    :class="customClass">
    <nuxt-img
      class="w-28 h-28"
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
    customClass: {
      type: String,
      default: ''
    },
    menuDisplay: {
      type: Boolean,
      default: false
    }
  }
}
</script>
