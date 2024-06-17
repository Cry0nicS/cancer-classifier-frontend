<script setup lang="ts">
const slots = useSlots();
</script>

<template>
    <UiContainer
        as="footer"
        class="flex flex-col items-center justify-between gap-7 border-t-2 py-12 md:flex-row">
        <p class="text-muted-foreground">&copy; {{ new Date().getFullYear() }}</p>

        <nav
            v-if="slots.links"
            class="flex flex-col gap-6 md:flex-row xl:gap-4">
            <slot name="links" />
        </nav>

        <div
            v-if="slots.social"
            class="flex flex-row gap-3">
            <slot name="social" />
        </div>
    </UiContainer>
</template>
