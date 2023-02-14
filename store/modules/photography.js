const PHOTOSETS = [
  { title: 'New Arrival', photosetId: '72177720305655857'},
  { title: 'Here, there & everywhere', photosetId: '72177720304112937'},
  { title: 'By the Seas', photosetId: '72177720304086995'},
  { title: 'Live Music', photosetId: '72177720304100994'},
  { title: 'Wild Life', photosetId: '72177720304094592'},
  { title: 'Portraits', photosetId: '72177720304108683'},
]

export default {
  namespaced: true,
  state: {
    data: {},
  },
  getters: {
    data: (state) => state.data
  },
  actions: {
    async fetch({ commit }, payload) {
      let photos = []
      const album_id = PHOTOSETS.filter(s => s.title === payload.payload.title)[0].photosetId
      const { data, status } = await this.$axios.get(`https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6fbbbf8a9d5ff41558c9100d42279af6&photoset_id=${album_id}&user_id=184230567%40N04&format=json&nojsoncallback=1`)
      if (status === 200) {
        data.photoset.photo.map((photo, index) => {
          const item = {
            index: index + 1,
            enabled: true,
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
      photos.push({enabled: true, error: true, index: 1, title: 'no_image', url: '/no_image.png'})
      commit('SET_DATA', photos )

    },
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data;
    },
  },
};
