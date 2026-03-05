import { defineStore } from 'pinia'
import { ref } from 'vue'
import instance from './api'


export const useAuthStore = defineStore('auth', () => {

    const token = ref('')
    const refreshToken = ref('')


    async function login(username, senha) {

        console.log(username, senha)


        let res = await instance.get('up')

        token.value = 'token + ' + res.data.status

        refreshToken.value = 'refreshToken + ' + res.data.status


    }

    return { token, refreshToken, login }
})