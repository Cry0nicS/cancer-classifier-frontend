<script setup lang="ts">
import {Locale} from "~/constants/locale";
const {locale} = useI18n();
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
            <div class="flex min-w-[180px] items-center gap-4">
                <div
                    v-if="user"
                    class="basis-[90px]">
                    <ModulesLogout />
                </div>
                <ThemeToggle class="p-2" />
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
