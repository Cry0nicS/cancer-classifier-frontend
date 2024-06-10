<script setup lang="ts">
import {useProgressBar} from "~/composables/use-progress-bar";

const {start, seconds} = defineProps({
    start: {
        type: Boolean,
        required: true
    },
    seconds: {
        type: Number,
        required: false,
        default: 10
    }
});

const {progressBarValue, startProgressBar, stopProgressBar} = useProgressBar(seconds);

// Necessary to toggle the progress bar both when the page is loaded and when the start prop changes.
function toggleProgressbar(start: boolean): void {
    if (start) {
        startProgressBar();
    } else {
        stopProgressBar();
    }
}

toggleProgressbar(start);

watch(
    () => start,
    (newStart) => {
        toggleProgressbar(newStart);
    }
);
</script>

<template>
    <div class="flex w-full justify-center">
        <UiProgress v-model="progressBarValue" />
    </div>
</template>
