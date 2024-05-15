<script setup lang="ts">
import {useForm} from "vee-validate";
import {toTypedSchema} from "@vee-validate/yup";
import {signInWithEmailAndPassword} from "@firebase/auth";

const {t} = useI18n();

// Retrieves the Firebase authentication instance for use in creating and managing user authentication.
const auth = useFirebaseAuth();

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

        // Redirect to a dedicated page.
        return await navigateTo("/new-page", {replace: true});
    } catch (error) {
        const {message} = error as Error;

        useSonner.error(message, {
            id: loading
        });
    }
});
</script>

<template>
    <div>
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
            <UiButton
                type="submit"
                class="w-full">
                {{ $t(`login.login`) }}
            </UiButton>
            <UiDivider :label="$t(`or`)" />
            <NuxtLink
                to="/"
                class="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                {{ $t(`login.register`) }}
            </NuxtLink>
        </fieldset>
    </form>
</template>
