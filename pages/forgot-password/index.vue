<script setup lang="ts">
import {sendPasswordResetEmail} from "@firebase/auth";
import {toTypedSchema} from "@vee-validate/yup";
import {useField, useForm} from "vee-validate";

definePageMeta({
    middleware: ["already-logged-in"]
});

const {t} = useI18n();
const localePath = useLocalePath();

// Retrieves the Firebase authentication instance for use in creating and managing user authentication.
const auth = useFirebaseAuth();

// Reactive variable to store error message
const errorMessage = ref("");

// Initialize and configured form validation based on Yup validation schema.
const {handleSubmit, isSubmitting} = useForm({
    validationSchema: toTypedSchema(ForgotPasswordSchema(t))
});

// Initializes reactive form fields using "useField" from vee-validate. Each call handles a specific form field.
const {value: email, errorMessage: emailError} = useField("email");

// Handle the form validation and submission.
const resetPassword = handleSubmit(async (values, _ctx) => {
    try {
        // Authenticate the user with email and password.
        await sendPasswordResetEmail(auth!, values.email, {
            // TODO: Implement a proper URL.
            url: "http://localhost:3000/"
        });

        // Redirect to a dedicated page.
        return await navigateTo({path: localePath("/"), replace: true});
    } catch (error) {
        showError("An unexpected error occurred. Please try again.");
    }
});
</script>

<template>
    <div
        class="flex min-h-[550px] items-center justify-center bg-gray-100 md:min-h-[700px] lg:min-h-[900px]">
        <div class="w-full max-w-md rounded bg-white p-6 shadow-md">
            <h1 class="mb-4 text-xl font-bold">{{ $t(`forgot-password.title`) }}</h1>
            <form @submit.prevent="resetPassword">
                <fieldset :disabled="isSubmitting">
                    <div class="mb-4">
                        <label
                            for="email"
                            class="block text-sm font-medium text-gray-700">
                            {{ $t(`email`) }}
                        </label>
                        <input
                            id="email"
                            v-model="email"
                            type="email"
                            class="mt-1 block w-full rounded-md border px-3 py-2"
                            required />
                        <span class="text-sm text-red-500">{{ emailError }}</span>
                    </div>
                    <button
                        type="submit"
                        class="w-full rounded bg-primary px-4 py-2 text-white hover:bg-secondary focus:outline-none">
                        {{ $t(`forgot-password.submit`) }}
                    </button>
                    <div class="divider-container">
                        <hr class="divider-line" />
                        <span class="divider-text">
                            {{ $t(`or`) }}
                        </span>
                        <hr class="divider-line" />
                    </div>
                    <NuxtLink
                        :to="localePath('/')"
                        class="inline-block w-full rounded bg-secondary px-4 py-2 text-center text-white hover:bg-primary focus:outline-none">
                        {{ $t(`register.signIn`) }}
                    </NuxtLink>
                </fieldset>
            </form>
            <div
                v-if="errorMessage"
                class="mt-4 block rounded border border-red-700 bg-red-100 p-3 text-red-700">
                {{ errorMessage }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.divider-container {
    display: flex;
    align-items: center;
    text-align: center;
    margin: 20px 0;
}

.divider-line {
    flex: 1;
    border-top: 1px solid #ccc;
    margin: 0 10px;
}

.divider-text {
    padding: 0 10px;
    color: #666;
    font-size: 16px;
}
</style>
