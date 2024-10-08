<template>
  <div class="card p-3 overflow-auto m-auto mt-5" style="width: 96%">
    <v-table-header
      :label="`Showing  ${(currentPage - 1) * rowsPerPage || 1} to ${
        currentPage * rowsPerPage
      }  of ${data1.length} entity`"
    ></v-table-header>
    <v-table
      :schema="schema1"
      :data="data1"
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
      :totalRows="data1.length"
      @update="changePage"
      :withInput="true"
    ></v-pagination>
  </div>
</template>
<script setup lang="ts">
import data1 from "./assets/MOCK_DATA(1).json";
import { defineAsyncComponent, ref } from "vue";
import { ISchema } from "./meta/i-table";

const currentPage = ref(1);
const rowsPerPage = 10;
const changePage = (page: number) => {
  currentPage.value = page;
};
const schema1: ISchema = {
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
</script>
