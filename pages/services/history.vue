<script setup lang="ts">
import type {DateTimeFormatOptions} from "@intlify/core-base";
import {collection} from "firebase/firestore";
import {useFirebaseAuth} from "vuefire";
import type {UserCollection} from "~/types/firebase";
import {LocaleIsoMap} from "~/constants/locale";
import {useSeo} from "~/composables/use-seo";
import {PlatformNames, getEnumName, storageMethodNames} from "~/utils/helpers";

definePageMeta({
    showHeader: true,
    middleware: ["auth"]
});

const {t, locale} = useI18n();
const localePath = useLocalePath();

// Setting up date options for formatting.
const dateOptions: DateTimeFormatOptions = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric"
};
// Fixme: Fix hardcoded today's date. This should come from the database.
const today = new Date().toLocaleDateString(
    LocaleIsoMap[locale.value as keyof typeof LocaleIsoMap],
    dateOptions
);

useSeo(
    t("seo.title"),
    t("seo.description"),
    t("seo.image"),
    t("seo.image.alt"),
    "summary_large_image",
    true
);

// Setting up Firebase Auth and Firestore
useFirebaseAuth();
const user = useCurrentUser();
const db = useFirestore();
const collectionName = user.value?.uid as string;

const isRefreshing = ref(false);
const userCollections = ref<UserCollection[]>([]);

// Fetch documents from Firestore that include the current user's uploads and the identifiable string (ID),
const fetchUserCollection = async () => {
    isRefreshing.value = true;

    const {data: fetchedCollections} = useCollection<UserCollection>(
        collection(db, collectionName)
    );

    userCollections.value = (fetchedCollections.value as UserCollection[]) ?? [];

    useSonner.success("Data refresh");
    isRefreshing.value = false;
};

// Initial fetch of documents.
await fetchUserCollection();
</script>

<template>
    <UiContainer class="min-h-screen py-10">
        <div class="mx-auto flex w-full max-w-[800px] flex-col justify-between gap-5">
            <div class="flex w-full flex-row justify-between">
                <h1 class="text-2xl font-semibold lg:text-3xl">
                    {{ $t("history.title", {name: user?.displayName}) }}
                </h1>
                <div class="flex flex-col justify-center gap-2 md:flex-row">
                    <NuxtLink
                        class="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:mb-2 md:mb-0"
                        :to="localePath('/services/upload')">
                        {{ $t(`history.buttons.upload`) }}
                    </NuxtLink>
                    <UiTooltip disable-closing-trigger>
                        <template #trigger>
                            <UiTooltipTrigger as-child>
                                <UiButton
                                    type="button"
                                    variant="secondary"
                                    :disabled="isRefreshing"
                                    @click.prevent="fetchUserCollection">
                                    <Icon
                                        name="lucide:refresh-ccw-dot"
                                        size="30px" />
                                </UiButton>
                            </UiTooltipTrigger>
                        </template>
                        <template #content>
                            <UiTooltipContent>
                                <p>{{ $t("history.buttons.refresh") }}</p>
                            </UiTooltipContent>
                        </template>
                    </UiTooltip>
                </div>
            </div>
            <div class="mt-12">
                <h2 class="text-xl font-medium">{{ $t("history.table.title") }}</h2>
            </div>
            <div
                v-for="userCollection in userCollections"
                :key="userCollection.id"
                class="mt-8 w-full">
                <div class="mt-8 overflow-x-auto rounded-md border pb-4">
                    <UiTable>
                        <UiTableCaption>
                            {{ $t("history.table.caption") }}
                        </UiTableCaption>
                        <UiTableHeader>
                            <UiTableRow>
                                <UiTableHead>
                                    {{ $t("history.table.columns.name") }}
                                </UiTableHead>
                                <UiTableHead>
                                    {{ $t("history.table.columns.status") }}
                                </UiTableHead>
                                <UiTableHead>
                                    {{ $t("history.table.columns.date") }}
                                </UiTableHead>
                                <UiTableHead>
                                    {{ $t("history.table.columns.platform") }}
                                </UiTableHead>
                                <UiTableHead>
                                    {{ $t("history.table.columns.method") }}
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
                                <UiTableCell>{{ userCollection.status }}</UiTableCell>
                                <UiTableCell>{{ today }}</UiTableCell>
                                <UiTableCell>
                                    {{ getEnumName(PlatformNames, file.platform) }}
                                </UiTableCell>
                                <UiTableCell>
                                    <template v-if="file.material">
                                        {{ getEnumName(storageMethodNames, file.material) }}
                                    </template>
                                    <template v-else>
                                        {{ $t("material.none") }}
                                    </template>
                                </UiTableCell>
                            </UiTableRow>
                        </UiTableBody>
                    </UiTable>
                </div>
            </div>
            <div class="mt-8 flex flex-col justify-end gap-2 md:flex-row">
                <NuxtLink
                    class="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:mb-2 md:mb-0"
                    :to="localePath('/services/dashboard')">
                    <Icon
                        name="lucide:square-arrow-out-up-right"
                        class="mr-2"
                        size="18px" />
                    {{ $t(`history.buttons.dashboard`) }}
                </NuxtLink>
            </div>
        </div>
    </UiContainer>
</template>
