<script setup lang="ts">
import {useSeo} from "~/composables/use-seo";
import {usePageContent} from "~/composables/use-page-content";
import type {Locale} from "~/types/constants";

const {t, locale} = useI18n();

useSeo(
    t("contact.seo.title"),
    t("contact.seo.description"),
    t("contact.seo.image"),
    t("contact.seo.imageAlt"),
    "summary_large_image"
);

const {data: content} = await usePageContent(
    "legal/contact",
    locale.value as Locale
).fetchLocalizedContent();
</script>

<template>
    <section class="w-full px-8 py-12">
        <div class="flex w-full flex-col justify-between gap-5">
            <h1 class="my-8 text-center text-2xl font-semibold lg:text-3xl">
                {{ t("contact.title") }}
            </h1>
            <ContentRenderer
                class="markdown"
                :value="content as any" />
        </div>
    </section>
</template>
