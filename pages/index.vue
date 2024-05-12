<script setup lang="ts">
import {range} from "@antfu/utils";
import {Color} from "~/constants/color";
import {useSeo} from "~/composables/use-seo";

definePageMeta({
    showHeader: false
});

const {t} = useI18n();

useSeo(
    t("seo.title"),
    t("seo.description"),
    t("seo.image"),
    t("seo.image.alt"),
    "summary_large_image"
);
</script>

<template>
    <div class="lg:container xl:mx-auto 2xl:max-w-[1280px]">
        <ModulesLogin />
        <ModulesFaq
            :title="$t('faq.header')"
            :background-color="Color.Scale"
            class="text-main-azure">
            <template #content>
                <span>{{ $t(`faq.description`) }}</span>
            </template>
            <Accordion>
                <template v-for="i of range(16)">
                    <AccordionPanel
                        v-if="$te([`faq.item${i + 1}.title`] as unknown as string)"
                        :key="i">
                        <template #title>{{ $t(`faq.item${i + 1}.title`) }}</template>
                        <p>{{ $t(`faq.item${i + 1}.description`) }}</p>
                    </AccordionPanel>
                </template>
            </Accordion>
        </ModulesFaq>
    </div>
</template>
