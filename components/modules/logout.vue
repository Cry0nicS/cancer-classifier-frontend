<script setup lang="ts">
import {signOut} from "@firebase/auth";
import {useErrorMessage} from "~/composables/use-error-message";

const {t} = useI18n();
const localePath = useLocalePath();

// Retrieves the Firebase authentication instance for use in creating and managing user authentication.
const auth = useFirebaseAuth();
const {extractErrorMessage} = useErrorMessage();

// Handle the form validation and submission.
const logoutUser = async () => {
    const loading = useSonner.loading(t("toast.logOut"), {
        description: t("toast.wait")
    });
    try {
        // Authenticate the user with email and password.
        await signOut(auth!);

        useSonner.success(t(`toast.logOutSuccess`), {
            id: loading
        });

        // Redirect to a dedicated page.
        return navigateTo({path: localePath("/")}, {external: true, replace: true});
    } catch (error) {
        const message = extractErrorMessage(error);
        useSonner.error(message, {
            description: t("errors.tryAgain"),
            id: loading
        });
    }
};
</script>

<template>
    <UiButton
        type="submit"
        variant="destructive"
        class="rounded"
        @click="logoutUser">
        {{ t("buttons.logOut") }}
    </UiButton>
</template>
