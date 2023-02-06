<template>
  <section>
    <NavBar
        @active-submenu="setActiveSubmenu"
        :is-scrolling="galleryY"
        :submenus="submenus" />
    <keep-alive>
      <div class="my-12">
        <ContactForm v-if="isOpen('Contact Me')" />
        <MyPartners v-if="isOpen('My Partners')" />
        <QuoteForm v-if="isOpen('Quick Quote')" />
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
  data() {
    return {
      activeSubmenu: {},
      galleryY: false,
      submenus: [
        { title: 'Contact Me', active: true },
        { title: 'My Partners', active: false },
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
    getGalleryPosition() {
      const galleryY = document.getElementById('gallery');
      this.galleryY = galleryY.getBoundingClientRect().top < 65;
    },
    setActiveSubmenu(event) {
      this.activeSubmenu = event
    },
  }
}
</script>
