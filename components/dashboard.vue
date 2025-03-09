<script setup lang="ts">
import type { TableColumn } from "@nuxt/ui";

const films = await fetchFilms();
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
</script>

<template>
  <UTable :rows="films" :columns="columns" />
</template>
