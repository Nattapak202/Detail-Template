<template>
  <div class="q-pa-md">
    <q-table
      :title="titleTable"
      :rows="row"
      :columns="column"
      row-key="name"
    />
  </div>
</template>

<script setup>
defineOptions({
  name: "TableService",
});

const column = [
  { name: "Plant", label: "Plant", align: "left", field: "Plant" },
  { name: "Helpdesk", align: "left", label: "Helpdesk", field: "Plant" },
  { name: "Email", label: "Email", align: "left", field: "Email" },
  { name: "NiceNet", label: "Nice-net", align: "left", field: "NiceNet" },
];

const props = defineProps({
  titleTable: {
    type: String,
    default: "Not Data",
  },
  row: {
    Plant: {
      type: String,
    },
    Helpdesk: {
      type: String,
    },
    Email: {
      type: String,
    },
    NiceNet: {
      type: String,
    },
  },
});
const rows = [];
// [
//   {
//     Plant: "Frozen Yogurt",
//     Helpdesk: 159,
//     Email: 6.0,
//     NiceNet: 24,
//   },
//   {
//     Plant: "Frozen Yogurt",
//     Helpdesk: 159,
//     Email: 6.0,
//     NiceNet: 24,
//   },
//   {
//     Plant: "Frozen Yogurt",
//     Helpdesk: 159,
//     Email: 6.0,
//     NiceNet: 24,
//   },
//   {
//     Plant: "Frozen Yogurt",
//     Helpdesk: 159,
//     Email: 6.0,
//     NiceNet: 24,
//   },
//   {
//     Plant: "Frozen Yogurt",
//     Helpdesk: 159,
//     Email: 6.0,
//     NiceNet: 24,
//   },
//   {
//     Plant: "Frozen Yogurt",
//     Helpdesk: 159,
//     Email: 6.0,
//     NiceNet: 24,
//   },
//   {
//     Plant: "Frozen Yogurt",
//     Helpdesk: 159,
//     Email: 6.0,
//     NiceNet: 24,
//   },
//   {
//     Plant: "Frozen Yogurt",
//     Helpdesk: 159,
//     Email: 6.0,
//     NiceNet: 24,
//   },
//   {
//     Plant: "Frozen Yogurt",
//     Helpdesk: 159,
//     Email: 6.0,
//     NiceNet: 24,
//   },
//   {
//     Plant: "Frozen Yogurt",
//     Helpdesk: 159,
//     Email: 6.0,
//     NiceNet: 24,
//   },
// ];
</script>
