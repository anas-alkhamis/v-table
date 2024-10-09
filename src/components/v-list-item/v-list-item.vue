<template>
  <div
    style="min-height: 30px"
    class="container d-flex border-5 border-start p-0"
    :class="
      props.item.labelColor ? `border-${props.item.labelColor}` : 'border-white'
    "
  >
    <div
      v-if="props.item.icon"
      class="mx-3"
      style="max-width: 60px; max-height: 60px"
    >
      <slot name="icon" :item="props.item"> </slot>
    </div>
    <div
      class="d-flex flex-fill align-items-center border-1 border-bottom border-light-subtle"
    >
      <div
        v-if="props.item.avatar"
        class="mx-3"
        style="max-width: 60px; max-height: 60px"
      >
        <slot name="avatar" :item="props.item"> </slot>
      </div>
      <div class="flex-fill">
        <p class="m-0 small">{{ props.item.title }}</p>
        <slot name="description" :item="props.item"> </slot>
        <slot name="sub-description" :item="props.item"> </slot>
      </div>

      <div
        v-if="props.item.actionIcon"
        class="rounded-circle mx-3"
        style="width: 20px; height: 20px"
      >
        <slot v-if="props.item.actionIcon" name="action" :item="props.item">
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IListItem } from "../../meta/i-list-item";

const props = defineProps<IListItem>();
</script>
