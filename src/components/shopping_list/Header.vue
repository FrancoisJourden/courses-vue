<script setup>
import {IconPlus, IconSearch} from '@tabler/icons-vue'
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900 flex items-center">
    <div class="mx-auto w-full">
      <!-- Start coding here -->
      <div class="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <div class="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
          <div>
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative mt-1">
              <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <IconSearch class="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input type="text" id="table-search" class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items">
            </div>
          </div>
          <button type="button"
                  class="flex items-center justify-center px-4 py-2 text-sm font-medium dark:text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
            <IconPlus/>
            Add product
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>