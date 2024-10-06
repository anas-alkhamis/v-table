<script setup lang="ts">
import { ref, defineProps } from "vue";
import { Columns, createTable } from "./tableConfig";

const props = defineProps<{
  columns: Columns;
  data: Array<Record<string, any>>;
  translations: Record<string, any>;
}>();

// Create table utilities
const { getHeaders, getColumns, getCellContext } = createTable({
  columns: props.columns,
  data: props.data,
  translations: props.translations,
  lang: "en",
});

const headers = ref(getHeaders());
const tableData = ref(getColumns());
</script>

<template>
  <div class="card p-3">
    <table class="table">
      <caption>
        Sample Data Table
      </caption>
      <thead class="border-bottom">
        <tr>
          <th
            class="p-2 text-sm font-weight-bold text-uppercase"
            style="font-size: 14px"
            v-for="(item, index) in headers"
            :key="index"
          >
            <span v-if="typeof item === 'string'"> {{ item }}</span>
            <component v-else :is="item" v-slot:default />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border-bottom"
          v-for="(row, rowIndex) in tableData"
          :key="rowIndex"
        >
          <td
            class="p-2 text-sm-left"
            v-for="(column, colIndex) in props.columns"
            :key="colIndex"
          >
            <component
              v-if="column.cell"
              :is="column.cell"
              :row="row"
              v-slot:default
            />
            <span v-else>{{ getCellContext(colIndex, row) }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
