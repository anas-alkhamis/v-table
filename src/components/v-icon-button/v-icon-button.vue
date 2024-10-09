<template>
  <button>
    <i :class="props.icon" class="icon m-1"></i>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{ icon: string }>();
</script>
<style lang="css">
.icon {
  cursor: pointer;
  border: 1px #000;
}
</style>
