<template>
  <div class="wrapper">
    <h1>{{ $t('medLevel.task.title') }}</h1>
    <ul>
      <li
        v-for="task in tasks"
        :key="task.id"
      >
        <input
          type="text"
          v-model="task.name"
        >
        <button
          @click="removeTask(task.id)"
          data-test="button-remove"
        >
          <XMarkIcon class="w-full h-full" />
        </button>
      </li>
    </ul>
    <button
      @click="addTask"
      data-test="button-add"
    >
      {{ $t('medLevel.task.addTask') }}
    </button>
  </div>
</template>

<script setup>
import { XMarkIcon } from "@heroicons/vue/24/solid";
import { reactive } from "vue";

let id = 4;

let tasks = reactive([
    { id: 1, name: "Task 1" },
    { id: 2, name: "Task 2" },
    { id: 3, name: "Task 3" },
]);
const addTask = () => {
    const newTask = { id: id++, name: `Task ${tasks.length + 1}` };
    tasks.push(newTask);
};
const removeTask = (id) => {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
    }
};
</script>

<style scoped>

.wrapper {
  background-color: #1a2438;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.25rem;
}

h1 {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

ul li {
  list-style-type: none;
  margin-bottom: 1rem;
  border: 1px solid #9ca3af;
  border-radius: 0.5rem;
  position: relative;
}

button[data-test="button-remove"] {
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.25rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  background-color: #7f1d1d;
  color: white;
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
}

button[data-test="button-remove"]:hover {
  background-color: #b91c1c;
}

button[data-test="button-add"] {
  background-color: #2563eb;
  color: white;
  border-radius: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

button[data-test="button-add"]:hover {
  background-color: #3b82f6;
}

input[type="text"] {
  width: 100%;
  background-color: transparent;
  border-radius: 0.5rem;
  padding: 0.5rem;
  padding-right: 2.5rem;
  color: white;
}

</style>
