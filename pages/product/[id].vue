<template>
    <div class="bg-section-card">
        <div class="lg:container xl:container 2xl:container mx-5 lg:mx-auto xl:mx-auto 2xl:mx-auto px-5">
            <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-2 mt-16">
                <div>
                    <swiper
                        :style="{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#46464680',
                        }"
                        :effect="'cube'"
                        :grabCursor="true"
                        :cubeEffect="{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }"
                        :loop="true"
                        :pagination="true"
                        :modules="modules"
                        :thumbs="{ swiper: thumbsSwiper }"
                        class=""
                    >
                        <swiper-slide v-for="(item, index) in dataProduct.images" :key="'swiper'+index">
                            <p class="bg-yellow-500 w-[8rem] px-5 font-bold">{{dataProduct.seller}}</p>
                            <div class="flex justify-center bg-item-swiper">
                                <img class="h-[12rem] lg:h-[28rem] xl:h-[28rem] 2xl:h-[28rem]" :src="item.img" alt="">
                            </div>
                        </swiper-slide>
                    </swiper>
                    <swiper
                        @swiper="setThumbsSwiper"
                        :loop="true"
                        :spaceBetween="10"
                        :slidesPerView="4"
                        :freeMode="true"
                        :watchSlidesProgress="true"
                        :modules="modules"
                        class="max-w-swiper mt-6"
                    >
                        <swiper-slide v-for="(items, index) in dataProduct.images" :key="'swiper_down'+index">
                            <div class="flex justify-center bg-item-swiper">
                                <img class="h-[5rem] lg:h-[7rem] xl:h-[7rem] 2xl:h-[7rem]" :src="items.img" />
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
                <div>
                    <h1 class="lato-regular text-banner-title text-white">{{dataProduct.title}}</h1>
                    <p class="lato-regular text-banner-subtitle text-white py-3">{{dataProduct.description}}</p>
                    <div class="flex flex-column my-4">
                        <div>
                            <img class="h-6 px-2" src="/images/tienda/amazon_prime.png" alt="">
                        </div>
                        <div>
                            <img class="h-6 px-2" src="/images/tienda/netflix.png" alt="">
                        </div>
                        <div>
                            <img class="h-6 px-2" src="/images/tienda/vix.png" alt="">
                        </div>
                        <div>
                            <img class="h-6 px-2" src="/images/tienda/disney_plus.png" alt="">
                        </div>
                        <div>
                            <img class="h-6 px-2" src="/images/tienda/fox_sports.png" alt="">
                        </div>
                    </div>
                    <p class="lato-regular text-banner-subtitle text-white" >Marca: {{dataProduct.marca}}</p>
                    <p class="lato-regular text-banner-subtitle text-white">{{dataProduct.stock}}</p>

                    <p class="mt-3 bayon-regular text-cost-card">{{ dataProduct.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'}) }}</p>
                    <div>
                        <button class="btn btn-content px-6 " @click="sendWhatsapp">Agregar al carrito</button>
                        <button class="btn btn-hero px-6 ml-6" @click="sendWhatsapp" >Comprar ahora</button>
                    </div>
                </div>
            </div>

            <div class="my-16 ">
                <h1 class="lato-regular text-subtitle-instalation text-white my-10">Productos Similares</h1>
                <div class="">
                    <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 pb-16">
                        <div v-for="(items, index) in listProducts" :key="'firestick'+index">
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
    </div>
</template>

<script setup lang="ts">
import list_products from '~/assets/data/products';
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { EffectCube, Pagination, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { sendWhatsapp } from '~/assets/data/function';

const dataProduct : Product = reactive({
    id: '',
    title: '',
    description: '',
    marca: '', 
    stock: '',
    price: 0,
    seller: '',
    images: []
})

const title: Ref<String> = ref('')
const description: Ref<String> = ref('') 

useHead({
    title, 
    meta: [{
        name: 'Thunder',
        content: description
    }]
})

const modules = [EffectCube, Pagination, FreeMode, Navigation, Thumbs]

interface Product {
    id: String,
    title: String,
    description: String,
    marca: String, 
    stock: String,
    price: number,
    seller: String,
    images: any[]
}
const listProducts: Ref<Array> = ref(list_products)
const route = useRoute()

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper : any) => {
    thumbsSwiper.value = swiper;
};

onMounted( () => {
    const data = list_products

    const product =  data.filter(item => item.id === route.params.id)
    product.map(item => {
        dataProduct.id = item.id
        dataProduct.title = item.title 
        dataProduct.description = item.description
        dataProduct.marca = item.marca 
        dataProduct.stock = item.stock === true ? 'En Stock' : 'NO disponible'
        dataProduct.seller = item.seller
        dataProduct.images = item.gallery
        dataProduct.price = item.cost
    })

    title.value = 'Thunder | ' + dataProduct.title
    description.value = dataProduct.description
})

</script>

<style scoped>
.bg-section-card {
    background: linear-gradient(black,rgba(30, 30, 30, 1)) ;

}

.bg-item-swiper {
    background: linear-gradient(180deg, rgba(138, 138, 138, 0) 0%, #848484 100%);
}

.max-w-swiper{
    width: 100% !important;
}
</style>