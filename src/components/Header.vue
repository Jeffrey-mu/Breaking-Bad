<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <nav text-xl my-3>
    <RouterLink text-left class="icon-btn mx-2" to="/" :title="t('button.home')">
      <div i-carbon-campsite />
    </RouterLink>

    <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>
    <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/Jeffrey-mu/Breaking-Bad" target="_blank" title="GitHub">
      <div i-carbon-logo-github />
    </a>
  </nav>
</template>
