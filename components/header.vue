<script setup lang="ts">
import {Locale} from "~/constants/locale";
const {t, locale} = useI18n();
const switchLocalePath = useSwitchLocalePath();

// Get the (authenticated) user from Firebase. Hide login form if user is already logged in.
const user = useCurrentUser();
</script>

<template>
    <UiNavbar class="border-0">
        <UiContainer class="flex h-[70px] items-center justify-between border-b-2">
            <div>
                <Logo :size="56" />
            </div>
            <div class="flex items-center gap-2">
                <div v-if="user">
                    <ModulesLogout />
                </div>
                <UiButton
                    size="icon-sm"
                    variant="ghost"
                    :title="t('toggleTheme')"
                    @click="$colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'">
                    <span class="sr-only">{{ t("toggleTheme") }}</span>
                    <Icon
                        v-show="$colorMode.preference === 'dark'"
                        class="size-4"
                        name="lucide:sun" />
                    <Icon
                        v-show="$colorMode.preference === 'light'"
                        class="size-4"
                        name="lucide:moon" />
                </UiButton>
                <nuxt-link
                    v-if="locale !== Locale.German"
                    title="Deutsch"
                    :to="switchLocalePath(Locale.German)">
                    <Icon
                        class="size-4"
                        name="lucide:languages" />
                </nuxt-link>
                <nuxt-link
                    v-if="locale !== Locale.English"
                    title="English"
                    :to="switchLocalePath(Locale.English)">
                    <Icon
                        class="size-4"
                        name="lucide:languages" />
                </nuxt-link>
            </div>
        </UiContainer>
    </UiNavbar>
</template>
