import createSitemapRoutes from "./utils/createSitemap";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Captain Films Portfolio",
    htmlAttrs: {
      lang: "en-US",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/cffavicon.jpg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true,
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&family=Noto+Serif+Khojki:wght@400;500&family=Playfair+Display:ital,wght@1,700&display=swap&family=Caveat",
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
  target: "server",
  manifest: {
    name: "TFD Nuxt Frontend",
    short_name: "TFD Nuxt",
    description: "Boilerplate for NuxtJs with Tailwind",
    theme_color: "#2C3E50",
    start_url: "/",
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css", "@/assets/css/tailwind.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['./plugins/tailwind-components.js','./plugins/axios.js'],
  //   { src: "~/plugins/tailwind-components.js" },
  //   { src: '~/plugins/axios.js'}
  // ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/moment",
  ],
  moment: {
    defaultTimezone: "Asia/Phnom_Penh",
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "nuxt-i18n",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "@nuxt/image",
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
  i18n: {
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en-US.json",
        dir: "ltr",
        moment: "en",
      },
    ],
    defaultLocale: "en",
    lazy: true,
    langDir: "locales/",
    noPrefixDefaultLocale: true,
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        "en-US": require("./locales/en-US"),
      },
    },
  },

  toast: {
    position: "top-center",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["epic-spinners"],
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
