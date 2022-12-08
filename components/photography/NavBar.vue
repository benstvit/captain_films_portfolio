<template>
  <section class="fixed sticky top-10">
    <div id="navbar" class="flex flex-nowrap justify-center my-12">
      <div
        v-for="(menu, index) in submenus"
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
    isScrolling: {
      type: Boolean,
      default: false,
    }
  },
  data () {
    return {
      photo: [
        { title: 'By the Seas', active: true },
        { title: 'Here, there & everywhere', active: false },
        { title: 'Live Music', active: false },
        { title: 'Portraits', active: false },
        { title: 'Wild Life', active: false }],
      submenus: [],
    }
  },
  computed: {
    selectedSubMenu() {
      return this.photo.map((e, i) => ({ ...e, active: i === 0 && true || false, menu: 'photo' }));
    },
  },
  watch: {
    submenus(newValue) {
      const active = newValue.filter(menu => menu.active).pop();
      this.$emit('active-submenu', active)
    },
  },
  methods: {
    activate(title) {
      this.submenus = this.selectedSubMenu.map(e => e.title === title ? ({ ...e, active: true }) : ({...e, active: false }));
    },
    customClass(menu) {
      if (menu.active) return 'border border-black bg-black text-white pointer-events-none opacity-90 shadow-lg';

      return this.isScrolling ? 'bg-white text-black border border-white hover:border-black transition ease-out duration-300' : 'border border-black text-black';
    }
  },
  async mounted() {
    await this.selectedSubMenu;
    this.submenus = this.selectedSubMenu;
  },
})
</script>
