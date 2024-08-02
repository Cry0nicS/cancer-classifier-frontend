<script setup lang="ts">
import {useFavicon} from "@vueuse/core";

const {locale} = useI18n();

useFavicon("/favicon.ico");
</script>

<template>
    <Html :lang="locale" />

    <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
        <UiVueSonner />
    </NuxtLayout>
</template>
