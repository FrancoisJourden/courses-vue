<script setup>
import Skeleton from "./table/Skeleton.vue";
import Row from "./table/Row.vue";

defineProps(['articles'])

const renderStatus = (article) => {
  if (article.taken) return "Taken";
  if (article.canceled) return "Canceled";
  return "Remaining";
}

const fields = [
  {'name': 'item.name', display: 'Product name'},
  {'name': 'article.quantity', display: 'Quantity'},
  {'name': 'item', display: 'Category'},
  {'name': 'article.status', display: 'Status', render: renderStatus},
]


</script>

<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">Product name</th>
        <th scope="col" class="px-6 py-3">Quantity</th>
        <th scope="col" class="px-6 py-3">Category</th>
        <th scope="col" class="px-6 py-3">Status</th>
      </tr>
      </thead>
      <tbody>
      <Skeleton v-if="!articles" v-for="n in Array(10).keys()" :nb-fields="fields.length"/>
      <tr v-else-if="articles.value === []">
        <td :colspan="4">There's no article in the list</td>
      </tr>
      <Row v-else v-for="article in articles" :article="article"/>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>