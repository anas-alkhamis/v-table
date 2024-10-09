<template>
  <div class="container">
    <div v-for="item in props.listGroup">
      <slot name="list-group" :item="item"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IListItem } from "../../meta/i-list-item";

const props = defineProps<{
  listGroup: {
    list: IListItem[];
    header: string;
  }[];
}>();
</script>
