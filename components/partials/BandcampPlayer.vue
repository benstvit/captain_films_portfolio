<template>
  <div class="w-full" v-html="embedCode"></div>
</template>

<script>
export default {
  name: "bandcamp-player",
  data() {
    return {
      embedCode: "",
    };
  },
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    this.embedCode = this.generateEmbedCode(this.post);
  },
  methods: {
    generateEmbedCode(post) {
      const id = post.trackId ? post.trackId : post.albumId;
      const embedCode = `
        <iframe style="border: 0; width: 350px; height: 470px;"
          src="https://bandcamp.com/EmbeddedPlayer/album=${id}/size=large/bgcol=ffffff/linkcol=0687f5/license_id=671/tracklist=false/transparent=true/" seamless>
        </iframe>`;

      return embedCode;
    },
  },
};
</script>
