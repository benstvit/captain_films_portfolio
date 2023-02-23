<template>
  <section>
    <div class="flex justify-center items-center pt-4 px-8">
        <Transition name="fade">
          <div class="flex justify-start w-fit px-2 py-2">
            <ul class="flex flex-wrap items-center justify-center font-captainlight text-gray-800 ml-4 text-xs dark:text-white">
              <li
                v-for="menu in menus"
                :key="menu"
                class="mx-1"
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

export default {
  name:'MobileMenu',
   props: {
    activePage: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      menus: ['Home', 'Gallery', 'Showroom', 'Contact me'],
    }
  },
  methods: {
    activeClass(menu) {
      if (!this.activePage.length) return;

      const submenu = menu === 'Contact me' ? 'Contact me | Order your pic' : menu;

      if (submenu === this.activePage[0].title) return 'text-teal-700';
    },
    navigateTo(menu) {
      const payload = menu === 'Contact me' ? 'Contact me | Order your pic' : menu;
      this.$emit('navigate', payload);
    },
  }
}
</script>
