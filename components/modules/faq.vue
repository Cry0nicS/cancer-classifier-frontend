<script setup lang="ts">
import type {Color} from "~/constants/color";

interface FaqProps {
    title: string;
    backgroundColor: Color;
}

const faq = defineProps<FaqProps>();
</script>

<template>
    <div
        :class="`grid w-screen grid-cols-1 px-4 pt-6 xl:w-auto xl:grid-cols-12 xl:px-12 xl:py-32 bg-${faq.backgroundColor}`">
        <div class="col-span-5 lg:pt-11 xl:py-0 xl:pr-12">
            <div class="mx-auto xl:max-w-lg">
                <h2 class="pb-7">{{ faq.title }}</h2>
                <slot name="content" />
            </div>
        </div>
        <div class="col-span-7 pb-11 xl:pb-0">
            <slot />
        </div>
    </div>
</template>
