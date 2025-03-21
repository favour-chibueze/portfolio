<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
    <div>
        <footer class="container py-10 border-t border-black-200">
            <div class="flex justify-between items-center font-menlo">
                <div>
                    <p class="text-sm">© {{ year }} Favour Chibueze</p>
                </div>
            </div>
        </footer>
    </div>
</template>
