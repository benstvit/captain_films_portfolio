<template>
  <section>
    <div
      v-if="!menuDisplay"
      class="flex justify-center items-center p-2 pb-1 px-8">
        <Transition name="fade">
          <div class="flex justify-start w-fit px-2 pt-2 pb-4">
            <ul class="flex flex-wrap items-center justify-center font-captainlight text-gray-800 ml-4 text-xs dark:text-white">
              <li
                v-for="(menu, index) in menus"
                :key="menu"
                class="mx-1"
                :class="activeClass(menu)"
                @click.stop="selectMenu(index + 1)">
                {{menu}}
              </li>
            </ul>
          </div>
        </Transition >
      </div >
  </section>
</template>

<script>
import CaptainFilmsLogo from './CaptainFilmsLogo.vue'

export default {
  name:'MobileMenu',
  inject: ['selectMenu'],
  components: {
    CaptainFilmsLogo
  },
  props: {
    activePage: {
      type: Array,
      default: () => []
    },
    menuDisplay: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      menus: ['Photography', 'Showroom', 'Contact'],
    }
  },
  methods: {
    activeClass(menu) {
      if (!this.activePage.length) return;

      if (menu === this.activePage[0].title) return 'text-teal-700';
    },
  }
}
</script>
