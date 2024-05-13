<script setup lang="ts">
import {Color} from "~/constants/color.js";
</script>

<template>
    <header
        class="flex flex-row items-center justify-between border-b border-gray-200 px-6 py-6 lg:container md:px-9 md:py-7 lg:px-0 xl:mx-auto 2xl:max-w-[1280px]">
        <Logo
            :height="50"
            :color="Color.Azure" />
        <div class="text-right">
            <ModulesLogout />
        </div>
    </header>
</template>
