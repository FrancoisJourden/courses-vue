<script setup>
import {IconSunFilled, IconMoonFilled} from '@tabler/icons-vue'
</script>

<template>


  <nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo"/>
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Courses</span>
      </a>
      <button id="theme-toggle" type="button"
              class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
        <IconMoonFilled id="theme-toggle-dark-icon" class="hidden w-5 h-5"/>
        <IconSunFilled id="theme-toggle-light-icon" class="hidden w-5 h-5"/>
      </button>

    </div>
  </nav>

</template>

<style scoped>

</style>