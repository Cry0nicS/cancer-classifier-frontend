<script setup lang="ts">
import {Locale} from "~/types/enums";

const {locale} = useI18n() as unknown as {locale: Locale};
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
    <nuxt-link
        v-if="locale === Locale.English"
        title="Deutsch"
        :to="switchLocalePath(Locale.German)">
        <slot name="german">
            <span>{{ $t(`language.de`) }}</span>
        </slot>
    </nuxt-link>
    <nuxt-link
        v-if="locale === Locale.German"
        title="English"
        :to="switchLocalePath(Locale.English)">
        <slot name="english">
            <span>{{ $t(`language.en`) }}</span>
        </slot>
    </nuxt-link>
</template>
