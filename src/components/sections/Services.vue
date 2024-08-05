<template>
    <section class="max-container flex flex-wrap justify-center gap-9">
        <ServiceCard 
            v-for="service in services" 
            :key="service.label" 
            :imgURL="service.imgURL" 
            :label="service.label"
            :subtext="service.subtext"
        />
    </section>
</template>

<script setup>
import { services } from "@/constants";
import ServiceCard from "../ServiceCard.vue";
</script>