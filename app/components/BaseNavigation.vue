<script setup lang="ts">
const colorMode = useColorMode()

const toggleColorMode = () => {
    console.log('toggleColorMode', colorMode.preference)
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

useHead({
    bodyAttrs: {
        class: "bg-white text-slate-900 dark:bg-[#1d1f20] dark:text-[#c8c9cb]"
    }
})
</script>

<template>
    <nav class="w-full transition-all">
        <div class="container mx-auto flex justify-between items-center py-6">
            <!-- Logo -->
            <NuxtLink to="/" class="text-xl font-bold text-gray-900 dark:text-white">
                <h1
                    class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 dark:before:bg-white before:bg-black">
                    <span class="relative text-white dark:text-gray-950">FC</span>
                </h1>
            </NuxtLink>

            <!-- Navigation Links -->
            <ul class="hidden md:flex space-x-6">
                <li>
                    <NuxtLink to="/" class="nav-link hover:underline">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about" class="nav-link hover:underline">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/experience" class="nav-link hover:underline">Experience</NuxtLink>
                </li>

                <li>
                    <NuxtLink to="/contact" class="nav-link hover:underline">Contact</NuxtLink>
                </li>
                <li>
                    <button @click="toggleColorMode" class="rounded-md">
                        <Icon
                            :name="colorMode.preference === 'dark' ? 'mdi:moon-waning-crescent' : 'mdi:white-balance-sunny'"
                            class="text-2xl text-gray-900 dark:text-white" />
                    </button>
                </li>
            </ul>
        </div>
    </nav>
</template>