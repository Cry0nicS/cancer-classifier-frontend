<script setup lang="ts">
const error = useError();

const localePath = useLocalePath();

const handleError = () => clearError({redirect: localePath({name: "index"})});
</script>

<template>
    <div class="error-page">
        <NuxtImg
            class="mb-4 w-[300px] md:w-[400px]"
            preload
            src="/assets/images/404.gif"
            alt="Penguin slap"
            sizes="300px md:400px" />
        <h1 class="text-5xl">Oops... you shouldn't be here, should you?</h1>
        <h3 class="text-3xl">You've been slapped with a {{ error!.statusCode }} error.</h3>
        <p class="text-lg">
            {{ error!.message }}
        </p>
        <button
            class="redirect"
            @click="handleError">
            Now go back...
        </button>
    </div>
</template>

<style scoped lang="scss">
.error-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    text-align: center;
    background: #fde68a;
    color: #333;

    h1 {
        margin-top: 20px;
        color: #ff6347;
    }

    h2 {
        margin-top: 40px;
        color: #ff6322;
    }

    p {
        margin-top: 10px;
    }

    .redirect {
        margin-top: 20px;
        padding: 10px 20px;
        font-size: 16px;
        background-color: #4caf50;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background-color: #45a049;
        }
    }
}
</style>
