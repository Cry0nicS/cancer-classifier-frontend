<script setup lang="ts">
import {useSeo} from "~/composables/use-seo";
import {DropFileSchema} from "~/utils/validations";

definePageMeta({
    showHeader: true,
    middleware: ["auth"]
});

const {t} = useI18n();

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

const areFilesValid = async (selectedFiles: File[]): Promise<boolean> => {
    try {
        // Validated the selected files.
        await DropFileSchema(t).validate({files: selectedFiles}, {abortEarly: false});

        // Check if the total number of existing files and newly selected files is not more than 2.
        if (files.value.length + selectedFiles.length > 2) {
            throw new Error(t("validation.file.maxFiles"));
        }

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

    // TODO: Decide if validation is necessary here as well.

    try {
        // Proceed with file upload
        // TODO: Send the files to the server.

        useSonner.success(t("upload.loadingSuccess"), {
            id: loading
        });

        // Reset the files after successful upload
        files.value = [];
    } catch (error) {
        const {message} = error as Error;

        useSonner.error(message, {
            id: loading
        });
    } finally {
        isSubmitting.value = false;
    }
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

        <div class="mt-14 w-[600px]">
            <form
                class="mx-auto max-w-md"
                @submit.prevent="uploadFiles">
                <fieldset
                    class="grid gap-5"
                    :disabled="isSubmitting">
                    <UiDropfile
                        :on-drop-validation="areFilesValid"
                        :title="t('upload.dropfile.title')"
                        :subtext="t('upload.dropfile.subtext')"
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
                                    class="ml-auto whitespace-nowrap text-xs text-muted-foreground/60 transition group-hover:hidden">
                                    {{ formatFileSize(file.size) }}
                                </p>
                            </div>

                            <div class="hidden transition group-hover:block">
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
                        class="mt-10 w-full"
                        type="submit">
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
            background-color: rgb(255 0 0 / 50%); // Red color with 50% transparency
            pointer-events: none; // Ensure the overlay doesn't interfere with pointer events
        }
    }
}
</style>
