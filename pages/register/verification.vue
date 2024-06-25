<script setup lang="ts">
definePageMeta({
    middleware: ["already-verified"]
});
</script>

<template>
    <UiContainer class="flex min-h-screen items-center justify-center">
        <div class="flex flex-col items-center justify-center px-4">
            <div
                class="w-full max-w-[340px] rounded-lg bg-muted p-6 text-center shadow-lg dark:bg-accent-foreground lg:max-w-[500px]">
                <h1 class="text-3xl font-semibold text-gray-800 lg:text-4xl">
                    {{ $t("account.verification.title") }}
                </h1>
                <h2 class="mt-2 text-xl text-gray-600 lg:text-2xl">
                    {{ $t("account.verification.subtitle") }}
                </h2>
                <p class="mt-4 text-lg text-gray-700">{{ $t("account.verification.info") }}</p>
                <p class="mt-4 text-lg text-gray-700">
                    {{ $t("account.verification.urgent") }}
                    <a
                        :href="`mailto:${$t('account.verification.email')}`"
                        class="text-blue-500 hover:underline">
                        {{ $t("account.verification.email") }}
                    </a>
                </p>
            </div>
        </div>
    </UiContainer>
</template>
