export default {
  namespaced: true,
  state: {
    data: {},
  },
  getters: {
    data: (state) => state.data
  },
  actions: {
    async fetch({ commit }) {
      let photos = []
      const rawData = await this.$axios.get("https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6fbbbf8a9d5ff41558c9100d42279af6&photoset_id=72177720303881549&user_id=184230567%40N04&format=json&nojsoncallback=1")
      rawData.data.photoset.photo.map((photo, index) => {
        const item = {
          index: index + 1,
          id: photo.id,
          title: photo.title,
          url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`
        }
        photos.push(item);
      })
      const data = await Promise.all(photos);
      commit('SET_DATA', data)

      return data;
    },
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data;
    },
  },
};
