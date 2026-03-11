<script setup>
import { storeToRefs } from "pinia"
import { useAuthStore } from '@/config/store';
import "cally";
import { onMounted, ref, watch } from "vue";
import instance from "@/config/api";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";
import { useRouter } from "vue-router";



const store = useAuthStore()

const labs = ref(null)

const selected = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Porto_Velho'
}).format(new Date())


const { token } = storeToRefs(store);

const router = useRouter()

onMounted(async () => {




    try {
        const response = await instance.get("ambiente");
        const data = response.data["$values"]

        labs.value = data

        console.log(data)

    } catch {
        console.log("Erro ao buscar ambientes")
    }
})

const handleCalendar = (slug) => {
    router.push( 'calendario/' + slug + '/' + selected);
}


</script>

<template>

    <article class=" w-full p-4">


        <section class="grid lg:grid-cols-2 gap-4 m-auto lg:w-200">
            <p>Selected range: {{ selected }}</p>




            <calendar-date v-model="selected"
                class="cally bg-base-100 border border-base-300 shadow-lg rounded-box w-full ">

                <chevron-left aria-label="Previous" slot="previous"></chevron-left>

                <chevron-right aria-label="Next" slot="next"></chevron-right>

                <calendar-month></calendar-month>
            </calendar-date>

            <div class="card bg-base-100 shadow-sm">
                <div class="card-body">
                    <h2 class="text-3xl font-bold">Ambientes</h2>
                    <ul class="mt-6 flex flex-col gap-2 text-xs" v-if="labs == null">
                        <li>Carregando</li>
                    </ul>

                    <ul class="mt-6 flex flex-col gap-2 text-xs" v-else>
                        <li v-for="lab in labs" :key="lab.id">
                            <btn class="btn btn-ghost w-full flex justify-start" @click="handleCalendar(lab.slug)">{{ lab.nome }}</btn>

                        </li>
                    </ul>

                </div>
            </div>
            <div class="card     bg-base-100 shadow-sm lg:col-span-2">
                <div class="card-body">
                    <span class="badge badge-xs badge-warning">Most Popular</span>
                    <div class="flex justify-between">
                        <h2 class="text-3xl font-bold">Premium</h2>
                        <span class="text-xl">$29/mo</span>
                    </div>
                    <ul class="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                            <span>High-resolution image generation</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Customizable style templates</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Batch processing capabilities</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                            <span>AI-driven image enhancements</span>
                        </li>
                        <li class="opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                            <span class="line-through">Seamless cloud integration</span>
                        </li>
                        <li class="opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                            <span class="line-through">Real-time collaboration tools</span>
                        </li>
                    </ul>
                    <div class="mt-6">
                        <button class="btn btn-primary btn-block">Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    </article>



</template>