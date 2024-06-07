<script setup lang="ts">
import type {DateTimeFormatOptions} from "@intlify/core-base";
import {doc} from "firebase/firestore";
import {useDocument, useFirebaseAuth} from "vuefire";
import {FetchError} from "ofetch";
import {useSessionStorage} from "@vueuse/core";
import {type Platform, type StorageMethod, UploadStatus} from "~/types/enums";
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
const fileList = ref<FileList[]>([]);

// Fetch the data from Firebase in real-time for the active session.
const {data: userCollection, promise} = useDocument<UserCollection>(() =>
    user.value ? doc(db, user.value.uid as string, uploadSessionId.value) : null
);

// Await the promise to resolve before mutating the user collection.
await promise.value;
await nextTick();

// Create a list of files to be used in the form.
fileList.value =
    userCollection.value?.file_list.map((file) => ({
        baseName: file.baseName,
        platform: file.platform,
        material: file.material ?? null
    })) ?? [];

const triggerProcess = async () => {
    const loading = useSonner.loading(`${t("loading")}...`, {
        description: `${t("upload.loading")}...`
    });

    try {
        await StorageMethodSchema(t).validate({fileList: fileList.value}, {abortEarly: true});

        const idToken = await user.value!.getIdToken();

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
            const preprocessingResponse = await $fetch(
                `/api/start-preprocessing?upload_session_id=${uploadSessionId.value}`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${idToken}`
                    }
                }
            );

            if (preprocessingResponse) {
                useSonner.success(t("upload.loadingSuccess"), {
                    id: loading
                });
            }
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

/**
 * Progress bar logic
 * Displayed after the user submits the form.
 * The progress bar will increment by 10% every second until it reaches 100%. Then restarts.
 * Once the process is complete, the user will be redirected to the history page.
 */
const progressBarValue = ref(0);
const isProcessComplete = ref(false);

const incrementValue = () => {
    if (progressBarValue.value < 100) {
        progressBarValue.value += 10;
    } else {
        progressBarValue.value = 0;
    }
};

useIntervalFn(() => {
    incrementValue();
}, 1000);

watch(
    () => userCollection.value?.status,
    (newStatus) => {
        if (newStatus === UploadStatus.PreFinished) {
            isProcessComplete.value = true;

            navigateTo({path: localePath("/services/history"), replace: true});
        }
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
                v-if="userCollection?.status === UploadStatus.PreRunning"
                class="mt-8 bg-secondary p-10">
                <h2 class="text-xl font-medium">
                    {{ $t("dashboard.progress.title") }}
                </h2>
                <span>{{ $t("dashboard.progress.subtitle") }}</span>
                <div class="mt-8 flex w-full justify-center">
                    <UiProgress v-model="progressBarValue" />
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
