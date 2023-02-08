<template>
  <section>
    <div class="flex flex-col justify-center items-center gap-8 mx-24 max-w-screen">
      <div
        id="captain-logo"
        @click="resetMenu"
        v-if="!menuDisplay"
        class="flex flex-col justify-center items-center mt-4 hover:cursor-pointer opacity-70 hover:opacity-100 text-center">
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
          <div class="flex items-center justify-center gap-12" :class="menuDisplay && 'flex-grow'">
            <NavigateLeft
              v-if="!menuDisplay"
              :pageIndex="pageIndex"
              @reset-menu="resetMenu"
              @toggle-menu="toggleMenu"/>
            <nuxt-img
              v-if="menu.enabled"
              class="h-[50vh] object-cover object-bottom w-full"
              :class="menuDisplay ? 'border border-1 border-white' : 'shadow-lg rounded-sm w-[70vh]'"
              :src="menu.url"
              :alt="menu.title"/>
            <NavigateRight
              v-if="!menuDisplay"
              :pageIndex="pageIndex"
              @toggle-menu="toggleMenu" />
          </div >
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
import NavigateLeft from "../shared/menu/NavigateLeft.vue"
import NavigateRight from "../shared/menu/NavigateRight.vue"

export default {
  name:"BannerImage",
  components: {
    NavigateLeft,
    NavigateRight
  },
  props: {
    menus: {
      type: Array,
      default: () => [],
    },
    menuDisplay: {
      type: Boolean,
      default: true,
    },
    pageIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    menuGrid(index) {
      return index === 3 ? 'hover:cursor-pointer hover:opacity-90 col-span-6' : 'hover:cursor-pointer hover:opacity-90 col-span-3';
    },
    resetMenu() {
      this.$parent.$emit('reset-menu');
    },
    selectMenu(index) {
      this.menus.filter(p => p.index !== index).forEach(menu => menu.enabled = false);
    },
    toggleMenu(direction) {
      this.$parent.$emit('toggle-menu', { direction: direction, index: this.menus[0].index })}
  }
}
</script>
