<script setup lang="ts">
definePageMeta({
    showHeader: true,
    middleware: ["is-admin"]
});

const {t, locale} = useI18n();
const localePath = useLocalePath();

const _auth = useFirebaseAuth();
const db = useFirestore();
const user = useCurrentUser();

const userToken = await user?.value?.getIdToken();
const {data} = await useFetch(`/api/admin/users?userToken=${userToken}`, {
    method: "GET"
});

const deleteUser = (userId: string) => {
    console.log(userId);
};

const editUser = (userId: string) => {
    console.log(userId);
};
</script>

<template>
    <section class="w-full px-8 py-12">
        <div class="flex w-full flex-col justify-between gap-5">
            <div class="flex w-full flex-row justify-between">
                <h1 class="text-2xl font-semibold lg:text-3xl">Manage Users</h1>
            </div>
        </div>
        <div
            class="mt-16"
            v-if="data.users">
            <div class="flex w-full flex-col justify-between gap-5">
                <div class="flex w-full flex-col gap-5">
                    <div class="flex w-full flex-row justify-between">
                        <div class="flex w-full flex-row gap-5">
                            <div class="flex w-1/4">
                                <h1 class="text-lg font-semibold">Name</h1>
                            </div>
                            <div class="flex w-1/4">
                                <h1 class="text-lg font-semibold">Email</h1>
                            </div>
                            <div class="flex w-1/4">
                                <h1 class="text-lg font-semibold">Role</h1>
                            </div>
                            <div class="flex w-1/4">
                                <h1 class="text-lg font-semibold">Actions</h1>
                            </div>
                        </div>
                    </div>
                    <div
                        v-for="user in data.users"
                        :key="user.uid"
                        class="flex w-full flex-col gap-5">
                        <div class="flex w-full flex-row justify-between">
                            <div class="flex w-1/4">
                                <h1 class="text-lg">
                                    {{ user.displayName ?? "Stupid missing name" }}
                                </h1>
                            </div>
                            <div class="flex w-1/4">
                                <h1 class="text-lg">{{ user.email }}</h1>
                            </div>
                            <div class="flex w-1/4">
                                <h1 class="text-lg">Still figuring this out</h1>
                            </div>
                            <div class="flex w-1/4">
                                <div class="flex w-full flex-row gap-5">
                                    <button
                                        class="rounded-md bg-blue-500 px-3 py-1 text-white"
                                        @click="editUser(user.uid)">
                                        Edit
                                    </button>
                                    <button
                                        class="rounded-md bg-red-500 px-3 py-1 text-white"
                                        @click="deleteUser(user.uid)">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
