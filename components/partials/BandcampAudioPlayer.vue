<template>
  <div class="mx-auto" v-html="embedCode"></div>
</template>

<script>
export default {
  name: "bandcamp-player",
  data() {
    return {
      audioPlayerWidth: 0,
      audioPlayerHeight: 0,
      embedCode: "",
    };
  },
  props: {
    albumId: {
      type: String,
      default: null
    },
    trackId: {
      type: Number,
      default: null
    }
  },
  mounted() {
    const contentWidth = window.innerWidth;
    this.width = contentWidth > 768 ? 350 : contentWidth -100;
    this.height = contentWidth > 768 ? 750 : contentWidth * 2;
    if (this.trackId && this.albumId) return this.embedCode = this.generateTrackEmbedCode(this.trackId, this.albumId);
    if (this.albumId && !this.trackId) return this.embedCode = this.generateAlbumEmbedCode(this.albumId);
  },
  methods: {
    generateAlbumEmbedCode(albumId) {
      const embedCode = `
        <iframe style="border: 0; width: ${this.width}px; height: ${this.height}px;"
          src="https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=large/bgcol=ffffff/linkcol=0687f5/license_id=671/transparent=true/" seamless>
        </iframe>`;
      return embedCode;
    },
    generateTrackEmbedCode(trackId, albumId) {
      const embedCode = `
        <iframe style="border: 0; width: ${this.width}; height: 42px;"
          src="https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=small/bgcol=ffffff/linkcol=0687f5/license_id=671/track=${trackId}/transparent=true/" seamless>
        </iframe>
        `;

      return embedCode;
    },
  },
};
</script>
