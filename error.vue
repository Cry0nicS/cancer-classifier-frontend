<script setup lang="ts">
import {useErrorMessage} from "~/composables/use-error-message";

const localePath = useLocalePath();
const {extractErrorMessage} = useErrorMessage();

const error = useError();

const handleError = () => clearError({redirect: localePath({name: "index"})});
</script>
<template>
    <NuxtLayout>
        <div class="relative flex h-screen items-center">
            <div
                class="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(theme(colors.border)_1px,transparent_1px)] dark:[background-size:20px_20px] dark:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
            <div
                class="container relative z-[1] flex flex-col items-center justify-center text-center">
                <p class="mb-5 font-bold tracking-tight text-primary">
                    {{ error?.statusCode }} error
                </p>
                <h1 class="text-4xl font-bold tracking-tight lg:text-5xl">
                    {{ extractErrorMessage(error) }}
                </h1>
                <UiButton
                    type="button"
                    variant="default"
                    class="mt-5"
                    @click="handleError">
                    {{ $t("buttons.goBack") }}
                </UiButton>
            </div>
        </div>
    </NuxtLayout>
</template>
