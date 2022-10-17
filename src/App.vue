

<template>
  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router'
import store from "./store/index";
export default {
  name : 'app',
  store
}
</script>


