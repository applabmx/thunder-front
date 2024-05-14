<template>
    <div>
        <div class="navbar bg-black px-2 lg:px-15 xl:px-16 2xl:px-16">
            <div class="navbar-start flex-1 mx-5">
                <NuxtLink @click="pageInicio">
                    <img src="/images/logo_thunder.png" alt="" 
                        class="w-40 
                            ml-1
                            lg:ml-16
                            xl:ml-16
                            2xl:ml-16 
                        "
                    >
                </NuxtLink>
            </div>
            <div class="navbar-end flex-none">
                <div class="flex-none invisible lg:visible xl:visible 2xl:visible">
                    <ul class="menu menu-horizontal px-1">
                        <li>
                            <NuxtLink active-class="text-yellow-500" class="link-navbar lato-regular text-navbar focus:text-yellow-500" to="/tienda">
                                Tienda
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink active-class="text-yellow-500" class="link-navbar lato-regular text-navbar focus:text-yellow-500" to="/distribucion">
                                Distribuidor
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink active-class="text-yellow-500" class="link-navbar lato-regular text-navbar focus:text-yellow-500" to="/instalacion">
                                Instalación
                            </NuxtLink>
                        </li>
                        <!-- <li>
                            <details>
                                <summary class="link-navbar lato-regular text-navbar">
                                    Español
                                </summary>
                                <ul class="p-2 bg-base-100 rounded-t-none">
                                    <li><a class="lato-regular text-navbar">Español</a></li>
                                    <li><a class="lato-regular text-navbar">English</a></li>
                                </ul>
                            </details>
                        </li> -->
                        <li>
                            <button class="btn-hero lato-regular text-navbar">Iniciar Sesión</button>
                        </li>
                    </ul>
                </div>
                
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost bg-yellow-500 text-black lg:hidden xl:hidden 2xl:hidden" @click="handleShowMenu">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                </div>
            </div>
        </div>

        <ul class="menu bg-black-500 rounded-box" v-if="showMenu">
            <li>
                <NuxtLink @click="pageInicio" class="link-navbar lato-regular text-navbar focus:text-yellow-500">Inicio</NuxtLink>
            </li>
            <li>
                <NuxtLink @click="pageTienda" class="link-navbar lato-regular text-navbar focus:text-yellow-500">Tienda</NuxtLink>
            </li>
            <li>
                <NuxtLink @click="pageDistribuidor" class="link-navbar lato-regular text-navbar focus:text-yellow-500">Distribuidor</NuxtLink>
            </li>
            <li>
                <NuxtLink @click="pageInstalacion" class="link-navbar lato-regular text-navbar focus:text-yellow-500">Instalacion</NuxtLink>
            </li>
            <!-- <li>
                <SectionsRedButton :text="`Saber más`" />
            </li> -->
        </ul>
    </div>
</template>

<script setup lang="ts">

const router = useRouter()
const showMenu: Ref<boolean> = ref(false)

const handleShowMenu = () => {
    showMenu.value = !showMenu.value
}

const pageInicio = () => {
    showMenu.value = false
    router.push('/')
}

const pageTienda = () => {
    showMenu.value = false
    router.push('/tienda')
}

const pageDistribuidor = () => {
    showMenu.value = false
    router.push('/distribucion')
} 

const pageInstalacion = () => {
    showMenu.value = false
    router.push('/instalacion')
}
</script>

<style scoped>

</style>