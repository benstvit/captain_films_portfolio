<template>
  <section>
    <div class="flex flex-nowrap justify-center items-center my-12">
      <div
        v-for="(menu, index) in submenus"
        :key="index"
        class="w-fit shadow-sm">
        <button
          @click="activate(menu.title)"
          class="border border-black text-xl transition ease-in hover:cursor-pointer hover:bg-gray-50 hover:shadow-lg hover:text-black font-cormorant px-4 py-2 mx-2"
          :class="menu.active && 'bg-black text-white pointer-events-none opacity-90 shadow-lg'">
          {{ menu.title }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default ({
  name: 'NavbarComponent',
  data () {
    return {
      photo: [{ title: 'By the Seas', active: true }, { title: 'Here, there & everywhere', active: false }, { title: 'Live Music', active: false }, { title: 'Portraits', active: false }, { title: 'Wild Life', active: false }],
      music: [{ title: 'Ben & The Saints', active: true }, { title: 'NAVAHO', active: false }, { title: 'A Short Journey Inside The Head of Captain Films', active: false }],
      web: [ {title: 'Blabla', active: true }, { title: 'Blabla2', active: false }],
      submenus: [],
    }
  },
  props: {
    activeMenu: {
      type: Array,
      default: () => [],
    }
  },
  computed: {
    selectedSubMenu() {
      const index = this.activeMenu[0].index
      const results = index === 1 ? this.photo : (index === 2 ? this.music : this.web)
      return results.map((e, i) => ({ ...e, active: i === 0 && true || false, menu: index === 1 ? 'photo' : (index === 2 ? 'music' : 'web')}));
    },
    isActive() {
      this.submenus.filter(menu => menu.active);
    }
  },
  watch: {
    submenus(newValue) {
      const active = newValue.filter(menu => menu.active).pop();
      this.$emit('active-submenu', active)
    },
    activeMenu() {
      this.submenus = this.selectedSubMenu;
    }
  },
  methods: {
    activate(title) {
      this.submenus = this.selectedSubMenu.map(e => e.title === title ? ({ ...e, active: true }) : ({...e, active: false }));
    }
  },
  async mounted() {
    await this.selectedSubMenu;
    this.submenus = this.selectedSubMenu;
  }
})
</script>
