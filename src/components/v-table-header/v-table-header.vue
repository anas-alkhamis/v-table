<template>
  <div class="font-weight-bold text-secondary small mr-5">{{ props.label }}</div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  label: string;
}>();
</script>
