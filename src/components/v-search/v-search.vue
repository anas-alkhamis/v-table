<template>
  <div class="search-container">
    <input
      class="form-control input-search"
      type="search"
      name="search"
      id="search"
      :placeholder="props.placeholder || 'Search'"
      v-model="search"
    />
    <i class="bi bi-search icon-search"></i>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps } from "vue";
import { ISearch } from "../../meta/i-search";

const props = defineProps<ISearch>();
const search = ref<string>("");
const model: any = defineModel();

let debounceId: number;
watch(search, (to: string) => {
  if (debounceId) {
    clearTimeout(debounceId);
  }
  debounceId = setTimeout(() => {
    model.value = to;
  }, props.delay || 500);
});
</script>

<style scoped>
.search-container {
  position: relative;
}
.icon-search {
  position: absolute;
  top: 5px;
  left: 8px;
}
.input-search {
  padding-left: 30px;
  height: 32px;
  font-size: 14px;
}
</style>
