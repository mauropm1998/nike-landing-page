<template>
    <div class="flex flex-1 flex-col w-full max-sm:w-full">
        <img :src="imgURL" alt="name" class="w-[280px] h-280px">
        <div class="mt-8 flex justify-start items-center gap-2.5">
            <img :src="star" alt="classificação" width="24" height="24">
            <p class="font-montserrat text-slate-gray text-lg leading-normal">(4.5)</p>
        </div>
        <h3 class="mt-2 text-lg leading-normal font-semibold font-palanquin">{{ name }}</h3>
        <p class="mt-2 font-semibold text-coral-red font-montserrat text-lg leading-normal">{{ price }}</p>
    </div>
</template>

<script setup>
import { star } from "@/assets/icons"
defineProps({
    imgURL: String,
    price: String,
    name: String
})
</script>