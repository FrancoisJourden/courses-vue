<script setup>
import {onMounted, ref} from "vue";
import {api, router} from "../main.js";
import {useToast} from "vue-toastification";
import ShoppingList from "../components/shopping_list/ShoppingList.vue";
import Header from "../components/shopping_list/Header.vue";

const toast = useToast();
const articles = ref();

onMounted(() => {
  api.get('/articles')
      .then(response => articles.value = response.data)
      .catch(onFetchFail)
})

const onFetchFail = (error) => {
  if(error.response.status === 401)
    router.push('/login');
  toast.error(error.response.data.message);
}
</script>

<template>
  <div class="relative overflow-x-auto m-8 flex flex-col gap-4">
    <Header/>
    <ShoppingList :articles="articles"/>
  </div>
</template>

<style scoped>

</style>