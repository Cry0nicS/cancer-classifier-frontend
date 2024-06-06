<script setup lang="ts">
import {FetchError} from "ofetch";
import {useSessionStorage} from "@vueuse/core";
import {useSeo} from "~/composables/use-seo";
import {DropFileSchema} from "~/utils/validations";

definePageMeta({
    showHeader: true,
    middleware: ["auth"]
});

const {t} = useI18n();
const localePath = useLocalePath();

useSeo(
    t("seo.title"),
    t("seo.description"),
    t("seo.image"),
    t("seo.image.alt"),
    "summary_large_image",
    true
);

const user = useCurrentUser();

const files = ref<File[]>([]);
const isSubmitting = ref(false);

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
    // Check if the total number of existing files and newly selected files is not more than 2.
    if (files.value.length + selectedFiles.length > 2) {
        throw new Error(t("validation.file.maxFiles"));
    }
};

const areFilesValid = async (selectedFiles: File[]): Promise<boolean> => {
    try {
        await validateFiles(selectedFiles);
        checkFileLimit(selectedFiles);

        return true;
    } catch (error) {
        const {message} = error as Error;

        useSonner.error(t("validation.file.failure"), {description: message});

        return false;
    }
};

const uploadFiles = async () => {
    isSubmitting.value = true;

    const loading = useSonner.loading(`${t("loading")}...`, {
        description: `${t("upload.loading")}...`
    });

    try {
        const formData = new FormData();
        /**
         * The append method of FormData cannot take an array as its second argument.
         * It requires a Blob (which includes File objects).
         * Therefore, each file must be appended to the formData object individually.
         */
        files.value.forEach((file) => {
            formData.append("files", file);
        });

        const idToken = await user.value!.getIdToken();

        const uploadSessionId = await $fetch("/api/upload-files", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${idToken}`
            },
            body: formData
        });

        // Store the upload session ID in the session storage to be used on the dashboard page.
        const storedSession = useSessionStorage("uploadSessionId", uploadSessionId);
        // Make sure the session ID is stored in the session storage for multiple tried.
        storedSession.value = uploadSessionId;

        useSonner.success(t("upload.loadingSuccess"), {
            id: loading
        });

        // Redirect to the dashboard page.
        return navigateTo({path: localePath("/services/dashboard"), replace: true});
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

    isSubmitting.value = false;
};
</script>

<template>
    <UiContainer class="flex min-h-screen flex-col items-center justify-center">
        <div class="w-full text-center">
            <h1 class="text-3xl font-semibold lg:text-4xl">
                {{ $t("upload.title", {name: user?.displayName}) }}
            </h1>
            <p class="mt-10">{{ $t("upload.description") }}</p>
        </div>

        <div class="mt-14 w-full max-w-[600px]">
            <form
                class="mx-auto w-full"
                @submit.prevent="uploadFiles">
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
                        {{ $t("upload.dropzone.submit") }}
                    </UiButton>
                </fieldset>
            </form>
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
