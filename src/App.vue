<script setup lang="ts">
import v_table from "./components/v-table/v-table.vue";
import vBotton from "./components/v-button/v-button.vue";
import { Columns } from "./components/v-table/tableConfig";
import data from "./assets/MOCK_DATA.json"
import translations from "./translation"
const columns: Columns = [
  {
    accessKey: "id",
    header: "ID",
  },
  {
    accessKey: "first_name",
    header: "First Name",
  },
  {
    accessKey: "last_name",
    header: "Last Name",
  },
  {
    accessKey: "email",
    header: "Email",
  },
  {
    accessKey: "gender",
    header: "Gender",
  },
  {
    accessKey: "ip_address",
    header: "IP Address",
  },
  {
    accessKey: "actions",
    header: vBotton, // You can replace with an actual Vue component
    cell: vBotton,
  },
];
</script>

<template>
  <v_table :columns="columns" :data="data" :translations="translations" />
</template>
