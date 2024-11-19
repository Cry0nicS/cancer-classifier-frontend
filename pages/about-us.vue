<script setup lang="ts">
import {usePageContent} from "~/composables/use-page-content";
import {useSeo} from "~/composables/use-seo";
import type {Locale} from "~/types/constants";

const {t, locale} = useI18n();

useSeo(
    t("aboutUs.seo.title"),
    t("aboutUs.seo.description"),
    t("aboutUs.seo.image"),
    t("aboutUs.seo.imageAlt"),
    "summary_large_image"
);

const {data: content} = await usePageContent(
    "about-us",
    locale.value as Locale
).fetchLocalizedContent();
</script>

<template>
    <section class="w-full px-8 py-12">
        <div class="flex w-full flex-col justify-between gap-5">
            <h1 class="my-8 text-center text-3xl font-semibold lg:text-3xl">
                {{ t("aboutUs.title") }}
            </h1>
            <ContentRenderer
                class="markdown"
                :value="content as any" />
        </div>
    </section>
</template>
