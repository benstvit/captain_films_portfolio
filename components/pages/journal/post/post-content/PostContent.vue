<template>
  <div
    class="flex flex-col items-center justify-center h-auto gap-2 w-full px-4 md:px-0 mx-auto md:w-1/2 pt-0 md:pt-6 font-cormorant text-base md:text-lg"
  >
    <p
      v-if="post.quote"
      class="mt-4 md:m-4 italic font-cormorant text-base md:text-lg lg:text-xl text-center opacity-70"
    >
      "{{ post.quote }}"
    </p>
    <InterviewFormat :post="post" v-if="contentFormat === 'interview'" />
    <ListenFormat :post="post" v-if="contentFormat === 'listen'" />
    <WatchFormat :post="post" v-if="contentFormat === 'watch'" />
  </div>
</template>

<script>
import InterviewFormat from "./InterviewFormat.vue";
import ListenFormat from "./ListenFormat.vue";
import WatchFormat from "./WatchFormat.vue";

export default {
  name: "post-content",
  components: {
    InterviewFormat,
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
      if (this.post.tag === "ENTRE DEUX VERRES") return "interview";

      return this.post.tag === "POUR LES MIRETTES" ? "watch" : "listen";
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
