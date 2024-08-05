<template>
    <section id="home" class="w-full flex lg:flex-row flex-col justify-center min-h-screen gap-10 max-container">
        <div class="relative lg:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
            <p class="text-base font-montserrat text-coral-red">Nossa Coleção de Verão</p>
            <h1 class="mt-10 font-palanquin text-8xl max-sm:text-[50px] max-sm:leading-[1.2] font-bold">
                <span class="lg:bg-white lg:whitespace-nowrap relative z-10 pr-10">A Nova Linha</span>
                <br><span class="relative z-20 mr-3">de Sapatos da</span>
                <span class="text-coral-red inline-block mt-3 lg:bg-white lg:whitespace-nowrap relative z-10 pr-10"> Nike</span>
            </h1> 
            <p class="font-montserrat text-slate-gray text-base leading-8 mt-6 mb-14 sm:max-w-sm">Descubra as novidades da Nike, conforto de qualidade e inovação para sua vida ativa.</p>
            <HeroButton label="Compre agora" :iconURL="arrowRight" />
            <div class="flex justify-start items-start flex-wrap w-full mt-20 gap-12">
                <div v-for="stat in statistics" :key="stat.label">
                    <p class="text-2xl font-palanquin font-bold">{{ stat.value }}</p>
                    <p class="leading-7 font-montserrat text-slate-gray">{{ stat.label }}</p>
                </div>
            </div>
        </div>
        <div class="relative flex-1 flex justify-center items-center lg:min-h-screen max-lg:py-40 bg-primary bg-hero bg-cover bg-center">
            <img :src="bigShoeImg" alt="Coleção de Sapatos" width="450" height="450" class="object-contain relative z-10">
            <div class="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                <div v-for="shoe in shoes" :key="shoe">
                    <ShoeCard
                        :imgURL="shoe"
                        :bigShoeImg="bigShoeImg"
                        @change-big-shoe-image="onChangeBigShoeImage"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import HeroButton from "../HeroButton.vue";
import ShoeCard from "../ShoeCard.vue";
import { arrowRight } from "../../assets/icons/index";
import { bigShoe1 } from "../../assets/images/index";
import { statistics, shoes } from "@/constants";
import { ref } from "vue";


const bigShoeImg = ref(bigShoe1);
const onChangeBigShoeImage = (shoe) => {
    bigShoeImg.value = shoe;
}
</script>