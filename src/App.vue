<script setup>
import Navbar from "./components/Navbar.vue";
import {onMounted} from "vue";
import {initDarkMode} from "./darkMode.js";
import {api, router} from "./main.js";

onMounted(() => {
  initDarkMode()
  if(sessionStorage.getItem('api_token'))
    api.defaults.headers['Authorization'] = `Bearer ${sessionStorage.getItem('api_token')}`
  else if(router.currentRoute.value.path !== "/login")
    router.push('/login')
})
</script>

<template>
  <body class="h-screen flex flex-col dark:bg-gray-900 antialiased">
    <header><Navbar/></header>
    <main class="grow overflow-y-scroll"><router-view/></main>
  </body>
</template>

<style scoped>
</style>
