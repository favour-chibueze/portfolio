// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    defaults: {
      useAsyncData: {
        deep: true,
      },
    },
  },

  features: {
    inlineStyles: true
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false
    }
  },
  app: {
    head: {
      title: "Favour Chibueze | Frontend Engineer",
      meta: [
        { name: "description", content: "Favour Chibueze is a skilled frontend developer specializing in building modern, responsive, and accessible web applications that deliver exceptional user experiences." },
        { name: "author", content: "Favour Chibueze" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "keywords",
          content: "frontend developer, Vue.js, Nuxt, frontend engineer, web developer, portfolio, React, SEO manager, accessibility developer, Germany web developer, Munich developer, software engineer, open source contributor"
        },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: "Favour Chibueze | Frontend Engineer" },
        { property: "og:description", content: "Favour Chibueze is a skilled frontend developer specializing in modern, accessible web applications." },
        { property: "og:image", content: "/favour-chibueze.jpg" },
        { property: "og:url", content: "https://favourchibueze.dev" },
        { property: "twitter:title", content: "Favour Chibueze | Frontend Engineer" },
        { property: "twitter:description", content: "Modern frontend developer building accessible web experiences." },
        { property: "twitter:image", content: "/favour-chibueze.jpg" },
        { property: "twitter:card", content: "summary_large_image" }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favour-chibueze.jpg'
        },
        { rel: "canonical", href: "https://favourchibueze.dev" }
      ],
      htmlAttrs: {
        lang: 'en'
      },
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Favour Chibueze",
            "jobTitle": "Frontend Engineer",
            "url": "https://favourchibueze.dev",
            "sameAs": [
              "https://twitter.com/favourchi__",
              "https://medium.com/@favourchi",
              "https://github.com/favour-chibueze",
              "https://linkedin.com/in/favourchibueze"
            ]
          })
        }
      ]
    },
  },

  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
    '@nuxt/icon'
  ],

  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  }
})