import { defineStore } from 'pinia'
import { ref, watch, watchEffect } from 'vue'
import instance from './api'

const ACCESS_TOKEN_KEY = "access-token"


export const useAuthStore = defineStore('auth', () => {

    const token = ref()


    async function login(matricula, senha) {



        let res = await instance.post('user/login', {
            userName: matricula,
            passWord: senha
        })
        if (res.status == 200) {
            token.value = res.data.token
        }
        console.log(token.value)
    }

    async function logout() {


        let res = await instance.post("user/logout")

        console.log(res.data);

        token.value = null;
        localStorage.removeItem(ACCESS_TOKEN_KEY)
    }

    watch(token, (newToken) => {


        if (newToken) {

            localStorage.setItem(ACCESS_TOKEN_KEY, newToken)
            console.log("novo token armazenado")
        }
    })

    async function hasLogged() {

        const storedToken = localStorage.getItem(ACCESS_TOKEN_KEY);

        if (storedToken != null) {
            token.value = storedToken
            return true
        }

        console.log('token undefined')
        return false;

    }

    return { token, login, hasLogged, logout }
})