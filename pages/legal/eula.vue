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
    <UiContainer class="min-h-screen py-10">
        <div class="mx-auto flex w-full max-w-[1000px] flex-col justify-between gap-5">
            <h1 class="my-8 text-center text-2xl font-semibold lg:text-3xl">
                {{ t("eula.title") }}
            </h1>
            <ContentRenderer
                class="markdown"
                :value="content as any" />
        </div>
    </UiContainer>
</template>
