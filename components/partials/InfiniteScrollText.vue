<template>
  <div
      class="relative bg-black overflow-hidden text-white w-full h-8 leading-8 font-bold uppercase text-xs lg:text-sm md:mt-6 lg:mb-2"
    >
      <div
        class="animate absolute top-0 bottom-0 left-full overflow-hidden w-full md:flex md:justify-around md:items-center md:flex-nowrap md:gap-4 lg:gap-8"
      >
        <nuxt-img format="webp" class="w-6 h-6" alt="captain-logo" src="/logo-solo-white.png"></nuxt-img>
        <p>Un condensé de choses qui m'inspirent</p>
        <p>des reportages photo</p>
        <p>des vidéos qui claquent</p>
        <p>de la musique qui fait vibrer</p>
        <nuxt-img format="webp" class="w-6 h-6" alt="captain-logo" src="/logo-solo-white.png"></nuxt-img>
      </div>
      <div
        class="animate absolute top-0 bottom-0 left-full animate2 overflow-hidden w-full md:flex md:justify-around md:items-center md:flex-nowrap md:gap-4 lg:gap-8"
      >
        <p>Un condensé de choses qui m'inspirent</p>
        <p>des reportages photo</p>
        <p>des vidéos qui claquent</p>
        <p>de la musique qui fait vibrer</p>
        <nuxt-img format="webp" class="w-6 h-6" alt="captain-logo" src="/logo-solo-white.png"></nuxt-img>
      </div>
    </div>
</template>

<script>
export default {
  name: 'infinite-scroll-text'
}
</script>

<style>
.animate {
  animation: scrollText 30s linear infinite;
}

.animate2 {
  animation-delay: 15s;
}

@keyframes scrollText {
  0% {
    left: 100%;
  }
  100% {
    left: -100%;
  }
}
</style>
