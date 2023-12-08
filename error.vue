<template>
    <div class="mx-auto">
        <h1>{{ error.statusCode }}</h1>
        <p class="font-bold">{{ error.message }}</p>
    </div>
</template>

<script setup>
    defineProps(['error']);
</script>

<style scoped>

</style>