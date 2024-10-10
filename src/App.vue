<template>
  <div class="card p-3 overflow-auto m-auto mt-5" style="width: 96%">
    <v-search v-model="searchValue"></v-search>
    <v-table-header
      :label="`Showing  ${(currentPage - 1) * rowsPerPage + 1} to ${
        totalRows < currentPage * rowsPerPage
          ? totalRows
          : currentPage * rowsPerPage
      }  of ${totalRows} entity`"
    ></v-table-header>
    <v-table
      :schema="schema1"
      :data="dataTable"
      :currentPage="currentPage"
      :rowsPerPage="rowsPerPage"
    >
      <template #action>
        <v-icon-button icon="bi bi-trash"></v-icon-button>
        <v-icon-button icon="bi bi-pencil"></v-icon-button>
      </template>
      <template #car="{ item }">
        <v-icon-button icon="bi bi-car-front"></v-icon-button>
        {{ item.car_make }}
      </template>
      <template #checkbox="{ item }"> <v-checkbox :item="item" /> </template>
    </v-table>
    <v-pagination
      v-if="totalRows > rowsPerPage"
      v-model="currentPage"
      :rowsPerPage="rowsPerPage"
      :totalRows="totalRows"
      @update="changePage"
      :withInput="true"
    ></v-pagination>
  </div>
  <
  <!-- V List View Items  -->
  <div class="w-50 m-auto mt-5">
    <v-list-view :listGroup="listGroup as any">
      <template #list-group="{ item }">
        <v-list-group :item="item">
          <template #list-item="{ item }">
            <v-list-item :item="item">
              <template #action="{ item }">
                <component
                  v-if="item?.action"
                  :item="item"
                  :is="listItemActions[item?.action]"
                ></component>
              </template>
            </v-list-item>
          </template>
        </v-list-group>
      </template>
    </v-list-view>
  </div>
</template>
<script setup lang="ts">
import data1 from "./assets/MOCK_DATA(1).json";
import listGroup from "./assets/MOCK_DATA_LIST_VIEW.json";
import { ListItemAction } from "./meta/enums/list-item-action";
import { schema1 } from "./schema/table-schema";
import { ComponentOptionsMixin, defineAsyncComponent, ref, watch } from "vue";

const currentPage = ref(1);
const searchValue = ref("");
const dataTable = ref<{ [key: string]: string }[]>(data1);
const rowsPerPage = 10;
const totalRows = ref(dataTable.value.length);

const changePage = (page: number) => {
  currentPage.value = page;
};
watch(searchValue, (to: string) => {
  if (!to?.trim().length || !schema1?.searchableColumns?.length) {
    dataTable.value = data1;
    totalRows.value = dataTable.value.length;
  } else {
    dataTable.value = data1.filter((item: { [key: string]: string }) => {
      const found = schema1?.searchableColumns?.find((searchKey: string) =>
        item[searchKey].toLowerCase().includes(to?.toLowerCase())
      );
      return found;
    });
    totalRows.value = dataTable.value.length;
  }
});
const VTable = defineAsyncComponent(
  () => import("./components/v-table/v-table.vue")
);
const VPagination = defineAsyncComponent(
  () => import("./components/v-pagination/v-pagination.vue")
);
const VTableHeader = defineAsyncComponent(
  () => import("./components/v-table-header/v-table-header.vue")
);
const VCheckbox = defineAsyncComponent(
  () => import("./components/v-checkbox/v-checkbox.vue")
);
const VRadio = defineAsyncComponent(
  () => import("./components/v-radio/v-radio.vue")
);
const VIconButton = defineAsyncComponent(
  () => import("./components/v-icon-button/v-icon-button.vue")
);
const VSearch = defineAsyncComponent(
  () => import("./components/v-search/v-search.vue")
);
const VListItem = defineAsyncComponent(
  () => import("./components/v-list-item/v-list-item.vue")
);
const VListGroup = defineAsyncComponent(
  () => import("./components/v-list-group/v-list-group.vue")
);
const VListView = defineAsyncComponent(
  () => import("./components/v-list-view/v-list-view.vue")
);
const listItemActions: { [key: string]: ComponentOptionsMixin } = {
  [ListItemAction.VCheckbox]: VCheckbox,
  [ListItemAction.VCRadio]: VRadio,
};
</script>
