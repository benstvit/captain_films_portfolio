<template>
  <div
    class="flex flex-col items-center w-full p-3 md:pt-6 md:px-32 lg:px-40"
  >
    <div class="flex justify-start items-center gap-2 md:gap-6 border-black border-b-2 pb-2 lg:pb-3 w-full">
      <a
        :href="facebook.url"
        target="_blank"
        @mouseover="facebook.stroke = '#60a5fa'"
        @mouseleave="facebook.stroke = '#000000'"
      >
        <FacebookSvg class="self-start" :stroke="facebook.stroke" />
      </a>
      <a
        :href="instagram.url"
        target="_blank"
        @mouseover="instagram.stroke = '#D22F8C'"
        @mouseleave="instagram.stroke = '#000000'"
      >
        <InstagramSvg class="self-start" :stroke="instagram.stroke" />
      </a>
      <div
        @click="openSubscriptionModal"
        class="flex justify-between items-center gap-2 ml-auto self-end animate-pulse animate-bounce hover:cursor-pointer hover:font-bold font-captainlight text-[0.6rem] md:text-sm text-left">
        <ContactSvg class="w-8 h-8" :stroke="contact.stroke" />
        <p> Je veux recevoir un e-mail quand un nouvel article sort 🙏</p>
      </div>
    </div>
  </div>
</template>

<script>
import ContactSvg from '../../svg/ContactSvg.vue'
import FacebookSvg from '../../svg/FacebookSvg.vue'
import InstagramSvg from '../../svg/InstagramSvg.vue'

export default {
  name: 'journal-footer',
  components: {
    ContactSvg,
    FacebookSvg,
    InstagramSvg,
  },
  data() {
    return {
      contact: { stroke: "#27272A" },
      instagram: { stroke: "#000000", url: 'https://www.instagram.com/captain_films/' },
      facebook: { stroke: "#000000", url: 'https://www.facebook.com/captainfilmsjournal' }
    }
  },
  methods: {
    openSubscriptionModal() {
      this.$emit('open-subscription-modal')
    }
  }
}
</script>
