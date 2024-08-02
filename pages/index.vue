<script setup lang="ts">
import {range} from "@antfu/utils";
import {useSeo} from "~/composables/use-seo";
import type {AccordionItem} from "~/components/Ui/Accordion/Accordion.vue";

definePageMeta({
    showHeader: false
});

const {t} = useI18n();
const localePath = useLocalePath();

// Get the (authenticated) user from Firebase. Hide login form if user is already logged in.
const user = useCurrentUser();

useSeo(
    t("home.seo.title"),
    t("home.seo.description"),
    t("home.seo.image"),
    t("home.seo.imageAlt"),
    "summary_large_image"
);

// Fetch the FAQ items from translations.
const accordionItems: AccordionItem[] = range(1, 4).map((index) => ({
    id: useId(),
    value: `item-${index}`,
    title: t(`home.faq.item${index}.title`),
    content: t(`home.faq.item${index}.content`)
}));
</script>

<template>
    <UiContainer class="flex min-h-screen flex-col">
        <div
            v-if="user"
            class="flex min-h-[400px] flex-col items-center justify-center lg:min-h-[600px]">
            <div class="w-full text-center sm:w-[400px] md:w-[470px]">
                <Icon
                    class="size-10"
                    name="lucide:key-round" />
                <h1 class="mt-10 text-3xl font-semibold lg:text-4xl">
                    {{ t("home.user.title", {name: user.displayName}) }}
                </h1>
                <h3 class="mt-10 text-xl text-muted-foreground lg:text-2xl">
                    {{ t("home.user.description") }}
                </h3>
                <div class="flex flex-col justify-center gap-2 md:flex-row">
                    <NuxtLink
                        :external="true"
                        :to="localePath('/services/upload')"
                        class="mt-10 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        <Icon
                            name="lucide:rocket"
                            size="17px" />
                        {{ t("buttons.getStarted") }}
                    </NuxtLink>
                    <NuxtLink
                        :external="true"
                        :to="localePath('/services/history')"
                        class="mt-10 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        <Icon
                            name="lucide:history"
                            size="17px" />
                        {{ t("buttons.history") }}
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div
            v-else
            class="grid w-screen grid-cols-1 items-center justify-center py-16 xl:w-auto xl:grid-cols-12">
            <div class="col-span-5 flex items-center justify-center text-center">
                <div class="w-full max-w-[340px]">
                    <h1 class="text-3xl font-semibold lg:text-4xl">
                        {{ t("home.noUser.title") }}
                    </h1>
                    <p class="mt-5 text-muted-foreground">
                        {{ t("home.noUser.description") }}
                    </p>
                </div>
            </div>
            <div class="col-span-7 flex items-center justify-center">
                <div class="my-10">
                    <ModulesLogin />
                </div>
            </div>
        </div>
        <ModulesFaq
            :title="t('home.faq.title')"
            background-color="transparent"
            class="my-10 border-2"
            :accordion-items="accordionItems">
            <template #content>
                <p class="mt-6 text-muted-foreground">{{ t("home.faq.description") }}</p>
            </template>
        </ModulesFaq>
    </UiContainer>
</template>
