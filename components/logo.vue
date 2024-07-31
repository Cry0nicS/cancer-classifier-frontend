<script setup lang="ts">
/**
 * This component renders a customizable logo.
 *
 * Props:
 *  - height (optional): Specifies the height of the logo in pixels. If not provided, defaults to 85 pixels.
 *  - width (optional): Specifies the width of the logo in pixels. If not provided, it will not be set, allowing the height to control the size based on aspect ratio.
 *  - color (optional): Determines the color of the logo.
 *
 * The component dynamically calculates the logo's width based on the provided height to maintain a consistent aspect ratio, unless a specific width is provided.
 *
 * @displayName Logo
 */
interface LogoProps {
    height?: number;
    width?: number;
    color?: string;
}

const {height, width, color} = withDefaults(defineProps<LogoProps>(), {
    height: 85,
    color: "transparent"
});

const localePath = useLocalePath();
</script>

<template>
    <NuxtLink :to="localePath('/')">
        <NuxtImg
            :height="height"
            v-bind="{width: width || undefined}"
            :class="`fill-${color}`"
            src="/logo.png"
            loading="lazy" />

        <span class="sr-only">{{ $t("logo.altText") }}</span>
    </NuxtLink>
</template>
