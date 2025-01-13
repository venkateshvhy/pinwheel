// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/icon", "@nuxtjs/google-fonts", "@pinia/nuxt"],

  // Add icon configuration
  icon: {
    size: "24px",
    class: "icon",
  },
  runtimeConfig: {
    public: {
      mode: process.env.MODE,
      apiBaseURL: process.env.API_BASE_URL,
    },
  },
  googleFonts: {
    families: {
      // Roboto: true,
      // Lato: [100, 300, 400, 700],
      // Poppins: true,
      // Merriweather: true,
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap",
        },
      ],
    },
  },
});