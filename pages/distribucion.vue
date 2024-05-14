<template>
    <div>
        <FirstHero :style="urlImage">
            <div class="">
                <div class="bg-opacity-60"></div>
                <div class="text-neutral-content">
                    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
                        <div></div>
                        <div>
                            <h1 class="lato-regular text-banner-title uppercase">Ser distribuidor <br> tiene sus <span class="main-color">beneficios</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </FirstHero>
        <div class="bg-content">
            <div class="lg:container xl:container 2xl:container mx-auto p-12 lg:p-16 xl:p-16 2xl:p-16">
                <div>
                    <h1 class="text-center lato-regular text-title-home uppercase mt-10 mb-16">
                        Conoce las <span class="main-color">ventajas</span> de <br> ser parte de <span class="main-color">thunder</span>
                    </h1>

                    <div class="grid grid-cols-1
                        lg:grid-cols-3
                        xl:grid-cols-3
                        2xl:grid-cols-3 
                        gap-4 
                        xs:divide-y-2
                        sm:divide-y-2
                        md:divide-y-2
                        lg:divide-x-2
                        xl:divide-x-2    
                        2xl:divide-x-2    
                        divide-yellow-500"
                    >
                        <div class="grid justify-items-center">
                            <img class="w-28 h-28" src="/images/distribuidor/power.png" alt="">
                            <p class="lato-regular text-title-card uppercase text-center">activa <br> demos</p>
                        </div>
                        <div class="grid justify-items-center">
                            <img class="w-28 h-28" src="/images/distribuidor/best.png" alt="">
                            <p class="lato-regular text-title-card uppercase text-center">activa nuevos <br> clientes</p>
                        </div>
                        <div class="grid justify-items-center">
                            <img class="w-28 h-28" src="/images/distribuidor/clients.png" alt="">
                            <p class="lato-regular text-title-card uppercase text-center">re-activa <br> clientes vencidos</p>
                        </div>
                    </div>
                    
                    <hr class="bg-yellow-500 border-yellow-500 my-10">

                    <div class="grid grid-cols-1
                        lg:grid-cols-3
                        xl:grid-cols-3
                        2xl:grid-cols-3 
                        gap-4 
                        xs:divide-y-2
                        sm:divide-y-2
                        md:divide-y-2
                        lg:divide-x-2 
                        xl:divide-x-2
                        2xl:divide-x-2 
                        divide-yellow-500"
                    >
                        <div class="grid justify-items-center">
                            <img class="w-28 h-28" src="/images/distribuidor/calendar.png" alt="">
                            <p class="lato-regular text-title-card uppercase text-center">ver fechas <br> de corte</p>
                        </div>
                        <div class="grid justify-items-center">
                            <img class="w-28 h-28" src="/images/distribuidor/24-7.png" alt="">
                            <p class="lato-regular text-title-card uppercase text-center">activa 24/7</p>
                        </div>
                        <div class="grid justify-items-center">
                            <img class="w-28 h-28" src="/images/distribuidor/panel.png" alt="">
                            <p class="lato-regular text-title-card uppercase text-center">acceso a panel <br> con base de <br> datos para <br> agregar clientes</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1">
                        <div class="grid justify-items-center">
                            <button class="btn btn-content px-10 my-16">Términos y condiciones</button>
                        </div>
                    </div>


                    <div class="my-28">
                        <div class="grid grid-cols-1
                            lg:grid-cols-4
                            xl:grid-cols-4
                            2xl:grid-cols-4 
                            gap-4"
                        >
                            <div v-for="(item, index) in listBenefits" :key="'list-ben'+index">
                                <ShopCardMembers :title="item.title" :costmxn="item.pesos" :costusd="item.dollar" :list="item.beneficios" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const title: Ref<string> = ref('Thunder | Distribucion')
const description: Ref<string> = ref('Thunder Beneficios de ser distribuidor de thunder, activa demos, activa nuevos clientes') 

useHead({
    title, 
    meta: [{
        name: 'Thunder',
        content: description
    }]
})

const urlImage: Ref<String> = ref("background-image: linear-gradient(rgba(0,0,0,1), rgba(64, 64, 64, 0.0) 50%, rgba(64, 64, 64, 0.0) 50%, rgba(0,0,0,1)),url('/images/distribuidor/bg-distribuidor.png'); background-repeat: no-repeat; background-size: cover; background-position: center center; ");

const listBenefits: Ref<Array> = ref([
    { 
        title: '25 créditos', 
        pesos: 2500, 
        dollar: 168, 
        beneficios: [] 
    },
    { 
        title: '50 créditos',
        pesos: 4750, 
        dollar: 318, 
        beneficios: [] 
    },
    { 
        title: '100 créditos', 
        pesos: 8000, 
        dollar: 535, 
        beneficios: [] 
    },
    { 
        title: '200 créditos', 
        pesos: 2500, 
        dollar: 1005, 
        beneficios: [] 
    },
])
</script>

<style scoped> 
.bg-content {
    background: linear-gradient(180deg, #000000 0%, #1E1E1E 100%);
}
</style>