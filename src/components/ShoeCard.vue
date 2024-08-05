<template>
    <div @click="onClick" :class="{'!border-coral-red': imgURL.bigShoe === bigShoeImg}" class="border-2 rounded-xl border-transparent cursor-pointer max-sm:flex-1">
        <div class="flex justify-center items-center bg-card bg-center bg-cover rounded-xl sm:w-28 sm:h-28 max-sm:p-4">
            <img class="object-contain" :src="imgURL.thumbnail" alt="Coleção de sapatos" width="90" height="80">
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(["change-big-shoe-image"]);
const props = defineProps({
    imgURL: Object,
    bigShoeImg: String
})

const onClick = () => {
    if(props.bigShoeImg !== props.imgURL) {
        emit("change-big-shoe-image", props.imgURL.bigShoe)
    }
}
</script>