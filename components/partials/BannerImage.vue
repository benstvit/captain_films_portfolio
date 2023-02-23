<template>
  <section>
    <div class="flex flex-col justify-center items-center md:gap-4 mx-4">
      <div
        id="captain-logo"
        @click="resetMenu"
        v-if="!menuDisplay"
        class="flex flex-col justify-center items-center mt-4 hover:cursor-pointer opacity-70 hover:opacity-100 text-center">
        <nuxt-img
          class="w-10 h-10 md:w-16 md:h-16"
          src="/logo-solo.png">
        </nuxt-img>
        <h1 class="font-captainbold text-center text-sm md:text-md text-black">
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
          <div
            class="flex items-center justify-center gap-4 md:gap-12"
            :class="menuDisplay && !menu.error && 'flex-grow'">
            <nuxt-img
              v-if="menu.enabled"
              class="object-cover object-bottom "
              :class="menuDisplay ? 'md:h-[32vh] lg:h-[50vh] w-screen lg:w-full object-cover border border-1 border-white' : 'h-[32vh] lg:h-[50vh] md:w-auto object-cover shadow-lg rounded-sm w-full '"
              :src="menu.url"
              :alt="menu.title"/>
          </div >
          <h1
            v-if="menu.enabled"
            class="absolute top-[45%] font-captainlight text-centertext-lg sm:text-xl lg:text-3xl opacity-90"
            :class="menu.error ? 'text-gray-700': 'text-white'">
            {{ menu.title }}
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name:"BannerImage",
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
      this.$parent.$emit('reset-menu');
    },
    selectMenu(index) {
      this.$emit('select-menu', index)
    },
  },
}
</script>
