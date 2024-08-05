<template>
    <section id="produtos" class="max-container max-sm:mt-12">
        <div class="flex flex-col justify-start gap-5">
             <h2 class="text-3xl font-palanquin font-bold">Nossos Produtos <span class="text-coral-red">Populares</span></h2>
             <p class="md:max-w-lg mt-2 font-montserrat text-lg text-slate-gray">Experimente qualidade e estilo de alto nível com nossas seleções mais procuradas. Descubra um mundo de conforto, design e valor</p>
        </div>
        <div class="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
            <PopularProductCard 
                v-for="product in products" 
                :key="product.name" 
                :imgURL="product.imgURL" 
                :name="product.name" 
                :price="product.price"
            />
        </div>
    </section>
</template>

<script setup>
import { products } from "@/constants";
import PopularProductCard from "../PopularProductCard.vue";
</script>