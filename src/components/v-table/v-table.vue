<template>
  <div class="w-100">
    <table>
      <thead>
        <tr class="border-bottom">
          <th
            class="p-2 text-uppercase"
            style="font-size: 14px"
            v-for="item in props.schema.columns"
          >
            <slot v-if="item.displaySlot" :name="item.displaySlot" :item="item">
            </slot>
            <span v-else>
              {{ item.displayName }}
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-bottom" v-for="item in paginatedTableData">
          <td
            class="p-2"
            style="font-size: 14px"
            v-for="col in props.schema.columns"
          >
            <slot v-if="col.slotName" :name="col.slotName" :item="item"> </slot>
            <span v-else>{{ resolveByPath(item, col.name) }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import { ISchema } from "../../meta/i-table";
import { resolveByPath } from "../../utils/resolveByPath";

const props = defineProps<{
  schema: ISchema;
  data: { [key: string]: any }[];
  currentPage: number;
  rowsPerPage: number;
}>();

const paginatedTableData = computed(() => {
  const start = (props.currentPage - 1) * props.rowsPerPage;
  const end = start + props.rowsPerPage;
  return props.data.slice(start, end);
});
</script>
