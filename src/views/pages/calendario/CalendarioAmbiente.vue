<template>

    
</template>

<script setup>
import { onMounted, ref } from 'vue';
import instance from "@/config/api";
import { useRoute } from 'vue-router';

const ambiente = ref(null)

const route = useRoute()


onMounted(async () => {
    const res = await instance.get("calendario/" + route.params.slug +"/dia/" + route.params.dia);
    
    console.log(res.data)
})
</script>