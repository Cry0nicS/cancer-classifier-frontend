<script setup lang="ts">
import LanguageSwitch from "~/components/language-switch.vue";

const route = useRoute();
</script>

<template>
    <Header v-if="route.meta.showHeader" />

    <slot />

    <Footer>
        <template #links>
            <a href="https://www.google.com/">{{ $t(`footer.contact`) }}</a>
            <a href="https://www.google.com/">{{ $t(`footer.imprint`) }}</a>
            <a href="https://www.google.com/">{{ $t(`footer.privacy`) }}</a>
            <LanguageSwitch />
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
