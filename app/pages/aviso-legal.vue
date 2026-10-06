<script setup lang="ts">
import SiteHeader from '~/components/SiteHeader.vue'
import SiteFooter from '~/components/SiteFooter.vue'

useSeoMeta({
  title: 'Aviso legal | Residencial Teclo',
  description:
    'Aviso legal y condiciones de uso de la web informativa de Residencial Teclo.',
})

const sections = [
  { id: 'titular', label: 'Titular de la web' },
  { id: 'objeto', label: 'Objeto de la web' },
  { id: 'condiciones', label: 'Condiciones de uso' },
  { id: 'proyecto', label: 'Información del proyecto' },
  { id: 'propiedad', label: 'Propiedad intelectual' },
  { id: 'responsabilidad', label: 'Responsabilidad' },
  { id: 'enlaces', label: 'Enlaces externos' },
  { id: 'legislacion', label: 'Legislación aplicable' },
]
</script>

<template>
  <main class="min-h-screen bg-[#F5F2EC] text-[#302E2A]">
    <SiteHeader />

    <!-- Cabecera -->
    <section class="relative overflow-hidden border-b border-[#D8CDBB]/70">
      <div aria-hidden="true" class="absolute inset-0 bg-gradient-to-br from-[#EEE5D6]/80
               via-[#F5F2EC] to-[#F5F2EC]" />

      <div class="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
        <div class="max-w-3xl">
          <p class="mb-4 text-xs font-semibold uppercase tracking-[0.28em]
                   text-[#94784D] sm:text-sm">
            Información legal
          </p>

          <h1 class="font-serif text-4xl leading-tight tracking-tight
                   text-[#332D25] sm:text-5xl lg:text-6xl">
            Aviso legal
          </h1>

          <span class="mt-6 block h-0.5 w-16 bg-[#C9A86A]" />

          <p class="mt-6 max-w-2xl text-base leading-8 text-[#625C53] sm:text-lg">
            En esta página encontrarás la información sobre la titularidad,
            las condiciones de uso y los aspectos legales relacionados con
            esta web de Residencial Teclo.
          </p>

          <p class="mt-4 text-sm text-[#777168]">
            Última actualización: 2 de octubre de 2026
          </p>
        </div>
      </div>
    </section>

    <div class="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10
             px-5 py-10 sm:px-8 sm:py-14
             lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-16 lg:px-10">
      <!-- Índice -->
      <aside class="lg:sticky lg:top-28">
        <div class="rounded-xl border border-[#DED5C8] bg-white/55 p-5">
          <p class="mb-4 text-xs font-semibold uppercase tracking-[0.2em]
                   text-[#94784D]">
            En esta página
          </p>

          <nav aria-label="Índice del aviso legal">
            <ul class="space-y-3">
              <li v-for="section in sections" :key="section.id">
                <a :href="`#${section.id}`" class="text-sm leading-6 text-[#625C53]
                         transition-colors hover:text-[#94784D]">
                  {{ section.label }}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="mt-5 rounded-xl bg-[#EDE5D9]/70 p-5">
          <p class="font-serif text-lg text-[#332D25]">
            Residencial Teclo
          </p>
          <p class="mt-2 text-sm leading-6 text-[#625C53]">
            Una iniciativa residencial en fase inicial de estudio.
          </p>
        </div>
      </aside>

      <!-- Texto legal -->
      <article class="min-w-0 max-w-3xl space-y-10">
        <!-- 01 Titular -->
        <section id="titular" class="scroll-mt-28 border-b border-[#D8CDBB] pb-9">
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A1834D]">
            01
          </p>

          <h2 class="font-serif text-2xl text-[#332D25] sm:text-3xl">
            Titular de la web
          </h2>

          <p class="mt-5 leading-7 text-[#625C53]">
            En cumplimiento del deber de información previsto en el artículo 10
            de la Ley 34/2002, de servicios de la sociedad de la información
            y de comercio electrónico (LSSI-CE), se indican a continuación
            los datos de la persona o entidad titular de esta web.
          </p>

          <div class="mt-5 rounded-lg border border-[#DED5C8] bg-white/55 p-5">
            <dl class="space-y-4 text-sm">
              <div>
                <dt class="font-semibold text-[#332D25]">
                  Titular
                </dt>
                <dd class="mt-1 leading-6 text-[#625C53]">
                  [Nombre y apellidos o denominación social]
                </dd>
              </div>

              <div>
                <dt class="font-semibold text-[#332D25]">
                  NIF o CIF
                </dt>
                <dd class="mt-1 leading-6 text-[#625C53]">
                  [NIF o CIF correspondiente]
                </dd>
              </div>

              <div>
                <dt class="font-semibold text-[#332D25]">
                  Domicilio
                </dt>
                <dd class="mt-1 leading-6 text-[#625C53]">
                  [Domicilio a efectos legales]
                </dd>
              </div>

              <div>
                <dt class="font-semibold text-[#332D25]">
                  Correo electrónico
                </dt>
                <dd class="mt-1 leading-6 text-[#625C53]">
                  [Correo electrónico de contacto]
                </dd>
              </div>

              <div>
                <dt class="font-semibold text-[#332D25]">
                  Datos registrales
                </dt>
                <dd class="mt-1 leading-6 text-[#625C53]">
                  [Datos de inscripción registral, si corresponde]
                </dd>
              </div>
            </dl>
          </div>

          <p class="mt-4 text-sm leading-6 text-[#777168]">
            Los campos anteriores deben completarse con los datos reales del
            titular. Los datos registrales se incluirán cuando sean aplicables.
          </p>
        </section>

        <!-- 02 Objeto -->
        <section id="objeto" class="scroll-mt-28 border-b border-[#D8CDBB] pb-9">
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A1834D]">
            02
          </p>

          <h2 class="font-serif text-2xl text-[#332D25] sm:text-3xl">
            Objeto de la web
          </h2>

          <p class="mt-5 leading-7 text-[#625C53]">
            Esta web tiene una finalidad informativa y permite conocer la
            iniciativa denominada Residencial Teclo, así como participar,
            en su caso, en una encuesta orientada a conocer las preferencias
            de posibles interesados en una futura promoción residencial.
          </p>

          <p class="mt-4 leading-7 text-[#625C53]">
            La participación en la encuesta tiene como finalidad recabar
            preferencias generales y no supone por sí misma una solicitud
            formal de compra, una reserva, una opción de compra ni la
            celebración de contrato alguno.
          </p>
        </section>

        <!-- 03 Condiciones -->
        <section id="condiciones" class="scroll-mt-28 border-b border-[#D8CDBB] pb-9">
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A1834D]">
            03
          </p>

          <h2 class="font-serif text-2xl text-[#332D25] sm:text-3xl">
            Condiciones de uso
          </h2>

          <p class="mt-5 leading-7 text-[#625C53]">
            El acceso y la navegación por esta web implican el compromiso de
            utilizarla de forma lícita, responsable y respetuosa con la
            normativa vigente y con los derechos de terceros.
          </p>

          <p class="mt-4 leading-7 text-[#625C53]">
            La persona usuaria se compromete a no realizar actividades que
            puedan dañar, sobrecargar, inutilizar o impedir el funcionamiento
            normal de la web, ni a intentar acceder sin autorización a sus
            sistemas, datos o recursos.
          </p>

          <p class="mt-4 leading-7 text-[#625C53]">
            No está permitido utilizar los formularios para enviar información
            falsa, contenidos ilícitos o comunicaciones que puedan perjudicar
            a otras personas.
          </p>
        </section>

        <!-- 04 Proyecto -->
        <section id="proyecto" class="scroll-mt-28 border-b border-[#D8CDBB] pb-9">
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A1834D]">
            04
          </p>

          <h2 class="font-serif text-2xl text-[#332D25] sm:text-3xl">
            Información del proyecto
          </h2>

          <div class="mt-5 rounded-xl border border-[#D8CDBB] bg-white/55 p-5 sm:p-6">
            <p class="font-serif text-xl text-[#332D25]">
              Un proyecto en fase inicial
            </p>

            <p class="mt-3 leading-7 text-[#625C53]">
              Residencial Teclo se encuentra en una fase inicial de estudio.
              La información publicada tiene carácter orientativo y puede
              cambiar a medida que avance la definición del proyecto.
            </p>
          </div>

          <p class="mt-5 leading-7 text-[#625C53]">
            Las imágenes, ilustraciones, descripciones y elementos visuales
            que se utilicen con carácter conceptual tienen una finalidad
            ilustrativa y no deben interpretarse como representaciones
            definitivas de una promoción aprobada o ejecutada.
          </p>

          <p class="mt-4 leading-7 text-[#625C53]">
            Las características de las viviendas, superficies, distribuciones,
            equipamientos, zonas comunes, calidades, precios, plazos y demás
            condiciones, si llegan a definirse, estarán sujetas a la
            documentación y a la información formal que se publique en cada
            momento.
          </p>

          <p class="mt-4 leading-7 text-[#625C53]">
            La información de esta web no constituye una oferta vinculante,
            una promesa de venta ni una garantía de que el proyecto vaya
            a desarrollarse en unos términos concretos.
          </p>
        </section>

        <!-- 05 Propiedad intelectual -->
        <section id="propiedad" class="scroll-mt-28 border-b border-[#D8CDBB] pb-9">
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A1834D]">
            05
          </p>

          <h2 class="font-serif text-2xl text-[#332D25] sm:text-3xl">
            Propiedad intelectual e industrial
          </h2>

          <p class="mt-5 leading-7 text-[#625C53]">
            Los contenidos de esta web —incluidos, cuando corresponda, los
            textos, diseños, elementos gráficos, logotipos y código— están
            sujetos a los derechos de propiedad intelectual o industrial de
            sus respectivos titulares.
          </p>

          <p class="mt-4 leading-7 text-[#625C53]">
            Salvo en los casos permitidos por la ley o cuando exista
            autorización del titular correspondiente, no se permite reproducir,
            distribuir, transformar, comunicar públicamente o explotar los
            contenidos de esta web con fines comerciales.
          </p>

          <p class="mt-4 leading-7 text-[#625C53]">
            La presencia de materiales de terceros no implica que sus derechos
            se transfieran al titular de esta web. Las condiciones de uso de
            dichos materiales dependerán de sus licencias y de los derechos
            que correspondan.
          </p>
        </section>

        <!-- 06 Responsabilidad -->
        <section id="responsabilidad" class="scroll-mt-28 border-b border-[#D8CDBB] pb-9">
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A1834D]">
            06
          </p>

          <h2 class="font-serif text-2xl text-[#332D25] sm:text-3xl">
            Responsabilidad
          </h2>

          <p class="mt-5 leading-7 text-[#625C53]">
            Se procura que la información publicada sea clara y esté
            actualizada. No obstante, debido a la fase inicial del proyecto
            y a la posible evolución de sus características, pueden producirse
            cambios, omisiones o errores que deban corregirse.
          </p>

          <p class="mt-4 leading-7 text-[#625C53]">
            La persona titular podrá actualizar, modificar o retirar contenidos
            de la web cuando resulte necesario, sin perjuicio de las
            obligaciones legales que correspondan.
          </p>

          <p class="mt-4 leading-7 text-[#625C53]">
            En la medida permitida por la normativa aplicable, no se garantiza
            la disponibilidad ininterrumpida de la web ni la ausencia absoluta
            de errores técnicos. Lo anterior no excluye las responsabilidades
            que legalmente no puedan limitarse.
          </p>
        </section>

        <!-- 07 Enlaces -->
        <section id="enlaces" class="scroll-mt-28 border-b border-[#D8CDBB] pb-9">
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A1834D]">
            07
          </p>

          <h2 class="font-serif text-2xl text-[#332D25] sm:text-3xl">
            Enlaces externos
          </h2>

          <p class="mt-5 leading-7 text-[#625C53]">
            Esta web puede incluir enlaces a páginas o servicios de terceros
            para facilitar el acceso a información complementaria.
          </p>

          <p class="mt-4 leading-7 text-[#625C53]">
            La existencia de esos enlaces no implica necesariamente una
            relación, aprobación o recomendación de sus contenidos. Cada
            proveedor externo es responsable de sus propias páginas, servicios
            y políticas.
          </p>
        </section>

        <!-- 08 Legislación -->
        <section id="legislacion" class="scroll-mt-28 pb-4">
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A1834D]">
            08
          </p>

          <h2 class="font-serif text-2xl text-[#332D25] sm:text-3xl">
            Legislación aplicable
          </h2>

          <p class="mt-5 leading-7 text-[#625C53]">
            Este aviso legal se rige por la legislación española que resulte
            aplicable, incluida la Ley 34/2002, de servicios de la sociedad
            de la información y de comercio electrónico, y la normativa sobre
            propiedad intelectual e industrial que corresponda.
          </p>

          <p class="mt-4 leading-7 text-[#625C53]">
            Cualquier controversia se resolverá ante los órganos competentes
            conforme a las normas legales aplicables, sin perjuicio de los
            derechos que correspondan a las personas consumidoras y usuarias.
          </p>

          <p class="mt-4 leading-7 text-[#625C53]">
            Si alguna disposición de este aviso fuera declarada inválida o
            inaplicable, ello no afectará por sí solo a la validez del resto
            de sus disposiciones.
          </p>
        </section>

        <!-- Volver -->
        <div class="border-t border-[#D8CDBB] pt-6">
          <NuxtLink to="/" class="inline-flex items-center gap-2 text-sm font-medium
                   text-[#94784D] transition hover:text-[#725A34]">
            <span aria-hidden="true">←</span>
            Volver a Residencial Teclo
          </NuxtLink>
        </div>
      </article>
    </div>

    <SiteFooter />
  </main>
</template>
