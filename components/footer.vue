<script setup lang="ts">
const slots = useSlots();
</script>

<template>
    <UiContainer
        as="footer"
        class="flex flex-col items-center justify-between gap-7 border-t-2 px-8 py-12 md:max-h-[140px] md:flex-row">
        <p class="text-muted-foreground">&copy; {{ new Date().getFullYear() }} TGC</p>

        <nav
            v-if="slots.links"
            class="flex flex-col items-center gap-6 md:flex-row xl:gap-4">
            <slot name="links" />
        </nav>

        <div
            v-if="slots.social"
            class="flex flex-row items-center gap-3">
            <slot name="social" />
        </div>
    </UiContainer>
</template>
