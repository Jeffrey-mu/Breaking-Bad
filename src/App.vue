<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Breaking Bad',
  meta: [
    { name: 'description', content: 'Breaking Bad' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      href: computed(() => preferredDark.value ? '/favicon (1).ico' : '/favicon (1).ico'),
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
