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
    const loading = useSonner.loading(`${t("toast.signIn")}...`, {
        description: t(`toast.loading`)
    });

    try {
        // Authenticate the user with email and password.
        await signInWithEmailAndPassword(auth!, values.email, values.password);

        useSonner.success(t("toast.signInSuccess"), {
            id: loading
        });

        // Redirect to the upload page.
        return navigateTo(
            {path: localePath("/register/verification")},
            {external: true, replace: true}
        );
    } catch (error) {
        useSonner.error(extractErrorMessage(error), {
            description: t("errors.tryAgain"),
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
                {{ t("login.title") }}
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
                :label="t('account.email')"
                placeholder="John.doe@domain.com" />
            <UiVeeInput
                icon="lucide:lock"
                type="password"
                name="password"
                :label="t('account.password')" />
            <p class="text-right">
                <NuxtLink
                    class="text-sm font-semibold text-primary hover:underline"
                    :to="localePath('/forgot-password')">
                    {{ t("forgotPassword.title") }}
                </NuxtLink>
            </p>
            <UiButton
                type="submit"
                class="w-full">
                {{ t("buttons.logIn") }}
            </UiButton>
            <UiDivider :label="t('common.or')" />
            <NuxtLink
                :to="localePath('/register')"
                class="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                {{ t("buttons.createAccount") }}
            </NuxtLink>
        </fieldset>
    </form>
</template>
