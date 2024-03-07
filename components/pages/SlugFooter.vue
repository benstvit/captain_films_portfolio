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
      <a
        v-show="onWorkPage"
        :href="linkedin.url"
        target="_blank"
        @mouseover="linkedin.stroke = '#0077B5'"
        @mouseleave="linkedin.stroke = '#000000'"
      >
        <LinkedInSvg class="self-start" :stroke="linkedin.stroke" />
      </a>
      <a
        v-show="onWorkPage"
        :href="github.url"
        target="_blank"
        @mouseover="github.fill = '#000000'"
        @mouseleave="github.fill = 'none'"
      >
        <GitHubSvg class="self-start" :fill="github.fill" />
      </a>
      <div
        @click="openModal"
        class="flex justify-between items-center gap-2 ml-auto self-end animate-pulse animate-bounce hover:cursor-pointer hover:font-bold font-captainlight text-[0.6rem] md:text-sm text-left">
        <ContactSvg class="w-6 h-6 md:w-8 md:h-8" :stroke="contact.stroke" />
        <p>{{footerText}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ContactSvg from '../svg/ContactSvg.vue'
import FacebookSvg from '../svg/FacebookSvg.vue'
import GitHubSvg from '../svg/GitHubSvg.vue'
import InstagramSvg from '../svg/InstagramSvg.vue'
import LinkedInSvg from '../svg/LinkedInSvg.vue'

export default {
  name: 'slug-footer',
  components: {
    ContactSvg,
    FacebookSvg,
    GitHubSvg,
    InstagramSvg,
    LinkedInSvg
  },
  props: {
    footerText: {
      type: String,
      default: ''
    },
    onWorkPage: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      contact: { stroke: "#27272A" },
      instagram: { stroke: "#000000", url: 'https://www.instagram.com/captain_films/' },
      facebook: { stroke: "#000000", url: 'https://www.facebook.com/captainfilmsjournal' },
      linkedin: { stroke: "#000000", url: 'https://www.linkedin.com/in/benjamin-saint-viteux-255509102/' },
      github: { fill: "none", url: 'https://github.com/benstvit' }
    }
  },
  methods: {
    openModal() {
      this.$emit('open-modal')
    }
  }
}
</script>
