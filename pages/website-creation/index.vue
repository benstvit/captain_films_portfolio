<template>
  <div class="flex flex-col items-center h-screen bg-white max-w-screen">
    <WorkNavbar id="navbar" :is-scrolling="isScrolling" />
    <JournalFooter />
  </div>
</template>

<script>
import scrollHandler from "../../mixins/scrollHandler";

import WorkNavbar from "../../components/pages/website-creation/WorkNavbar.vue";
import JournalFooter from "../../components/pages/journal/JournalFooter.vue";


export default {
  name: "Website Creation Index",
  mixins: [scrollHandler],
  head() {
    return {
      title: "Captain Films - Website Development",
      meta: [
        {
          hid: "og-title",
          property: "og:title",
          content: `Captain Films - Website Development`,
        },
        { hid: "og-type", property: "og:type", content: "work" },
        {
          hid: "og-desc",
          name: "description",
          content:
            "Mon travail en tant que créateur de sites web",
        },
        {
          hid: "og-image",
          itemprop: "image",
          property: "og:image",
          content: "cf-share-logo.png",
        },
        {
          hid: "og-image-alt",
          property: "og:image:alt	",
          content: "Captain Films - Website Development"
        },
        {
          hid: "og-url",
          property: "og:url",
          content: "https://captain-films.com/work",
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Work Portfolio",
            "headline": "Captain Films - Website Development",
            "description": "Mon travail en tant que créateur de sites web.",
            "author": {
              "@type": "Person",
              "name": "Benjamin Saint Viteux"
            },
            "logo": "cf-share-logo.png"
          })
        }
      ]
    };
  },
  data() {
    return {
      isSearching: false,
    };
  },
  components: {
    WorkNavbar,
    JournalFooter,
  },
};
</script>
