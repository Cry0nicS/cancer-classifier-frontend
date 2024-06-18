<script setup lang="ts">
import {LOCALE, type Locale} from "~/types/constants";

const {locale} = useI18n() as unknown as {locale: Locale};
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
    <nuxt-link
        v-if="locale === LOCALE.English"
        title="Deutsch"
        :to="switchLocalePath(LOCALE.German)">
        <slot name="german">
            <span>{{ $t(`language.de`) }}</span>
        </slot>
    </nuxt-link>
    <nuxt-link
        v-if="locale === LOCALE.German"
        title="English"
        :to="switchLocalePath(LOCALE.English)">
        <slot name="english">
            <span>{{ $t(`language.en`) }}</span>
        </slot>
    </nuxt-link>
</template>
