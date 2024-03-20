<template>
  <section>
    <div class="lg:mb-8">
      <div class="flex flex-col items-center h-screen bg-white w-full">
        <ContactModal
          v-if="contactModalIsOpen"
          @close-modal="contactModalIsOpen = false"
        />
        <WorkNavbar
          id="navbar"
          :is-scrolling="isScrolling"
          @open-modal="contactModalIsOpen = true"
        />
        <div
          class="flex justify-center flex-wrap gap-4 mx-8 md:mx-32 lg:mx-40 my-2 md:my-8"
        >
          <div id="section-description" class="mb-4">
            <h1
            class="w-full text-center p-1 md:p-2 md:mt-2 font-cormorant font-bold text-2xl md:text-4xl lg:text-5xl uppercase"
            >
              Website Creation
            </h1>
            <p class="p-1 md:p-2 font-cormorant text-center lg:text-lg">
              Voici un petit descriptif de ce que contient cette section
              concernant le travail que je fais en tant que développeur de sites
              web
            </p>
          </div>
          <div v-for="work in filteredWorks" class="w-full lg:w-2/3" :key="work.alt">
            <keep-alive>
              <CardCaroussel @activate-card="activateCard" :data="work" />
            </keep-alive>
          </div>
        </div>
        <SlugFooter
          v-if="filteredWorks.length"
          :footerText="footerText"
          :onWorkPage="true"
          @open-modal="contactModalIsOpen = true"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "Vuex";
import scrollHandler from "../../mixins/scrollHandler";

import CardCaroussel from "../../components/UI/CardCaroussel.vue";
import ContactModal from "../../components/pages/contact/Form/ContactModal.vue";
import WorkNavbar from "../../components/pages/website-creation/WorkNavbar.vue";
import SlugFooter from "../../components/pages/SlugFooter.vue";

export default {
  name: "website-creation-index",
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
          content: "Mon travail en tant que créateur de sites web",
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
          content: "Captain Films - Website Development",
        },
        {
          hid: "og-url",
          property: "og:url",
          content: "https://captain-films.com/work",
        },
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Work Portfolio",
            headline: "Captain Films - Website Development",
            description: "Mon travail en tant que créateur de sites web.",
            author: {
              "@type": "Person",
              name: "Benjamin Saint Viteux",
            },
            logo: "cf-share-logo.png",
          }),
        },
      ],
    };
  },
  data() {
    return {
      filteredWorks: [],
      footerText: "Me contacter pour la création de votre site web",
      isSearching: false,
      contactModalIsOpen: false,
    };
  },
  components: {
    CardCaroussel,
    ContactModal,
    WorkNavbar,
    SlugFooter,
  },
  async created() {
    await this.fetchWorks();
    this.filteredWorks = this.works.sort((a, b) => b.id - a.id);
  },
  computed: {
    ...mapState("workPortfolio", { works: "data" }),
  },
  methods: {
    ...mapActions({ fetchWorks: "workPortfolio/fetch" }),

    activateCard(cardId) {
      this.works.map(work => work.id === cardId ? work.isActive = true : work.isActive = false);
    }
  },
};
</script>
