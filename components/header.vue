<script setup lang="ts">
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
                    class="m-2 basis-[90px]">
                    <ModulesLogout />
                </div>
                <div class="p-2">
                    <ThemeToggle />
                </div>
                <div class="p-2">
                    <LanguageToggle>
                        <template #english>
                            <Icon
                                class="size-6"
                                name="emojione:flag-for-us-outlying-islands" />
                        </template>
                        <template #german>
                            <Icon
                                class="size-6"
                                name="emojione:flag-for-germany" />
                        </template>
                    </LanguageToggle>
                </div>
            </div>
        </UiContainer>
    </UiNavbar>
</template>
