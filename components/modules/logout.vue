<script setup lang="ts">
import {signOut} from "@firebase/auth";

const {t} = useI18n();
const localePath = useLocalePath();

// Retrieves the Firebase authentication instance for use in creating and managing user authentication.
const auth = useFirebaseAuth();

// Handle the form validation and submission.
const logoutUser = async () => {
    const loading = useSonner.loading(`${t("loading")}...`, {
        description: t(`logout.loading`)
    });
    try {
        // Authenticate the user with email and password.
        await signOut(auth!);

        useSonner.success(t(`logout.loadingSuccess`), {
            id: loading
        });

        // Redirect to a dedicated page.
        return await navigateTo({path: localePath("/"), replace: true});
    } catch (error) {
        const message = error as Error;

        useSonner.error(message, {
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
        {{ $t(`login.logout`) }}
    </UiButton>
</template>
