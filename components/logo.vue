<script setup lang="ts">
/**
 * This component renders a customizable logo.
 *
 * Props:
 *  - height (optional): Specifies the height of the logo in pixels. If not provided, defaults to 85 pixels.
 *  - color (optional): Determines the color of the logo. The color should be one of the predefined values in the 'Color' enum.
 *
 * The component dynamically calculates the logo's width based on the provided height to maintain a consistent aspect ratio of 32:17.
 *
 * @displayName logo
 */
import {Color} from "~/constants/color";

interface LogoProps {
    height?: number;
    color?: Color;
}

const props = withDefaults(defineProps<LogoProps>(), {
    height: 85,
    color: Color.Azure
});

const logoWidth = Math.floor((32 / 17) * props.height);
</script>

<template>
    <a
        href="https://google.com"
        class="block self-start">
        <NuxtImg
            :height="height"
            :width="logoWidth"
            :class="`fill-${color}`"
            src="/logo.svg"
            loading="lazy" />

        <span class="sr-only">{{ $t("logo.alt_text") }}</span>
    </a>
</template>
