<template>

    <Head>
        <Title>DevlUp | {{ product.title }}</Title>
        <Meta name="description" :content="product.description"></Meta>
    </Head>

    <ProductDetails :product="product"/>
</template>

<script setup>

    const { id } = useRoute().params

    definePageMeta({
        layout: 'products'
    })

    const prodURL = 'https://fakestoreapi.com/products/' + id;
    const { data : product} = await useFetch(prodURL);

    if(!product.value){
        throw createError({statusCode: 404 , statusMessage: "Product not found"})
    }
    
</script>

<style scoped>

</style>