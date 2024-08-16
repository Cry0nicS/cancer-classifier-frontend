<script setup lang="ts">
import {toTypedSchema} from "@vee-validate/yup";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {useForm} from "vee-validate";
import {doc, serverTimestamp, setDoc} from "firebase/firestore";
import {useFirebaseAuth, useSeo} from "#imports";
import {RegisterSchema} from "~/utils/validations";
import {useErrorMessage} from "~/composables/use-error-message";
import {USER_ROLE} from "~/types/constants";

definePageMeta({
    middleware: ["already-logged-in"]
});

// Import the useI18n composable to access the translation function.
const {t} = useI18n();
const localePath = useLocalePath();
const {extractErrorMessage} = useErrorMessage();

// Fields used for displayed character count for aboutMe field.
const maxAboutMeLength = 1000;
const aboutMe = ref("");
// Computed property to calculate remaining characters
const remainingCharacters = computed(() => {
    return maxAboutMeLength - aboutMe.value.length;
});

useSeo(
    t("register.seo.title"),
    t("register.seo.description"),
    t("register.seo.image"),
    t("register.seo.imageAlt"),
    "summary_large_image",
    true
);

// Retrieves the Firebase authentication instance for use in creating and managing user authentication.
const auth = useFirebaseAuth();
const db = useFirestore();

// Initialize and configured form validation based on Yup validation schema.
const {handleSubmit, isSubmitting} = useForm({
    validationSchema: toTypedSchema(RegisterSchema(t))
});

// Handle the form validation and submission.
const registerUser = handleSubmit(async (values, _ctx) => {
    const loading = useSonner.loading(`${t("toast.createAccount")}...`, {
        description: t(`toast.loading`)
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

        // Set the user document in the Firestore database.
        await setDoc(doc(db, "users", userCredential.user.uid), {
            role: USER_ROLE.User,
            aboutMe: values.aboutMe,
            isDisabled: true,
            createdAt: serverTimestamp()
        });

        // This hack is done to avoid blocking the user creation process if the internal email fails.
        try {
            await $fetch("/api/email/account-created", {
                method: "POST",
                body: {
                    userName: values.name,
                    userDescription: values.aboutMe,
                    userEmail: values.email,
                    userId: userCredential.user.uid
                }
            });
        } catch (error) {
            // Log the error to Rollbar, since it is currently not possible to do it on the server side.
            useRollbar().error(error);
        }

        useSonner.success(t(`toast.accountCreated`), {
            id: loading
        });

        // Redirect to a dedicated page.
        return navigateTo({path: localePath("/services/upload")}, {replace: true, external: true});
    } catch (error) {
        const message = extractErrorMessage(error);
        useRollbar().error(error, {message});
        useSonner.error(message, {
            description: t("errors.tryAgain"),
            id: loading
        });
    }
});

const privacyText = computed(() => {
    const privacy = `<a class="text-blue-600 hover:underline" target="_blank" href="${localePath("/legal/privacy")}">${t("register.disclaimer.privacyUrl")}</a>`;
    const eula = `<a class="text-blue-600 hover:underline" target="_blank" href="${localePath("/legal/eula")}">${t("register.disclaimer.eulaUrl")}</a>`;

    return t("register.disclaimer.privacyText", {privacy, eula});
});
</script>

<template>
    <UiContainer class="flex h-full flex-col items-center justify-center">
        <div class="w-full max-w-[340px] text-center">
            <Icon
                class="size-10"
                name="lucide:circle-user-round" />
            <h1 class="text-3xl font-semibold lg:text-4xl">
                {{ t("register.title") }}
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
                    :label="t('account.name')"
                    placeholder="John Doe" />
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
                    :label="t('account.password')"
                    hint="Min 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit" />
                <UiVeeTextarea
                    v-model="aboutMe"
                    icon="lucide:file-text"
                    name="aboutMe"
                    :rows="8"
                    :hint="
                        t('account.charactersLeft', {
                            count: remainingCharacters,
                            max: maxAboutMeLength
                        })
                    "
                    :label="t('account.aboutMe')"
                    :placeholder="t('account.aboutMePlaceholder')" />
                <div class="rounded-md border border-input p-4">
                    <h3 class="text-xl text-muted-foreground lg:text-2xl">
                        ⚠ {{ t("register.disclaimer.title") }}
                    </h3>
                    <ul class="mt-2 list-inside list-disc">
                        <li>
                            <output v-html="privacyText" />
                        </li>
                        <li>
                            {{ t("register.disclaimer.purpose") }}
                        </li>
                    </ul>
                </div>
                <UiButton
                    type="submit"
                    class="w-full">
                    {{ t("register.submit") }}
                </UiButton>
                <UiDivider :label="t(`common.or`)" />
                <NuxtLink
                    :to="localePath('/')"
                    class="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    {{ t("register.signIn") }}
                </NuxtLink>
            </fieldset>
        </form>
    </UiContainer>
</template>
