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

        <template #social>
            <a
                href="https://www.facebook.com"
                title="Facebook">
                <Icon
                    class="size-8"
                    name="mdi:facebook" />
            </a>
            <a
                href="https://www.instagram.com"
                title="Instagram">
                <Icon
                    class="size-8"
                    name="mdi:instagram" />
            </a>
            <a
                href="https://www.youtube.com/"
                title="Youtube">
                <Icon
                    class="size-8"
                    name="mdi:youtube" />
            </a>
        </template>
    </Footer>
</template>
