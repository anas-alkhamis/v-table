<template>
  <div
    class="container d-flex border-5 border-start"
    :class="
      props.item.labelColor ? `border-${props.item.labelColor}` : 'border-white'
    "
  >
    <div style="max-width: 60px; max-height: 60px">
      <slot name="icon" :item="props.item"> </slot>
    </div>
    <div
      class="d-flex flex-fill gap-3 align-items-center px-3 border-1 border-bottom border-light-subtle"
    >
      <div style="max-width: 60px; max-height: 60px">
        <slot name="avatar" :item="props.item"> </slot>
      </div>
      <div class="flex-fill">
        <p class="m-0 small">{{ props.item.title }}</p>
        <slot name="description" :item="props.item"> </slot>
        <slot name="sub-description" :item="props.item"> </slot>
      </div>

      <div class="rounded-circle" style="width: 20px; height: 20px">
        <slot name="action" :item="props.item"> </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  item: {
    title: string;
    actionIcon?: string;
    avatar?: string;
    labelColor?: string;
    description?: string;
    sub_description?: string;
  };
}>();
</script>
