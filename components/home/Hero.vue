<template>
    <div>
        <div class="hero min-h-hero bg-img-hero">
            <div class="bg-opacity-60"></div>
            <div class="w-5/6 text-neutral-content">
                <div class="">
                    <h1 class="text-title-hero bayon-regular py-0">
                        Bienvenido a
                    </h1>
                    <h1 class="spacing-title text-title-hero-variant bayon-regular">THUNDER Tv</h1>
                    <p class="mb-5 text-subtitle-hero lato-regular">
                        Entretenimineto Premium TV Online
                    </p>
                    <button class="btn btn-hero lato-regular text-button" @click="sendWhatsapp">Contratar Ahora</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { sendWhatsapp } from '~/assets/data/function'


</script>

<style scoped>
.min-h-hero {
    height: 780px;
}

.bg-img-hero {
    background-image: url('/images/home/bg-gradient.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}

.spacing-title{
    line-height: 80%;
}

@media (min-width: 0px) and (max-width: 760px) {
    .min-h-hero {
        height: 580px;
    }
}
</style>