<script setup lang="ts">
import {collection, orderBy, query} from "firebase/firestore";
import {useFirebaseAuth} from "vuefire";
import {uuidv4} from "@firebase/util";
import type {UserCollection} from "~/types/firebase";
import {useSeo} from "~/composables/use-seo";
import {formatDate} from "~/utils/helpers";
import {type Locale, UPLOAD_STATUS} from "~/types/constants";

definePageMeta({
    showHeader: true,
    middleware: ["auth"]
});

const {t, locale} = useI18n();
const localePath = useLocalePath();

useSeo(
    t("history.seo.title"),
    t("history.seo.description"),
    t("history.seo.image"),
    t("history.seo.imageAlt"),
    "summary_large_image",
    true
);

// Set up Firebase Auth and Firestore
const _auth = useFirebaseAuth();
const db = useFirestore();
const user = useCurrentUser();

const {data: userCollections} = useCollection<UserCollection>(
    () =>
        user.value
            ? query(collection(db, user.value.uid as string), orderBy("sessionStartedAt", "desc"))
            : null,
    {
        once: true,
        ssrKey: user.value ? user.value.uid : uuidv4()
    }
);
</script>

<template>
    <UiContainer class="min-h-screen py-10">
        <div class="mx-auto flex w-full max-w-[1000px] flex-col justify-between gap-5">
            <div class="flex w-full flex-row justify-between">
                <h1 class="text-2xl font-semibold lg:text-3xl">
                    {{ t("history.title", {name: user?.displayName}) }}
                </h1>
                <div class="flex flex-col justify-center gap-2 md:flex-row">
                    <NuxtLink
                        class="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:mb-2 md:mb-0"
                        :to="localePath('/services/upload')">
                        {{ t(`buttons.upload`) }}
                    </NuxtLink>
                </div>
            </div>
            <div class="mt-12">
                <h2 class="text-xl font-medium">{{ t("history.table.title") }}</h2>
            </div>
            <div
                v-for="userCollection in userCollections"
                :key="userCollection.id"
                class="mt-8 w-full">
                <div class="overflow-x-auto rounded-md border pb-4">
                    <UiTable class="w-full table-auto">
                        <UiTableCaption>
                            <NuxtLink
                                v-if="userCollection.status === UPLOAD_STATUS.PredictionSuccessful"
                                :to="
                                    localePath({
                                        name: 'services-results',
                                        query: {sessionId: userCollection.id}
                                    })
                                "
                                class="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                {{ t("buttons.predictions") }}
                                <Icon
                                    name="lucide:external-link"
                                    size="18px" />
                            </NuxtLink>
                            <span v-else>{{ t("history.table.caption") }}</span>
                        </UiTableCaption>
                        <UiTableHeader>
                            <UiTableRow>
                                <UiTableHead>
                                    {{ t("history.table.columns.name") }}
                                </UiTableHead>
                                <UiTableHead>
                                    {{ t("history.table.columns.status") }}
                                </UiTableHead>
                                <UiTableHead>
                                    {{ t("history.table.columns.date") }}
                                </UiTableHead>
                                <UiTableHead>
                                    {{ t("history.table.columns.platform") }}
                                </UiTableHead>
                                <UiTableHead>
                                    {{ t("history.table.columns.method") }}
                                </UiTableHead>
                                <UiTableHead
                                    v-if="
                                        userCollection.status === UPLOAD_STATUS.PredictionSuccessful
                                    ">
                                    <span class="font-bold">
                                        {{ t("results.table.columns.prediction") }}
                                    </span>
                                </UiTableHead>
                            </UiTableRow>
                        </UiTableHeader>
                        <UiTableBody class="last:border-b">
                            <UiTableRow
                                v-for="(file, index) in userCollection.file_list"
                                :key="index">
                                <UiTableCell class="font-medium">
                                    <span>{{ file.baseName }}</span>
                                </UiTableCell>
                                <UiTableCell>
                                    {{ t(`api.uploadStatus.${userCollection!.status}`) }}
                                </UiTableCell>
                                <UiTableCell>
                                    {{
                                        formatDate(
                                            userCollection!.sessionStartedAt,
                                            locale as Locale
                                        )
                                    }}
                                </UiTableCell>
                                <UiTableCell>
                                    {{ t(`api.platform.${file.platform}`) }}
                                </UiTableCell>
                                <UiTableCell>
                                    <template v-if="file.material">
                                        {{ t(`api.storageMethod.${file.material}`) }}
                                    </template>
                                    <template v-else>
                                        {{ t("api.storageMethod.none") }}
                                    </template>
                                </UiTableCell>
                                <UiTableCell
                                    v-if="
                                        userCollection.status === UPLOAD_STATUS.PredictionSuccessful
                                    ">
                                    <span class="font-bold">
                                        {{ t(`api.predictionResult.${file.prediction}`) }}
                                    </span>
                                </UiTableCell>
                            </UiTableRow>
                        </UiTableBody>
                    </UiTable>
                </div>
            </div>
        </div>
    </UiContainer>
</template>
