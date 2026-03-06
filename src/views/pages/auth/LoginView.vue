<template>


    <form @submit.prevent="handleSubmit">

        <fieldset class="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-4">
            <legend class="fieldset-legend">Login</legend>

            <label class="label">Matricula</label>
            <input type="text" class="input" v-model=formData.matricula placeholder="Matricula" />

            <label class="label">Senha</label>
            <input type="password" class="input" v-model=formData.senha placeholder="Senha" />



            <button class="btn btn-neutral mt-4">Login</button>
        </fieldset>
    </form>

</template>

<script setup>
import { reactive, watch } from 'vue';

import { useAuthStore } from '@/config/store';

import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const store = useAuthStore()

const { login } = store

const {token} = storeToRefs(store)

const router = useRouter()


watch(token, (newToken) => {
    if (newToken){
        router.push("/")
    }
})

const formData = reactive({
    matricula: "",
    senha: ""
})

function handleSubmit() {

    login(formData.matricula, formData.senha)

}
</script>