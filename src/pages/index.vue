<script setup lang="ts">
</script>

<template>
  <div flex="~ wrap" justify-center>
    <Person v-for="item in 50" :id="`${item}`" :key="item" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
