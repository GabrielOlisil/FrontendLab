import axios from "axios";

import { useAuthStore } from "./store";
import { storeToRefs } from "pinia";





const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true

});

instance.interceptors.request.use((config) => {
  const store = useAuthStore()

  const {token} = storeToRefs(store)
  
  if (token != null) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config

}, (error) => {
  return Promise.reject(error);
})


export default instance;
