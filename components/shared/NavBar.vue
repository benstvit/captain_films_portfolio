<template>
  <section>
    <div class="flex flex-nowrap justify-center items-center my-12">
      <div
        v-for="menu in menuType"
        :key="menu"
        class="w-fit shadow-sm">
        <btn class="border border-slate-800 text-xl hover:cursor-pointer hover:bg-gray-50 hover:shadow-lg hover:text-black font-cormorant px-4 py-2 mx-2">{{ menu }}</btn>
      </div>
    </div>
  </section>
</template>

<script>
export default ({
  name: 'NavbarComponent',
  data () {
    return {
      photo: ['Here, there & everywhere', 'Portraits', 'By the seas'],
      music: ['Ben & The Saints', 'NAVAHO', 'A Short Journey Inside The Head of Captain Films'],
      web: ['Blabla', 'Blabla2']
    }
  },
  computed: {
    menuType() {
      return this.musicOpen ? this.music : (this.photoOpen ? this.photo : this.web);
    }
  },
  props: {
    musicOpen: {
      type: Boolean,
      default: false,
    },
    photoOpen: {
      type: Boolean,
      default: false,
    },
    webOpen: {
      type: Boolean,
      default: false,
    }
  },
})
</script>
