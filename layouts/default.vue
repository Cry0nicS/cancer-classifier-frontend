<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
    <Header />

    <slot />

    <Footer>
        <template #links>
            <NuxtLink :to="localePath('/legal/contact')">
                {{ $t("footer.contact") }}
            </NuxtLink>
            <NuxtLink :to="localePath('/legal/imprint')">
                {{ $t("footer.imprint") }}
            </NuxtLink>
            <NuxtLink :to="localePath('/legal/privacy')">
                {{ $t("footer.privacy") }}
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
</template>
