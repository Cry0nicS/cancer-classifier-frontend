<script setup lang="ts">
import {Hr, Html, Link, Section, Text} from "@vue-email/components";
import {formatDate} from "~/utils/helpers";

interface EmailProps {
    userName: string;
    userDescription: string;
    validationUrl: string;
}

const props = defineProps<EmailProps>();
</script>

<template>
    <Html lang="en">
        <Text>
            <strong>{{ props.userName }}</strong>
            has created a new account on {{ formatDate() }}
        </Text>
        <Hr />
        <Section>
            <Text>
                About
                <strong>{{ props.userName }}:</strong>
            </Text>
            <Text>
                <em>{{ props.userDescription }}</em>
            </Text>
        </Section>
        <Hr />
        <Link :href="validationUrl">Click here to activate the account</Link>
    </Html>
</template>
