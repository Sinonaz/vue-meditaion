<script setup lang="ts">
import { useMeditationsStore } from '@/stores/meditations.store.ts'
import { onMounted } from 'vue'
import MeditationCard from '@/components/MeditationCard.vue'

const store = useMeditationsStore()

onMounted(() => {
  store.fetchMeditations()
})
</script>

<template>
  <div v-if="store.meditations.length" class="meditations">
    <MeditationCard
      v-for="item in store.meditations"
      :key="item.ID"
      :title="item.title"
      :description="item.description"
      :duration_min="item.duration_min"
    />
  </div>
</template>

<style scoped>
.meditations {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px 22px;
}
</style>
