<script setup lang="ts">
import {useResizeObserver} from "@vueuse/core";
import Chevron from "~/components/icons/chevron.vue";

const {expanded: expandedDefault} = withDefaults(
    defineProps<{
        expanded?: boolean;
    }>(),
    {
        expanded: false
    }
);

const emit = defineEmits<{
    (event: "expandedChanged", expanded: boolean): void;
}>();

const uidState = useState("accordionPanelId", () => 0);
uidState.value++;

const uid = uidState.value;
const states = useState<{[key: number]: boolean}>(`accordionPanelStates`, () => ({}));
const expanded = computed(() => states.value[uid] ?? expandedDefault);
const bodyEl = ref<HTMLDivElement>();
const bodyHeight = ref("");

useResizeObserver(bodyEl, () => {
    const boundingRect = bodyEl.value?.getBoundingClientRect();
    if (boundingRect) {
        bodyHeight.value = `${boundingRect.height}px`;
    }
});

const onClick = () => {
    const e = !expanded.value;
    states.value[uid] = e;
    emit("expandedChanged", e);
};
</script>

<template>
    <div class="accordion-panel">
        <button
            :id="`accordion-collapse-heading-${uid}`"
            type="button"
            class="flex w-full items-center justify-between gap-10 py-4 text-left font-bold focus:outline-none focus:ring-4 focus:ring-main-azure/40 lg:p-4"
            :class="{}"
            :aria-expanded="expanded"
            :aria-controls="`accordion-collapse-body-${uid}`"
            @click.prevent="onClick()">
            <slot name="title" />
            <Chevron
                aria-hidden="true"
                class="h-3 w-3 shrink-0 text-2xl transition-transform duration-100"
                :class="{
                    'rotate-180': !expanded,
                    'rotate-0': expanded
                }" />
        </button>
        <div
            :id="`accordion-collapse-body-${uid}`"
            class="accordion-collapse-body transition-all duration-300 ease-in-out"
            :aria-labelledby="`accordion-collapse-heading-${uid}`"
            :class="{expanded}">
            <div
                ref="bodyEl"
                class="py-4 lg:p-4">
                <slot />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.accordion-collapse-body {
    height: 0;
    overflow: hidden;
    opacity: 0;
}

.accordion-collapse-body.expanded {
    height: v-bind(bodyHeight);
    opacity: 1;
}
</style>
