export default {
  namespaced: true,
  state() {
    return {
      data: {},
    }
  },
  getters: {
    data: (state) => state.data
  },
  actions: {
    async fetch({ commit }) {
      let photos = []
      const {data, status } = await this.$axios.get("https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6fbbbf8a9d5ff41558c9100d42279af6&photoset_id=72177720303881549&user_id=184230567%40N04&format=json&nojsoncallback=1")
      if (status === 200) {
        data.photoset.photo.map((photo, index) => {
          const item = {
            index: index + 1,
            enabled: true,
            error: false,
            id: photo.id,
            title: photo.title,
            url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`
          }
          photos.push(item);
        })
        const fetchedData = await Promise.all(photos);
        commit('SET_DATA', fetchedData)

        return fetchedData;
      }
      ['Photography', 'Gallery', 'Contact'].forEach((title, index) => {
        photos.push({enabled: true, error: true, index: index + 1, title: title, url: '/no_image.png'})
      });
      commit('SET_DATA', photos )
    },
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data;
    },
  },
};
