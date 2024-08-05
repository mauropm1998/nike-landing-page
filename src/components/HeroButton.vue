<template>
    <button :class="backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : ''"
        class="flex justify-center items-center gap-2 px-5 py-3 border font-montserrat text-sm leading-none rounded-full bg-coral-red text-white border-coral-red">
        {{ label }}
        <img v-if="iconURL" :src="iconURL" alt="arrow right icon" class="ml-2 rounded-full w-5 h-5">
    </button>
</template>

<script setup>
defineProps({
    label: String,
    iconURL: String,
    backgroundColor: String,
    textColor: String,
    borderColor: String
})
</script>