<template>
  <div
    class="flex flex-col justify-center items-center mt-4 hover:cursor-pointer opacity-80 hover:opacity-100 text-center"
    :class="{ 'border-black border-2 p-8 w-fit': loader }"
    @click="resetHome"
  >
    <div :class="{ hidden: menuDisplay }">
      <nuxt-img
        format="webp"
        preload
        :class="{ 'w-14 h-14 md:w-20 md:h-20': !loader, 'w-32 h-32': loader }"
        alt="loader-logo"
        src="/logo-solo.png"
      >
      </nuxt-img>
    </div>
    <nuxt-img
      format="webp"
      class="w-14 h-14 md:w-20 md:h-20"
      :class="menuDisplay ? 'block md:hidden' : 'hidden'"
      alt="captain-films logo"
      src="/logo-solo-white.png"
    >
    </nuxt-img>
    <h1
      class="font-captainlight text-center text-[0.7rem] md:text-sm"
      :class="menuDisplay ? 'font-bold text-white' : 'font-normal text-black'"
    >
      Captain Films
    </h1>
    <p
      class="font-cormorant uppercase text-center text-[0.6rem] md:text-xs md:pb-4 sm:font-bold md:font-normal text-white md:text-black"
      :class="menuDisplay ? 'text-white' : 'font-normal text-black'"
    >
      Film Photography <span v-if="loader">& Journal</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "CaptainFilmsLogo",
  inject: ["resetHome"],
  props: {
    loader: {
      type: Boolean,
      default: false,
    },
    menuDisplay: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
