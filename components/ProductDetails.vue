<template>
    <div class="card">
        <div class="flex justify-between">
            <div class="p-7 mr-7">
                <img :src="product.image" alt="" class="mx-auto my-7">
            </div>

            <div class="p-7">
                <h2 class="text-4xl my-7"> {{ product.title }}</h2>
                <h2 class="text-xl my-7 font-bold"> Price: Rs.{{ price }}</h2>
                <h2 class="text-xl my-7 font-bold"> Product description: </h2>
                <p>{{ product.description }}</p>
                <button class="bg-green-500 text-white font-bold mt-7 py-2 px-4 rounded-full flex">
                    <i class="material-icons mr-2">add_shopping_cart</i>
                    <span class="">Add to cart</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const { product } = defineProps(['product']);
    const price = ref(product.price*100);
    
</script>

<style scoped>
img{
    max-width: 400px;
}

.card{
    background-color: white;
    border-radius: 10px;
}

</style>