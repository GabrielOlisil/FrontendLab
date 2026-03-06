<script setup>
import {storeToRefs} from "pinia"
import { useAuthStore } from '@/config/store';



const store = useAuthStore()


const {token} = storeToRefs(store);

</script>


<template>
    <h1>About View</h1>


    <p>Store Token: {{ token }}</p>
  
</template>