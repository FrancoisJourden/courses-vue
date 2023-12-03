<script setup>
defineProps(['nbFields'])
</script>

<template>

  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <td v-for="n in Array(nbFields).keys()" class="px-6 py-4 h-2 animate-pulse">
      <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    </td>
  </tr>
</template>

<style scoped>

</style>