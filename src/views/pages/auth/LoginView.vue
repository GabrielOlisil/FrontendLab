<template>
    <div class="min-h-screen flex items-center justify-center bg-base-200 p-4">

        <div class="card w-full max-w-sm bg-base-100 shadow-xl">

            <div class="card-body">

                <h2 class="text-2xl font-bold text-center">
                    Login
                </h2>

                <!-- escolha tipo -->
                <div class="flex justify-center mt-2">
                    <div class="join">
                        <button class="btn join-item" :class="{ 'btn-active': loginType === 'professor' }"
                            @click="loginType = 'professor'">
                            Professor
                        </button>

                        <button class="btn join-item" :class="{ 'btn-active': loginType === 'admin' }"
                            @click="loginType = 'admin'">
                            Admin
                        </button>
                    </div>
                </div>

                <form class="mt-4 space-y-3" @submit.prevent="handleSubmit">

                    <!-- PROFESSOR -->
                    <div v-if="loginType === 'professor'">
                        <label class="label">
                            <span class="label-text">Matrícula</span>
                        </label>

                        <input v-model="formData.matricula" type="text" placeholder="Digite sua matrícula"
                            class="input input-bordered w-full" />
                    </div>

                    <!-- ADMIN -->
                    <div v-if="loginType === 'admin'" class="space-y-3">

                        <div>
                            <label class="label">
                                <span class="label-text">Usuário</span>
                            </label>

                            <input v-model="formData.matricula" type="text" placeholder="Usuário"
                                class="input input-bordered w-full" />
                        </div>

                        <div>
                            <label class="label">
                                <span class="label-text">Senha</span>
                            </label>

                            <input v-model="formData.senha" type="password" placeholder="Senha"
                                class="input input-bordered w-full" />
                        </div>

                    </div>

                    <button class="btn btn-primary w-full mt-4">
                        Entrar
                    </button>

                </form>

            </div>
        </div>

    </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue';

import { useAuthStore } from '@/config/store';

import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const store = useAuthStore()

const { login } = store

const { token } = storeToRefs(store)

const router = useRouter()

const loginType = ref('professor')



watch(token, (newToken) => {
    if (newToken) {
        router.push("/")
    }
})

const formData = reactive({
    matricula: "",
    senha: ""
})

async function handleSubmit() {

    if (loginType == "professor") {
        await login(formData.matricula)
    }

    await login(formData.matricula, formData.senha)

}
</script>