<script setup lang="ts">
import {toTypedSchema} from "@vee-validate/yup";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {useForm} from "vee-validate";
import {useFirebaseAuth} from "#imports";
import {RegisterSchema} from "~/utils/validations";
import {useErrorMessage} from "~/composables/use-error-message";

definePageMeta({
    middleware: ["already-logged-in"]
});

// Import the useI18n composable to access the translation function.
const {t} = useI18n();
const localePath = useLocalePath();
const {extractErrorMessage} = useErrorMessage();

// Retrieves the Firebase authentication instance for use in creating and managing user authentication.
const auth = useFirebaseAuth();

// Initialize and configured form validation based on Yup validation schema.
const {handleSubmit, isSubmitting} = useForm({
    validationSchema: toTypedSchema(RegisterSchema(t))
});

// Handle the form validation and submission.
const registerUser = handleSubmit(async (values, _ctx) => {
    const loading = useSonner.loading(`${t("loading")}...`, {
        description: t(`register.loading`)
    });

    try {
        // Create a user with the provided email and password.
        const userCredential = await createUserWithEmailAndPassword(
            auth!,
            values.email,
            values.password
        );

        // Update the user profile to set the display name.
        await updateProfile(userCredential.user, {displayName: values.name});

        useSonner.success(t(`register.loadingSuccess`), {
            id: loading
        });

        // Redirect to a dedicated page.
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
    <UiContainer class="flex min-h-screen flex-col items-center justify-center">
        <div class="w-full max-w-[340px] text-center">
            <Icon
                class="size-10"
                name="lucide:circle-user-round" />
            <h1 class="text-3xl font-semibold lg:text-4xl">
                {{ $t(`register.title`) }}
            </h1>
        </div>
        <form
            class="mt-10 sm:w-[400px] md:w-[470px]"
            @submit="registerUser">
            <fieldset
                class="grid gap-5"
                :disabled="isSubmitting">
                <UiVeeInput
                    icon="lucide:user"
                    name="name"
                    :label="$t(`name`)"
                    placeholder="John Doe" />
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
                    :label="$t(`password`)"
                    hint="Min 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit" />
                <UiButton
                    type="submit"
                    class="w-full">
                    {{ $t(`register.register`) }}
                </UiButton>
                <UiDivider :label="$t(`or`)" />
                <NuxtLink
                    :to="localePath('/')"
                    class="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    {{ $t(`register.signIn`) }}
                </NuxtLink>
            </fieldset>
        </form>
    </UiContainer>
</template>
