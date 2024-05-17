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
                <h2 class="card-title lato-regular text-title-card uppercase">{{ title }}</h2>
                <hr class="bg-yellow-500 border-yellow-500 lg:border-red-500 w-full">
                <div>
                    <div class="grid grid-cols-1 gap-4">
                        <div class="" v-for="(item, index) in list" :key="'benefits'+index">
                            <div class="flex justify-start">
                                <img class="px-2" :src="item?.img" alt="">
                                <p class="lato-regular text-content-card text-left">{{ item?.text }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p></p>
                <div>
                    <p class="bayon-regular text-cost-card">${{ Intl.NumberFormat().format(costmxn) }}</p>
                    <!-- <p class="lato-regular text-title-card uppercase">${{ costusd }} usd</p> -->
                </div>
                <div class="card-actions mt-10">
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
        costusd: 0,
        list: []
    }
)
</script>

<style scoped>
.h-card{
    height: 510px;
}

.bg-card{
    background: rgba(30, 30, 30, 1);

}
</style>