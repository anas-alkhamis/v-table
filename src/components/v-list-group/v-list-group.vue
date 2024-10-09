<template>
  <div class="container d-flex flex-column">
    <div
      v-if="props.item.header"
      class="border text-muted shadow-sm d-flex align-items-center"
      style="min-height: 40px"
    >
      <span>
        {{ props.item.header }}
      </span>
    </div>
    <div class="d-flex flex-column gap-1">
      <div v-for="item in props.item.list">
        <slot name="list-item" :item="item"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IListItem } from "../../meta/i-list-item";

const props = defineProps<{
  item: {
    list: IListItem[];
    header: string;
  };
}>();
</script>
