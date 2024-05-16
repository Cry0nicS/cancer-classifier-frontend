<template>
    <div
        ref="dropZoneRef"
        :class="styles({isOverDropZone, class: props.class})"
        @click="open()">
        <slot name="message">
            <div class="py-10 text-center">
                <slot name="icon">
                    <div
                        v-if="icon"
                        class="inline-flex items-center justify-center rounded-md border p-2 transition"
                        :class="[isOverDropZone && 'animate-bounce border-primary']">
                        <Icon
                            :name="icon"
                            class="h-7 w-7 opacity-70"
                            :class="[isOverDropZone && 'text-primary']" />
                    </div>
                </slot>
                <slot name="title">
                    <p
                        class="mt-5 text-sm font-medium"
                        v-html="title" />
                </slot>
                <slot name="subtext">
                    <p
                        class="mt-1 text-sm text-muted-foreground/60"
                        v-html="subtext" />
                </slot>
            </div>
        </slot>
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        /**
         * The text to display as the title of the dropzone.
         */
        title?: string;
        /**
         * The text to display as the subtext of the dropzone.
         */
        subtext?: string;
        /**
         * The icon to display in the dropzone.
         */
        icon?: string;
        /**
         * The function to call when files are dropped.
         */
        // eslint-disable-next-line @typescript-eslint/ban-types
        onDrop?: Function;
        /**
         * A function to call when files are dropped to validate the files.
         */
        onDropValidation?: (files: File[]) => Promise<boolean>;
        /**
         * Whether or not to allow multiple files to be picked. Does not affect drag and drop.
         */
        multiple?: boolean;
        /**
         * The file types to accept. Does not affect drag and drop.
         */
        accept?: string;
        class?: any;
    }>(),
    {
        title: "Click to upload or drag & drop files.",
        subtext: "All file types accepted",
        icon: "heroicons:cloud-arrow-up",
        multiple: true,
        accept: "*"
    }
);

const {open, reset, onChange} = useFileDialog({
    multiple: props.multiple,
    accept: props.accept
});

const selectedFiles = ref<File[]>([]);

onChange((files: FileList | null) => {
    if (files?.length) {
        handleDrop(Array.from(files || []));
        reset();
    }
});

const dropZoneRef = ref<HTMLDivElement>();
const emits = defineEmits<{
    dropped: [any];
}>();

const handleDrop = async (files: File[] | null) => {
    if (!files) return;

    if (props.onDropValidation) {
        if (await props.onDropValidation(files)) {
            // If a validation function is provided, only add the files if all of them are valid.
            selectedFiles.value = [...selectedFiles.value, ...files];
        }
    } else {
        // If no validation function is provided, add the files directly.
        selectedFiles.value = [...selectedFiles.value, ...files];
    }

    if (props.onDrop) props.onDrop(selectedFiles.value);

    // Emit the event with the updated selected files
    emits("dropped", selectedFiles.value);
};

const {isOverDropZone} = useDropZone(dropZoneRef, handleDrop);

const styles = tv({
    base: "flex w-full cursor-pointer items-center justify-center rounded-md border border-dashed transition hover:border-primary",
    variants: {
        isOverDropZone: {true: "border-primary bg-primary/10"}
    }
});
</script>
