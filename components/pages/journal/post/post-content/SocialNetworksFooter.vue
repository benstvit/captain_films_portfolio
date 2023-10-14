<template>
  <div class="flex flex-col justify-center items-center m-6">
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
      <a
        v-if="post.spotifyUrl"
        :href="post.spotifyUrl"
        target="_blank"
        class="pb-1"
      >
        <SpotifySvg :stroke="svgStroke" />
      </a>
      <a
        v-if="post.websiteUrl"
        :href="post.websiteUrl"
        target="_blank"
      >
        <WebsiteSvg :stroke="svgStroke" />
      </a>
    </div>
  </div>
</template>

<script>
import FacebookSvg from "../../../../svg/FacebookSvg.vue";
import InstagramSvg from "../../../../svg/InstagramSvg.vue";
import SpotifySvg from "../../../../svg/SpotifySvg.vue";
import WebsiteSvg from "../../../../svg/WebsiteSvg.vue";

export default {
  name: "social-networks-footer",
  components: {
    FacebookSvg,
    InstagramSvg,
    SpotifySvg,
    WebsiteSvg
  },
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    svgStroke() {
      if (this.post.tag === "ENTRE DEUX VERRES") return "#38bdf8";

      return this.post.tag === "POUR LES MIRETTES" ? "#fbbf24" : "#f87171";
    },
  },
};
</script>
