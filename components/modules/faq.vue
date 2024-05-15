<script setup lang="ts">
interface AccordionItem {
    value: string;
    title: string;
    content: string;
}

interface FaqProps {
    title: string;
    backgroundColor: string;
    accordionItems: AccordionItem[];
}

const faq = defineProps<FaqProps>();
</script>

<template>
    <div :class="`grid w-full grid-cols-1 p-5 xl:grid-cols-12 xl:p-10 bg-${faq.backgroundColor}`">
        <div class="col-span-5">
            <div class="mx-auto flex flex-col py-4">
                <h2 class="text-xl lg:text-2xl">{{ faq.title }}</h2>
                <slot name="content" />
            </div>
        </div>
        <div class="col-span-7">
            <UiAccordion
                type="multiple"
                :collapsible="true"
                :items="faq.accordionItems" />
        </div>
    </div>
</template>
