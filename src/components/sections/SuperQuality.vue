<template>
    <section class="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
        <div class="flex flex-1 flex-col ">
            <h2 class="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                fornecemos sapatos de
                <span class="text-coral-red">
                    super qualidade
                </span>
            </h2>
            <p class="mt-4 lg:max-w-lg info-text">
                Garantindo conforto e estilo premium, nossos calçados meticulosamente elaborados são projetados para
                elevar sua experiência, proporcionando qualidade incomparável, inovação e um toque de elegância.
            </p>
            <p class="mt-4 lg:max-w-lg info-text">Nossa dedicação aos detalhes e excelência garante sua satisfação.</p>
            <div class="mt-11">
                <HeroButton label="Ver detalhes" />
            </div>
        </div>
        <div class="flex-1 justify-center items-center flex ">
            <img :src="shoe8" alt="Nike Shoe Super Quality" width="450" height="400" class="object-contain">
        </div>
    </section>
</template>

<script setup>
import HeroButton from "../HeroButton.vue";
import { shoe8 } from "@/assets/images";
</script>