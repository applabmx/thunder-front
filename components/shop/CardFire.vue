<template>
    <div>
        <div class="card w-80 h-card bg-card rounded-none">
            <div class="">
                <p class="bg-yellow-500 lato-regular p-1 text-card-seller w-20">{{seller}}</p>
            </div>
            <figure class="px-10 pt-10">
                <img :src="image" alt="" />
            </figure>
            <div class="card-body items-center text-center">
                <NuxtLink :to="`/product/${id}`">
                    <h2 class="card-title lato-regular text-content-card-fire text-white">{{ title }}</h2>
                </NuxtLink>
                <p class="bayon-regular text-cost-card-fire main-color">{{ cost.toLocaleString('en-US', {style: 'currency', currency: 'USD'}) }}</p>
                <div class="card-actions">
                    <button class="btn btn-content px-8">Agregar al Carrito</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Articles{
    id: String,
    image: String,
    title: String,
    cost: number,
    seller: String
}

withDefaults(
    defineProps<Articles>(), {
        id: '',
        image: '',
        title: '',
        cost: 0,
        seller: ''
    }
)
</script>

<style scoped>
.h-card{
    height: 510px;
}

.bg-card{
    background: linear-gradient(180deg, #1E1E1E 0%, #000000 100%);
}
</style>