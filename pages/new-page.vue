<script setup lang="ts">
import {useSeo} from "~/composables/use-seo";

definePageMeta({
    showHeader: true
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
    <div class="bg-main-scale lg:container xl:mx-auto 2xl:max-w-[1280px]">
        Hello {{ user?.displayName }}
    </div>
</template>
