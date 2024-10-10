<template>
  <div class="w-100">
    <table class="w-100">
      <thead>
        <tr class="border-bottom">
          <th
            class="p-2 text-uppercase"
            style="font-size: 14px"
            v-for="item in schema.columns"
          >
            <slot
              v-if="item.displaySlot"
              :name="item.displaySlot"
              :item="{ item, dataList: paginatedTableData }"
            >
            </slot>
            <span v-else>
              {{ item.displayName }}
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-bottom" v-for="item in paginatedTableData">
          <td class="p-2" style="font-size: 14px" v-for="col in schema.columns">
            <slot v-if="col.slotName" :name="col.slotName" :item="item"> </slot>
            <span v-else>{{ resolveByPath(item, col.name) }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, toRefs } from "vue";
import { ITableProps } from "../../meta/i-table";
import { resolveByPath } from "../../utils/resolveByPath";

const props = defineProps<ITableProps>();
const { schema, data, currentPage, rowsPerPage } = toRefs(props);

const paginatedTableData = computed(() => {
  const start = (currentPage.value - 1) * rowsPerPage.value;
  const end = start + rowsPerPage.value;
  return data.value.slice(start, end);
});
</script>
