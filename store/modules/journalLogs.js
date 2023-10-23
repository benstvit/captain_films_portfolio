const QUERY = `{
  blogPostPhotoCollection(preview: ${process.env.NODE_ENV === 'production' ? 'false' : 'true'}) {
    items {
      articleId
      slug
      tag
      subTags
      title
      thumbnail {
        title
        url
      }
      trackId
      albumId
      videoUrl
      quote
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
      question5
      paragraph5
      question6
      paragraph6
      question7
      paragraph7
      question8
      paragraph8
      question9
      paragraph9
      question10
      paragraph10
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
      spotifyUrl
      websiteUrl
    }
  }
}`;

export default {
  namespaced: true,
  state() {
    return {
      data: {},
    };
  },
  getters: {
    data: (state) => state.data,
  },
  actions: {
    async fetch({ commit }, payload) {
      const query = QUERY;
      const accessToken = process.env.NODE_ENV === 'production' ? process.env.contentfulAccessToken : process.env.contentfulPreviewAccessToken;
      const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.contentfulSpaceId}?access_token=${accessToken}`;
      const fetchOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      };

      try {
        const response = await fetch(fetchUrl, fetchOptions).then((response) =>
          response.json()
        );
        const posts = response.data.blogPostPhotoCollection.items;
        commit("SET_DATA", posts);
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
