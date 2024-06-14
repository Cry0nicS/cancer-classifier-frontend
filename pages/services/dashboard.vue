<script setup lang="ts">
import {doc} from "firebase/firestore";
import {useDocument, useFirebaseAuth} from "vuefire";
import {FetchError} from "ofetch";
import {type Platform, type StorageMethod, UploadStatus} from "~/types/enums";
import type {UserCollection} from "~/types/firebase";
import {LocaleIsoMap, PlatformNames, getEnumName, storageMethodNames} from "~/utils/helpers";
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
const uploadSessionId = useCookie<string>("uploadSessionId");

if (!uploadSessionId.value) {
    // This should never happen as the middleware prevents the user from accessing the page without a session ID.
    throw new Error(t("errors.unexpected-error"));
}

// Fixme: Fix hardcoded today's date. This should come from the database.
const today = useDateFormat(useNow(), "ddd, MMMM DD, YYYY", {
    locales: LocaleIsoMap[locale.value as keyof typeof LocaleIsoMap]
});

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
const idToken = await user.value!.getIdToken();
const db = useFirestore();
const fileList = ref<FileList[]>([]);
const isProcessingStarted = ref(false);
const isProcessingComplete = ref(false);
const isPredictionStarted = ref(false);
const isPredictionComplete = ref(false);
const notificationId = ref<string>(t("dashboard.loading.wait"));

// Fetch the data from Firebase in real-time for the active session.
const {data: userCollection, promise} = useDocument<UserCollection>(() =>
    user.value ? doc(db, user.value.uid as string, uploadSessionId.value) : null
);

// Await the promise to resolve before checking and mutating the user collection.
await promise.value;
await nextTick();

if (!userCollection.value) {
    useSonner.loading(`${t("dashboard.loading.redirect")}...`, {
        description: t("dashboard.loading.noData")
    });

    navigateTo({path: localePath("/services/upload"), replace: true});
}

// Check if the data processing has already started for the current session.
// Relevant when the user navigates away and back to the page.
progressStatus(userCollection.value!.status);

// Create a list of files to be used in the form.
fileList.value =
    userCollection.value!.file_list.map((file) => ({
        baseName: file.baseName,
        platform: file.platform,
        material: file.material ?? null
    })) ?? [];

const startPreProcessing = async () => {
    useSonner.loading(t("dashboard.loading.start"), {
        description: t("dashboard.loading.wait"),
        id: notificationId.value
    });

    try {
        await StorageMethodSchema(t).validate({fileList: fileList.value}, {abortEarly: true});

        const uploadResponse = await $fetch(
            `/api/upload-samplesheet-csv?upload_session_id=${uploadSessionId.value}`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${idToken}`
                },
                body: fileList.value
            }
        );

        if (uploadResponse) {
            await $fetch(`/api/start-preprocessing?upload_session_id=${uploadSessionId.value}`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${idToken}`
                }
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
            description: t("try-again"),
            id: notificationId.value
        });
    }
};

const startPrediction = async () => {
    try {
        await $fetch(`/api/start-prediction?upload_session_id=${uploadSessionId.value}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${idToken}`
            }
        });
    } catch (error) {
        let message = t("errors.unexpected-error");

        if (error instanceof FetchError) {
            const {data} = error as FetchError;

            if (data.detail) message = data.detail;
        } else if (error instanceof Error) {
            message = error.message;
        }

        useSonner.error(message, {
            description: t("try-again"),
            id: notificationId.value
        });
    }
};

function progressStatus(status: UploadStatus): void {
    switch (status) {
        case UploadStatus.PreRunning:
            isProcessingStarted.value = true;
            useSonner.loading(t("dashboard.loading.preStart"), {
                description: t("dashboard.loading.wait"),
                id: notificationId.value
            });
            break;
        case UploadStatus.PreSuccessful:
            isProcessingComplete.value = true;
            useSonner.success(t("dashboard.loading.preSuccessful"), {
                description: t("dashboard.loading.continue"),
                id: notificationId.value
            });
            startPrediction();
            break;
        case UploadStatus.PredictionRunning:
            isPredictionStarted.value = true;
            useSonner.loading(t("dashboard.loading.predictionStart"), {
                description: t("dashboard.loading.wait"),
                id: notificationId.value
            });
            break;
        case UploadStatus.PredictionSuccessful:
            isPredictionComplete.value = true;
            useSonner.success(t("dashboard.loading.predictionSuccessful"), {
                description: `${t("dashboard.loading.redirect")}...`,
                id: notificationId.value
            });
            break;
    }
}

watch(
    () => userCollection.value!.status,
    (newStatus) => {
        progressStatus(newStatus);
    }
);
</script>

<template>
    <UiContainer class="min-h-screen py-10">
        <div class="mx-auto flex w-full max-w-[1000px] flex-col justify-between gap-5">
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
            <div
                v-if="isProcessingStarted && !isProcessingComplete"
                class="mt-8 bg-secondary p-10">
                <h2 class="text-xl font-medium">{{ $t("dashboard.progress.title") }}</h2>
                <span>{{ $t("dashboard.progress.subtitle") }}</span>
                <ModulesProgressBar
                    :start="isProcessingStarted"
                    :seconds="300"
                    class="my-8" />
            </div>
            <div
                v-if="isPredictionStarted && !isPredictionComplete"
                class="mt-8 bg-secondary p-10">
                <h2 class="text-xl font-medium">{{ $t("dashboard.prediction.title") }}</h2>
                <span>{{ $t("dashboard.prediction.subtitle") }}</span>
                <ModulesProgressBar
                    :start="isProcessingComplete"
                    :seconds="200"
                    class="my-8" />
            </div>
            <div
                v-if="isPredictionComplete"
                class="mt-8 bg-secondary p-10">
                <h2 class="text-xl font-medium">You're predictions are now ready</h2>
            </div>
            <div class="mt-8 w-full">
                <span>{{ $t("dashboard.table.title") }}</span>
                <div class="mt-8 overflow-x-auto rounded-md border pb-4">
                    <form @submit.prevent="startPreProcessing">
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
                                    v-for="(file, index) in userCollection!.file_list"
                                    :key="index">
                                    <UiTableCell class="font-medium">
                                        <span>{{ file.baseName }}</span>
                                    </UiTableCell>
                                    <UiTableCell>
                                        {{ getEnumName(UploadStatusNames, userCollection!.status) }}
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
                                <UiTableRow v-if="!userCollection!.sample_sheet_EPIC">
                                    <!-- eslint-disable vue/attribute-hyphenation -->
                                    <UiTableCell
                                        colSpan="5"
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
