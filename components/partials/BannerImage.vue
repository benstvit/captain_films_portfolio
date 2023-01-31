<template>
  <section>
    <div class="flex flex-col 2xl:flex-row justify-center items-center gap-8 mx-24 max-w-screen">
      <div
        id="captain-logo"
        @click="resetMenu"
        v-if="!menuDisplay"
        class="relative 2xl:absolute 2xl:left-14 flex flex-col justify-center items-center hover:cursor-pointer top-6 text-center">
        <nuxt-img
          class="w-16 h-16"
          src="/logo-solo.png">
        </nuxt-img>
        <h1 class="font-captainbold text-center text-md text-black">
          Captain Films
        </h1>
        <p class="font-captainlight text-center italic text-xs pb-4 text-black">
          Film Photography
        </p>
      </div>
      <div class="relative grid grid-cols-6">
        <div id="image-wrapper"
          v-for="menu in menus"
          :key="menu.id"
          class="relative flex justify-center"
          @click="selectMenu(menu.index)"
          :class="menuDisplay ? menuGrid(menu.index) : 'col-span-6'">
          <nuxt-img
            id="musicPageBanner"
            v-if="menu.enabled"
            class="h-[50vh] object-cover object-bottom w-full"
            :class="menuDisplay ? 'border border-1 border-white' : 'shadow-lg rounded-sm'"
            :src="menu.url"
            :alt="menu.title"/>
          <h1
            v-if="menu.enabled"
            class="absolute top-[45%] font-captainbold text-center text-white sm:text-2xl md:text-3xl lg:text-4xl opacity-90">
            {{ menu.title }}
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IntersectionObserver from '../../mixins/intersection-observer.js'

export default {
  name:"BannerImage",
  mixins: [IntersectionObserver],
  props: {
    menus: {
      type: Array,
      default: () => [],
    },
    menuDisplay: {
      type: Boolean,
      default: true,
    }
  },
  methods: {
    menuGrid(index) {
      return index === 3 ? 'hover:cursor-pointer hover:opacity-90 col-span-6' : 'hover:cursor-pointer hover:opacity-90 col-span-3';
    },
    resetMenu() {
      this.$emit('reset-menu');
    },
    selectMenu(index) {
      this.menus.filter(p => p.index !== index).forEach(menu => menu.enabled = false);
    },
  }
}
</script>
