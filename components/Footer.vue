<template>
    <div>
        <footer class="footer px-14 pt-12 pb-12 bg-black">
            <nav class="w-5/6">
                <div class="">
                    <img src="/images/logo_thunder.png" class="h-32 my-5" alt="">
                    <div class="grid grid-flow-col gap-4">
                        <button class="btn btn-footer">
                            <Icon name="ri:facebook-fill" color="black" size="25px"/>
                            <!-- <font-awesome-icon :icon="['fab', 'facebook']" size="xl"/> -->
                        </button>
                        <button class="btn btn-footer">
                            <Icon name="bi:instagram" color="black" size="25px"/>
                            <!-- <font-awesome-icon :icon="['fab', 'instagram']" size="xl"/> -->
                        </button>
                        <button class="btn btn-footer">
                            <Icon name="mdi:telegram" color="black" size="25px"/>
                            <!-- <font-awesome-icon :icon="['fab', 'telegram']" size="xl" /> -->
                        </button>
                        <button class="btn btn-footer">
                            <Icon name="ri:tiktok-fill" color="black" size="25px"/>
                            <!-- <font-awesome-icon :icon="['fab', 'tiktok']" size="xl" /> -->
                        </button>
                    </div>
                </div>
            </nav> 
            <nav class="w-5/6">
                <div class="w-5/6">
                    <h6 class="lato-regular text-title-footer link-navbar mb-5">Suscríbete</h6>
                    <p class="link-navbar lato-regular text-subtitle-footer mb-5">
                        Suscribete y recibe toda la informacion de <br> primera mano. Como promociones, <br> planes y programación.
                    </p>
                    <div>
                        <input type="text" placeholder="Email" class="w-full lato-regular input-type-outline-footer" />
                    </div>
                    <button class="btn btn-content px-8 my-4">Contratar</button>
                </div>
            </nav> 
            <nav class="w-5/6">
                <div class="w-5/6">
                    <h6 class="lato-regular text-title-footer link-navbar mb-5">Contactanos</h6> 
                    <form action="">
                        <div class="grid grid-rows-1 gap-1">
                            <div>
                                <input type="text" placeholder="Nombre" class="w-full my-2 lato-regular input-type-outline-footer" />
                            </div>
                            <div>
                                <input type="text" placeholder="Email" class="w-full my-2 lato-regular input-type-outline-footer" />
                            </div>
                            <div>
                                <input type="text" placeholder="Mensaje" class="w-full my-2 lato-regular input-type-outline-footer" />
                            </div>
                            <div>
                                <button class="btn btn-content px-10 mt-3">Contratar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </nav>
        </footer>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>