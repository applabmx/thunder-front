<template>
    <div>
        <HomeHero />
        <div class="lg:container xl:container 2xl:container 
            mx-2  
            lg:mx-auto 
            xl:mx-auto 
            2xl:mx-auto 
            p-10 lg:p-24 xl:p-24 2xl:p-24 "
        >
            <div class="mb-48">
                <div class="grid 
                    grid-cols-1
                    md:grid-cols-2 
                    lg:grid-cols-4 
                    xl:grid-cols-4
                    2xl:grid-cols-4 
                    gap-4 
                    xs:divide-y
                    sm:divide-y
                    md:divide-x
                    lg:divide-x 
                    xl:divide-x 
                    2xl:divide-x 
                    divide-yellow-500"
                >
                    <div class="grid justify-items-center">
                        <img class="w-28 h-28" src="/images/home/satelite.png" alt="">
                        <h1 class="bayon-regular text-column-title">400+</h1>
                        <p class="lato-regular text-column-subtitle text-center uppercase">canales internacionales</p>
                    </div>
                    <div class="grid justify-items-center">
                        <img class="w-28 h-28" src="/images/home/face-id.png" alt="">
                        <p class="lato-regular text-column-subtitle uppercase">SD and</p>
                        <h1 class="lato-regular text-column-title uppercase">4k</h1>
                        <p class="lato-regular text-column-subtitle uppercase">Quality</p>
                    </div>
                    <div class="grid justify-items-center">
                        <img class="w-28 h-28" src="/images/home/clapper.png" alt="">
                        <h1 class="lato-regular text-column-title">5000+</h1>
                        <p class="lato-regular text-column-subtitle uppercase">peliculas/series</p>
                    </div>
                    <div class="grid justify-items-center">
                        <img class="w-28 h-28" src="/images/home/growth.png" alt="">
                        <p class="lato-regular text-column-subtitle uppercase">tarifas y planes</p>
                        <h1 class="lato-regular text-column-title-variant uppercase">Flexibles</h1>
                    </div>
                </div>
            </div>

            <div class="mt-48">
                <div class="grid grid-cols-1">
                    <div>
                        <h1 class="text-center lato-regular text-title-home uppercase my-20">Elige el mejor plan para ti</h1>
                    </div>
                </div>

                <div class="grid grid-cols-1 
                    md:grid-cols-3 
                    lg:grid-cols-3 
                    xl:grid-cols-4
                    2xl:grid-cols-4 
                    gap-4"
                >
                    <div class="grid justify-items-center" v-for="(item, index) in listBenefits" :key="'list-ben'+index">
                        <HomeCardPlanes :title="item.title" :costmxn="item.pesos" :costusd="item.dollar" :list="item.beneficios" />
                    </div>
                </div>
            </div>
        </div>
        <div id="polygon-top"></div>
        <div class="bg-premium">
            <div class="grid grid-cols-1">
                <div>
                    <h1 class="lato-regular text-black text-center text-title-experience my-16 uppercase">
                        Disfruta de la mejor experiencia en entretenimineto <br> premium tv online
                    </h1>
                </div>
            </div>
            <div class="grid grid-cols-1 justify-items-stretch gap-2
                lg:grid-cols-5
                xl:grid-cols-5
                2xl:grid-cols-5"
            >
                <div class="justify-self-center ">
                    <img 
                        class="h-[33rem] w-[25rem]
                        md:h-[24rem] 
                        lg:h-[24rem] 
                        xl:h-[25rem]
                        "
                        src="/images/home/series.png" alt=""
                    >
                    <p class="text-center lato-regular text-subtitle-experience uppercase">series de tv</p>
                </div>
                <div class="justify-self-center">
                    <img 
                        class="h-[33rem] w-[25rem]
                        md:h-[24rem] 
                        lg:h-[24rem] 
                        xl:h-[25em]
                        " 
                        src="/images/home/peliculas.png" alt=""
                    >
                    <p class="text-center lato-regular text-subtitle-experience uppercase">peliculas</p>
                </div>
                <div class="justify-self-center">
                    <img 
                        class="h-[33rem] w-[25rem]
                        md:h-[24rem] 
                        lg:h-[24rem] 
                        xl:h-[25rem]
                        " 
                        src="/images/home/tv.png" alt=""
                    >
                    <p class="text-center lato-regular text-subtitle-experience uppercase">tv en vivo <br> mexico - e.u. y mas</p>
                </div>
                <div class="justify-self-center">
                    <img 
                        class="h-[33rem] w-[25rem]
                        md:h-[24rem] 
                        lg:h-[24rem] 
                        xl:h-[25rem]
                        " 
                        src="/images/home/eventos.png" alt=""
                    >
                    <p class="text-center lato-regular text-subtitle-experience uppercase">eventos <br> exclusivos</p>
                </div>
                <div class="justify-self-center">
                    <img 
                        class="h-[33rem] w-[25rem]
                        md:h-[24rem] 
                        lg:h-[24rem] 
                        xl:h-[25rem]
                        " 
                        src="/images/home/deporte.png" alt=""
                    >
                    <p class="text-center lato-regular text-subtitle-experience uppercase">deportes <br> exclusivos</p>
                </div>
            </div>
        </div>
        <div id="polygon">
        </div>

        <div class="bg-paquetes">
            <div class="grid grid-cols-1">
                <div class="text-position">
                    <h1 class="text-center lato-regular text-title-experience text-white">¡No te pierdas de nada!</h1>
                    <p class="text-center lato-regular text-subtitle-paquete text-white">Tenemos el paquete perfecto para ti <br> comienza tu demo gratis ahora</p>
                    <div class="grid justify-items-center">
                        <button class="btn btn-hero px-10 lato-regular mt-10">
                            Quiero mi DEMO
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const title: Ref<string> = ref('Thunder | Home')
const description: Ref<string> = ref('Thunder Entretenimieto Premium Tv Online Series de tv, peliculas, tv en vivo, eventos exclusivos y deportes') 

