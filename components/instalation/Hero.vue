<template>
    <div>
        <div class="hero min-h-hero bg-img-hero">
            <div class="bg-opacity-60"></div>
            <div class="w-5/6 text-neutral-content">
                <div class="">
                    <h1 class="text-title-hero bayon-regular py-0"></h1>
                    <h1 class="spacing-title text-title-hero-variant bayon-regular"></h1>
                    <p class="mb-5 text-subtitle-hero lato-regular">
                        
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"> 
</script>

<style scoped>
.min-h-hero {
    height: 780px;
}

.bg-img-hero {
    background-image: linear-gradient(rgba(0,0,0,1), rgba(64, 64, 64, 0.0) 50%, rgba(64, 64, 64, 0.0) 50%, rgba(0,0,0,1)),url('/images/instalation/bg-instalacion.png');
    background-repeat: no-repeat;
    background-size: cover;
}

.spacing-title{
    line-height: 80%;
}
</style>