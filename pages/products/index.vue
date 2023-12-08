<template>
    <div>
        <h1 class="font-bold mt-6 mb-10"> All products </h1>
        <div class="grid grid-cols-4 gap-7">
            <div v-for="prod in products" :key="prod.id">
                <ProductPage :prod="prod"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout : 'products',
    })

    const {data:products} = await useFetch('https://fakestoreapi.com/products');

    useHead({
        title : 'DevlUp | Products',
        meta : [
            {name : 'description' , content : 'Product page'}
        ]
    })
    
</script>

<style scoped>
h2{
    text-align: center;
}
</style>