<script setup lang="ts">
</script>

<template>
    <main class="h-[92vh] overflow-hidden">
        <div class="container flex justify-center max-w-full items-center py-20 h-screen gap-10">
            <div class="flex w-[100%] max-w-none mx-auto flex-col justify-center items-start">
                <div class="w-[72%] mx-auto self-center">
                    <h1 class="mb-5 text-[5rem] lg:text-[140px] leading-[100%] text-balance font-jubilat">
                        Favour Chibueze
                    </h1>
                    <h2 class="text-[3rem] lg:text-[100px] leading-[100%] text-right text-balance font-simula">
                        Software
                        Engineer
                    </h2>
                    <p class="text-balance font-menlo pt-5 pr-0 text-xl lg:text-2xl leading-8 text-right">Based in
                        Munich,
                        DE
                    </p>

                    <div class="flex gap-5 pt-10 justify-end">
                        <a href="https://github.com/favour-chibueze">
                            <Icon name="mdi:github" class="text-3xl cursor-pointer" />
                        </a>

                        <a href="mailto:chibueze.favour.o@gmail.com">
                            <Icon name="mdi:email" class="text-3xl cursor-pointer" />
                        </a>

                        <a href="https://www.linkedin.com/in/favourchibueze/">
                            <Icon name="mdi:linkedin" class="text-3xl cursor-pointer" />
                        </a>

                        <a href="https://twitter.com/FavourChi__">
                            <Icon name="mdi:twitter" class="text-3xl cursor-pointer" />
                        </a>

                        <a href="https://favourchi.medium.com/">
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