<script setup lang="ts">
import type {DateTimeFormatOptions} from "@intlify/core-base";
import {doc} from "firebase/firestore";
import {useDocument, useFirebaseAuth} from "vuefire";
import {FetchError} from "ofetch";
import {useSessionStorage} from "@vueuse/core";
import type {Platform, StorageMethod} from "~/types/enums";
import {UploadStatus} from "~/types/enums";
import type {UserCollection} from "~/types/firebase";
import {LocaleIsoMap} from "~/constants/locale";
import {PlatformNames, getEnumName, storageMethodNames} from "~/utils/helpers";
import {StorageMethodSchema} from "~/utils/validations";
import {useSeo} from "~/composables/use-seo";

type FileList = {
    baseName: string;
    platform: Platform;
    material: StorageMethod | null;
};

definePageMeta({
    showHeader: true,
    middleware: ["auth", "upload-session-id"]
});

const {t, locale} = useI18n();
const localePath = useLocalePath();

const uploadSessionId = useSessionStorage<string>("uploadSessionId", null);

if (!uploadSessionId.value) {
    throw new Error("Upload session ID is missing");
}

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
const userCollection = ref<UserCollection>({
    id: "",
    file_list: [],
    user_id: "",
    status: UploadStatus.Pending
});
const fetchingData = ref(true);

const isRefreshing = ref(false);
const fileList = ref<FileList[]>([]);

function parseFileList() {
    fileList.value = userCollection.value.file_list.map((file) => ({
        baseName: file.baseName,
        platform: file.platform,
        material: file.material ?? null
    }));
}

// Fetch documents from Firestore that include the current user's uploads and the identifiable string (ID),
const fetchUserCollection = async () => {
    isRefreshing.value = true;

    const configRef = doc(db, collectionName, uploadSessionId.value as string);

    const {data, pending} = useDocument(configRef);

    watch([data, pending], ([newData, newPending]) => {
        if (newData) {
            userCollection.value = newData as UserCollection;
            parseFileList();
        }

        if (newPending !== undefined) {
            fetchingData.value = newPending;
        }
    });

    useSonner.success("Data refresh");
    isRefreshing.value = false;
};

// Initial fetch of documents.
await fetchUserCollection();

const triggerProcess = async () => {
    const loading = useSonner.loading(`${t("loading")}...`, {
        description: `${t("upload.loading")}...`
    });

    try {
        await StorageMethodSchema(t).validate({fileList: fileList.value}, {abortEarly: true});

        const idToken = await user.value!.getIdToken();

        const {status: apiCallsStatus} = await useAsyncData(() =>
            Promise.all([
                $fetch(`/api/upload-samplesheet-csv?upload_session_id=${uploadSessionId.value}`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${idToken}`
                    },
                    body: fileList.value
                }),

                $fetch(`/api/start-preprocessing?upload_session_id=${uploadSessionId.value}`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${idToken}`
                    }
                })
            ])
        );

        if (apiCallsStatus.value === "success") {
            await fetchUserCollection();

            useSonner.success(t("upload.loadingSuccess"), {
                id: loading
            });
        }
    } catch (error) {
        let message = t("errors.unexpected-error");

        if (error instanceof FetchError) {
            const {data} = error as FetchError;

            if (data.detail) message = data.detail;
        } else if (error instanceof Error) {
            message = error.message;
        }

        useSonner.error(message, {
            id: loading
        });
    }
};
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
                                    class="h-11 gap-0"
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
                                <p>{{ $t("dashboard.buttons.refresh") }}</p>
                            </UiTooltipContent>
                        </template>
                    </UiTooltip>
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
                                <p>{{ $t("dashboard.buttons.history") }}</p>
                            </UiTooltipContent>
                        </template>
                    </UiTooltip>
                </div>
            </div>
            <div class="mt-8 w-full">
                <span>{{ $t("dashboard.table.title") }}</span>
                <div class="mt-8 overflow-x-auto rounded-md border pb-4">
                    <form @submit.prevent="triggerProcess">
                        <UiTable>
                            <UiTableCaption>
                                {{ $t("dashboard.table.caption") }}
                            </UiTableCaption>
                            <UiTableHeader>
                                <UiTableRow>
                                    <UiTableHead>
                                        {{ $t("dashboard.table.columns.name") }}
                                    </UiTableHead>
                                    <UiTableHead>
                                        {{ $t("dashboard.table.columns.status") }}
                                    </UiTableHead>
                                    <UiTableHead>
                                        {{ $t("dashboard.table.columns.date") }}
                                    </UiTableHead>
                                    <UiTableHead>
                                        {{ $t("dashboard.table.columns.platform") }}
                                    </UiTableHead>
                                    <UiTableHead>
                                        {{ $t("dashboard.table.columns.method") }}
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
                                        {{ getEnumName(UploadStatusNames, userCollection.status) }}
                                    </UiTableCell>
                                    <UiTableCell>{{ today }}</UiTableCell>
                                    <UiTableCell>
                                        {{ getEnumName(PlatformNames, file.platform) }}
                                    </UiTableCell>
                                    <UiTableCell v-if="file.material">
                                        {{ getEnumName(storageMethodNames, file.material) }}
                                    </UiTableCell>
                                    <UiTableCell v-else>
                                        <fieldset class="space-y-5">
                                            <UiVeeSelect
                                                v-model="fileList[index].material as StorageMethod"
                                                :name="`storageMethod-${file.baseName}`"
                                                type="text">
                                                <option
                                                    disabled
                                                    value="">
                                                    Select a storage method
                                                </option>
                                                <option
                                                    v-for="(name, value) in storageMethodNames"
                                                    :key="value"
                                                    :value="value">
                                                    {{ name }}
                                                </option>
                                            </UiVeeSelect>
                                        </fieldset>
                                    </UiTableCell>
                                </UiTableRow>
                                <UiTableRow v-if="!userCollection.sample_sheet_EPIC">
                                    <!-- eslint-disable vue/attribute-hyphenation -->
                                    <UiTableCell
                                        colSpan="4"
                                        class="text-right">
                                        <UiButton type="submit">Submit</UiButton>
                                    </UiTableCell>
                                    <!-- eslint-enable -->
                                </UiTableRow>
                            </UiTableBody>
                        </UiTable>
                    </form>
                </div>
            </div>
        </div>
    </UiContainer>
</template>
