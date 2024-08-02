<script setup lang="ts">
import {useColorMode} from "@vueuse/core";

const colorMode = useColorMode();
</script>

<template>
    <UiButton
        variant="ghost"
        class="w-auto p-0 hover:bg-transparent"
        :title="$t('common.toggleTheme')"
        @click="colorMode = colorMode === 'dark' ? 'light' : 'dark'">
        <span class="sr-only">{{ $t("common.toggleTheme") }}</span>
        <template v-if="colorMode === 'dark'">
            <slot name="dark-mode">
                <Icon
                    class="size-6"
                    name="lucide:sun" />
            </slot>
        </template>
        <template v-else>
            <slot name="light-mode">
                <Icon
                    class="size-6"
                    name="lucide:moon" />
            </slot>
        </template>
    </UiButton>
</template>
