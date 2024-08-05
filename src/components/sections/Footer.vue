<template>
    <footer class="max-container">
        <div class="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col ">
            <div class="flex flex-col items-start">
                <a href="/">
                    <img :src="footerLogo" alt="Nike Logo" width="150" height="46">
                </a>
                <p class="mt-6 text-base leading-6 font-montserrat text-white/80 sm:max-w-sm ">
                    Prepare os calçados para o novo período na loja Nike mais próxima. Encontre o tamanho perfeito na
                    loja. Seja recompensado.
                </p>

                <div class="flex items-center mt-8 gap-5">
                    <div class="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                        v-for="icon in socialMedia" :key="icon.src">
                        <img :src="icon.src" :alt="icon.alt" width="24" height="24">
                    </div>
                </div>
            </div>
            <div class="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
                <div v-for="section in footerLinks" :key="section.title">
                    <h4 class="text-white font-montserrat leading-normal text-lg font-medium mb-6">{{ section.title }}
                    </h4>
                    <ul>
                        <li class="mt-3 text-white/80 font-montserrat text-base leading-normal hover:text-slate-gray"
                            v-for="item in section.links" :key="item.name">
                            <a :href="item.link">{{ item.name }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="flex justify-between text-white/80 mt-24 max-sm:flex-col max-sm:gap-3 max-sm:items-center">
            <div
                class="flex flex-1 font-montserrat text-center text-base justify-start items-center gap-2 cursor-pointer">
                &copy; Copyright. Todos os direitos reservados.
            </div>
            <p class="font-montserrat cursor-pointer">Termos e Condições</p>
        </div>
    </footer>
</template>

<script setup>
import { copyrightSign } from '@/assets/icons';
import { footerLogo } from '@/assets/images';
import { footerLinks, socialMedia } from '@/constants';


</script>