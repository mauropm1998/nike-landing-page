<template>
    <section class="max-container">
        <h3 class="font-palanquin text-4xl font-bold text-center">O Que Os Nossos
            <span class="text-coral-red">Clientes</span>
            Dizem?
        </h3>
        <p class="info-text m-auto mt-4 max-w-lg text-center">
            Ouça histórias genuínas de nossos clientes satisfeitos
            sobre sua experiência excepcional conosco.
        </p>
        <div class="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
            <ReviewCard v-for="review in reviews" :key="review.customerName" :imgURL="review.imgURL"
                :customerName="review.customerName" :rating="review.rating" :feedback="review.feedback" />
        </div>
    </section>
</template>

<script setup>
import { reviews } from '@/constants';
import ReviewCard from '../ReviewCard.vue';
</script>