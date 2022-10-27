import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store/index.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)
app.use(router)

const yelpApiKey = "tHR-j2lTiK8S0jMCx2K_-rbhQM3MEkuOAnuEmdoeKY0ZCl8SYt9eyAjjtV66JRYKEIfa4OhfIc601guBXvW3QuYweRGuGP3X7ZrTsok5D8DPZFElN2dSBDiIXuoqY3Yx"
const axiosInstance = axios.create({
  baseURL: "http://localhost:8081/https://api.yelp.com/v3/",
  // baseURL: "/api", 
  headers: {
    Authorization: `Bearer ${yelpApiKey}`,
  },
  params: {
  
  }
})
app.use(VueAxios, { axios: axiosInstance })

app.provide('axios', app.config.globalProperties.axios)
// app.config.globalProperties.$axios = { ...axiosInstance }

// providing 'axios'
// In your Views, inject axios like this:
/*
import { inject } from 'vue'
const axios = inject('axios')
*/
app.use(store)
app.mount('#app')
