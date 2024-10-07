<template>
  <input
    class="form-check-input"
    type="checkbox"
    style="cursor: pointer; width: 20px; height: 20px"
  />
</template>
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  item: any;
}>();
</script>
