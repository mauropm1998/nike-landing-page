<template>
    <header class="padding-x py-8 absolute z-10 w-full">
        <nav class="flex justify-between items-center max-container">
            <a href="/">
                <img :src="headerLogo" alt="Logo" width="130" height="29">
            </a>
            <ul class="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                <li v-for="item in navLinks" :key="item.label">
                    <a :href="item.href" class="font-montserrat leading-normal text-base text-slate-gray">
                        {{ item.label }}
                    </a>
                </li>
            </ul>
            <div class="hidden max-lg:block">
                <img :src="hamburger" alt="Hamburger" height="25" width="25">
            </div>
        </nav>
    </header>
</template>

<script setup>
import { headerLogo } from "../assets/images/index";
import { hamburger } from "../assets/icons/index";
import { navLinks } from "../constants/index";
</script>