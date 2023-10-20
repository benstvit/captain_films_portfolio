<template>
  <div
    class="flex flex-col items-center justify-center h-auto gap-2 w-full px-4 md:px-0 mx-auto pt-0 md:pt-6 font-cormorant text-base md:text-lg"
    :class="contentFormat === 'travel' ? 'md:w-1/2' : 'md:w-1/2'"
  >
    <p
      v-if="post.quote"
      class="mt-4 md:m-4 italic font-cormorant text-base md:text-lg lg:text-xl text-center opacity-70"
    >
      "{{ post.quote }}"
    </p>
    <InterviewFormat :post="post" v-if="contentFormat === 'portrait'" />
    <VoyageFormat :post="post" v-if="contentFormat === 'voyage'" />
    <ListenFormat :post="post" v-if="contentFormat === 'listen'" />
    <WatchFormat :post="post" v-if="contentFormat === 'watch'" />
  </div>
</template>

<script>
import InterviewFormat from "./InterviewFormat.vue";
import VoyageFormat from "./VoyageFormat.vue";
import ListenFormat from "./ListenFormat.vue";
import WatchFormat from "./WatchFormat.vue";

export default {
  name: "post-content",
  components: {
    InterviewFormat,
    VoyageFormat,
    ListenFormat,
    WatchFormat,
  },
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    contentFormat() {
      if (this.post.tag === "SPEED PORTRAIT") return "portrait";
      if (this.post.tag === "CARNET DE VOYAGE") return "voyage";

      return this.post.tag === "À VOIR" ? "watch" : "listen";
    },
  },
  mounted() {
    document.querySelectorAll("p > strong > a").forEach((elem) => {
      elem.setAttribute("target", "_blank");
    });
    this.formatSpacings();
  },
  methods: {
    formatSpacings() {
      for(let i = 0; i < 5; i++){
        // this.post[`paragraph${i}`]?.replace(//g, "HELLO");
      }
    }
  }
};
</script>
