<script setup lang="ts">
import { ref, watch } from 'vue'

const route = useRoute()
const menuOpen = ref(false)

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  },
)

const legalLinks = [
  { label: 'Privacidad', to: '/privacidad' },
  { label: 'Aviso legal', to: '/aviso-legal' },
  { label: 'Cookies', to: '/cookies' },
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-[#D8CDBB]/60
           bg-[#F5F2EC]/90 text-[#332D25]
           shadow-[0_4px_20px_rgba(48,40,28,0.04)]
           backdrop-blur-md">
    <div class="mx-auto flex max-w-7xl items-center justify-between
             gap-4 px-5 py-3 sm:px-8 sm:py-4 lg:px-10">
      <!-- Marca -->
      <NuxtLink to="/" class="flex min-w-0 shrink items-center gap-3" aria-label="Residencial Teclo, inicio"
        @click="menuOpen = false">
        <img src="/images/residencial-teclo-logo.webp" alt=""
          class="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14" />

        <span class="flex min-w-0 flex-col">
          <span class="whitespace-nowrap font-serif text-base
                   leading-tight tracking-tight sm:text-xl">
            Residencial Teclo
          </span>

          <span class="mt-1 text-[10px] italic tracking-[0.12em]
                   text-[#94784D] sm:text-xs sm:tracking-[0.16em]">
            Hogar y exclusividad
          </span>
        </span>
      </NuxtLink>

      <!-- Navegación escritorio -->
      <nav class="hidden items-center gap-5 lg:flex xl:gap-7" aria-label="Navegación principal">
        <NuxtLink to="/" class="text-sm transition-colors hover:text-[#A1834D]"
          active-class="font-semibold text-[#94784D]" :class="{ 'text-[#94784D]': route.path === '/' }">
          Inicio
        </NuxtLink>

        <NuxtLink v-for="link in legalLinks" :key="link.to" :to="link.to"
          class="text-sm transition-colors hover:text-[#A1834D]" active-class="font-semibold text-[#94784D]">
          {{ link.label }}
        </NuxtLink>

        <NuxtLink to="/#encuesta" class="inline-flex items-center gap-2 rounded-md
                 bg-[#AA8D58] px-5 py-3 text-sm font-medium
                 text-white transition hover:bg-[#927548]
                 focus-visible:outline-none focus-visible:ring-2
                 focus-visible:ring-[#AA8D58] focus-visible:ring-offset-2">
          Participar en la encuesta
          <span aria-hidden="true">→</span>
        </NuxtLink>
      </nav>

      <!-- Acciones móvil -->
      <div class="flex shrink-0 items-center gap-2 lg:hidden">
        <NuxtLink to="/#encuesta" class="rounded-md bg-[#AA8D58] px-3 py-2.5
                 text-xs font-medium text-white
                 transition hover:bg-[#927548] sm:text-sm">
          Encuesta
        </NuxtLink>

        <button type="button" class="flex h-10 w-10 items-center justify-center
                 rounded-md border border-[#D8CDBB]
                 transition hover:bg-white/60
                 focus-visible:outline-none focus-visible:ring-2
                 focus-visible:ring-[#AA8D58]" :aria-expanded="menuOpen" aria-controls="mobile-navigation"
          :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'" @click="menuOpen = !menuOpen">
          <svg v-if="!menuOpen" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.7"
            stroke-linecap="round" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>

          <svg v-else viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.7"
            stroke-linecap="round" aria-hidden="true">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Menú desplegable móvil -->
    <nav v-if="menuOpen" id="mobile-navigation" class="border-t border-[#D8CDBB]/70 bg-[#F5F2EC]/95
             px-5 py-4 backdrop-blur-md sm:px-8 lg:hidden" aria-label="Navegación móvil">
      <div class="mx-auto flex max-w-7xl flex-col">
        <NuxtLink to="/" class="border-b border-[#D8CDBB]/50 py-3 text-sm" @click="menuOpen = false">
          Inicio
        </NuxtLink>

        <NuxtLink v-for="link in legalLinks" :key="link.to" :to="link.to"
          class="border-b border-[#D8CDBB]/50 py-3 text-sm" @click="menuOpen = false">
          {{ link.label }}
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
