<script setup lang="ts">
import {useFavicon, usePreferredDark} from "@vueuse/core";

const {locale} = useI18n();

// Set favicon based on preferred color scheme.
const isDark = usePreferredDark();
const favicon = computed(() => (isDark.value ? "/favicon-light.ico" : "/favicon-dark.ico"));

useFavicon(favicon);
</script>

<template>
    <Html :lang="locale" />

    <NuxtLayout>
        <NuxtLoadingIndicator />
        <CookieControl :locale="locale">
            <template #bar>
                <h2>{{ $t("cookies.title") }}</h2>
                <p>{{ $t("cookies.description") }}</p>
            </template>
        </CookieControl>
        <NuxtPage />
        <UiVueSonner />
    </NuxtLayout>
</template>
