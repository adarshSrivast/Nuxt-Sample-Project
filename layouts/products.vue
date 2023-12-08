<template>
    <header class="shadow-sm bg-white">
        <nav class="container flex justify-between mx-auto p-4">
            <NuxtLink to="/" class="logo font-bold">DevlUp</NuxtLink>
            <ul class="flex gap-4 font-bold">
                <li> <NuxtLink to="/cart">Cart</NuxtLink> </li>
                <li> <NuxtLink to="/products" >Products</NuxtLink> </li>
                <li> <button> <NuxtLink to="/login" >Login</NuxtLink> </button> </li>
            </ul>
        </nav>
    </header>

    <div class="container mx-auto p-4">
        <slot />
    </div>

    <footer>
        <div class="container mx-auto p-4 flex justify-between">
            <ul class="mx-auto flex gap-4 font-bold">
                <li><NuxtLink> Terms and Conditions </NuxtLink></li>
                <li><NuxtLink>About</NuxtLink></li>
                <li><NuxtLink>Contact</NuxtLink></li>
                <li><NuxtLink>FAQs</NuxtLink></li>
                <li><NuxtLink>Write to us</NuxtLink></li>
            </ul>
        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped>
/* nav NuxtLink:first-child{
    font-size: 20px;
} */
.logo {
    font-size: 40px;
    text-decoration: none;
}

nav{
     background-color: rgb(233, 234, 236);
}

</style>