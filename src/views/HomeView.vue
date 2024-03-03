<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia';
const store = useCounterStore()
const { name } = storeToRefs(store)
const { setName } = store
</script>

<template>
  <main>
    <TheWelcome />
    <h1>{{ name }}</h1>
    <button @click="setName">click</button>
  </main>
</template>
