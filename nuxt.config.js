import createSitemapRoutes from "./utils/createSitemap";
const axios = require('axios');

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Captain Films - Film Photography & Blogging",
    htmlAttrs: {
      lang: "en-US",
    },
    meta: [
      { name: 'google-site-verification', content: '5To6UYGqRenkkezzV7GRgOF1GQc76uJYu4G2HDOqTp4' },
      {
        hid: 'description',
        name: 'description',
        content: 'Where film photography, music and blogging meet.'
      },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      { hid: 'og-title', property: 'og:title', content: 'Captain Films - Film Photography & Journal' },
      { hid: 'og-desc', property: 'og:description', content: 'Where film photography, music and blogging meet.' },
      { hid: 'og-image', itemprop: "image", property: 'og:image', content: 'cf-share-logo.png'},
      { hid: 'og-url', property: 'og:url', content: 'https://captain-films.com/' },
      { hid: 'og-image-alt', property: 'og:image:alt	', content: 'Captain Films Logo' },
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/cffavicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true,
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&family=Cormorant+Garamond:wght@700&family=Noto+Serif+Khojki:wght@400;500&family=Playfair+Display:ital,wght@1,700&display=swap&family=Caveat",
        crossorigin: true,
      },
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/kutty@latest/dist/kutty.min.js",
        async: true,
        crossorigin: "anonymous",
      },
    ],
  },
  generate: {
    async routes() {
      const query = `{
        blogPostPhotoCollection(order: articleId_DESC) {
          items {
            slug
          }
        }
      }`;
      const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.VUE_APP_CONTENTFUL_SPACE_ID}`;
      const response = await axios({
        url: fetchUrl,
        method: "post",
        headers: {
          Authorization: `Bearer ${process.env.VUE_APP_CONTENTFUL_ACCESS_TOKEN}`,
          "content-type": "application/json",
        },
        data: {query},
      });
      const posts = response.data.data.blogPostPhotoCollection.items;
      return posts.map(post => ({ route: '/journal/' + post.slug }));
    },
  },
  target: "static", // Set to static before nuxt generate, server when dev environment
  manifest: {
    name: "TFD Nuxt Frontend",
    short_name: "TFD Nuxt",
    description: "Boilerplate for NuxtJs with Tailwind",
    theme_color: "#2C3E50",
    start_url: "/",
  },

  // Contentful
  env: {
    contentfulAccessToken: process.env.VUE_APP_CONTENTFUL_ACCESS_TOKEN,
    contentfulPreviewAccessToken: process.env.VUE_APP_CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    contentfulSpaceId: process.env.VUE_APP_CONTENTFUL_SPACE_ID,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css", "@/assets/css/tailwind.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    './plugins/tailwind-components.js',
    './plugins/axios.js',
    './plugins/youtube.js',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@braid/vue-formulate/nuxt',
    "@nuxtjs/tailwindcss",
    '@nuxt/image',
    "@nuxtjs/moment",
  ],
  image: {
    domains: ['images.ctfassets.net']
  },
  moment: {
    defaultTimezone: "Asia/Phnom_Penh",
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "nuxt-i18n",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "@nuxt/image",
    "@nuxtjs/markdownit",
    "@nuxtjs/toast",
  ],
  // Nuxt Axios
  axios: {
    proxy:
      process.env.NODE_ENV === "production"
        ? false
        : process.env.NODE_ENV !== "staging",
    baseURL: process.env.BASE_URL || "http://localhost:80",

    // proxyHeaders: false,
    // credentials: false
  },
  proxy: {
    "/api/v1/": {
      target: "http://localhost:80/api/v1",
      pathRewrite: { "^/api/v1/": "" },
    },
  },
  // Nuxt Auth Plugin
  auth: {
    redirect: {
      login: "/",
    },
    strategies: {
      local: {
        token: {
          property: "accessToken",
          required: true,
          type: "bearer",
        },
        user: {
          property: "false",
          autoFetch: false,
        },
        endpoints: {
          login: { url: "api/v1/auth/login", method: "post" },
          user: { url: "api/v1/auth/me", method: "get" },
          logout: false,
        },
      },
    },
  },
  // Sitemap Config
  sitemap: {
    hostname: process.env.WEB_URL,
    gzip: true,
    routes: createSitemapRoutes,
  },

  toast: {
    position: "top-center",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["epic-spinners", 'vue-youtube-embed'],
    html: {
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  loading: false,
  publicRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL || "http://localhost:3000",
      nodeEnv: process.env.NODE_ENV || "development",
    },
  },
};
