<template>
    <div class="card text-center">
        <img :src="prod.image" alt="">
        <p class="font-bold truncate">{{ prod.title }}</p>
        <NuxtLink :to="`/products/${prod.id} `">
            <button class="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                View Details
            </button>
        </NuxtLink>
    </div>
</template>

<script setup>
    const { prod } = defineProps(['prod']);
</script>

<style scoped>
img{
    padding: 4px;
    max-height: 120px;
    max-width: 120px;
    margin: 0 auto;
}

.card{
    background-color: rgb(248 250 252);
    box-shadow: 1px 1px 4px;
    border-radius: 10px;
}

</style>