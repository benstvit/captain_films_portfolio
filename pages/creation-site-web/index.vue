<template>
  <section>
    <div class="lg:mb-8">
      <div class="flex flex-col items-center h-screen bg-white w-full mb-4">
        <ContactModal
          v-if="contactModalIsOpen"
          @close-modal="contactModalIsOpen = false"
        />
        <WorkNavbar id="navbar" @open-modal="contactModalIsOpen = true" />
        <div
          class="flex justify-around flex-wrap gap-2 mx-3 pb-4 lg:pb-6 my-8"
        >
          <div
            id="section-description"
            class="flex flex-col items-center justify-center pb-6 mb-6 lg:mb-2 gap-2"
          >
            <h1
              class="w-full text-center p-1 md:p-2 mt-1 font-cormorant font-bold text-2xl md:text-4xl lg:text-[44px] uppercase"
            >
              Création de sites web
            </h1>
            <div
              id="introduction"
              class="lg:m-4"
              data-aos="fade-in"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              :data-aos-offset="370"
            >
              <p
                class="p-2 lg:p-4 font-cormorant text-center md:text-lg lg:text-xl"
              >
                Diplômé en <b>communication et en publicité</b>, j'ai ensuite
                suivi une formation poussée en
                <b>coding et en développement web</b>. Après avoir travaillé
                dans le secteur de la tech, au développement d'un SaaS pour une
                start-up nommée <i>Leexi</i>, j'ai choisi de me lancer à mon
                compte dans la <b>création de sites web</b> et la <b>consultance en e-commerce Shopify</b>.
              </p>
              <p
                class="p-2 md:p-4 font-cormorant text-center md:text-lg lg:text-xl"
              >
                La variété des projets que l'on me propose rend ce travail
                passionnant ! N'hésitez pas à
                <span
                  class="font-bold hover:cursor-pointer animate-pulse hover:animate-none opacity-90 hover:opacity-100"
                  title="Ouvrir la fenêtre de contact"
                  @click="contactModalIsOpen = true"
                  >me contacter</span
                >
                si vous souhaitez mettre en avant votre projet avec
                <b>votre propre site web</b>.
              </p>
            </div>
            <!-- <div
              class="pt-[3px] text-center lg:text-xl transition ease-in-out text-gray-700 hover:cursor-pointer font-bold bg-transparent border-2 border-gray-700 animate-pulse w-8 h-8 md:w-10 md:h-10 my-2 rounded-full focus:outline-none"
              :class="
                removeScrollIndicator ? 'hidden' : 'block md:hidden lg:block'
              "
              @click="scrollToWorkGallery"
            >
              &darr;
            </div> -->
          </div>
          <div
            id="cards"
            v-for="work in filteredWorks"
            class="w-full lg:w-1/3 my-6"
            :key="work.alt"
            data-aos="fade-in"
            data-aos-easing="ease-in-sine"
            data-aos-duration="300"
            :data-aos-offset="work.id === filteredWorks.length ? 370 : 0"
          >
            <keep-alive>
              <CardCaroussel
                class="hover:filter-none saturate-0"
                :class="work.id === filteredWorks.length && 'filter-none'"
                :data="work"
              />
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
import aos from "../../mixins/aos";
import { mapActions, mapState } from "Vuex";
import scrollHandler from "../../mixins/scrollHandler";

import CardCaroussel from "../../components/UI/CardCaroussel.vue";
import ContactModal from "../../components/pages/contact/Form/ContactModal.vue";
import WorkNavbar from "../../components/pages/creation-site-web/WorkNavbar.vue";
import SlugFooter from "../../components/pages/SlugFooter.vue";

export default {
  name: "creation-site-web-index",
  mixins: [scrollHandler, aos],
  head() {
    return {
      title: "Captain Films - Création de sites web",
      meta: [
        {
          hid: "og-title",
          property: "og:title",
          content: `Captain Films - Création de sites web`,
        },
        { hid: "og-type", property: "og:type", content: "work" },
        {
          hid: "og-desc",
          name: "description",
          content: "Mon travail en tant que développeur de sites web",
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
          content: "Captain Films - Création de sites web",
        },
        {
          hid: "og-url",
          property: "og:url",
          content: "https://captain-films.com/creation-site-web",
        },
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Work Portfolio",
            headline: "Captain Films - Création de sites web",
            description: "Mon travail en tant que développeur de sites web.",
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
      contactModalIsOpen: false,
      filteredWorks: [],
      footerText: "Me contacter pour la création de votre site web",
      isSearching: false,
      scrollTop: 0,
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
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    ...mapState("workPortfolio", { works: "data" }),

    removeScrollIndicator() {
      return this.scrollTop > 30;
    },
  },
  methods: {
    ...mapActions({ fetchWorks: "workPortfolio/fetch" }),

    handleScroll() {
      this.scrollTop = window.scrollY;
    },
    scrollToWorkGallery() {
      const workGallery = document.getElementById("cards");
      const yOffset = -100;
      const y =
        workGallery.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    },
  },
};
</script>
