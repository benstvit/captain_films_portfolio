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
    albumId: {
      type: Number,
      default: null
    },
    trackId: {
      type: Number,
      default: null
    }
  },
  mounted() {
    if (this.trackId) return this.embedCode = this.generateTrackEmbedCode(this.trackId, this.albumId);

    this.embedCode = this.generateAlbumEmbedCode(this.albumId);
  },
  methods: {
    generateAlbumEmbedCode(albumId) {
      const embedCode = `
        <iframe style="border: 0; width: 350px; height: 470px;"
          src="https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=large/bgcol=ffffff/linkcol=0687f5/license_id=671/tracklist=false/transparent=true/" seamless>
        </iframe>`;

      return embedCode;
    },
    generateTrackEmbedCode(trackId, albumId) {
      const embedCode = `
        <iframe style="border: 0; width: 100%; height: 42px;"
          src="https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=small/bgcol=ffffff/linkcol=0687f5/license_id=671/track=${trackId}/transparent=true/" seamless>
        </iframe>
        `;

      return embedCode;
    },
  },
};
</script>
