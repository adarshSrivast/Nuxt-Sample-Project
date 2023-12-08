<template>
  <div>
      <h2 class="font-bold">Cart</h2>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'products',
    middleware: 'cart'
  })
</script>

<style scoped>
h2{
  text-align: center;
}
</style>