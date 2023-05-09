<template>
  <section>
    <div class="flex flex-col justify-center items-center md:gap-4 mx-4">
      <CaptainFilmsLogo
        v-if="!menuDisplay"
        :menu-display="menuDisplay"
        @reset-menu="resetMenu" />
      <MobileMenu
        class="block md:hidden"
        :menu-display="menuDisplay"
        :active-page="menus"
        @select-menu="selectMenu"/>
      <div class="relative grid grid-cols-6">
        <div id="image-wrapper"
          v-for="menu in menus"
          :key="menu.id"
          class="relative flex justify-center"
          @click="selectMenu(menu.index)"
          :class="menuDisplay ? menuGrid(menu.index) : 'col-span-6'">
          <div
            class="flex items-center justify-center gap-4 md:gap-12"
            :class="menuDisplay && !menu.error && 'flex-grow'">
            <nuxt-img
              v-if="menu.enabled"
              format="webp"
              preload
              :class="menuDisplay ? 'md:h-[32vh] lg:h-[50vh] w-screen lg:w-full object-cover border border-1 border-white' : 'md:h-[32vh] lg:h-[50vh] max-w-sm mx-4 md:max-w-none md:mx-0 md:w-auto object-cover shadow-lg rounded-sm w-full '"
              :src="menu.url"
              :alt="menu.title"/>
          </div >
          <h1
            v-if="menu.enabled"
            class="absolute top-[45%] font-captainlight text-center sm:text-xl lg:text-3xl opacity-90"
            :class="menu.error ? 'text-gray-700': 'text-white'">
            {{ menu.title }}
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CaptainFilmsLogo from './CaptainFilmsLogo.vue'
import MobileMenu from './MobileMenu.vue'

export default {
  name:"BannerImage",
  components: {
    CaptainFilmsLogo,
    MobileMenu,
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
  },
  methods: {
    menuGrid(index) {
      return index === 3 ? 'col-span-6 hover:cursor-pointer hover:opacity-90 hover:shadow-inner' : 'col-span-6 lg:col-span-3 hover:cursor-pointer hover:opacity-90 hover:shadow-inner';
    },
    resetMenu() {
      this.$emit('reset-menu');
    },
    selectMenu(index) {
      this.$emit('select-menu', index)
    },
  },
}
</script>
