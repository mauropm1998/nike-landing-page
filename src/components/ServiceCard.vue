<template>
    <div class="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
        <div class="w-11 h-11 flex justify-center items-center rounded-full bg-coral-red">
            <img :src="imgURL" :alt="label" width="24" height="24">
        </div>
        <h3 class="mt-5 font-palanquin text-2xl leading-normal font-bold">{{  label }}</h3>
        <p class="mt-3 break-words font-montserrat text-base leading-normal text-slate-gray">{{ subtext }}</p>
    </div>
</template>

<script setup>
defineProps({
    imgURL: String,
    label: String,
    subtext: String
})
</script>