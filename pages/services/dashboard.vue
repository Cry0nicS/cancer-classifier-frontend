<script setup lang="ts">
import {collection, getDocs, query, where} from "firebase/firestore";
import {useFirebaseAuth} from "vuefire";
import type {DateTimeFormatOptions} from "@intlify/core-base";
import {LocaleIsoMap} from "~/constants/locale";
import {useSeo} from "~/composables/use-seo";
import type {Upload, UploadDocument} from "~/types/firebase";

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

// Creating a query to get uploads for the current user
const q = query(collection(db, "uploads"), where("user_id", "==", user.value?.uid));

const documents = ref<UploadDocument[]>([]);
const isRefreshing = ref(false);

// Fetch documents from Firestore that include the current user's uploads and the identifiable string (ID),
const fetchDocuments = async () => {
    isRefreshing.value = true;

    const documentSnapshotList = await getDocs(q);
    documents.value = documentSnapshotList.docs.map((doc) => ({
        id: doc.id,
        data: doc.data() as Upload
    }));

    useSonner.success(t("Data refresh"));
    isRefreshing.value = false;
};

// Initial fetch of documents.
await fetchDocuments();
</script>

<template>
    <UiContainer class="min-h-screen py-10">
        <div class="mx-auto flex w-full max-w-[800px] flex-col justify-between gap-5">
            <div class="flex w-full flex-row justify-between">
                <h1 class="text-2xl font-semibold lg:text-3xl">
                    {{ $t("dashboard.title", {name: user?.displayName}) }}
                </h1>
                <div class="flex flex-col justify-center gap-2 md:flex-row">
                    <NuxtLink
                        class="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:mb-2 md:mb-0"
                        :to="localePath('/services/upload')">
                        {{ $t(`dashboard.buttons.upload`) }}
                    </NuxtLink>
                    <UiTooltip disable-closing-trigger>
                        <template #trigger>
                            <UiTooltipTrigger as-child>
                                <UiButton
                                    type="button"
                                    variant="secondary"
                                    :disabled="isRefreshing"
                                    @click.prevent="fetchDocuments">
                                    <Icon
                                        name="lucide:refresh-ccw-dot"
                                        size="30px" />
                                </UiButton>
                            </UiTooltipTrigger>
                        </template>
                        <template #content>
                            <UiTooltipContent>
                                <p>{{ $t("dashboard.buttons.refresh") }}</p>
                            </UiTooltipContent>
                        </template>
                    </UiTooltip>
                </div>
            </div>
            <div class="mt-8 w-full">
                <span>{{ $t("dashboard.table.title") }}</span>
                <div class="mt-8 overflow-x-auto rounded-md border pb-4">
                    <UiTable>
                        <UiTableCaption>{{ $t("dashboard.table.caption") }}</UiTableCaption>
                        <UiTableHeader>
                            <UiTableRow>
                                <UiTableHead>{{ $t("dashboard.table.columns.name") }}</UiTableHead>
                                <UiTableHead>
                                    {{ $t("dashboard.table.columns.status") }}
                                </UiTableHead>
                                <UiTableHead>{{ $t("dashboard.table.columns.date") }}</UiTableHead>
                                <UiTableHead>
                                    {{ $t("dashboard.table.columns.method") }}
                                </UiTableHead>
                            </UiTableRow>
                        </UiTableHeader>
                        <UiTableBody class="last:border-b">
                            <template
                                v-for="doc in documents"
                                :key="doc.id[0]">
                                <UiTableRow>
                                    <UiTableCell class="font-medium">
                                        <div
                                            v-for="file in doc.data.paired_files"
                                            :key="file">
                                            <span>{{ file }}</span>
                                        </div>
                                    </UiTableCell>
                                    <UiTableCell>{{ doc.data.status }}</UiTableCell>
                                    <UiTableCell>{{ today }}</UiTableCell>
                                    <UiTableCell>
                                        <div class="flex gap-0.5">
                                            <UiTooltip disable-closing-trigger>
                                                <template #trigger>
                                                    <UiTooltipTrigger as-child>
                                                        <UiButton variant="ghost">
                                                            <Icon
                                                                name="lucide:microscope"
                                                                size="20px" />
                                                        </UiButton>
                                                    </UiTooltipTrigger>
                                                </template>
                                                <template #content>
                                                    <UiTooltipContent>
                                                        <p>
                                                            FFPE (Formalin-Fixed,
                                                            Paraffin-Embedded):
                                                        </p>
                                                    </UiTooltipContent>
                                                </template>
                                            </UiTooltip>
                                            <UiTooltip disable-closing-trigger>
                                                <template #trigger>
                                                    <UiTooltipTrigger as-child>
                                                        <UiButton variant="ghost">
                                                            <Icon
                                                                name="lucide:thermometer-snowflake"
                                                                size="20px" />
                                                        </UiButton>
                                                    </UiTooltipTrigger>
                                                </template>
                                                <template #content>
                                                    <UiTooltipContent>
                                                        <p>Fresh Frozen</p>
                                                    </UiTooltipContent>
                                                </template>
                                            </UiTooltip>
                                            <UiTooltip disable-closing-trigger>
                                                <template #trigger>
                                                    <UiTooltipTrigger as-child>
                                                        <UiButton variant="ghost">
                                                            <Icon
                                                                name="lucide:test-tube"
                                                                size="20px" />
                                                        </UiButton>
                                                    </UiTooltipTrigger>
                                                </template>
                                                <template #content>
                                                    <UiTooltipContent>
                                                        <p>Other</p>
                                                    </UiTooltipContent>
                                                </template>
                                            </UiTooltip>
                                        </div>
                                    </UiTableCell>
                                </UiTableRow>
                            </template>
                        </UiTableBody>
                    </UiTable>
                </div>
            </div>
        </div>
    </UiContainer>
</template>