useHead({
    title, 
    meta: [{
        name: 'Thunder',
        content: description
    }]
})


const listBenefits: Ref<Array> = ref([
    { 
        title: 'Thundertv 1 mes', 
        pesos: 250, 
        dollar: 16, 
        beneficios: [
            {img: '/images/distribuidor/dispositivos.png', text: '1 Dispositivo a la vez'}, 
            {img: '/images/distribuidor/resolucion.png', text: 'Resolucion Full HD'}
        ] 
    },
    { 
        title: 'Thundertv 3 mes',
        pesos: 675, 
        dollar: 41, 
        beneficios: [
            {img: '/images/distribuidor/dispositivos.png', text: '2 Dispositivo a la vez'}, 
            {img: '/images/distribuidor/resolucion.png', text: 'Resolucion Full HD'}
        ] 
    },
    { 
        title: 'Thundertv 6 mes', 
        pesos: 1275, 
        dollar: 72, 
        beneficios: [
            {img: '/images/distribuidor/dispositivos.png', text: '2 dispositivo a la vez'}, 
            {img: '/images/distribuidor/resolucion.png', text: 'Resolucion Full HD'},
            {img: '/images/distribuidor/descargas.png', text: '30 Descargas para ver offline'}
        ] 
    },
    { 
        title: 'Thundertv 1 año', 
        pesos: 2250, 
        dollar: 130, 
        beneficios: [
            {img: '/images/distribuidor/dispositivos.png', text: '2 Dispositivo a la vez'}, 
            {img: '/images/distribuidor/resolucion.png', text: 'Resolucion FulL HD'},
            {img: '/images/distribuidor/audio.png', text: 'Audio Dolby'},
            {img: '/images/distribuidor/descargas.png', text: '30 Descargas para ver offline'}
        ] 
    },
])
</script>

<style scoped>
.bg-paquetes{
    margin-top: -12vh;
    background-image: url('/images/home/exclusivos.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 1400px;
}

.bg-premium {
    background: linear-gradient(180deg, #F5B002, #F28001 52.02%);
    height: 950px;
}

.text-position{
    margin-top: 12vh;
}


#polygon {
    float: bottom;
    width: 100%;
    height: 150px;
    margin-top: -10px;
    shape-outside: polygon(
    0 0,
    100% 0,
    100% 70%,
    61% 22%,
    50% 22%,
    40% 22%,
    37% 22%,
    0 70%
    );
    clip-path: polygon(
    0 0,
    100% 0,
    100% 87%,
    67% 52%,
    50% 47%,
    40% 47%,
    31% 52%,
    0 87%
    );
    background: #F28001 52.02%;
}

#polygon-top {
    margin-bottom: -10px;
    width: 100%;
    height: 120px;
    shape-outside: polygon(
        0% 0%, 0% 100%, 100% 100%, 100% 0%, 75% 54%, 65% 62%, 50% 65%, 35% 62%, 25% 54%
    );
    clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%, 75% 54%, 65% 62%, 50% 65%, 35% 62%, 25% 54%);
    background: #F5B002
}

@media (min-width: 0px) and (max-width: 760px){
    #polygon-top {
        visibility: hidden;
    }
    #polygon {
        visibility: hidden;
    }
    .bg-premium {
        background: linear-gradient(180deg, #F5B002, #F28001 52.02%);
        height: 3300px;
    }
}
</style>
