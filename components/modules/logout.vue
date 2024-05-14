<script setup lang="ts">
import {signOut} from "@firebase/auth";

const localePath = useLocalePath();

// Get the (authenticated) user from Firebase. Hide login form if user is already logged in.
const user = await getCurrentUser();

// Retrieves the Firebase authentication instance for use in creating and managing user authentication.
const auth = useFirebaseAuth();

// Handle the form validation and submission.
const logoutUser = async () => {
    try {
        // Authenticate the user with email and password.
        await signOut(auth!);

        // Redirect to a dedicated page.
        return await navigateTo({path: localePath("/"), replace: true});
    } catch (error) {
        showError("An unexpected error occurred. Please try again.");
    }
};
</script>

<template>
    <div v-if="user">
        <form @submit.prevent="logoutUser">
            <button
                type="submit"
                class="rounded bg-secondary px-4 py-2 text-white hover:bg-primary focus:outline-none">
                {{ $t(`login.logout`) }}
            </button>
        </form>
    </div>
</template>
