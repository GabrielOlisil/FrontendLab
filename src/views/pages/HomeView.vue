<script setup>
import {storeToRefs} from "pinia"
import { useAuthStore } from '@/config/store';



const store = useAuthStore()


const {token, refreshToken} = storeToRefs(store);

</script>

<template>
    <h1>Home View</h1>


    <p>Store Token: {{ token }}</p>
    <p>Store Refresh Token: {{ refreshToken }}</p>
  
</template>