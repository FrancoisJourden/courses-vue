<script setup>
import {ref} from "vue";
import Skeleton from "./Skeleton.vue";
import {api, router} from "../../../main.js";
import {useToast} from "vue-toastification";

const props = defineProps(['article'])
const toast = useToast();

const item = ref();
const loadItem = (article) => {
  api.get(`/items/${article.item_id}`)
      .then(onItemLoaded)
      .catch(onLoadItemFailed)
}

const onLoadItemFailed = (error) => {
  if (error.response.status === 401)
    router.push('/login');
  toast.error(error.response.data.message);
}

const onItemLoaded = (response) => {
  item.value = response.data
}

loadItem(props.article);

</script>

<template>
  <Skeleton v-if="!item" :nb-fields="4"/>
  <tr v-else class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <td class="px-6 py-4">
      {{ item.name }}
    </td>
    <td class="px-6 py-4">
      {{ article.quantity }} {{ item.unit}}
    </td>
    <td class="px-6 py-4">
      {{ item.category }}
    </td>
    <td class="px-6 py-4">
      {{ article.canceled ? "Canceled" : article.taken ? "Taken" : "Remaining"}}
    </td>
  </tr>
</template>

<style scoped>

</style>