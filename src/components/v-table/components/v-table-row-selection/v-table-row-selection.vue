<template>
  <input
    class="form-check-input"
    type="checkbox"
    style="cursor: pointer; width: 20px; height: 20px"
    @click="selectRow"
    :checked="isExist"
  />
</template>

<script setup lang="ts">
import { computed, defineProps, defineModel } from "vue";
const props = defineProps<{
  item: { [key: string]: any };
}>();

const model: any = defineModel();

const isExist = computed(() => {
  return model.value?.[props.item?.id] ? true : false;
});

const selectRow = () => {
  if (isExist.value) {
    delete model.value?.[props.item.id];
  } else {
    model.value[props.item.id] = props.item;
  }
};
</script>
