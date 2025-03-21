<script setup lang="ts">

useSeoMeta({
    title: "Favour Chibueze | Frontend Engineer",
    description: "Favour Chibueze is a skilled frontend developer specializing in building modern, responsive, and accessible web applications that deliver exceptional user experiences.",
    ogTitle: "Favour Chibueze | Frontend Engineer",
    ogDescription: "Favour Chibueze is a skilled frontend developer specializing in building modern, responsive, and accessible web applications that deliver exceptional user experiences.",
    ogImage: "/favour-chibueze.jpg",
    ogUrl: `http:localhost:3000`,
    twitterTitle: "Favour Chibueze | Frontend Engineer",
    twitterDescription: "Favour Chibueze is a skilled frontend developer specializing in building modern, responsive, and accessible web applications that deliver exceptional user experiences.",
    twitterImage: "/favour-chibueze.jpg",
    twitterCard: "summary",
    keywords: 'frontend developer, frontend engineer, web developer, portfolio, React, Vue, seo manager, accessibility developer, Vue developer, germany web developer, munich developer, software developer'
});

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favour-chibueze.jpg'
    }
  ]
})

</script>

<template>
    <main class="h-[92vh] overflow-hidden">
        <div class="container flex justify-center max-w-full items-center py-5 lg:py-20 h-screen gap-10">
            <div class="flex w-[100%] max-w-none mx-auto flex-col justify-center items-start">
                <div class="lg:w-[72%] mx-auto self-center lg:text-left text-center">
                    <h1 class="mb-5 text-[2.5rem] lg:text-[140px] leading-[100%] text-balance font-jubilat">
                        Favour Chibueze
                    </h1>
                    <h2 class="text-[2rem] lg:text-[100px] leading-[100%] lg:text-right text-balance font-simula">
                        Software
                        Engineer
                    </h2>
                    <p class="text-balance font-menlo pt-5 pr-0 text-xl lg:text-2xl leading-8 lg:text-right">Based in
                        Munich,
                        DE
                    </p>

                    <div class="flex gap-5 pt-10 lg:justify-end justify-center">
                        <a href="https://github.com/favour-chibueze" aria-label="GitHub">
                            <Icon name="mdi:github" class="text-3xl cursor-pointer" />
                        </a>

                        <a href="mailto:chibueze.favour.o@gmail.com" aria-label="Email">
                            <Icon name="mdi:email" class="text-3xl cursor-pointer" />
                        </a>

                        <a href="https://www.linkedin.com/in/favourchibueze/" aria-label="LinkedIn">
                            <Icon name="mdi:linkedin" class="text-3xl cursor-pointer" />
                        </a>

                        <a href="https://twitter.com/FavourChi__" aria-label="Twitter">
                            <Icon name="mdi:twitter" class="text-3xl cursor-pointer" />
                        </a>

                        <a href="https://favourchi.medium.com/" aria-label="Medium">
                            <Icon name="mdi:medium" class="text-3xl cursor-pointer" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
html.light {
    background-color: white;
    color: black;
}

/* Dark mode styles */
html.dark {
    background-color: black;
    color: #c8c9cb;
}
</style>