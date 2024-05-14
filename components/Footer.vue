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
                        <input v-model="modelInputs.emailSuscribirse" type="email" placeholder="Email" 
                            class="w-full lato-regular input-type-outline-footer" 
                            :class="{'input-type-outline-error': errorEmall === true}"
                        />
                    </div>
                    <button class="btn btn-content px-8 my-4" @click="sendEmail">Contratar</button>
                </div>
            </nav> 
            <nav class="w-5/6">
                <div class="w-5/6">
                    <h6 class="lato-regular text-title-footer link-navbar mb-5">Contactanos</h6> 
                    <form>
                        <div class="grid grid-rows-1 gap-1">
                            <div>
                                <input type="text" placeholder="Nombre" 
                                    v-model="modelInputs.nombre"
                                    class="w-full my-2 lato-regular input-type-outline-footer"
                                    :class="{'input-type-outline-error' : errorContacto === true && modelInputs.nombre === ''}" 
                                />
                            </div>
                            <div>
                                <input type="text" placeholder="Email"
                                    v-model="modelInputs.emailContacto" 
                                    class="w-full my-2 lato-regular input-type-outline-footer"
                                    :class="{'input-type-outline-error': errorContacto === true && modelInputs.nombre === ''}" 
                                />
                            </div>
                            <div>
                                <input type="text" placeholder="Mensaje"
                                    v-model="modelInputs.mensaje" 
                                    class="w-full my-2 lato-regular input-type-outline-footer"
                                    :class="{'input-type-outline-error' : errorContacto === true && modelInputs.nombre === ''}" 
                                />
                            </div>
                            <div>
                                <button class="btn btn-content px-10 mt-3" @click="sendContacto">Contratar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </nav>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { sendWhatsapp } from '~/assets/data/function';

const modelInputs = reactive({
    emailSuscribirse: '',
    nombre: '',
    emailContacto: '',
    mensaje: ''
})

const errorEmall: Ref<Boolean> = ref(false)
const errorContacto: Ref<Boolean> = ref(false)

const sendEmail = () => {
    if(modelInputs.emailSuscribirse === ''){
        errorEmall.value = true
    }else{
        errorEmall.value = false
        modelInputs.emailSuscribirse = ''
        sendWhatsapp()
    }
}

const sendContacto = (event:any) => {
    event.preventDefault()
    if(modelInputs.emailSuscribirse === '' || modelInputs.nombre === '' || modelInputs.mensaje === ''){
        errorContacto.value = true
    }else{
        errorContacto.value = false
        modelInputs.emailSuscribirse = ''
        modelInputs.nombre = ''
        modelInputs.mensaje = ''
        sendWhatsapp()
    }
}
</script>

<style scoped>
</style>