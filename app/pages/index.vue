<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

useSeoMeta({
  title: 'Residencial Teclo | Encuesta de preferencias',
  description:
    'Ayúdanos a conocer tus preferencias para un futuro proyecto residencial.',
})

const form = reactive({
  bedrooms: 3,
  bathrooms: 2,
  garageSpaces: 1,
  storage: true,
  name: '',
  email: '',
  wantsUpdates: false,
})

const submitting = ref(false)
const submitted = ref(false)
const errorMessage = ref('')

const emailIsValid = computed(() =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()),
)

const canSubmit = computed(() => {
  const contactIsValid =
    !form.wantsUpdates ||
    (form.name.trim().length > 0 && emailIsValid.value)

  return contactIsValid && !submitting.value
})

async function submitSurvey() {
  if (!canSubmit.value) return

  submitting.value = true
  submitted.value = false
  errorMessage.value = ''

  try {
    await $fetch('/api/survey', {
      method: 'POST',
      body: {
        bedrooms: form.bedrooms,
        bathrooms: form.bathrooms,
        garageSpaces: form.garageSpaces,
        storage: form.storage,
        name: form.wantsUpdates ? form.name.trim() : '',
        email: form.wantsUpdates ? form.email.trim() : '',
        wantsUpdates: form.wantsUpdates,
      },
    })

    submitted.value = true
  } catch {
    errorMessage.value =
      'No hemos podido enviar tu respuesta. Inténtalo de nuevo dentro de unos minutos.'
  } finally {
    submitting.value = false
  }
}

const amenities = [
  {
    name: 'Piscina',
    description: 'Un espacio para relajarse',
    icon: 'pool',
  },
  {
    name: 'Gimnasio',
    description: 'Bienestar en tu día a día',
    icon: 'gym',
  },
  {
    name: 'Pádel',
    description: 'Deporte y tiempo compartido',
    icon: 'padel',
  },
  {
    name: 'Salón social',
    description: 'Un lugar para encontrarse',
    icon: 'social',
  },
]
</script>

