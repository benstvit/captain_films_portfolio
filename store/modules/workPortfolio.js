const QUERY = `{
  workPortfolioElementCollection(preview: ${process.env.NODE_ENV === 'production' ? 'false' : 'true'}) {
    items {
      id
      isActive
      slug
      tag
      title
      siteUrl
      thumbnail {
        title
        url
      }
      quote
      date
      introduction
      title1
      paragraph1
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
        const works = response.data.workPortfolioElementCollection.items;
        commit("SET_DATA", works);
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
