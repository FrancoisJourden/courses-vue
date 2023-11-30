<script setup>
defineProps(['modelValue', 'errorMessage'])
defineEmits(['update:modelValue'])

</script>

<template>
  <div>
    <div class="relative">
      <input type="email" id="email_input"
             class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg appearance-none dark:text-white focus:outline-none focus:ring-0 peer"
             :class="{
               'dark:border-red-500 border-red-600 dark:focus:border-red-500 focus:border-red-600': errorMessage,
               'border-1 border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600': !errorMessage
             }"
             placeholder=" "
             :value="modelValue"
             @input="$emit('update:modelValue', $event.target.value)"/>
      <label for="email_input"
             class="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
             :class="{ 'text-red-600 dark:text-red-500': errorMessage, 'text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500': !errorMessage}">
        Email
      </label>
    </div>
    <p v-if="errorMessage" id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
      {{ errorMessage }}
    </p>
  </div>
</template>

<style scoped>

</style>