<template>
  <section class="fixed sticky top-10 z-10">
    <div id="navbar" class="flex flex-nowrap justify-center my-8">
      <div
        v-for="(menu, index) in formattedSubmenus"
        :key="index"
        class="w-fit shadow-sm">
        <button
          @click="activate(menu.title)"
          class="text-xl transition ease-in hover:cursor-pointer hover:bg-gray-50 hover:shadow-lg hover:text-black font-cormorant px-4 py-2 mx-2"
          :class="customClass(menu)">
          {{ menu.title }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default ({
  name: 'NavbarComponent',
  props: {
    submenus: {
      type: Array,
      default: () => []
    },
    isScrolling: {
      type: Boolean,
      default: false,
    }
  },
  data () {
    return {
      formattedSubmenus: [],
    }
  },
  watch: {
    formattedSubmenus(newValue) {
      const active = newValue.filter(menu => menu.active).pop();
      if (active) this.$emit('active-submenu', active);

      return;
    },
  },
  methods: {
    activate(title) {
      this.formattedSubmenus = this.submenus.map(e => e.title === title ? ({ ...e, active: true }) : ({...e, active: false }));
    },
    customClass(menu) {
      if (menu.active) return 'bg-teal-700 text-white pointer-events-none opacity-90 shadow-lg';

      return this.isScrolling ? 'bg-white text-black border border-white hover:border-black transition ease-out duration-300' : 'border border-black text-black';
    }
  },
  async mounted() {
    this.formattedSubmenus = this.submenus;
  },
})
</script>
