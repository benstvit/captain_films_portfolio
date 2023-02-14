<template>
  <section>
    <NavBar
        @active-submenu="setActiveSubmenu"
        :is-scrolling="introY"
        :submenus="submenus" />
    <keep-alive>
      <div id="form" class="mt-12">
        <ContactForm v-if="isOpen('Contact Me')" />
        <MyPartners v-if="isOpen('Partners')" />
      </div>
    </keep-alive>
  </section>
</template>

<script>
import ContactForm from "../contact/Form/ContactForm.vue"
import NavBar from "../shared/NavBar"
import MyPartners from "../contact/MyPartners.vue"

export default {
  name: 'ContactPage',
  created () {
    window.addEventListener('scroll', this.getFormPosition);
  },
  destroyed () {
    window.removeEventListener('scroll', this.getFormPosition);
  },
  data() {
    return {
      activeSubmenu: {},
      introY: false,
      submenus: [
        { title: 'Contact Me', active: true },
        { title: 'Partners', active: false },
      ]
    }
  },
  components: {
    ContactForm,
    NavBar,
    MyPartners,
  },
  methods: {
    isOpen(pageTitle) {
      if (!this.activeSubmenu) return null;

      return this.activeSubmenu.title === pageTitle
    },
    getFormPosition() {
      const introY = document.getElementById('form');
      this.introY = introY.getBoundingClientRect().top < 65;
    },
    setActiveSubmenu(event) {
      this.activeSubmenu = event;
      this.introY = false;
    },
  }
}
</script>
