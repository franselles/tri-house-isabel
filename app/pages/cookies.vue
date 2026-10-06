<script setup lang="ts">
import SiteHeader from '~/components/SiteHeader.vue'
import SiteFooter from '~/components/SiteFooter.vue'

useSeoMeta({
  title: 'Política de cookies | Residencial Teclo',
  description:
    'Información sobre el uso de cookies y tecnologías similares en la web de Residencial Teclo.',
})

const sections = [
  { id: 'que-son', title: '1. ¿Qué son las cookies?' },
  { id: 'uso', title: '2. Uso de cookies en esta web' },
  { id: 'tipos', title: '3. Tipos de cookies' },
  { id: 'terceros', title: '4. Servicios de terceros' },
  { id: 'gestion', title: '5. Cómo gestionar las cookies' },
  { id: 'cambios', title: '6. Cambios en esta política' },
  { id: 'contacto', title: '7. Contacto' },
]
</script>

<template>
  <div class="min-h-screen bg-[#F5F2EC] text-[#332D25]">
    <SiteHeader />

    <main>
      <!-- Cabecera -->
      <section class="relative overflow-hidden border-b border-[#D8CDBB]/70">
        <div class="absolute inset-0 bg-gradient-to-br from-[#EAE1D2]/70 via-[#F5F2EC] to-[#F5F2EC]"
          aria-hidden="true" />

        <div class="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <p class="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#94784D]">
            Información legal
          </p>

          <h1 class="max-w-3xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Política de cookies
          </h1>

          <p class="mt-6 max-w-2xl text-base leading-8 text-[#6E6559] sm:text-lg">
            Te explicamos qué son las cookies, cómo pueden utilizarse en esta
            página web y qué opciones tienes para gestionarlas.
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-3 text-sm text-[#827766]">
            <span class="h-px w-10 bg-[#AA8D58]" />
            <span>Última actualización: 2 de octubre de 2026</span>
          </div>
        </div>
      </section>

      <!-- Contenido -->
      <section class="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div class="grid gap-12 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
          <!-- Índice -->
          <aside class="lg:sticky lg:top-28 lg:self-start">
            <div class="rounded-xl border border-[#D8CDBB]/80 bg-white/50 p-5 sm:p-6">
              <p class="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#94784D]">
                En esta página
              </p>

              <nav aria-label="Índice de la política de cookies">
                <ul class="space-y-3">
                  <li v-for="section in sections" :key="section.id">
                    <a :href="`#${section.id}`"
                      class="text-sm leading-6 text-[#6E6559] transition-colors hover:text-[#94784D]">
                      {{ section.title }}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="mt-5 rounded-xl border border-[#D8CDBB]/70 p-5">
              <p class="font-serif text-lg">Residencial Teclo</p>
              <p class="mt-2 text-sm leading-6 text-[#7B7163]">
                Transparencia y claridad en el uso de esta web.
              </p>
              <NuxtLink to="/privacidad"
                class="mt-4 inline-flex text-sm font-medium text-[#94784D] hover:text-[#725B36]">
                Consultar privacidad →
              </NuxtLink>
            </div>
          </aside>

          <!-- Texto legal -->
          <article class="min-w-0 max-w-3xl">
            <div class="mb-10 rounded-xl border border-[#D8CDBB]/80 bg-white/60 p-5 sm:p-6">
              <p class="text-sm leading-7 text-[#6E6559]">
                <strong class="font-semibold text-[#332D25]">Nota:</strong>
                esta política debe revisarse para reflejar las cookies y
                tecnologías que efectivamente utiliza la web. No debe
                considerarse una confirmación de que el sitio esté libre de
                cookies no esenciales.
              </p>
            </div>

            <section id="que-son" class="scroll-mt-28 border-b border-[#D8CDBB]/70 pb-9">
              <h2 class="font-serif text-2xl sm:text-3xl">
                1. ¿Qué son las cookies?
              </h2>
              <div class="mt-5 space-y-4 text-[15px] leading-8 text-[#5F574C]">
                <p>
                  Las cookies son pequeños archivos o dispositivos de
                  almacenamiento que una página web puede guardar en el
                  navegador o dispositivo de una persona usuaria cuando la
                  visita. Permiten, entre otras funciones, recordar
                  determinadas preferencias, mantener servicios técnicos o
                  recopilar información sobre la navegación.
                </p>
                <p>
                  También existen tecnologías similares, como el almacenamiento
                  local del navegador o determinados identificadores, cuyo uso
                  puede estar sujeto a obligaciones equivalentes según su
                  finalidad.
                </p>
              </div>
            </section>

            <section id="uso" class="scroll-mt-28 border-b border-[#D8CDBB]/70 py-9">
              <h2 class="font-serif text-2xl sm:text-3xl">
                2. Uso de cookies en esta web
              </h2>
              <div class="mt-5 space-y-4 text-[15px] leading-8 text-[#5F574C]">
                <p>
                  La web de Residencial Teclo presenta información sobre el
                  proyecto y puede incluir un formulario de encuesta para
                  conocer las preferencias de las personas interesadas.
                </p>
                <p>
                  La configuración prevista es utilizar únicamente las cookies
                  o tecnologías estrictamente necesarias para el funcionamiento
                  y la seguridad del sitio, si las hubiera. No se pretende
                  utilizar cookies publicitarias ni de analítica salvo que se
                  incorporen esos servicios y se informe de ello debidamente.
                </p>
                <p>
                  La configuración real dependerá de los componentes,
                  herramientas externas y servicios que se encuentren activos
                  en cada momento. Por eso, esta descripción debe verificarse
                  antes de publicar la página.
                </p>
              </div>
            </section>

            <section id="tipos" class="scroll-mt-28 border-b border-[#D8CDBB]/70 py-9">
              <h2 class="font-serif text-2xl sm:text-3xl">
                3. Tipos de cookies
              </h2>
              <div class="mt-5 space-y-6 text-[15px] leading-8 text-[#5F574C]">
                <div>
                  <h3 class="font-semibold text-[#332D25]">
                    Cookies técnicas o necesarias
                  </h3>
                  <p class="mt-2">
                    Son las que, en su caso, permiten prestar el servicio
                    solicitado, mantener la seguridad o hacer posible una
                    función esencial de la web. Cuando estén exentas de
                    consentimiento conforme a la normativa aplicable, no será
                    necesario solicitarlo para utilizarlas.
                  </p>
                </div>

                <div>
                  <h3 class="font-semibold text-[#332D25]">
                    Cookies de preferencias
                  </h3>
                  <p class="mt-2">
                    Permiten recordar opciones elegidas por la persona usuaria.
                    Solo se utilizarán cuando proceda y con la información y
                    base jurídica que corresponda.
                  </p>
                </div>

                <div>
                  <h3 class="font-semibold text-[#332D25]">
                    Cookies de análisis o medición
                  </h3>
                  <p class="mt-2">
                    Permiten obtener estadísticas sobre el uso de la web. No
                    deben activarse sin el consentimiento previo cuando este
                    sea legalmente exigible.
                  </p>
                </div>

                <div>
                  <h3 class="font-semibold text-[#332D25]">
                    Cookies publicitarias
                  </h3>
                  <p class="mt-2">
                    Se emplean para gestionar publicidad o crear perfiles con
                    fines publicitarios. Si se incorporan en el futuro, se
                    actualizará esta política y se solicitará el consentimiento
                    cuando sea necesario.
                  </p>
                </div>
              </div>
            </section>

            <section id="terceros" class="scroll-mt-28 border-b border-[#D8CDBB]/70 py-9">
              <h2 class="font-serif text-2xl sm:text-3xl">
                4. Servicios de terceros
              </h2>
              <div class="mt-5 space-y-4 text-[15px] leading-8 text-[#5F574C]">
                <p>
                  La web puede apoyarse en proveedores externos para prestar
                  determinados servicios técnicos. Por ejemplo, las respuestas
                  de la encuesta pueden gestionarse mediante servicios de
                  Google, como Google Sheets y las API asociadas.
                </p>
                <p>
                  El uso de estos servicios no implica necesariamente que se
                  instalen cookies en el navegador. Debe comprobarse qué
                  recursos externos se cargan, qué información transmiten y si
                  utilizan cookies o tecnologías similares.
                </p>
                <p>
                  Si se incorporan servicios de analítica, mapas, vídeos,
                  contenido incrustado u otras herramientas de terceros que
                  requieran consentimiento, esta política deberá identificar
                  dichos servicios y explicar cómo se pueden aceptar o
                  rechazar sus cookies antes de que se activen.
                </p>
              </div>
            </section>

            <section id="gestion" class="scroll-mt-28 border-b border-[#D8CDBB]/70 py-9">
              <h2 class="font-serif text-2xl sm:text-3xl">
                5. Cómo gestionar las cookies
              </h2>
              <div class="mt-5 space-y-4 text-[15px] leading-8 text-[#5F574C]">
                <p>
                  Puedes configurar tu navegador para bloquear o eliminar
                  cookies. Las instrucciones dependen del navegador y de su
                  versión; normalmente se encuentran en los apartados de
                  privacidad, seguridad o configuración de sitios web.
                </p>
                <p>
                  Ten en cuenta que bloquear determinadas cookies técnicas
                  puede afectar al funcionamiento de algunas características
                  del sitio.
                </p>
                <p>
                  Cuando la web utilice cookies no necesarias sujetas a
                  consentimiento, deberá ofrecer un mecanismo accesible para
                  aceptarlas, rechazarlas y configurar las preferencias, así
                  como para retirar el consentimiento con la misma facilidad.
                  Este mecanismo deberá estar implementado en la web; esta
                  página informativa, por sí sola, no lo sustituye.
                </p>
              </div>
            </section>

            <section id="cambios" class="scroll-mt-28 border-b border-[#D8CDBB]/70 py-9">
              <h2 class="font-serif text-2xl sm:text-3xl">
                6. Cambios en esta política
              </h2>
              <div class="mt-5 space-y-4 text-[15px] leading-8 text-[#5F574C]">
                <p>
                  Esta política puede actualizarse cuando cambien las
                  tecnologías utilizadas, los servicios de terceros o las
                  obligaciones legales aplicables.
                </p>
                <p>
                  La versión vigente estará disponible en esta página e
                  indicará su fecha de actualización.
                </p>
              </div>
            </section>

            <section id="contacto" class="scroll-mt-28 py-9">
              <h2 class="font-serif text-2xl sm:text-3xl">
                7. Contacto
              </h2>
              <div class="mt-5 space-y-4 text-[15px] leading-8 text-[#5F574C]">
                <p>
                  Para consultas sobre esta política, puedes contactar con la
                  persona o entidad responsable de la web mediante los datos
                  que se indiquen en el
                  <NuxtLink to="/aviso-legal"
                    class="font-medium text-[#94784D] underline decoration-[#AA8D58]/50 underline-offset-4 hover:text-[#725B36]">
                    aviso legal
                  </NuxtLink>.
                </p>
              </div>
            </section>

            <div class="mt-8 border-t border-[#D8CDBB]/70 pt-6">
              <p class="text-sm leading-7 text-[#827766]">
                Última actualización: 2 de octubre de 2026.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>
