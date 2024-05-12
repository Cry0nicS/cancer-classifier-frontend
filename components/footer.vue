<script setup lang="ts">
const slots = useSlots();
const year = ref(new Date().getFullYear());
</script>

<template>
    <div
        class="flex flex-col justify-around gap-6 bg-main-azure px-4 py-6 pb-10 text-white xl:flex-row xl:items-center xl:gap-0">
        <span class="text-xl font-bold">{{ year }}</span>

        <nav
            v-if="slots.links"
            class="flex flex-col gap-6 xl:flex-row xl:gap-4">
            <slot name="links" />
        </nav>

        <div
            v-if="slots.social"
            class="flex flex-row gap-3">
            <slot name="social" />
        </div>
    </div>
</template>
