<script setup lang="ts">
import {useForm} from "vee-validate";
import {toTypedSchema} from "@vee-validate/yup";
import {signInWithEmailAndPassword} from "@firebase/auth";
import {useErrorMessage} from "~/composables/use-error-message";

const {t} = useI18n();
const localePath = useLocalePath();

// Retrieves the Firebase authentication instance for use in creating and managing user authentication.
const auth = useFirebaseAuth();
const {extractErrorMessage} = useErrorMessage();

// Initialize and configured form validation based on Yup validation schema.
const {handleSubmit, isSubmitting} = useForm({
    validationSchema: toTypedSchema(LoginSchema(t))
});

// Handle the form validation and submission.
const loginUser = handleSubmit(async (values, _ctx) => {
    const loading = useSonner.loading(`${t("loading")}...`, {
        description: t(`login.loading`)
    });

    try {
        // Authenticate the user with email and password.
        await signInWithEmailAndPassword(auth!, values.email, values.password);

        useSonner.success(t(`login.loadingSuccess`), {
            id: loading
        });

        // Redirect to the upload page.
        return navigateTo({path: localePath("/services/upload"), replace: true});
    } catch (error) {
        const message = extractErrorMessage(error);

        useSonner.error(message, {
            description: t("errors.try-again"),
            id: loading
        });
    }
});
</script>

<template>
    <div class="flex flex-col items-center justify-center">
        <div class="w-full max-w-[340px] text-center">
            <Icon
                class="size-10"
                name="lucide:layout-dashboard" />
            <h1 class="text-3xl font-semibold lg:text-4xl">
                {{ $t(`login.title`) }}
            </h1>
        </div>
    </div>
    <form
        class="mt-10 sm:w-[400px] md:w-[470px]"
        @submit="loginUser">
        <fieldset
            :disabled="isSubmitting"
            class="grid gap-5">
            <UiVeeInput
                icon="lucide:mail"
                name="email"
                type="email"
                :label="$t(`email`)"
                placeholder="John.doe@domain.com" />
            <UiVeeInput
                icon="lucide:lock"
                type="password"
                name="password"
                :label="$t(`password`)" />
            <p class="text-right">
                <NuxtLink
                    class="text-sm font-semibold text-primary hover:underline"
                    :to="localePath('/forgot-password')">
                    {{ $t(`forgot-password.title`) }}
                </NuxtLink>
            </p>
            <UiButton
                type="submit"
                class="w-full">
                {{ $t(`login.login`) }}
            </UiButton>
            <UiDivider :label="$t(`or`)" />
            <NuxtLink
                :to="localePath('/register')"
                class="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                {{ $t(`login.register`) }}
            </NuxtLink>
        </fieldset>
    </form>
</template>
