<template>
  <div class="flex flex-col justify-center items-center mt-6">
    <p class="text-left">Pour suivre le projet ça ce passe ici :</p>
    <div class="flex justify-around items-center gap-4 m-2">
      <a v-if="post.instagramUrl" :href="post.instagramUrl" target="_blank">
        <InstagramSvg :stroke="svgStroke" />
      </a>
      <a
        v-if="post.facebookUrl"
        :href="post.facebookUrl"
        target="_blank"
        class="pb-1"
      >
        <FacebookSvg :stroke="svgStroke" />
      </a>
    </div>
  </div>
</template>

<script>
import FacebookSvg from "../../../../svg/FacebookSvg.vue";
import InstagramSvg from "../../../../svg/InstagramSvg.vue";

export default {
  name: "social-networks-footer",
  components: {
    FacebookSvg,
    InstagramSvg,
  },
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    svgStroke() {
      if (this.post.tag === "ENTRE DEUX VERRES") return "#7dd3fc";

      return this.post.tag === "POUR LES MIRETTES" ? "#5eead4" : "#fca5a5";
    },
  },
};
</script>
