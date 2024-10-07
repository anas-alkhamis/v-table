<template>
  <div class="pagination mt-3">
    <button @click="changePage(modelValue - 1)" :disabled="modelValue === 1">
      <
    </button>

    <button v-if="modelValue > 2" @click="changePage(1)">1</button>

    <span v-if="modelValue > 2">...</span>

    <button
      v-for="page in visiblePages"
      :key="page"
      :class="{ active: page === modelValue }"
      @click="changePage(page)"
    >
      {{ page }}
    </button>

    <span v-if="modelValue < totalPages - 1">...</span>

    <button v-if="modelValue < totalPages - 1" @click="changePage(totalPages)">
      {{ totalPages }}
    </button>

    <button
      @click="changePage(modelValue + 1)"
      :disabled="modelValue === totalPages"
    >
      >
    </button>
    <input
      class="small form-control w-auto"
      v-model="modelValue"
      type="number"
    />
  </div>
</template>
<script setup lang="ts">
import { computed, defineProps, defineEmits, ComputedRef } from "vue";
const emit = defineEmits(["update"]);
const props = defineProps<{
  rowsPerPage: number;
  totalRows: number;
}>();
const modelValue: any = defineModel();
const totalPages: ComputedRef<number> = computed(() =>
  Math.ceil(props.totalRows / props.rowsPerPage)
);

const visiblePages = computed(() => {
  const pages: number[] = [];
  const startPage = Math.max(1, modelValue.value - 1); //3
  const endPage = Math.min(totalPages.value, modelValue.value + 1); //5
  // [3,4,5]
  for (let i: number = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return pages;
});

const changePage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    emit("update", page);
  }
};
</script>

<style>
.pagination {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
}

button {
  border: none;
  background: none;
  cursor: pointer;
}

button.active {
  font-weight: bold;
  background-color: lightblue;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

span {
  padding: 0 5px;
}
</style>
