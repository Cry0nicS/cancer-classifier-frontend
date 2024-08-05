<script setup lang="ts">
import {doc} from "firebase/firestore";
import {useDocument, useFirebaseAuth} from "vuefire";
import {uuidv4} from "@firebase/util";
import type {UserCollection} from "~/types/firebase";
import {formatDate} from "~/utils/helpers";
import {StorageMethodSchema} from "~/utils/validations";
import {useSeo} from "~/composables/use-seo";
import {useErrorMessage} from "~/composables/use-error-message";
import {
    type Locale,
    type Platform,
    STORAGE_METHOD,
    type StorageMethod,
    UPLOAD_STATUS,
    type UploadStatus
} from "~/types/constants";

type FileList = {
    baseName: string;
    platform: Platform;
    material: StorageMethod | "";
};

definePageMeta({
    showHeader: true,
    middleware: ["auth", "upload-session-id"]
});

const {t, locale} = useI18n();
const localePath = useLocalePath();
const uploadSessionId = useSessionId().getUploadSessionId();

useSeo(
    t("dashboard.seo.title"),
    t("dashboard.seo.description"),
    t("dashboard.seo.image"),
    t("dashboard.seo.imageAlt"),
    "summary_large_image",
    true
);

// Setting up Firebase Auth and Firestore
const _auth = useFirebaseAuth()!;
const db = useFirestore();
const user = useCurrentUser();
const idToken = ref<string | null>(null);

const isProcessingStarted = ref(false);
const isProcessingComplete = ref(false);
const isPredictionStarted = ref(false);
const isPredictionComplete = ref(false);
const notificationId = ref<string>(t("toast.wait"));
const {extractErrorMessage} = useErrorMessage();

// Fetch the data from Firebase in real-time for the active session.
const {data: userCollection} = useDocument<UserCollection>(
    () => (user.value ? doc(db, user.value.uid, uploadSessionId) : null),
    {
        // See https://github.com/vuejs/vuefire/issues/1315
        ssrKey: uuidv4()
    }
);

// Create a list of files to be used in the form.
const fileList = computed((): FileList[] => {
    return (
        userCollection.value?.file_list.map((file) => ({
            baseName: file.baseName,
            platform: file.platform,
            material: file.material ?? ""
        })) ?? []
    );
});

const startPreProcessing = async () => {
    useSonner.loading(t("toast.sendData"), {
        description: t("toast.wait"),
        id: notificationId.value
    });

    try {
        await StorageMethodSchema(t).validate({fileList: fileList.value}, {abortEarly: true});

        const uploadResponse = await $fetch(
            `/api/upload-samplesheet-csv?upload_session_id=${uploadSessionId}`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${idToken.value}`
                },
                body: fileList.value
            }
        );

        useSonner.success(t("toast.wait"), {
            description: t("toast.nextStep"),
            duration: 2000
        });

        if (uploadResponse) {
            await $fetch(`/api/start-preprocessing?upload_session_id=${uploadSessionId}`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${idToken.value}`
                }
            });
        }
    } catch (error) {
        const message = extractErrorMessage(error);
        useRollbar().error(error, {message});
        useSonner.error(message, {
            description: t("errors.tryAgain"),
            id: notificationId.value
        });
    }
};

const startPrediction = async () => {
    try {
        await $fetch(`/api/start-prediction?upload_session_id=${uploadSessionId}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${idToken.value}`
            }
        });
    } catch (error) {
        const message = extractErrorMessage(error);
        useRollbar().error(error, {message});
        useSonner.error(message, {
            description: t("errors.tryAgain"),
            id: notificationId.value
        });
    }
};

function progressStatus(status: UploadStatus): void {
    switch (status) {
        case UPLOAD_STATUS.PreRunning:
            isProcessingStarted.value = true;
            useSonner.loading(t("toast.preStart"), {
                description: t("toast.wait"),
                id: notificationId.value
            });
            break;
        case UPLOAD_STATUS.PreSuccessful:
            isProcessingComplete.value = true;
            useSonner.success(t("toast.preSuccessful"), {
                description: t("toast.nextStep"),
                duration: 2000
            });
            startPrediction();
            break;
        case UPLOAD_STATUS.PredictionRunning:
            isPredictionStarted.value = true;
            useSonner.loading(t("toast.predictionStart"), {
                description: t("toast.wait"),
                id: notificationId.value
            });
            break;
        case UPLOAD_STATUS.PredictionSuccessful:
            isPredictionComplete.value = true;
            useSonner.success(t("toast.predictionSuccessful"), {
                description: `${t("toast.redirect")}...`,
                duration: 2000,
                id: notificationId.value
            });

            navigateTo({
                path: localePath("/services/results"),
                query: {sessionId: uploadSessionId},
                replace: true
            });
    }
}

