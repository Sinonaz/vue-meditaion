<script setup lang="ts">
import AppHeader from '@/layout/AppHeader.vue'
</script>

<template>
  <div class="app">
    <AppHeader />
    <RouterView />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  gap: 65px;
}
</style>
