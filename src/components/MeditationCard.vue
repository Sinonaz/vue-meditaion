<script setup lang="ts">
import type { MeditationInterface } from '@/interfaces/meditation.interface.ts'
import IconPlay from '@/components/icons/IconPlay.vue'

const { title, description, duration_min } = defineProps<MeditationInterface>()
</script>

<template>
  <div class="meditation">
    <p class="meditation__name">{{ title }}</p>

    <p class="meditation__description">{{ description }}</p>

    <div class="meditation__footer">
      <button class="meditation__btn" type="button">
        Начать
        <IconPlay />
      </button>

      <span class="meditation__duration">{{ duration_min }} мин</span>
    </div>
  </div>
</template>

<style scoped>
.meditation {
  display: flex;
  flex-direction: column;
  min-height: 170px;
  padding: 22px 30px;
  background: var(--c-light-gray);
  border-radius: 20px;
  font-size: 15px;
  font-weight: 500;
  color: black;
}

.meditation__name {
  margin: 0;
  font-weight: 500;
  font-family: var(--font-secondary);
}

.meditation__description {
  margin: 0;
}

.meditation__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.meditation__btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 17px;
  color: white;
  background: var(--c-primary);
  border-radius: 10px;
  border: none;
  cursor: pointer;
}
</style>
