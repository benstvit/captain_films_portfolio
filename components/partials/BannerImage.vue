<template>
  <section>
    <div class="flex justify-center items-center mx-24 max-w-screen">
      <div
        id="captain-logo"
        @click="resetMenu"
        v-if="!menuDisplay"
        class="absolute flex flex-col justify-center items-center hover:cursor-pointer top-6 left-14 text-center">
        <nuxt-img
          class="w-16 h-16"
          src="/logo-solo.png">
        </nuxt-img>
        <h1 class="font-captainbold text-center text-md pb-4 text-black">
          Captain Films
        </h1>
      </div>
      <div class="relative grid grid-cols-6">
        <div id="image-wrapper"
          v-for="menu in menus"
          :key="menu.id"
          class="relative flex justify-center"
          @click="selectMenu(menu.index)"
          :class="menuDisplay ? 'hover:cursor-pointer hover:opacity-90 col-span-3' : 'col-span-6'">
          <nuxt-img
            v-if="menu.enabled"
            class="h-[50vh] w-full border border-white border-2 rounded-lg shadow-sm"
            :src="menu.url"
            :alt="menu.title"/>
          <h1
          v-if="menu.enabled"
          class="absolute top-[45%] font-captainbold text-white text-4xl opacity-90">
          {{ menu.title }}
          </h1>
        </div>
        <div
          id="captain-logo"
          v-if="menuDisplay"
          class="absolute flex flex-col justify-center items-center hover:cursor-pointer top-6 left-10 text-center">
          <nuxt-img
            class="w-14 h-14"
            src="/logo-solo-white.png">
          </nuxt-img>
          <h1 class="font-captainbold text-center text-sm pb-4 text-white">
            Captain Films
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
    }
  },
  methods: {
    resetMenu() {
      this.$emit('reset-menu');
    },
    selectMenu(index) {
      if (index === 4) return this.$router.push({path: '/contact'});

      this.menus.filter(p => p.index !== index).forEach(menu => menu.enabled = false);
    },
  }
}
</script>
