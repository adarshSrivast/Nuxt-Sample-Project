<template>
    <div>
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus possimus veniam expedita quidem. Aspernatur, repellendus provident. Ipsam accusamus repudiandae facere iusto voluptatem, odit est tenetur culpa laboriosam. Molestias, quo recusandae.</p>
    </div>
    <b>Json object from server api - {{ msg }}</b>
</template>

<script setup>
    const { sayThis } = useUtils();
    sayThis("Hello from composable");

    const { $sayThis } = useNuxtApp();

    const { data : msg } = await useFetch('api/hello');
    console.log(msg);
    console.log(msg._rawValue);

</script>
    
<style>
    h1{
        text-align: center;
    }
</style>