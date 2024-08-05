<template>
    <section id="contactos" class="max-container flex justify-between items-center max-lg:flex-col gap-10">
        <h3 class="text-4xl max-sm:text-center leading-[68px] max-sm:text-3xl lg:max-w-md font-palanquin font-bold">
            Inscreva-se
            Para
            <span class="text-coral-red">Atualizações</span>
        </h3>
        <div
            class="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border border-slate-gray rounded-full">
            <input type="email" placeholder="Seu email" class="input">
            <div class="flex max-sm:justify-center items-center max-sm:w-full">
                <HeroButton label="Inscrever" />
            </div>
        </div>
    </section>
</template>

<script setup>
import HeroButton from '../HeroButton.vue';


</script>