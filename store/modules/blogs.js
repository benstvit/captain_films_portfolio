const QUERY = `{
  blogPostPhotoCollection(order: articleId_DESC) {
    items {
      articleId
      slug
      tag
      title
      thumbnail {
        title
        url
      }
      videoUrl
      photoCredits
      date
      location
      introduction
      question1
      paragraph1
      question2
      paragraph2
      question3
      paragraph3
      question4
      paragraph4
      imagesCollection {
        items {
          title
          url
          width
          height
          description
        }
      }
      facebookUrl
      instagramUrl
      websiteUrl
    }
  }
}`;

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
    async fetch({commit}, payload) {
      const query = QUERY;
      const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.contentfulSpaceId}`;
      const fetchOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.contentfulAccessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      };

      try {
        const response = await fetch(fetchUrl, fetchOptions).then((response) =>
          response.json()
        );
        const posts = response.data.blogPostPhotoCollection.items;
        commit('SET_DATA', response.data.blogPostPhotoCollection.items)

      } catch (error) {
        throw new Error("Could not receive the data from Contentful!");
      }
    },
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data;
    },
  },
};
