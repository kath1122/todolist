<template>
  <div class="container">
    <TodoHeader></TodoHeader>
    <List></List>
    <TodoFooter></TodoFooter>
    <div class="header">
      <input type="text" v-model="title">
      <button type="button" @click="addItem">新增</button>
    </div>
    <div class="list">
      <ul v-for="item in todos" :key="item.id">
        <li>
          {{ item.text }}
          <!-- <button type="button" @click="editItem">編輯</button>
          <button type="button" @click="delItem">刪除</button> -->
        </li>
      </ul>
      <hr>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import TodoHeader from './components/Header.vue';
import List from './components/List.vue';
import TodoFooter from './components/Footer.vue';

import type { Todo } from './types/todo';

export default defineComponent({
  name: 'App',
  components:{
    TodoHeader,
    List,
    TodoFooter
  },
  setup() {
    const title = ref('')
    const state = reactive<{todos: Todo[]}>({
      todos: [{
        id: 1,
        text: 'item1-aaaa'
      }]
    })
    const addItem = () => {
      const todo = {
        id: Date.now(),
        text: title.value
      }
      state.todos.unshift(todo)
      title.value = ''
    }
    return{
      title,
      ...toRefs(state),
      addItem
    }
  },
})
</script>

<style scoped>

</style>
