<script setup lang="ts"></script>

<template>
    <div class="accordion flex flex-col">
        <slot />
    </div>
</template>

<style lang="postcss" scoped>
.accordion {
    &:deep(.accordion-panel) {
        @apply border-b border-gray-200;
    }

    &:deep(.accordion-panel:last-child) {
        border-bottom: 0;
    }
}
</style>
