<script lang="ts" setup>
const {width} = withDefaults(defineProps<{width: number}>(), {width: 300});
</script>

<template>
    <aside :class="`h-screen w-[${width}px] border-r`">
        <UiScrollArea class="size-full">
            <slot />
        </UiScrollArea>
    </aside>
</template>
