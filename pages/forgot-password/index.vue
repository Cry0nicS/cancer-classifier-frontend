<script setup lang="ts">
import {sendPasswordResetEmail} from "@firebase/auth";
import {toTypedSchema} from "@vee-validate/yup";
import {useForm} from "vee-validate";
import {useErrorMessage} from "~/composables/use-error-message";
import {useSeo} from "~/composables/use-seo";

definePageMeta({
    middleware: ["already-logged-in"]
});

const {t} = useI18n();
const localePath = useLocalePath();
const {extractErrorMessage} = useErrorMessage();
const emailSent = ref(false);

useSeo(
    t("forgotPassword.seo.title"),
    t("forgotPassword.seo.description"),
    t("forgotPassword.seo.image"),
    t("forgotPassword.seo.imageAlt"),
    "summary_large_image",
    true
);

// Retrieves the Firebase authentication instance for use in creating and managing user authentication.
const auth = useFirebaseAuth();

// Initialize and configured form validation based on Yup validation schema.
const {handleSubmit, isSubmitting} = useForm({
    validationSchema: toTypedSchema(ForgotPasswordSchema(t))
});

// Handle the form validation and submission.
const resetPassword = handleSubmit(async (values, _ctx) => {
    const loading = useSonner.loading(`${t("toast.sendInstructions")}...`, {
        description: t(`toast.loading`)
    });

    try {
        // Authenticate the user with email and password.
        await sendPasswordResetEmail(auth!, values.email, {
            url: "https://classifier.tgc-research.de"
        });

        useSonner.success(t("toast.instructionsSent"), {
            id: loading
        });

        emailSent.value = true;
    } catch (error) {
        const message = extractErrorMessage(error);
        useSonner.error(message, {
            description: t("errors.tryAgain"),
            id: loading
        });
    }
});
</script>

<template>
    <UiContainer class="flex h-full flex-col items-center justify-center">
        <div v-if="!emailSent">
            <div class="w-full max-w-[340px] text-center">
                <Icon
                    class="size-10"
                    name="lucide:key-round" />
                <h1 class="text-3xl font-semibold lg:text-4xl">
                    {{ t(`forgotPassword.title`) }}
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
                        :label="t(`account.email`)"
                        placeholder="John.doe@domain.com" />
                    <UiButton
                        type="submit"
                        class="w-full">
                        {{ t(`forgotPassword.submit`) }}
                    </UiButton>
                    <UiDivider :label="t('common.or')" />
                    <NuxtLink
                        :to="localePath('/')"
                        class="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        {{ t(`register.signIn`) }}
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
                    {{ t(`forgotPassword.emailSent`) }}
                </h1>
                <p class="mt-5 text-muted-foreground">
                    {{ t(`forgotPassword.instructions`) }}
                </p>
                <NuxtLink
                    :to="localePath('/')"
                    class="mt-10 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    {{ t(`buttons.logIn`) }}
                </NuxtLink>
            </div>
        </div>
    </UiContainer>
</template>
