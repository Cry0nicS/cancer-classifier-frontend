<script setup lang="ts">
import {doc} from "firebase/firestore";
import {useDocument, useFirebaseAuth} from "vuefire";
import {uuidv4} from "@firebase/util";
import type {UserCollection} from "~/types/firebase";
import {useSeo} from "~/composables/use-seo";
import {useSessionId} from "~/composables/use-session-id";
import type {Locale} from "~/types/constants";
import {usePageContent} from "~/composables/use-page-content";

definePageMeta({
    showHeader: true,
    middleware: ["auth", "query-session-id"]
});

const {t, locale} = useI18n();
const localePath = useLocalePath();
const sessionId = useSessionId().getQueryParamSessionId();

useSeo(
    t("results.seo.title"),
    t("results.seo.description"),
    t("results.seo.image"),
    t("results.seo.imageAlt"),
    "summary_large_image",
    true
);

// Set up Firebase Auth and Firestore
const _auth = useFirebaseAuth();
const db = useFirestore();
const user = useCurrentUser();

const {data: userCollection} = useDocument<UserCollection>(
    () => (user.value ? doc(db, user.value.uid, sessionId) : null),
    {
        once: true,
        // See https://github.com/vuejs/vuefire/issues/1315
        ssrKey: uuidv4()
    }
);

const sessionStartedAtComputed = computed(() => userCollection.value?.sessionStartedAt);

const computedSessionStartedAt = computed(() =>
    sessionStartedAtComputed.value
        ? formatDate(sessionStartedAtComputed.value, locale as unknown as Locale)
        : null
);

const {data: content} = await usePageContent(
    "services/results",
    locale.value as Locale
).fetchLocalizedContent();
</script>

<template>
    <section class="w-full px-8 py-12">
        <div class="flex w-full flex-col justify-between gap-5">
            <div class="flex w-full flex-row justify-between">
                <h1 class="text-2xl font-semibold lg:text-3xl">
                    {{ t("results.title", {name: user?.displayName}) }}
                </h1>
                <div class="flex flex-col justify-center gap-2 md:flex-row">
                    <NuxtLink
                        class="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:mb-2 md:mb-0"
                        :to="localePath('/services/upload')">
                        {{ t(`buttons.upload`) }}
                    </NuxtLink>
                    <UiTooltip disable-closing-trigger>
                        <template #trigger>
                            <UiTooltipTrigger as-child>
                                <NuxtLink
                                    :to="localePath('/services/history')"
                                    class="inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground ring-offset-background transition-colors hover:bg-secondary/80">
                                    <Icon
                                        name="lucide:history"
                                        size="30px" />
                                </NuxtLink>
                            </UiTooltipTrigger>
                        </template>
                        <template #content>
                            <UiTooltipContent>
                                <p>{{ t("buttons.history") }}</p>
                            </UiTooltipContent>
                        </template>
                    </UiTooltip>
                </div>
            </div>
            <div class="mt-12 flex flex-col">
                <h2 class="mb-8 text-xl font-medium">{{ t("results.subtitle") }}</h2>
                <UiTable class="w-full table-auto">
                    <UiTableCaption>
                        {{
                            t("results.table.caption", {
                                date: computedSessionStartedAt
                            })
                        }}
                    </UiTableCaption>
                    <UiTableHeader>
                        <UiTableRow>
                            <UiTableHead>{{ t("results.table.columns.name") }}</UiTableHead>
                            <UiTableHead>
                                <span class="font-bold">
                                    {{ t("results.table.columns.prediction") }}
                                </span>
                            </UiTableHead>
                            <UiTableHead>
                                {{ t("results.table.columns.nnScoreNormalBile") }}
                            </UiTableHead>
                            <UiTableHead>{{ t("results.table.columns.nnScorePaad") }}</UiTableHead>
                            <UiTableHead>{{ t("results.table.columns.nnScoreiCCA") }}</UiTableHead>
                            <UiTableHead>
                                {{ t("results.table.columns.binomial_prediction") }}
                            </UiTableHead>
                            <UiTableHead>
                                {{ t("results.table.columns.binomialScorePositive") }}
                            </UiTableHead>
                        </UiTableRow>
                    </UiTableHeader>
                    <UiTableBody class="last:border-b">
                        <UiTableRow
                            v-for="(file, index) in userCollection?.file_list"
                            :key="index">
                            <UiTableCell>
                                <span>{{ file.baseName }}</span>
                            </UiTableCell>
                            <UiTableCell>
                                <span class="font-bold">
                                    {{ t(`api.predictionResult.${file.prediction}`) }}
                                </span>
                            </UiTableCell>
                            <UiTableCell>
                                <span>{{ file.NNScoreNormalBile!.toFixed(2) }}</span>
                            </UiTableCell>
                            <UiTableCell>
                                <span>{{ file.NNScorePaad!.toFixed(2) }}</span>
                            </UiTableCell>
                            <UiTableCell>
                                <span>{{ file.NNScoreiCCA!.toFixed(2) }}</span>
                            </UiTableCell>
                            <UiTableCell>
                                <span>
                                    {{ t(`api.binomialPrediction.${file.binomial_prediction}`) }}
                                </span>
                            </UiTableCell>
                            <UiTableCell>
                                <span>{{ file.BinomialScorePositive!.toFixed(2) }}</span>
                            </UiTableCell>
                        </UiTableRow>
                    </UiTableBody>
                </UiTable>
            </div>
            <div class="mt-12">
                <ContentRenderer
                    class="markdown"
                    :value="content as any" />
            </div>
        </div>
    </section>
</template>
