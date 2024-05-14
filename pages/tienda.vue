<template>
    <div>
        <FirstHero :style="urlImage">
            <div>
                <div class="bg-opacity-60"></div>
                <div class="text-neutral-content">
                    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
                        <div class="pl-6 lg:pl-16 xl:pl-16 2xl:pl-16 pt-10">
                            <h1 class="mb-5 lato-regular text-banner-title text-white">Amazon Fire TV <br> Stick 4K Max</h1>
                            <p class="mb-5 lato-regular text-banner-subtitle">
                                Nuevo dispositivo de streaming Amazon Fire TV Stick 4K Max, compatible con Wi-Fi 6E, fondo ambiental.
                            </p>
                            <div class="flex flex-cols mt-2">
                                <div>
                                    <img class="h-4 lg:h-8 xl:h-8 2xl:h-8 px-2" src="/images/tienda/amazon_prime.png" alt="">
                                </div>
                                <div>
                                    <img class="h-4 lg:h-8 xl:h-8 2xl:h-8 px-2" src="/images/tienda/netflix.png" alt="">
                                </div>
                                <div>
                                    <img class="h-4 lg:h-8 xl:h-8 2xl:h-8 px-2" src="/images/tienda/vix.png" alt="">
                                </div>
                                <div>
                                    <img class="h-4 lg:h-8 xl:h-8 2xl:h-8 px-2" src="/images/tienda/disney_plus.png" alt="">
                                </div>
                                <div>
                                    <img class="h-4 lg:h-8 xl:h-8 2xl:h-8 px-2" src="/images/tienda/fox_sports.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="grid justify-items-center">
                            <img class="" src="/images/tienda/firetv.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </FirstHero>
        <div class="bg-section-card">
            <div class="container mx-10 lg:mx-auto xl:mx-auto 2xl:mx-auto px-2 lg:px-16 xl:px-16 2xl:px-16 py-28">
                <div class="grid grid-cols-1
                    lg:grid-cols-3
                    xl:grid-cols-3
                    2xl:grid-cols-3
                    gap-4"
                >
                    <div class="grid justify-items-center" v-for="(items, index) in listFireStick" :key="'firestick'+index">
                        <ShopCardFire
                            :id="items.id"  
                            :image="items.imgcard" 
                            :title="items.title" 
                            :cost="items.cost" 
                            :seller="items.seller" 
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import list_products from "~/assets/data/products"

const title: Ref<string> = ref('Thunder | Tienda')
const description: Ref<string> = ref('Nuevo dispositivo de streaming Amazon Fire TV Stick compatible con WI-FI 6 y fondo ambiental') 

useHead({
    title, 
    meta: [{
        name: 'Thunder',
        content: description
    }]
})

const urlImage: Ref<String> = ref("background-image: linear-gradient(rgba(0,0,0,1), rgba(64, 64, 64, 0.0) 50%, rgba(64, 64, 64, 0.0) 50%, rgba(0,0,0,1)),url('/images/tienda/bg-tienda.png'); background-repeat: no-repeat; background-size: cover;") 

const listFireStick : Ref<Arrar> = ref(list_products)
</script>

<style scoped>
.bg-section-card {
    background: rgba(30, 30, 30, 1);

}
/* background: linear-gradient(90deg, rgba(255, 255, 255, 0) 11.7%, rgba(85, 85, 85, 0.665) 41.65%, #000000 73.77%); */


</style>