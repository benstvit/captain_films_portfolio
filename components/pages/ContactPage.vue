<template>
  <div class="bg-gray-100 my-12">
    <MyPartners />
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from "../contact/ContactForm.vue"
import MyPartners from "../contact/MyPartners.vue"


export default {
  name: 'ContactPage',
  components: {
    ContactForm,
    MyPartners
  }
}
</script>
