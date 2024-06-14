<script setup lang="ts">
import {sendPasswordResetEmail} from "@firebase/auth";
import {toTypedSchema} from "@vee-validate/yup";
import {useForm} from "vee-validate";
import {useErrorMessage} from "~/composables/use-error-message";

definePageMeta({
    middleware: ["already-logged-in"]
});

const {t} = useI18n();
const localePath = useLocalePath();
const {extractErrorMessage} = useErrorMessage();
const emailSent = ref(false);

// Retrieves the Firebase authentication instance for use in creating and managing user authentication.
const auth = useFirebaseAuth();

// Initialize and configured form validation based on Yup validation schema.
const {handleSubmit, isSubmitting} = useForm({
    validationSchema: toTypedSchema(ForgotPasswordSchema(t))
});

// Handle the form validation and submission.
const resetPassword = handleSubmit(async (values, _ctx) => {
    const loading = useSonner.loading(`${t("loading")}...`, {
        description: t(`forgot-password.loading`)
    });

    try {
        // Authenticate the user with email and password.
        await sendPasswordResetEmail(auth!, values.email, {
            // TODO: Implement a proper URL. Used in the email by firebase to redirect the user.
            url: "http://localhost:3000/"
        });

        useSonner.success(t(`forgot-password.loadingSuccess`), {
            id: loading
        });

        emailSent.value = true;
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
    <UiContainer class="flex min-h-screen flex-col items-center justify-center">
        <div v-if="!emailSent">
            <div class="w-full max-w-[340px] text-center">
                <Icon
                    class="size-10"
                    name="lucide:key-round" />
                <h1 class="text-3xl font-semibold lg:text-4xl">
                    {{ $t(`forgot-password.title`) }}
                </h1>
            </div>
            <form
                class="mt-10 sm:w-[400px] md:w-[470px]"
                @submit="resetPassword">
                <fieldset
                    :disabled="isSubmitting"
                    class="grid gap-5">
                    <UiVeeInput
                        icon="lucide:mail"
                        name="email"
                        type="email"
                        :label="$t(`email`)"
                        placeholder="John.doe@domain.com" />
                    <UiButton
                        type="submit"
                        class="w-full">
                        {{ $t(`forgot-password.submit`) }}
                    </UiButton>
                    <UiDivider :label="$t(`or`)" />
                    <NuxtLink
                        :to="localePath('/')"
                        class="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        {{ $t(`register.signIn`) }}
                    </NuxtLink>
                </fieldset>
            </form>
        </div>
        <div v-if="emailSent">
            <div class="w-full max-w-[340px] text-center">
                <Icon
                    class="size-10"
                    name="lucide:mail-check" />
                <h1 class="text-3xl font-semibold lg:text-4xl">
                    {{ $t(`forgot-password.emailSent`) }}
                </h1>
                <p class="mt-5 text-muted-foreground">
                    {{ $t(`forgot-password.instructions`) }}
                </p>
                <NuxtLink
                    :to="localePath('/')"
                    class="mt-10 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    {{ $t(`login.login`) }}
                </NuxtLink>
            </div>
        </div>
    </UiContainer>
</template>
