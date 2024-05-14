<template>
    <div>
        <div class="hero min-h-hero" style="styles">   
            <slot></slot>
            <!-- <div class="bg-opacity-60"></div>
            <div class="w-5/6 text-neutral-content">
                <div class="">
                    <h1 class="mb-5 text-5xl font-bold">Bienvenido a THUNDER Tv</h1>
                    <p class="mb-5">
                        Entretenimineto Premium TV Online
                    </p>
                    <button class="btn btn-primary">Empieza tu DEMO Gratis</button>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
interface Background{
    styles: String
}

withDefaults(
    defineProps<Background>(), {
        styles: ''
    }
)
</script>

<style scoped>
.bg-tienda {
    background-image: url('/images/tienda/bg-tienda.png');
    background-repeat: no-repeat;
    background-size: cover;
}

.min-h-hero {
    height: 690px;
}

@media (min-width: 0px) and (max-width: 760px){
    .min-h-hero {
        height: 850px;
    }  
}
</style>