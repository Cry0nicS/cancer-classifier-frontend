<script setup lang="ts">
import {useSeo} from "~/composables/use-seo";

definePageMeta({
    showHeader: true,
    middleware: ["auth"]
});

const {t} = useI18n();

useSeo(
    t("seo.title"),
    t("seo.description"),
    t("seo.image"),
    t("seo.image.alt"),
    "summary_large_image",
    true
);

const user = useCurrentUser();
</script>

<template>
    <UiContainer class="flex min-h-screen flex-col items-center justify-center">
        <div class="w-full text-center">
            <h1 class="text-3xl font-semibold lg:text-4xl">Hello, {{ user?.displayName }}</h1>
            <p class="mt-10">Let's start uploading stuff</p>
        </div>
    </UiContainer>
</template>
