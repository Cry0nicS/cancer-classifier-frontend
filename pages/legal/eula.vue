<script setup lang="ts">
import {useSeo} from "~/composables/use-seo";
import {usePageContent} from "~/composables/use-page-content";
import type {Locale} from "~/types/constants";

const {t, locale} = useI18n();

useSeo(
    t("eula.seo.title"),
    t("eula.seo.description"),
    t("eula.seo.image"),
    t("eula.seo.imageAlt"),
    "summary_large_image"
);

const {data: content} = await usePageContent(
    "legal/eula",
    locale.value as Locale
).fetchLocalizedContent();
</script>

<template>
    <section class="w-full px-8 py-12">
        <div class="flex w-full flex-col justify-between gap-5">
            <h1 class="my-8 text-center text-2xl font-semibold lg:text-3xl">
                {{ t("eula.title") }}
            </h1>
            <ContentRenderer
                class="markdown"
                :value="content as any" />
        </div>
    </section>
</template>
