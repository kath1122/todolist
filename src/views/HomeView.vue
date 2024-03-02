<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
</script>

<template>
  <main>
    <TheWelcome />
    <h1>{{ store.name }}</h1>
  </main>
</template>
