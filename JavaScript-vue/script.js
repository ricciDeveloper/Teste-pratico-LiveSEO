const { createApp, ref, computed } = Vue

createApp({
  setup() {

    const tasks = ref([])

    const addTask = (text) => {
      tasks.value.push({
        id: Date.now(),
        text,
        completed: false
      })
    }

    const toggleTask = (id) => {
      const task = tasks.value.find(t => t.id === id)
      if (task) task.completed = !task.completed
    }

    const removeTask = (id) => {
      tasks.value = tasks.value.filter(t => t.id !== id)
    }

    

    const pending = computed(() =>
        tasks.value.filter(t => !t.completed).length
    )

    const completed = computed(() =>
        tasks.value.filter(t => t.completed).length
    )

    return {
        tasks,
        addTask,
        toggleTask,
        removeTask,
        pending,
        completed
    }
  }
})

.component("task-input", {
  template: `
    <div class="input-group">
      <input 
        v-model="newTask"
        @keyup.enter="handleAdd"
        placeholder="Digite uma tarefa"
      />
      <button @click="handleAdd">Adicionar</button>
    </div>
  `,
  setup(props, { emit }) {
    const newTask = ref("")

    const handleAdd = () => {
      if (!newTask.value.trim()) return
      emit("add-task", newTask.value)
      newTask.value = ""
    }

    return { newTask, handleAdd }
  }
})

.component("task-list", {
  props: ["tasks"],
  template: `
    <ul class="task-list">
      <task-item
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @toggle-task="$emit('toggle-task', $event)"
        @remove-task="$emit('remove-task', $event)"
      />
    </ul>
  `
})

.component("task-item", {
  props: ["task"],
  template: `
    <li :class="{ completed: task.completed }">
      <input 
        type="checkbox" 
        :checked="task.completed"
        @change="$emit('toggle-task', task.id)"
      />
      <span>{{ task.text }}</span>
      <button @click="$emit('remove-task', task.id)">X</button>
    </li>
  `
})

.mount("#app")