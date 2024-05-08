<script setup>
import {Locale} from "~/constants/locale";

const {locale} = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
    <nuxt-link
        v-if="locale !== Locale.German"
        :to="switchLocalePath(Locale.German)">
        {{ $t(`language.de`) }}
    </nuxt-link>
    <nuxt-link
        v-if="locale !== Locale.English"
        :to="switchLocalePath(Locale.English)">
        {{ $t(`language.en`) }}
    </nuxt-link>
</template>
