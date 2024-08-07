<script setup lang="ts">
import {defineProps} from "vue";
import {range} from "@antfu/utils";
import {UPLOAD_STATUS} from "~/types/constants";
import type {StepperStates, StepperStatuses, StepperStep} from "~/types/utils";

const props = defineProps<{
    currentStatus: StepperStatuses;
}>();

const {t} = useI18n();

const steps: StepperStep[] = range(1, 6).map((index) => ({
    order: Number(t(`upload.processSteps.step${index}.order`)),
    icon: t(`upload.processSteps.step${index}.icon`),
    status: t(`upload.processSteps.step${index}.status`) as StepperStatuses,
    title: t(`upload.processSteps.step${index}.title`),
    description: t(`upload.processSteps.step${index}.description`)
}));

const state = computed(() => {
    return (step: StepperStep): StepperStates => {
        switch (props.currentStatus) {
            case UPLOAD_STATUS.UploadPending:
                return step.order === 1 ? "active" : "inactive";
            case UPLOAD_STATUS.UploadFinished:
                return step.order === 2 ? "active" : step.order < 2 ? "completed" : "inactive";
            case UPLOAD_STATUS.PreRunning:
                return step.order === 3 ? "active" : step.order < 3 ? "completed" : "inactive";
            case UPLOAD_STATUS.PredictionRunning:
                return step.order === 4 ? "active" : step.order < 4 ? "completed" : "inactive";
            default:
                return step.order === 5 ? "active" : "completed";
        }
    };
});
</script>

<template>
    <div>
        <h2 class="pb-4 text-center text-xl font-medium">{{ t("upload.processSteps.title") }}</h2>
        <UiStepper
            orientation="vertical"
            class="mx-auto flex w-full max-w-md flex-col justify-start gap-10">
            <UiStepperItem
                v-for="step in steps"
                :key="step.order"
                class="group relative flex w-full items-start gap-6"
                :step="step.order">
                <UiStepperSeparator
                    v-if="step.order !== steps[steps.length - 1].order"
                    class="absolute left-[18px] top-[38px] block h-[105%] w-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary" />
                <UiStepperTrigger as-child>
                    <UiButton
                        :disabled="true"
                        :variant="
                            state(step) === 'completed' || state(step) === 'active'
                                ? 'default'
                                : 'outline'
                        "
                        size="icon"
                        class="z-10 shrink-0 rounded-full"
                        :class="[
                            state(step) === 'active' &&
                                'ring-2 ring-ring ring-offset-2 ring-offset-background'
                        ]">
                        <TransitionScale
                            mode="out-in"
                            :scale="0.8">
                            <Icon
                                v-if="state(step) === 'completed'"
                                name="lucide:check"
                                class="size-5" />
                            <Icon
                                v-if="state(step) === 'active'"
                                :name="step.icon"
                                class="size-5" />
                            <Icon
                                v-if="state(step) === 'inactive'"
                                :name="step.icon"
                                class="size-5" />
                        </TransitionScale>
                    </UiButton>
                </UiStepperTrigger>

                <div class="flex flex-col gap-1">
                    <UiStepperTitle
                        :class="[state(step) === 'active' && 'text-primary']"
                        class="text-sm font-semibold transition lg:text-base">
                        {{ step.title }}
                    </UiStepperTitle>
                    <UiStepperDescription
                        as-child
                        :class="[state(step) === 'active' && 'text-primary']"
                        class="text-xs text-muted-foreground transition lg:text-sm">
                        <div>
                            <MDC
                                class="markdown whitespace-pre-line"
                                :value="step.description" />
                        </div>
                    </UiStepperDescription>
                </div>
            </UiStepperItem>
        </UiStepper>
    </div>
</template>
