<script setup lang="ts">
import Sidebar from "~/components/modules/sidebar.vue";
import UploadStepper from "~/components/modules/upload-stepper.vue";
import {useUploadStepperStatus} from "~/composables/states";

const localePath = useLocalePath();
const stepperStatus = useUploadStepperStatus();
</script>

<template>
    <div class="flex min-h-screen flex-col">
        <Sidebar
            class="fixed left-0 top-0 hidden h-full w-[400px] overflow-y-auto border-r py-[70px] xl:block">
            <div class="px-2 py-12">
                <!-- eslint-disable vue/attribute-hyphenation -->
                <UploadStepper :currentStatus="stepperStatus" />
                <!-- eslint-enable vue/attribute-hyphenation -->
            </div>
        </Sidebar>

        <div class="flex grow justify-center xl:ml-[400px] 2xl:mx-[400px]">
            <div class="flex min-h-full w-full max-w-[1280px] flex-col">
                <Header />

                <main class="grow">
                    <slot />
                </main>

                <Footer>
                    <template #links>
                        <NuxtLink :to="localePath('/about-us')">
                            {{ $t("footer.aboutUs") }}
                        </NuxtLink>
                        <NuxtLink :to="localePath('/legal/imprint')">
                            {{ $t("footer.imprint") }}
                        </NuxtLink>
                        <NuxtLink :to="localePath('/legal/privacy')">
                            {{ $t("footer.privacy") }}
                        </NuxtLink>
                        <NuxtLink :to="localePath('/legal/eula')">
                            {{ $t("footer.eula") }}
                        </NuxtLink>
                        <NuxtLink :to="localePath('/legal/contact')">
                            {{ $t("footer.contact") }}
                        </NuxtLink>
                        <LanguageToggle />
                        <ThemeToggle>
                            <template #dark-mode>
                                <span>{{ $t("common.lightMode") }}</span>
                            </template>
                            <template #light-mode>
                                <span>{{ $t("common.darkMode") }}</span>
                            </template>
                        </ThemeToggle>
                    </template>
                </Footer>
            </div>
        </div>
    </div>
</template>
