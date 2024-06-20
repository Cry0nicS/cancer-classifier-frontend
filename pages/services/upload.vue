<script setup lang="ts">
import {useSessionStorage} from "@vueuse/core";
import type {User} from "@firebase/auth";
import {useSeo} from "~/composables/use-seo";
import {DropFileSchema} from "~/utils/validations";
import {useErrorMessage} from "~/composables/use-error-message";
import {UPLOAD_SESSION_KEY} from "~/types/constants";

definePageMeta({
    showHeader: true,
    middleware: ["auth"]
});

const {t} = useI18n();
const localePath = useLocalePath();

useSeo(
    t("upload.seo.title"),
    t("upload.seo.description"),
    t("upload.seo.image"),
    t("upload.seo.imageAlt"),
    "summary_large_image",
    true
);

const user = (await getCurrentUser()) as User;
const idToken = await user.getIdToken();
// Create a new upload session ID. Required for batch upload.
const uploadSessionId = useSessionId().createUploadSessionId();
const files = ref<File[]>([]);
const isSubmitting = ref(false);
const {extractErrorMessage} = useErrorMessage();

function formatFileSize(fileSize: number) {
    const units = ["B", "KB", "MB", "GB", "TB"];
    let size = fileSize;
    let unitIndex = 0;

    while (size >= 1024 && unitIndex < units.length - 1) {
        size /= 1024;
        unitIndex++;
    }

    return `${size.toFixed(2)} ${units[unitIndex]}`;
}

const removeFile = (index: number) => {
    files.value.splice(index, 1);
};

const validateFiles = async (selectedFiles: File[]): Promise<void> => {
    // Validate the selected files.
    await DropFileSchema(t).validate({files: selectedFiles}, {abortEarly: false});
};

const checkFileLimit = (selectedFiles: File[]): void => {
    // Check if the total number of existing files and newly selected files is not more than 16.
    if (files.value.length + selectedFiles.length > 16) {
        throw new Error(t("validation.file.maxFiles"));
    }
};

const checkFilesInPairs = (files: File[]): void => {
    // Check if the total number of existing files and newly selected files is even.
    if (files.length % 2 !== 0) {
        throw new Error(t("validation.file.evenNumber"));
    }
};

const areFilesValid = async (selectedFiles: File[]): Promise<boolean> => {
    try {
        await validateFiles(selectedFiles);
        checkFileLimit(selectedFiles);
        return true;
    } catch (error) {
        useSonner.error(extractErrorMessage(error), {description: t("errors.tryAgain")});
        return false;
    }
};

const uploadFiles = async (files: File[]): Promise<void> => {
    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    await $fetch("/api/upload-files-session", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${idToken}`
        },
        body: formData,
        params: {
            upload_session_id: uploadSessionId.value
        }
    });
};

const uploadFilesInBatch = async () => {
    isSubmitting.value = true;
    const loading = useSonner.loading(t("toast.uploading"), {description: `${t("toast.wait")}...`});

    try {
        // Validate that selected files are uploaded in pairs (even number).
        checkFilesInPairs(files.value);

        // Sort files by file name.
        files.value.sort((a, b) => a.name.localeCompare(b.name));

        // Upload files in batches of 2.
        for (let i = 0; i < files.value.length; i += 2) {
            const batch = files.value.slice(i, i + 2);

            await uploadFiles(batch);
        }

        // Set the session state to active. Used by delete-session-id.client plugin.
        useSessionStorage(UPLOAD_SESSION_KEY, "true");

        useSonner.success(t("toast.uploadSuccess"), {id: loading});

        // Redirect to the dashboard page.
        return navigateTo(
            {path: localePath("/services/dashboard")},
            {replace: true, external: false}
        );
    } catch (error) {
        useSonner.error(extractErrorMessage(error), {
            description: t("errors.tryAgain"),
            id: loading
        });
    } finally {
        useSonner.dismiss(loading);
        isSubmitting.value = false;
    }
};
</script>

<template>
    <UiContainer class="min-h-screen py-10">
        <div class="mx-auto flex w-full max-w-[1000px] flex-col justify-between gap-5">
            <div class="flex w-full flex-row justify-between">
                <h1 class="text-2xl font-semibold lg:text-3xl">
                    {{ t("upload.title", {name: user?.displayName}) }}
                </h1>
                <div class="flex flex-col justify-center gap-2 md:flex-row">
                    <UiTooltip
                        v-if="uploadSessionId"
                        disable-closing-trigger>
                        <template #trigger>
                            <UiTooltipTrigger as-child>
                                <NuxtLink
                                    :to="localePath('/services/dashboard')"
                                    class="inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground ring-offset-background transition-colors hover:bg-secondary/80">
                                    <Icon
                                        name="lucide:layout-dashboard"
                                        size="30px" />
                                </NuxtLink>
                            </UiTooltipTrigger>
                        </template>
                        <template #content>
                            <UiTooltipContent>
                                <p>{{ t("buttons.dashboard") }}</p>
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
                                <p>{{ t("buttons.history") }}</p>
                            </UiTooltipContent>
                        </template>
                    </UiTooltip>
                </div>
            </div>
            <div class="mx-auto mt-14 flex w-full max-w-[600px] items-center justify-center">
                <form
                    class="mx-auto w-full"
                    @submit.prevent="uploadFilesInBatch">
                    <fieldset
                        class="grid gap-5"
                        :disabled="isSubmitting">
                        <UiDropfile
                            :on-drop-validation="areFilesValid"
                            icon="lucide:files"
                            :subtext="t('upload.dropzone.subtext')"
                            :title="t('upload.dropzone.title')"
                            @dropped="files = $event" />
                        <div
                            v-if="files && files.length"
                            class="mt-5 w-full">
                            <div
                                v-for="(file, i) in files"
                                :key="file.name"
                                class="group relative mb-2 flex h-12 items-center justify-between rounded border px-3 py-3">
                                <div class="flex grow items-center gap-3">
                                    <Icon
                                        name="heroicons:document"
                                        class="mr-3 h-5 w-5 opacity-60" />
                                    <p class="w-[80%] truncate text-sm">{{ file.name }}</p>
                                    <p
                                        class="ml-auto whitespace-nowrap text-xs text-muted-foreground/60">
                                        {{ formatFileSize(file.size) }}
                                    </p>
                                </div>
                                <div class="ml-3">
                                    <UiButton
                                        size="icon-sm"
                                        variant="outline"
                                        @click="removeFile(i)">
                                        <Icon
                                            name="heroicons:x-mark"
                                            class="h-3.5 w-3.5" />
                                    </UiButton>
                                </div>
                            </div>
                        </div>
                        <UiButton
                            :disabled="!files.length"
                            class="mt-10 w-full"
                            type="submit">
                            <Icon
                                name="lucide:cloud-upload"
                                class="size-4" />
                            {{ t("upload.dropzone.submit") }}
                        </UiButton>
                    </fieldset>
                </form>
            </div>
        </div>
    </UiContainer>
</template>

<style lang="scss" scoped>
fieldset {
    position: relative;

    &:disabled {
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgb(34 34 34 / 50%); // Medium grey with transparency
            pointer-events: none; // Ensure the overlay doesn't interfere with pointer events
        }
    }
}
</style>
