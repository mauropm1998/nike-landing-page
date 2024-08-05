<template>
    <section class="flex flex-wrap items-center max-lg:flex-col-reverse gap-10 max-container">
        <div class="flex-1">
            <img :src="offer" width="600" height="500" class="object-contain w-full">
        </div>
        <div class="flex flex-1 flex-col">
            <h2 class="mt-10 font-palanquin text-4xl font-bold lg:max-w-lg">
                Oferta
                <span class="text-coral-red">
                    Especial
                </span>
            </h2>
            <p class="mt-4 lg:max-w-lg info-text">
                Embarque em uma jornada de compras que redefine sua experiência com ofertas imbatíveis. Desde seleções
                de primeira linha até economias incríveis, oferecemos um valor incomparável que nos diferencia.
            </p>
            <p class="mt-4 lg:max-w-lg info-text">Navegue por um mundo de possibilidades projetadas para satisfazer seus
                desejos únicos, superando as mais elevadas expectativas. Sua jornada conosco é nada menos que
                excepcional.
            </p>
            <div class="mt-11 flex flex-wrap gap-4">
                <HeroButton label="Ver detalhes" />
                <HeroButton label="Saiba mais" backgroundColor="!bg-white" borderColor="!border-slate-gray"
                    textColor="!text-slate-gray" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { offer } from '@/assets/images';
import HeroButton from '../HeroButton.vue';
import { arrowRight } from '@/assets/icons';


</script>