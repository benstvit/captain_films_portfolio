<template>
  <div class="flex flex-col items-center gap-2 w-full bg-gray-50 pt-4 pb-1 shadow-md">
    <div class="flex justify-center items-center gap-8">
      <ul class="flex flex-wrap items-center justify-center font-captainlight text-gray-700 dark:text-white">
        <li
          v-for="menu in menus"
          :key="menu"
          class="mr-4 md:mr-6"
          :class="customClass(menu)"
          @click.stop="navigateTo(menu)">
          {{menu}}
        </li>
      </ul>
    </div>
    <p class="items-center text-xs font-captainlight italic text-center p-1">
      © All work contained within this blog is Captain Films | Benjamin Saint Viteux 2015-2022 unless otherwise noted and may not be copied, downloaded, blogged, distributed, or reproduced in any form without express written consent.
    </p>
  </div>
</template>

<script>
export default {
  name: 'PageFooter',
  props: {
    activePage: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      menus: ['Home', 'Gallery', 'Showroom', 'Contact me | Order your pic']
    }
  },
  methods: {
    customClass(menu) {
      return menu === this.activePage[0].title ? 'text-black underline hover:cursor-default' : 'hover:underline hover:text-black hover:cursor-pointer';
    },
    navigateTo(menu) {
      this.$emit('navigate', menu)
    }
  },
}
</script>