<template>
  <div class="min-h-screen overflow-hidden bg-[#F5F2EC] text-[#242322]">
    <SiteHeader />

    <main>
      <!-- HERO -->
      <section id="inicio" class="relative isolate scroll-mt-4 overflow-hidden">
        <div aria-hidden="true"
          class="absolute inset-0 -z-20 bg-[url('/images/residencial-teclo-hero.webp')] bg-cover bg-center" />
        <div aria-hidden="true"
          class="absolute inset-0 -z-10 bg-gradient-to-r from-[#F5F2EC]/95 via-[#F5F2EC]/85 to-[#F5F2EC]/60" />

        <div
          class="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.85fr)] lg:gap-16 lg:px-12 lg:py-20">
          <!-- Presentación -->
          <div class="max-w-2xl lg:py-10">
            <p
              class="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#94784D] sm:text-sm sm:tracking-[0.3em]">
              Un futuro hogar está en proyecto
            </p>

            <h1 class="font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Residencial
              <span class="mt-1 block italic text-[#94784D]">
                Teclo
              </span>
            </h1>

            <div class="my-7 flex items-center gap-4">
              <span class="h-px w-14 bg-[#AA8D58]" />
              <span class="text-xs uppercase tracking-[0.2em] text-[#746957]">
                Hogar y exclusividad
              </span>
            </div>

            <p class="max-w-xl text-base leading-7 text-[#34312D] sm:text-lg sm:leading-8">
              Estamos estudiando un futuro proyecto residencial y queremos
              conocer qué tipo de vivienda te gustaría encontrar.
            </p>

            <p class="mt-4 max-w-lg text-sm leading-7 text-[#6C665D] sm:text-base">
              Tus preferencias nos ayudarán a comprender las necesidades de
              quienes buscan un hogar y a orientar las primeras decisiones
              del proyecto.
            </p>

            <a href="#encuesta"
              class="mt-8 inline-flex min-h-12 items-center gap-3 rounded-md bg-[#AA8D58] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#927548] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AA8D58] focus-visible:ring-offset-2">
              Participar en la encuesta
              <span aria-hidden="true">→</span>
            </a>

            <p class="mt-5 max-w-md text-xs leading-5 text-[#777168]">
              El proyecto se encuentra en una fase inicial. Las características,
              instalaciones y condiciones definitivas están todavía por determinar.
            </p>
          </div>

          <!-- Encuesta -->
          <section id="encuesta" aria-labelledby="survey-title"
            class="scroll-mt-6 rounded-xl border border-white/80 bg-[#F8F6F1]/95 p-5 shadow-[0_18px_60px_rgba(48,40,28,0.13)] backdrop-blur-sm sm:p-7 lg:p-8">
            <p class="text-[10px] font-bold uppercase tracking-[0.25em] text-[#94784D] sm:text-xs">
              Tu opinión nos importa
            </p>

            <h2 id="survey-title" class="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
              ¿Cómo sería tu vivienda ideal?
            </h2>

            <p class="mt-3 text-sm leading-6 text-[#706B63]">
              Responde a estas preguntas en menos de un minuto. Puedes
              participar sin dejar tus datos de contacto.
            </p>

            <form class="mt-7 space-y-6" @submit.prevent="submitSurvey">
              <!-- Dormitorios -->
              <fieldset>
                <legend class="mb-3 text-sm font-semibold">
                  ¿Cuántos dormitorios necesitarías?
                </legend>

                <div class="grid grid-cols-4 gap-2">
                  <label v-for="option in [1, 2, 3, 4]" :key="option" class="cursor-pointer">
                    <input v-model.number="form.bedrooms" class="peer sr-only" type="radio" name="bedrooms"
                      :value="option" />
                    <span
                      class="flex min-h-12 items-center justify-center rounded-md border border-[#D9D2C7] bg-white/50 text-sm transition peer-checked:border-[#AA8D58] peer-checked:bg-[#AA8D58] peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-[#AA8D58]">
                      {{ option }}
                    </span>
                  </label>
                </div>
              </fieldset>

              <!-- Baños -->
              <fieldset>
                <legend class="mb-3 text-sm font-semibold">
                  ¿Cuántos baños te gustaría tener?
                </legend>

                <div class="grid grid-cols-4 gap-2">
                  <label v-for="option in [1, 2, 3, 4]" :key="option" class="cursor-pointer">
                    <input v-model.number="form.bathrooms" class="peer sr-only" type="radio" name="bathrooms"
                      :value="option" />
                    <span
                      class="flex min-h-12 items-center justify-center rounded-md border border-[#D9D2C7] bg-white/50 text-sm transition peer-checked:border-[#AA8D58] peer-checked:bg-[#AA8D58] peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-[#AA8D58]">
                      {{ option }}
                    </span>
                  </label>
                </div>
              </fieldset>

              <!-- Garaje -->
              <fieldset>
                <legend class="mb-3 text-sm font-semibold">
                  ¿Cuántas plazas de garaje necesitarías?
                </legend>

                <div class="grid grid-cols-4 gap-2">
                  <label v-for="option in [0, 1, 2, 3]" :key="option" class="cursor-pointer">
                    <input v-model.number="form.garageSpaces" class="peer sr-only" type="radio" name="garageSpaces"
                      :value="option" />
                    <span
                      class="flex min-h-12 items-center justify-center rounded-md border border-[#D9D2C7] bg-white/50 text-sm transition peer-checked:border-[#AA8D58] peer-checked:bg-[#AA8D58] peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-[#AA8D58]">
                      {{ option === 0 ? 'Ninguna' : option }}
                    </span>
                  </label>
                </div>
              </fieldset>

              <!-- Trastero -->
              <fieldset>
                <legend class="mb-3 text-sm font-semibold">
                  ¿Te interesaría disponer de trastero?
                </legend>

                <div class="grid grid-cols-2 gap-3">
                  <label class="cursor-pointer">
                    <input v-model="form.storage" class="peer sr-only" type="radio" name="storage" :value="true" />
                    <span
                      class="flex min-h-12 items-center justify-center rounded-md border border-[#D9D2C7] bg-white/50 text-sm transition peer-checked:border-[#AA8D58] peer-checked:bg-[#AA8D58] peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-[#AA8D58]">
                      Sí, me interesa
                    </span>
                  </label>

                  <label class="cursor-pointer">
                    <input v-model="form.storage" class="peer sr-only" type="radio" name="storage" :value="false" />
                    <span
                      class="flex min-h-12 items-center justify-center rounded-md border border-[#D9D2C7] bg-white/50 text-sm transition peer-checked:border-[#AA8D58] peer-checked:bg-[#AA8D58] peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-[#AA8D58]">
                      No lo necesito
                    </span>
                  </label>
                </div>
              </fieldset>

              <!-- Suscripción opcional -->
              <div class="border-t border-[#DED7CC] pt-5">
                <label class="flex cursor-pointer items-start gap-3">
                  <input v-model="form.wantsUpdates" type="checkbox"
                    class="mt-1 h-4 w-4 shrink-0 accent-[#AA8D58] focus-visible:ring-2 focus-visible:ring-[#AA8D58]" />

                  <span>
                    <span class="block text-sm font-semibold">
                      Quiero recibir novedades del proyecto
                    </span>
                    <span class="mt-1 block text-xs leading-5 text-[#706B63]">
                      Opcional. Marca esta casilla si deseas que contactemos
                      contigo para enviarte información sobre la evolución
                      de Residencial Teclo.
                    </span>
                  </span>
                </label>

                <div v-if="form.wantsUpdates" class="mt-5 space-y-4">
                  <div>
                    <label for="survey-name" class="mb-1.5 block text-sm font-medium">
                      Nombre
                    </label>
                    <input id="survey-name" v-model="form.name" type="text" name="name" autocomplete="name"
                      maxlength="120" required placeholder="Tu nombre"
                      class="min-h-12 w-full rounded-md border border-[#D9D2C7] bg-white/60 px-3.5 text-sm outline-none transition placeholder:text-[#8B857C] focus:border-[#AA8D58] focus:ring-2 focus:ring-[#AA8D58]/20" />
                  </div>

                  <div>
                    <label for="survey-email" class="mb-1.5 block text-sm font-medium">
                      Correo electrónico
                    </label>
                    <input id="survey-email" v-model="form.email" type="email" name="email" autocomplete="email"
                      inputmode="email" maxlength="254" required placeholder="tu@email.com"
                      class="min-h-12 w-full rounded-md border border-[#D9D2C7] bg-white/60 px-3.5 text-sm outline-none transition placeholder:text-[#8B857C] focus:border-[#AA8D58] focus:ring-2 focus:ring-[#AA8D58]/20" />
                  </div>

                  <p class="text-xs leading-5 text-[#706B63]">
                    Puedes retirar tu consentimiento para recibir novedades.
                    Consulta la
                    <NuxtLink to="/privacidad" class="underline underline-offset-2 hover:text-[#927548]">
                      política de privacidad
                    </NuxtLink>
                    para conocer cómo se tratarán tus datos.
                  </p>
                </div>
              </div>

              <!-- Envío -->
              <div>
                <button type="submit" :disabled="!canSubmit"
                  class="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AA8D58] focus-visible:ring-offset-2"
                  :class="canSubmit
                      ? 'cursor-pointer bg-[#AA8D58] hover:bg-[#927548]'
                      : 'cursor-not-allowed bg-[#C9C4BA]'
                    ">
                  <span>
                    {{
                      submitting
                        ? 'Enviando respuesta…'
                        : 'Enviar mis preferencias'
                    }}
                  </span>
                  <span v-if="!submitting" aria-hidden="true">→</span>
                </button>

                <p class="mt-3 text-center text-xs leading-5 text-[#777168]">
                  Tus datos de contacto no son necesarios para participar
                  en la encuesta.
                </p>

                <p v-if="submitted" role="status"
                  class="mt-4 rounded-md border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-800">
                  Gracias por participar. Hemos recibido tu respuesta.
                </p>

                <p v-if="errorMessage" role="alert"
                  class="mt-4 rounded-md border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800">
                  {{ errorMessage }}
                </p>
              </div>
            </form>
          </section>
        </div>
      </section>

      <!-- PRESENTACIÓN DEL PROYECTO -->
      <section class="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.25em] text-[#94784D]">
              Un proyecto por descubrir
            </p>

            <h2 class="mt-4 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Un hogar empieza por imaginarlo
            </h2>
          </div>

          <div class="max-w-3xl lg:pt-1">
            <p class="text-base leading-8 text-[#5F5B54]">
              Cada persona entiende el hogar de una forma distinta. Para
              algunos, lo esencial es el espacio; para otros, la comodidad,
              la tranquilidad o disponer de zonas donde compartir tiempo.
            </p>

            <p class="mt-5 text-base leading-8 text-[#5F5B54]">
              Por eso queremos conocer tus prioridades desde el principio.
              Esta encuesta nos ayudará a estudiar las preferencias de
              potenciales interesados antes de definir las características
              del proyecto.
            </p>

            <a href="#encuesta"
              class="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#94784D] underline decoration-[#AA8D58]/50 underline-offset-4 transition hover:decoration-[#AA8D58]">
              Compartir mis preferencias
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <!-- ELEMENTOS ORIENTATIVOS -->
      <section id="elementos-previstos"
        class="border-y border-[#E5DED2] bg-[#EEEAE3] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div class="mx-auto max-w-7xl">
          <div class="max-w-2xl">
            <p class="text-xs font-semibold uppercase tracking-[0.25em] text-[#94784D]">
              Posibles zonas comunes
            </p>

            <h2 class="mt-4 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Espacios para disfrutar a tu manera
            </h2>

            <p class="mt-5 text-sm leading-7 text-[#6C665D] sm:text-base">
              Estas son algunas ideas que podrían estudiarse para el proyecto.
              Las instalaciones que finalmente se incluyan todavía no están
              confirmadas.
            </p>
          </div>

          <div class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <article v-for="amenity in amenities" :key="amenity.name"
              class="rounded-lg border border-[#DED7CC] bg-[#F8F6F1] p-6 sm:p-7">
              <div
                class="flex h-14 w-14 items-center justify-center rounded-full border border-[#AA8D58]/40 text-[#94784D]">
                <!-- Piscina -->
                <svg v-if="amenity.icon === 'pool'" viewBox="0 0 64 64" class="h-8 w-8" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  aria-hidden="true">
                  <path d="M20 35V13a6 6 0 0 1 12 0" />
                  <path d="M20 23h12M20 29h12" />
                  <path d="M7 42c6 0 6 5 13 5s7-5 13-5 6 5 13 5 7-5 13-5" />
                  <path d="M7 52c6 0 6 5 13 5s7-5 13-5 6 5 13 5 7-5 13-5" />
                </svg>

                <!-- Gimnasio -->
                <svg v-else-if="amenity.icon === 'gym'" viewBox="0 0 64 64" class="h-8 w-8" fill="none"
                  stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                  aria-hidden="true">
                  <path d="M8 25v14M15 20v24M22 27h20M42 20v24M49 25v14M56 28v8" />
                  <path d="M22 32h20" />
                </svg>

                <!-- Pádel -->
                <svg v-else-if="amenity.icon === 'padel'" viewBox="0 0 64 64" class="h-8 w-8" fill="none"
                  stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                  aria-hidden="true">
                  <path d="M17 42 39 10a9 9 0 0 1 13 13L30 46Z" />
                  <path d="m23 34 12 8M28 26l12 8M34 18l11 8" />
                  <circle cx="48" cy="51" r="5" />
                </svg>

                <!-- Zona social -->
                <svg v-else viewBox="0 0 64 64" class="h-8 w-8" fill="none" stroke="currentColor" stroke-width="2.5"
                  stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <circle cx="32" cy="17" r="7" />
                  <circle cx="14" cy="25" r="5" />
                  <circle cx="50" cy="25" r="5" />
                  <path d="M19 49V43a13 13 0 0 1 26 0v6Z" />
                  <path d="M4 49v-7a10 10 0 0 1 12-10M60 49v-7a10 10 0 0 0-12-10" />
                </svg>
              </div>

              <h3 class="mt-6 font-serif text-2xl">
                {{ amenity.name }}
              </h3>

              <p class="mt-2 text-sm leading-6 text-[#706B63]">
                {{ amenity.description }}
              </p>

              <span class="mt-5 block h-px w-10 bg-[#AA8D58]" />
            </article>
          </div>

          <p class="mt-6 text-xs leading-5 text-[#777168]">
            Las imágenes ambientales y las ideas mostradas son orientativas.
            No representan necesariamente el resultado final ni garantizan
            la incorporación de estas instalaciones.
          </p>
        </div>
      </section>

      <!-- CIERRE -->
      <section class="relative isolate overflow-hidden">
        <div aria-hidden="true"
          class="absolute inset-0 -z-20 bg-[url('/images/residencial-teclo-cierre.webp')] bg-cover bg-center" />
        <div aria-hidden="true" class="absolute inset-0 -z-10 bg-[#242322]/60" />

        <div
          class="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-24">
          <div class="max-w-2xl">
            <p class="text-xs font-semibold uppercase tracking-[0.25em] text-[#E1C58B]">
              Residencial Teclo
            </p>

            <h2 class="mt-4 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              Tu opinión también forma parte del futuro
            </h2>

            <p class="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
              Ayúdanos a conocer qué características son importantes para ti
              en un futuro hogar.
            </p>
          </div>

          <a href="#encuesta"
            class="inline-flex min-h-12 w-fit shrink-0 items-center gap-3 rounded-md border border-[#E1C58B] px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
            Compartir mis preferencias
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>
