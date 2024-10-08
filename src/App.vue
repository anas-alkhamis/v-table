<template>
  <div class="card p-3 overflow-auto m-auto mt-5" style="width: 96%">
    <v-search v-model="searchValue"></v-search>
    <v-table-header
      :label="`Showing  ${(currentPage - 1) * rowsPerPage + 1} to ${
        currentPage * rowsPerPage
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
      v-model="currentPage"
      :rowsPerPage="rowsPerPage"
      :totalRows="totalRows"
      @update="changePage"
      :withInput="true"
    ></v-pagination>
  </div>
</template>
<script setup lang="ts">
import data1 from "./assets/MOCK_DATA(1).json";
import { defineAsyncComponent, ref, watch } from "vue";
import { ISchema } from "./meta/i-table";

const currentPage = ref(1);
const searchValue = ref("");
const dataTable = ref<{ [key: string]: string }[]>(data1);
const rowsPerPage = 10;
const totalRows = ref(dataTable.value.length);

const schema1: ISchema = {
  searchableColumns: ["car_make", "car_model_year"],
  columns: [
    {
      name: "checkbox",
      displayName: "ID",
      displaySlot: "checkbox",
      slotName: "checkbox",
    },
    {
      name: "id",
      displayName: "ID",
    },
    {
      name: "car_make",
      displayName: "Car Make",
      slotName: "car",
    },
    {
      name: "car_model_year",
      displayName: "Car Model Year",
    },
    {
      name: "car_vin",
      displayName: "Car VIN",
    },
    {
      name: "action",
      slotName: "action",
      displayName: "Action",
    },
  ],
};
const schema2: ISchema = {
  searchableColumns: [],
  columns: [
    {
      name: "id",
      displayName: "ID",
    },
    {
      name: "fullname.fName",
      displayName: "First Name",
    },
    {
      name: "fullname.lName",
      displayName: "Last Name",
    },
    {
      name: "email",
      displayName: "Email",
    },
    {
      name: "car.make",
      displayName: "Car Make",
    },
    {
      name: "car.model",
      displayName: "Car Model",
    },
    {
      name: "car.year",
      displayName: "Car Year",
    },
    {
      name: "address.street",
      displayName: "Street Address",
    },
    {
      name: "address.city",
      displayName: "City",
    },
    {
      name: "address.state",
      displayName: "State",
    },
    {
      name: "address.zip.code",
      displayName: "ZIP Code",
    },
  ],
};
const schema3: ISchema = {
  columns: [
    {
      name: "id",
      displayName: "ID",
    },
    {
      name: "first_name",
      displayName: "First Name",
    },
    {
      name: "last_name",
      displayName: "Last Name",
    },
    {
      name: "email",
      displayName: "Email",
    },
    {
      name: "gender",
      displayName: "Gender",
    },
    {
      name: "ip_address",
      displayName: "IP Address",
    },
  ],
};
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
const VIconButton = defineAsyncComponent(
  () => import("./components/v-icon-button/v-icon-button.vue")
);
const VSearch = defineAsyncComponent(
  () => import("./components/v-search/v-search.vue")
);
</script>
