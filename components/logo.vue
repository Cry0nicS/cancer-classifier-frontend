<script setup lang="ts">
/**
 * This component renders a customizable logo.
 *
 * Props:
 *  - height (optional): Specifies the height of the logo in pixels. If not provided, defaults to 85 pixels.
 *  - color (optional): Determines the color of the logo.
 *
 * The component dynamically calculates the logo's width based on the provided height to maintain a consistent aspect ratio of 32:17.
 *
 * @displayName logo
 */
interface LogoProps {
    size?: number;
    color?: string;
}

const {size, color} = withDefaults(defineProps<LogoProps>(), {
    size: 85,
    color: "transparent"
});

const localePath = useLocalePath();
</script>

<template>
    <NuxtLink :to="localePath('/')">
        <NuxtImg
            :height="size"
            :width="size"
            :class="`fill-${color}`"
            src="/logo.webp"
            loading="lazy" />

        <span class="sr-only">{{ $t("logo.alt_text") }}</span>
    </NuxtLink>
</template>
