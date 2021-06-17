<template>
  <section class="w-full">
    <div class="m-7">
      <h1 class="text-2xl text-center">Todo-App</h1>
      <input
        class="border rounded w-full  p-2"
        v-model="toDos"
        @keydown.enter="addToDoItem"
        placeholder="Type Car here"
      />
      <div class="w-full  p-2"></div>
      <h2 class="px-2 py-2">
        To-Dos: <span class="px-2 py-2">{{ allTodoesCount }}</span>
      </h2>
      <div class="grid grid-cols-2 divide-x divide-green-500 max-w-sm py-2">
        <h2 class="px-2 ">
          Active:<span class="px-2 py-2">{{ activeTodosCount }}</span>
        </h2>
        <h2 class="px-2 ">
          Completed:<span class="px-2 py-2">{{ completedTodosCount }}</span>
        </h2>
      </div>
      <ul>
        <li
          class="border rounded w-full  p-2 flex justify-between"
          :class="listItem.progress == false ? 'bg-gray-400' : 'bg-red-500'"
          v-for="(listItem, index) in filteredTodoes"
          v-bind:key="index"
        >
          <div>{{ listItem.item }}</div>
          <button v-on:click="statusSwitch(listItem)">
            {{ listItem.status }}
          </button>
          <button v-on:click="remove(index)">X</button>
        </li>
      </ul>
      <div class="w-full">
        <div class="grid grid-cols-5  py-2">
          <button @click="filters = ''" class="col-start-2">
            ALL
          </button>
          <button @click="filters = 'Uzbaigta'">Active</button>
          <button @click="filters = 'Dar neuzbaigta'">Completed</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const toDos = ref("");
    const filters = ref("");
    const progress = ref("");
    const progStatus = ref({
      done: "Uzbaigta",
      undone: "Dar neuzbaigta",
    });
    const newItem = ref(true);
    const toDoItems = ref([
      {
        item: "First ToDo",
        status: progStatus.value.done,
        progress: (progress.value = true),
      },
    ]);

    const allTodoesCount = computed(() => toDoItems.value.length);
    const activeTodosCount = computed(
      () => toDoItems.value.filter((e) => e.progress === true).length
    );
    const completedTodosCount = computed(
      () => toDoItems.value.filter((e) => e.progress === false).length
    );

    function addToDoItem() {
      if (toDos.value !== " ") {
        toDoItems.value.push({
          item: toDos.value,
          status: progStatus.value.done,
          progress: newItem.value,
        });
        toDos.value = " ";
      }
    }
    function remove(index) {
      toDoItems.value = toDoItems.value.filter((item, i) => i !== index);
    }

    function statusSwitch(listItem) {
      if (listItem.progress == false) {
        listItem.status = progStatus.value.done;
        listItem.progress = true;
      } else {
        listItem.status = progStatus.value.undone;
        listItem.progress = false;
      }
    }
    const filteredTodoes = computed(() => {
      if (filters.value === "") {
        return toDoItems.value;
      }
      return toDoItems.value.filter((item) => item.status === filters.value);
    });

    return {
      toDos,
      toDoItems,
      addToDoItem,
      remove,
      progress,
      statusSwitch,
      progStatus,
      newItem,
      allTodoesCount,
      activeTodosCount,
      completedTodosCount,
      filteredTodoes,
      filters,
    };
  },
};
</script>

<style></style>
