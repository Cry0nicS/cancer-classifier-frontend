<script setup lang="ts">
import LanguageSwitch from "~/components/language-switch.vue";
</script>

<template>
    <Header />

    <slot />

    <Footer>
        <template #links>
            <a href="https://www.google.com/">{{ $t(`footer.contact`) }}</a>
            <a href="https://www.google.com/">{{ $t(`footer.imprint`) }}</a>
            <a href="https://www.google.com/">{{ $t(`footer.privacy`) }}</a>
            <LanguageSwitch />
            <ThemeToggle>
                <template #dark-mode>
                    <span>{{ $t("darkMode") }}</span>
                </template>
                <template #light-mode>
                    <span>{{ $t("lightMode") }}</span>
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
