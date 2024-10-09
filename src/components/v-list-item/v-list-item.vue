<template>
  <div
    style="min-height: 30px"
    class="container d-flex border-5 border-start p-0"
    :class="
      props?.item?.labelColor
        ? `border-${props?.item?.labelColor} ${
            props?.item?.disabled && 'opacity-50'
          }`
        : props?.item && 'border-white'
    "
  >
    <div
      v-if="props?.item?.icon"
      class="mx-3 my-auto"
      style="max-width: 60px; max-height: 60px"
    >
      <v-icon :class="`bi ${props.item.icon} fs-1`"></v-icon>
    </div>
    <div
      v-if="props?.item"
      class="d-flex flex-fill align-items-center border-1 border-bottom border-light-subtle"
    >
      <div
        v-if="props?.item?.avatar"
        class="mx-3"
        style="max-width: 60px; max-height: 60px"
      >
        <slot name="avatar" :item="props?.item">
          <img class="rounded-circle" width="100%" :src="props.item.avatar" />
        </slot>
      </div>
      <div class="flex-fill">
        <p class="m-0 fw-semibold">{{ props?.item?.title }}</p>
        <slot name="description" :item="props?.item"
          >{{ props.item.description }}
        </slot>
        <slot name="sub-description" :item="props?.item">
          {{ props.item.sub_description }}</slot
        >
      </div>

      <div
        v-if="props?.item?.action"
        class="rounded-circle mx-3"
        style="width: 20px; height: 20px"
      >
        <slot name="action" :item="props?.item"
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { IListItem } from "../../meta/i-list-item";

const props = defineProps<{ item?: IListItem }>();
const vIcon = defineAsyncComponent(() => import("../v-icon/v-icon.vue"));
</script>
