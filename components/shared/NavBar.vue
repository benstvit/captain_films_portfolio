<template>
  <section id="navbar" :class="page === 'photo' && 'fixed sticky top-10 z-10'">
    <div class="flex flex-wrap md:flex-nowrap justify-center my-2 md:my-8">
      <div
        v-for="(menu, index) in formattedSubmenus"
        :key="index"
        class="w-fit">
        <button
          @click="activate(menu.title)"
          class="text-sm md:text-lg lg:text-xl transition ease-in hover:cursor-pointer hover:bg-gray-50 hover:shadow-lg hover:text-black font-cormorant px-1 lg:px-4 py-1 mx-2 my-2 md:my-0"
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
      page: ''
    }
  },
  components: {
    stickyClass() {
      return this.formattedSubmenus[0].page === 'photo' ? 'fixed sticky top-10 z-10' : '';
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
      this.handleScrollBack();
    },
    customClass(menu) {
      if (menu.active) return 'bg-teal-700 text-white pointer-events-none shadow-lg border border-gray-600 border-transparent';

      return this.isScrolling ? 'bg-white text-black border border-black md:border-white hover:border-black transition ease-out duration-300' : 'border border-black text-black';
    },
    handleScrollBack() {
      const navbar = document.getElementById('navbar');
      window.scrollTo(0, 0);
      setTimeout(() => {
        navbar.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }, 300);
    }
  },
  async mounted() {
    this.page = this.submenus[0].page;
    this.formattedSubmenus = this.submenus;
  },
})
</script>
