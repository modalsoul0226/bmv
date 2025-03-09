<script setup lang="ts">
import type { Film } from "~/types";
import type { TableColumn } from "@nuxt/ui";

const films = await fetchFilms();
// const data = ref<Film[]>(films);
// const columns = [];
// const films = [{ id: 1, title: "test" }];
const columns = [
  {
    key: "id",
    label: "#",
    sortable: true,
  },
  {
    key: "title",
    label: "Title",
  },
  {
    key: "title_original",
    label: "Original Title",
  },
  {
    key: "year",
    label: "Year",
    sortable: true,
  },
  {
    key: "language",
    label: "Language",
  },
  {
    key: "runtime",
    label: "Runtime (min)",
    sortable: true,
  },
];

// const columns: TableColumn<Film>[] = [
//   {
//     key: "id",
//   },
//   {
//     key: "title",
//   },
//   {
//     key: "title_original",
//   },
//   {
//     key: "year",
//   },
//   {
//     key: "language",
//   },
//   {
//     key: "runtime",
//   },
// ];
// const columns: TableColumn<Film>[] = [
//   {
//     accessorKey: "id",
//     header: "#",
//   },
//   {
//     accessorKey: "title",
//     header: "Title",
//   },
//   {
//     accessorKey: "title_original",
//     header: "Original Title",
//   },
//   {
//     accessorKey: "year",
//     header: "Year",
//   },
//   {
//     accessorKey: "language",
//     header: "Language",
//   },
//   {
//     accessorKey: "runtime",
//     header: "Runtime",
//   },
// ];
</script>

<template>
  <!-- <UTable :data="films" :columns="columns" class="flex-1" /> -->
  <UTable :rows="films" :columns="columns" />
</template>
