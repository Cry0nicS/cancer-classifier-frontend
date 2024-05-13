<script setup lang="ts">
import {useField, useForm} from "vee-validate";
import {toTypedSchema} from "@vee-validate/yup";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {RegisterSchema} from "~/utils/validations";
import {useFirebaseAuth} from "#imports";

// Import the useI18n composable to access the translation function.
const {t} = useI18n();
const localePath = useLocalePath();

// Retrieves the Firebase authentication instance for use in creating and managing user authentication.
const auth = useFirebaseAuth();

// Initialize and configured form validation based on Yup validation schema.
const {handleSubmit, isSubmitting} = useForm({
    validationSchema: toTypedSchema(RegisterSchema(t))
});

// Initializes reactive form fields using "useField" from vee-validate. Each call handles a specific form field.
const {value: name, errorMessage: nameError} = useField("name");
const {value: email, errorMessage: emailError} = useField("email");
const {value: password, errorMessage: passwordError} = useField("password");

// Handle the form validation and submission.
const registerUser = handleSubmit(async (values, _ctx) => {
    try {
        // Create a user with the provided email and password.
        const userCredential = await createUserWithEmailAndPassword(
            auth!,
            values.email,
            values.password
        );

        // Update the user profile to set the display name.
        await updateProfile(userCredential.user, {displayName: values.name});

        // Redirect to a dedicated page.
        return await navigateTo("/new-page", {replace: true});
    } catch (error) {
        // TODO: implement a proper error handling.
        console.error(error);
    }
});
</script>

<template>
    <div
        class="flex min-h-[550px] items-center justify-center bg-gray-100 md:min-h-[700px] lg:min-h-[900px]">
        <div class="w-full max-w-md rounded bg-white p-6 shadow-md">
            <h1 class="mb-4 text-xl font-bold">{{ $t(`register.title`) }}</h1>
            <form @submit.prevent="registerUser">
                <fieldset :disabled="isSubmitting">
                    <div class="mb-4">
                        <label
                            for="name"
                            class="block text-sm font-medium text-gray-700">
                            {{ $t(`name`) }}
                        </label>
                        <input
                            id="name"
                            v-model="name"
                            type="text"
                            class="mt-1 block w-full rounded-md border px-3 py-2"
                            required />
                        <span class="text-red-500 text-sm">{{ nameError }}</span>
                    </div>
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
                        <span class="text-red-500 text-sm">{{ emailError }}</span>
                    </div>
                    <div class="mb-6">
                        <label
                            for="password"
                            class="block text-sm font-medium text-gray-700">
                            {{ $t(`password`) }}
                        </label>
                        <input
                            id="password"
                            v-model="password"
                            type="password"
                            class="mt-1 block w-full rounded-md border px-3 py-2"
                            required />
                        <span class="text-red-500 text-sm">{{ passwordError }}</span>
                    </div>
                    <button
                        type="submit"
                        class="w-full rounded bg-main-azure px-4 py-2 text-white hover:bg-main-lavender focus:outline-none">
                        {{ $t(`register.register`) }}
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
                        class="inline-block w-full rounded bg-main-azure px-4 py-2 text-center text-white hover:bg-main-lavender focus:outline-none">
                        {{ $t(`register.signIn`) }}
                    </NuxtLink>
                </fieldset>
            </form>
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
