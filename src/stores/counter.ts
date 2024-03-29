import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('Jacky')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  function setName(){
    name.value = 'Mike'
  }

  return { count, name, doubleCount, increment, setName}
})
