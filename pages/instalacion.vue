<template>
    <div>
        <InstalationHero />
        <div class="bg-content">
            <div class="lg:container xl:container 2xl:container mx-4 lg:mx-auto xl:mx-auto 2xl:mx-auto px-4 lg:px-10 xl:px-10 2xl:px-10">
                <div class="grid grid-cols-1 gap-4 mb-16">
                    <div>
                        <h1 class="text-center text-title-instalation lato-regular uppercase text-white">
                            Realmente <span class="main-color">fácil de instalar</span>
                        </h1>
                        <p class="text-center lato-regular text-subtitle-instalation uppercase text-white">descarga aquí, la guía de instalación</p>
                    </div>
                    <div>
                        <form class="my-16">
                            <div class="grid grid-rows-1 grid-flow-row gap-5">
                                <input v-model="formData.nombre" type="text" placeholder="Nombre:" 
                                    class="mb-4 input-type-outline lato-regular text-input-form"
                                    :class="{'input-type-outline-error': errorForm === true && formData.nombre === ''  }"
                                >
                                <input v-model="formData.email" type="text" placeholder="Email:" 
                                    class="mb-4 input-type-outline lato-regular text-input-form"
                                    :class="{'input-type-outline-error': errorForm === true && formData.email === ''  }"
                                >
                                <input v-model="formData.pais" type="text" placeholder="País:" 
                                    class="mb-4 input-type-outline lato-regular text-input-form"
                                    :class="{'input-type-outline-error': errorForm === true && formData.pais === ''  }"
                                >
                            </div>

                            <div class="text-center">
                                <button class="btn btn-content my-16 px-10" @click="sendGuia">Quiero mi guía</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { sendWhatsapp } from '~/assets/data/function';
const title: Ref<string> = ref('Thunder | Instalacion')
const description: Ref<string> = ref('Thunder es realmente facil de instalar') 

useHead({
    title, 
    meta: [{
        name: 'Thunder',
        content: description
    }]
})

const formData = reactive({
    nombre:'',
    email:'',
    pais:''
})

const errorForm: Ref<Boolean> = ref(false)

const sendGuia = (event:any) => {
    event.preventDefault()
    if(formData.nombre === '' || formData.email === '' || formData.pais === ''){
        errorForm.value = true
    }else{
        errorForm.value = false
        formData.nombre = ''
        formData.email = ''
        formData.pais = ''
        sendWhatsapp()
    }

}
</script>

<style scoped>
.bg-content {
    background: linear-gradient(180deg, #000000 0%, #1E1E1E 100%);
}
</style>