<template>
  <input
    class="form-check-input"
    type="checkbox"
    style="cursor: pointer; width: 20px; height: 20px"
    @click="selectBulkRow"
    :checked="isBulkExist"
    :indeterminate="Object.values(model).length > 0 && !isBulkExist"
  />
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
const emit = defineEmits(["update"]);
const props = defineProps<{
  dataList: { [key: string]: any }[];
}>();

const model: any = defineModel();
const isBulkExist = computed(() => {
  return props.dataList.find((item) => !model.value[item.id]) ? false : true;
});

const selectBulkRow = () => {
  if (isBulkExist.value) {
    props.dataList.forEach((item) => {
      delete model.value?.[item.id];
    });
  } else {
    props.dataList.forEach((item) => {
      model.value[item.id] = item;
    });
  }
};
</script>
