<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
    <div class="flex min-h-screen flex-col">
        <div class="flex grow justify-center">
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