const sessionStartedAtComputed = computed(() => userCollection.value?.sessionStartedAt);

const computedSessionStartedAt = computed(() =>
    sessionStartedAtComputed.value
        ? formatDate(sessionStartedAtComputed.value, locale as unknown as Locale)
        : null
);

watch(
    [() => user.value, () => userCollection.value?.status],
    async ([newUser, newStatus], [oldUser, oldStatus]) => {
        // Check if the user has changed and is defined
        if (newUser && newUser !== oldUser) {
            idToken.value = await newUser.getIdToken();
        }

        // Handle the status change.
        if (newStatus && newStatus !== oldStatus) {
            progressStatus(newStatus);
        }
    },
    {immediate: true} // This ensures the watcher runs immediately on setup
);
</script>

<template>
    <UiContainer class="min-h-screen py-10">
        <div class="mx-auto flex w-full max-w-[1000px] flex-col justify-between gap-5">
            <div class="flex w-full flex-row justify-between">
                <h1 class="text-2xl font-semibold lg:text-3xl">
                    {{ t("dashboard.title", {name: user?.displayName}) }}
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
            <div
                v-if="isProcessingStarted && !isProcessingComplete"
                class="mt-8 bg-secondary p-10">
                <h2 class="text-xl font-medium">{{ t("dashboard.progress.title") }}</h2>
                <span>{{ t("dashboard.progress.subtitle") }}</span>
                <ModulesProgressBar
                    :start="isProcessingStarted"
                    :seconds="300"
                    class="my-8" />
            </div>
            <div
                v-if="isPredictionStarted && !isPredictionComplete"
                class="mt-8 bg-secondary p-10">
                <h2 class="text-xl font-medium">{{ t("dashboard.prediction.title") }}</h2>
                <span>{{ t("dashboard.prediction.subtitle") }}</span>
                <ModulesProgressBar
                    :start="isProcessingComplete"
                    :seconds="200"
                    class="my-8" />
            </div>
            <div
                v-if="isPredictionComplete"
                class="mt-8 bg-secondary p-10">
                <h2 class="text-xl font-medium">Your predictions are now ready</h2>
            </div>
            <div class="mt-8 w-full">
                <span>{{ t("dashboard.table.title") }}</span>
                <div class="mt-8 overflow-x-auto rounded-md border pb-4">
                    <form @submit.prevent="startPreProcessing">
                        <UiTable class="w-full table-auto">
                            <UiTableCaption>
                                {{ t("dashboard.table.caption") }}
                            </UiTableCaption>
                            <UiTableHeader>
                                <UiTableRow>
                                    <UiTableHead>
                                        {{ t("dashboard.table.columns.name") }}
                                    </UiTableHead>
                                    <UiTableHead>
                                        {{ t("dashboard.table.columns.status") }}
                                    </UiTableHead>
                                    <UiTableHead>
                                        {{ t("dashboard.table.columns.date") }}
                                    </UiTableHead>
                                    <UiTableHead>
                                        {{ t("dashboard.table.columns.platform") }}
                                    </UiTableHead>
                                    <UiTableHead>
                                        {{ t("dashboard.table.columns.method") }}
                                    </UiTableHead>
                                </UiTableRow>
                            </UiTableHeader>
                            <UiTableBody class="last:border-b">
                                <UiTableRow
                                    v-for="(file, index) in userCollection?.file_list"
                                    :key="index">
                                    <UiTableCell class="font-medium">
                                        <span>{{ file.baseName }}</span>
                                    </UiTableCell>
                                    <UiTableCell>
                                        {{ t(`api.uploadStatus.${userCollection?.status}`) }}
                                    </UiTableCell>
                                    <UiTableCell>
                                        {{ computedSessionStartedAt }}
                                    </UiTableCell>
                                    <UiTableCell>
                                        {{ t(`api.platform.${file.platform}`) }}
                                    </UiTableCell>
                                    <UiTableCell v-if="file.material">
                                        {{ t(`api.storageMethod.${file.material}`) }}
                                    </UiTableCell>
                                    <UiTableCell v-else>
                                        <fieldset class="space-y-5">
                                            <UiVeeSelect
                                                v-model="fileList[index].material"
                                                :name="`storageMethod-${file.baseName}`"
                                                type="text">
                                                <option
                                                    disabled
                                                    value="">
                                                    Select a storage method
                                                </option>
                                                <option
                                                    v-for="value in STORAGE_METHOD"
                                                    :key="value"
                                                    :value="value">
                                                    {{ t(`api.storageMethod.${value}`) }}
                                                </option>
                                            </UiVeeSelect>
                                        </fieldset>
                                    </UiTableCell>
                                </UiTableRow>
                                <UiTableRow v-if="!userCollection?.sample_sheet_EPIC">
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
