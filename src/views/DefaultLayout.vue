<script setup lang="ts">
import { RouterView } from 'vue-router';
import { House, PanelLeftOpen, Settings2, LayoutDashboard, Landmark, BookmarkPlus, Plus, LogOut } from 'lucide-vue-next';
import { onMounted, ref, watch } from 'vue';

import {jwtDecode} from "jwt-decode";

import { useAuthStore } from '@/config/store';

import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';


const store = useAuthStore()
const router = useRouter();

const {hasLogged, logout} = store

const {token} = storeToRefs(store)

watch(token, (newToken) => {
    if (!newToken){
        router.push("/auth/login")
    }
})


const nome = ref()



onMounted(async () => {


  let value = await hasLogged();

  console.log("logou: " + value)


  if(!value){
    console.log("não esta logado")
    router.push('/auth/login')
  } 

  const decodedToken = jwtDecode(token.value)
  
  nome.value = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
  


})


</script>

<template>
  <div class="drawer lg:drawer-open">
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content bg-base-100">
    <!-- Navbar -->
    <nav class="navbar w-full border-b-1 border-base-200 flex justify-between">
      <label for="my-drawer-4" aria-label="open sidebar" class="btn btn-square btn-ghost">
        <!-- Sidebar toggle icon -->
         <PanelLeftOpen class="my-1.5 inline-block size-4 "/>
      </label>
      <div class="px-4 ">
        <p>Bem Vindo {{nome}}</p>
      </div>
      <button class="btn btn-primary">
        <Plus/>
        <span>Novo agendamento</span>
      </button>
    </nav>
    <!-- Page content here -->
    <div class="p-4">
    <RouterView/>

    </div>
  </div>

  <div class="drawer-side is-drawer-close:overflow-visible  ">
    <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
    <div class="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64 ">
      <!-- Sidebar content here -->
      <ul class="menu w-full grow bg-primary text-primary-content   ">
        <!-- List item -->
        <li>
          <button class="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
            <!-- Home icon -->
             <House  class="my-1.5 inline-block size-4" />
            <span class="is-drawer-close:hidden">Homepage</span>
          </button>
        </li>

         <li>
          <button class="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Dashboard">
            <!-- Home icon -->
             <LayoutDashboard  class="my-1.5 inline-block size-4" />
            <span class="is-drawer-close:hidden">Dashboard</span>
          </button>
        </li>


        <li>
          <button class="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Reservas">
            <!-- Home icon -->
             <BookmarkPlus  class="my-1.5 inline-block size-4" />
            <span class="is-drawer-close:hidden">Reservas</span>
          </button>
        </li>
        
        <li>
          <button class="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Ambientes">
            <!-- Home icon -->
             <Landmark  class="my-1.5 inline-block size-4" />
            <span class="is-drawer-close:hidden">Ambientes</span>
          </button>
        </li>


        <!-- List item -->
        <li>
          <button class="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
            <!-- Settings icon -->
            <Settings2 class="my-1.5 inline-block size-4"  />
            <span class="is-drawer-close:hidden">Settings</span>
          </button>
        </li>


        <!-- List item -->
        <li>
          <button class="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Sair" @click="logout">
            <!-- Settings icon -->
            <LogOut class="my-1.5 inline-block size-4"  />
            <span class="is-drawer-close:hidden">Sair</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</div>
</template> 