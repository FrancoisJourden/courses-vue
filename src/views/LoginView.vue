<script setup>
import {onMounted, ref} from 'vue'
import {initFlowbite} from "flowbite";
import EmailInput from "../components/login/EmailInput.vue";
import PasswordInput from "../components/login/PasswordInput.vue";
import ConnectButton from "../components/login/connectButton.vue";
import Spinner from "../components/Spinner.vue";
import {api, router} from "../main.js";
import {useToast} from "vue-toastification";

const toast = useToast();

const email = ref("root@localhost.fr");
const password = ref("lkU5q1N6anx1tqBc");

const email_error = ref("");
const password_error = ref("");

const logging_in = ref(false);

onMounted(() => {
  initFlowbite();
})

function handleRequestError(error) {
  if (!error.response)
    return toast.error("An error happened");

  switch (error.response.data.status) {
    case 401:
      toast.warning("Wrong email or password")
      break;
    default:
      toast.error("An error happened");
      break;
  }
}

function handleRequestSuccess(response) {
  sessionStorage.setItem('api_token', response.data.authorisation.token);
  api.defaults.headers['Authorization'] = `Bearer ${response.data.authorisation.token}`
  toast.success("Connected successfully");
  router.push('/');
}

const validateEmail = () => {
  if (email.value == null || email.value === "") return email_error.value = "Please give an email";
  return email_error.value = "";
}

const validatePassword = () => {
  if (password.value == null || password.value === "") return password_error.value = "Please give a password";
  return password_error.value = "";
}

const validateForm = () => {
  let email_validated = validateEmail() === "";
  let password_validated = validatePassword() === "";

  return !(email_validated && password_validated);
}

const onSubmit = async () => {
  if (validateForm()) return;

  logging_in.value = true;

  api.post('/login', {'email': email.value, 'password': password.value})
      .then(handleRequestSuccess)
      .catch(handleRequestError)
      .finally(() => logging_in.value = false);

}

</script>

<template>
  <form class="h-full max-w-md p-2 mx-auto flex flex-col gap-2 justify-center" @submit="onSubmit">
    <EmailInput v-model="email" :error-message="email_error"/>
    <PasswordInput v-model="password" :error-message="password_error"/>
    <Spinner v-if="logging_in" class="mx-auto"/>
    <ConnectButton v-if="!logging_in" @click="onSubmit"/>
  </form>
</template>

<style scoped>

</style>