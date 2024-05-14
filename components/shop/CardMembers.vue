<template>
    <div>
        <div class="
            card w-80
            xs:w-60
            md:w-60 
            lg:w-60
            xl:w-64 
            h-card bg-card rounded-none"
        >
            <div class="card-body items-center text-center">
                <h2 class="card-title lato-regular text-title-card uppercase mt-6">{{ title }}</h2>
                <hr class="bg-yellow-500 border-yellow-500 w-full">
                <div>
                    <div class="grid grid-cols-1 gap-4">
                        <div>
                            <p class="bayon-regular text-cost-card mt-10">${{ Intl.NumberFormat().format(costmxn) }}</p>
                            <p class="lato-regular text-title-card uppercase mb-8">${{ costusd }} USD</p>
                        </div>
                    </div>
                </div>

                <div class="card-actions">
                    <button class="btn btn-card px-10" @click="sendWhatsapp">Contratar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { sendWhatsapp } from '~/assets/data/function';

interface Benefits {
    title: string, 
    costmxn: number,
    costusd: number,
    list:  any,
}

withDefaults(
    defineProps<Benefits>(), {
        title: '',
        costmxn: 0,
        costusd: 0
    }
)
</script>

<style scoped>
.h-card{
    height: 380px;
}

.bg-card{
    background: rgba(30, 30, 30, 1);

}
</style>