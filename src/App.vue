<script setup>
import Navbar from "./components/Navbar.vue";
import {onMounted} from "vue";
import {initDarkMode} from "./darkMode.js";

onMounted(initDarkMode)
</script>

<template>
  <body class="h-screen flex flex-col dark:bg-gray-900 antialiased">
    <header><Navbar/></header>
    <main class="grow"><router-view/></main>
  </body>
</template>

<style scoped>
</style>
