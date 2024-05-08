<script setup lang="ts">
import Facebook from "~/components/icons/facebook.vue";
import Instagram from "~/components/icons/instagram.vue";
import Youtube from "~/components/icons/youtube.vue";
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
                <Facebook
                    alt="Facebook"
                    width="32" />
            </a>
            <a
                href="https://www.instagram.com"
                title="Instagram">
                <Instagram
                    alt="Instagram"
                    width="32" />
            </a>
            <a
                href="https://www.youtube.com/"
                title="Youtube">
                <Youtube
                    alt="Youtube"
                    width="32" />
            </a>
        </template>
    </Footer>
</template>
