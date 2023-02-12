<template>
  <section>
    <div class="flex justify-center items-center pt-8 px-8"
      :class="customClass ? 'flex-col' : 'flex-row'">
        <HamburgerSvg
         :class="customClass"
          @click.native="toggleMenu()"
          />
        <Transition name="fade">
          <div
            class="flex justify-start w-fit px-2 py-4"
            v-if="customClass">
            <ul class="flex flex-wrap items-center justify-center font-captainlight text-gray-800 ml-4 text-xs dark:text-white">
              <li
                v-for="menu in menus"
                :key="menu"
                class="mr-4 md:mr-6"
                :class="activeClass(menu)"
                @click.stop="navigateTo(menu)">
                {{menu}}
              </li>
            </ul>
          </div>
        </Transition >
      </div >
  </section>
</template>

<script>
import HamburgerSvg from "../svg/HamburgerSvg"

export default {
  name:'MobileMenu',
  components: {
    HamburgerSvg,
  },
   props: {
    activePage: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      menus: ['Home', 'Gallery', 'Showroom', 'Contact me'],
      customClass: '',
      openedMenu: false
    }
  },
  methods: {
    activeClass(menu) {
      const submenu = menu === 'Contact me' ? 'Contact me | Order your pic' : menu;

      if (submenu === this.activePage[0].title) return 'text-black font-bold';
    },
    navigateTo(menu) {
      const payload = menu === 'Contact me' ? 'Contact me | Order your pic' : menu;
      this.$emit('navigate', payload);
    },
    toggleMenu() {
      this.customClass = this.customClass === 'rotate-90' ? '' : 'rotate-90';
    }
  }
}
</script>
