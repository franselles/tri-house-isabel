<script setup lang="ts">
const currentYear = new Date().getFullYear()

const legalLinks = [
  { label: 'Política de privacidad', to: '/privacidad' },
  { label: 'Aviso legal', to: '/aviso-legal' },
  { label: 'Política de cookies', to: '/cookies' },
]
</script>

<template>
  <footer class="border-t border-[#AA8D58]/30 bg-[#F5F2EC] text-[#34312D]">
    <div class="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
      <div class="grid gap-9 md:grid-cols-[1.3fr_1fr] md:items-start md:gap-12">
        <!-- Marca y descripción -->
        <div class="max-w-lg">
          <NuxtLink to="/" class="inline-flex items-center" aria-label="Residencial Teclo — página de inicio">
            <img src="/images/residencial-teclo-logo.webp" alt="Residencial Teclo"
              class="h-12 w-auto object-contain" />
          </NuxtLink>

          <p class="mt-4 max-w-md text-sm leading-6 text-[#6C665D]">
            Un proyecto residencial en fase de definición. Comparte tus
            preferencias y ayúdanos a conocer qué características te gustaría
            encontrar en tu futuro hogar.
          </p>
        </div>

        <!-- Enlaces -->
        <div class="md:justify-self-end">
          <h2 class="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#94784D]">
            Información legal
          </h2>

          <nav aria-label="Enlaces legales">
            <ul class="space-y-3">
              <li v-for="link in legalLinks" :key="link.to">
                <NuxtLink :to="link.to"
                  class="text-sm text-[#6C665D] transition-colors duration-200 hover:text-[#94784D]">
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <!-- Separador -->
      <div class="my-8 h-px bg-[#AA8D58]/25 sm:my-9" />

      <!-- Pie inferior -->
      <div class="flex flex-col gap-3 text-xs leading-5 text-[#81796E] sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {{ currentYear }} Residencial Teclo. Todos los derechos reservados. v0.0.4
        </p>

        <NuxtLink to="/" class="w-fit transition-colors hover:text-[#94784D]">
          Volver al inicio ↑
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
