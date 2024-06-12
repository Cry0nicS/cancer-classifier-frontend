<script setup lang="ts">
import {useColorMode} from "@vueuse/core";

const {t} = useI18n();
const colorMode = useColorMode();
</script>

<template>
    <UiButton
        size="icon-sm"
        variant="ghost"
        class="h-auto w-auto"
        :title="t('toggleTheme')"
        @click="colorMode = colorMode === 'dark' ? 'light' : 'dark'">
        <span class="sr-only">{{ t("toggleTheme") }}</span>
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
