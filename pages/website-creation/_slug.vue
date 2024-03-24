<template>
  <div v-if="work" class="h-full bg-white">
    <ContactModal
      v-if="contactModalIsOpen"
      @close-modal="contactModalIsOpen = false"
    />
    <WorkNavbar
      id="navbar"
      :is-scrolling="isScrolling"
      :works="filteredWorks"
    />
    <PostHeader :post="work" :posts="filteredWorks" />
    <PostContent :post="workWithFormattedImages" />
    <PostGallery v-if="galleryImages.length" :images="galleryImages" />
    <SlugFooter
      :footerText="footerText"
      :onWorkPage="true"
      @open-modal="contactModalIsOpen = true"
    />
  </div>
</template>

<script>
import scrollHandler from "../../mixins/scrollHandler";

import WorkNavbar from "../../components/pages/website-creation/WorkNavbar.vue";
import SlugFooter from "../../components/pages/SlugFooter.vue";
import ContactModal from "../../components/pages/contact/Form/ContactModal.vue"
import PostContent from "../../components/pages/journal/post/post-content/PostContent.vue";
import PostHeader from "../../components/pages/journal/post/PostHeader.vue";
import PostGallery from "../../components/pages/journal/post/PostGallery.vue";

export default {
  name: "website-creation-post",
  mixins: [scrollHandler],
  data() {
    return {
      footerText: "Contactez-moi pour la création de votre site web",
      contactModalIsOpen: false,
    };
  },
  components: {
    WorkNavbar,
    SlugFooter,
    ContactModal,
    PostContent,
    PostHeader,
    PostGallery,
  },
  head() {
    return {
      title: "Captain Films - Journal",
      meta: [
        {
          hid: "og-title",
          property: "og:title",
          content: `Captain Films Journal - ${this.work.title}`,
        },
        { hid: "og-type", property: "og:type", content: "journal" },

        {
          hid: "og-desc",
          name: "description",
          content: this.blogAbstract(),
        },
        {
          hid: "og-image",
          itemprop: "image",
          property: "og:image",
          content: `${this.work.thumbnail.url}`,
        },
        {
          hid: "og-image-alt",
          property: "og:image:alt	",
          content: `${this.work.thumbnail.title}`,
        },
        {
          hid: "og-url",
          property: "og:url",
          content: `https://captain-films.com/journal/${this.$route.params.slug}`,
        },
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Article",
            headline: `${this.work.title}`,
            description: `${this.blogAbstract()}`,
            datePublished: `${this.work.date}`,
            author: {
              "@type": "Person",
              name: "Benjamin Saint Viteux",
            },
          }),
        },
      ],
    };
  },
  computed: {
    filteredWorks() {
      if (!this.works.length) return;

      return this.works.sort((a, b) => b.id - a.id);
    },
    galleryImages() {
      if (!this.workWithFormattedImages) return;

      return this.workWithFormattedImages.imagesCollection.items.filter(
        (image) => image.description !== ""
      );
    },
    workWithFormattedImages() {
      const options = {
        inline: true,
        button: true,
        navbar: true,
        toolbar: true,
        tooltip: true,
        movable: true,
        zoomable: true,
        rotatable: true,
        scalable: true,
        transition: true,
        fullscreen: true,
        keyboard: true,
      };
      const images = this.work.imagesCollection.items.map((image) => ({
        ...image,
        ...options,
      }));
      return { ...this.work, imagesCollection: { items: images } };
    },
  },
  async asyncData({ store, params }) {
    await store.dispatch("workPortfolio/fetch");
    const works = store.getters["workPortfolio/data"];
    const work = works.filter((e) => e.slug === params.slug)[0];

    return { works, work };
  },
  methods: {
    blogAbstract() {
      const abstract = this.work.introduction.substr(0, 180) + "...";
      return abstract;
    },
  },
};
</script>

<style>
p {
  letter-spacing: 0.025em;
}
</style>
