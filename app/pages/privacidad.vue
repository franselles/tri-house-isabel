<script setup lang="ts">
import SiteHeader from '~/components/SiteHeader.vue'
import SiteFooter from '~/components/SiteFooter.vue'

useSeoMeta({
  title: 'Política de privacidad | Residencial Teclo',
  description:
    'Información sobre el tratamiento de datos personales en la web de Residencial Teclo y en su encuesta de preferencias de vivienda.',
})

const sections = [
  { id: 'responsable', label: 'Responsable del tratamiento' },
  { id: 'datos', label: 'Datos que recopilamos' },
  { id: 'finalidad', label: 'Para qué utilizamos los datos' },
  { id: 'legitimacion', label: 'Base jurídica' },
  { id: 'conservacion', label: 'Conservación de los datos' },
  { id: 'destinatarios', label: 'Destinatarios y proveedores' },
  { id: 'derechos', label: 'Tus derechos' },
  { id: 'seguridad', label: 'Seguridad de los datos' },
  { id: 'cambios', label: 'Cambios en esta política' },
]
</script>

<template>
  <main class="min-h-screen bg-[#F5F2EC] text-[#302E2A]">
    <SiteHeader />

    <!-- Cabecera de la página -->
    <section class="relative overflow-hidden border-b border-[#D8CDBB]/70">
      <div aria-hidden="true" class="absolute inset-0 bg-gradient-to-br from-[#EEE5D6]/80
               via-[#F5F2EC] to-[#F5F2EC]" />

      <div class="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
        <div class="max-w-3xl">
          <p class="mb-4 text-xs font-semibold uppercase tracking-[0.28em]
                   text-[#94784D] sm:text-sm">
            Transparencia y confianza
          </p>

          <h1 class="font-serif text-4xl leading-tight tracking-tight
                   text-[#332D25] sm:text-5xl lg:text-6xl">
            Política de privacidad
          </h1>

          <span class="mt-6 block h-0.5 w-16 bg-[#C9A86A]" />

          <p class="mt-6 max-w-2xl text-base leading-8 text-[#625C53] sm:text-lg">
            Queremos que conozcas qué datos personales podemos recoger a través
            de esta web, para qué los utilizamos y qué derechos tienes sobre ellos.
          </p>

          <p class="mt-4 text-sm text-[#777168]">
            Última actualización: 2 de octubre de 2026
          </p>
        </div>
      </div>
    </section>

    <div class="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10
             px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[250px_minmax(0,1fr)]
             lg:gap-16 lg:px-10">
      <!-- Índice de contenidos -->
      <aside class="lg:sticky lg:top-28">
        <div class="rounded-xl border border-[#DED5C8] bg-white/55 p-5">
          <p class="mb-4 text-xs font-semibold uppercase tracking-[0.2em]
                   text-[#94784D]">
            En esta página
          </p>

          <nav aria-label="Índice de la política de privacidad">
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
            ¿Tienes alguna duda?
          </p>
          <p class="mt-2 text-sm leading-6 text-[#625C53]">
            Puedes contactar con la persona responsable del tratamiento
            utilizando los datos de contacto indicados en esta política.
          </p>
        </div>
      </aside>

      <!-- Contenido legal -->
      <article class="min-w-0 max-w-3xl space-y-10">
        <section id="responsable" class="scroll-mt-28 border-b border-[#D8CDBB] pb-9">
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A1834D]">
            01
          </p>
          <h2 class="font-serif text-2xl text-[#332D25] sm:text-3xl">
            Responsable del tratamiento
          </h2>

          <p class="mt-5 leading-7 text-[#625C53]">
            La persona responsable del tratamiento de los datos personales
            recogidos a través de esta web es:
          </p>

          <div class="mt-5 rounded-lg border border-[#DED5C8] bg-white/55 p-5">
            <dl class="space-y-4 text-sm">
              <div>
                <dt class="font-semibold text-[#332D25]">
                  Responsable
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
                  Correo electrónico de contacto
                </dt>
                <dd class="mt-1 leading-6 text-[#625C53]">
                  [Correo electrónico habilitado para consultas de privacidad]
                </dd>
              </div>
            </dl>
          </div>

          <p class="mt-4 text-sm leading-6 text-[#777168]">
            Estos datos deben completarse con la identidad y los datos reales
            de la persona o entidad responsable antes de publicar la página.
          </p>
        </section>

        <section id="datos" class="scroll-mt-28 border-b border-[#D8CDBB] pb-9">
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A1834D]">
            02
          </p>
          <h2 class="font-serif text-2xl text-[#332D25] sm:text-3xl">
            Datos que recopilamos
          </h2>

          <p class="mt-5 leading-7 text-[#625C53]">
            Los datos que podemos tratar dependen de cómo utilices la web y
            de la información que decidas facilitarnos.
          </p>

          <ul class="mt-5 space-y-4">
            <li class="flex gap-3">
              <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#B69A68]" />
              <div>
                <h3 class="font-semibold text-[#332D25]">
                  Preferencias de vivienda
                </h3>
                <p class="mt-1 leading-7 text-[#625C53]">
                  Número de dormitorios y baños, plazas de garaje y preferencia
                  sobre disponer de trastero, según las opciones de la encuesta.
                </p>
              </div>
            </li>

            <li class="flex gap-3">
              <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#B69A68]" />
              <div>
                <h3 class="font-semibold text-[#332D25]">
                  Datos de contacto
                </h3>
                <p class="mt-1 leading-7 text-[#625C53]">
                  Nombre y correo electrónico, cuando los facilites para
                  solicitar información o recibir novedades del proyecto.
                </p>
              </div>
            </li>

            <li class="flex gap-3">
              <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#B69A68]" />
              <div>
                <h3 class="font-semibold text-[#332D25]">
                  Datos técnicos
                </h3>
                <p class="mt-1 leading-7 text-[#625C53]">
                  El servidor o los servicios técnicos utilizados para prestar
                  la web podrían generar datos como registros de acceso,
                  dirección IP u otra información técnica. Su tratamiento
                  dependerá de la configuración efectiva de esos servicios.
                </p>
              </div>
            </li>
          </ul>

          <p class="mt-5 leading-7 text-[#625C53]">
            Te pedimos que no incluyas información personal que no sea necesaria
            para participar en la encuesta.
          </p>
        </section>

        <section id="finalidad" class="scroll-mt-28 border-b border-[#D8CDBB] pb-9">
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A1834D]">
            03
          </p>
          <h2 class="font-serif text-2xl text-[#332D25] sm:text-3xl">
            Para qué utilizamos los datos
          </h2>

          <p class="mt-5 leading-7 text-[#625C53]">
            Los datos se utilizarán únicamente para las finalidades que se
            indiquen en el momento de recogerlos y que correspondan al uso
            efectivo de esta web.
          </p>

          <div class="mt-5 space-y-5">
            <div>
              <h3 class="font-semibold text-[#332D25]">
                Analizar las preferencias de vivienda
              </h3>
              <p class="mt-1 leading-7 text-[#625C53]">
                Conocer las características residenciales que interesan a las
                personas participantes y orientar la fase inicial de estudio
                del proyecto.
              </p>
            </div>

            <div>
              <h3 class="font-semibold text-[#332D25]">
                Contactar contigo
              </h3>
              <p class="mt-1 leading-7 text-[#625C53]">
                Utilizar el nombre y el correo electrónico para responder a
                consultas o enviar información sobre el proyecto cuando
                corresponda y exista una base jurídica válida para ello.
              </p>
            </div>

            <div>
              <h3 class="font-semibold text-[#332D25]">
                Mantener y proteger la web
              </h3>
              <p class="mt-1 leading-7 text-[#625C53]">
                Atender necesidades técnicas, prevenir usos indebidos y
                garantizar el funcionamiento y la seguridad del servicio,
                cuando proceda.
              </p>
            </div>
          </div>

          <p class="mt-5 leading-7 text-[#625C53]">
            Las respuestas de la encuesta no deben utilizarse para enviar
            comunicaciones comerciales a quienes no hayan solicitado o
            autorizado recibirlas, cuando ese consentimiento sea necesario.
          </p>
        </section>

        <section id="legitimacion" class="scroll-mt-28 border-b border-[#D8CDBB] pb-9">
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A1834D]">
            04
          </p>
          <h2 class="font-serif text-2xl text-[#332D25] sm:text-3xl">
            Base jurídica del tratamiento
          </h2>

          <p class="mt-5 leading-7 text-[#625C53]">
            Cada finalidad debe contar con una base jurídica adecuada conforme
            al Reglamento General de Protección de Datos y a la normativa
            española aplicable.
          </p>

          <ul class="mt-4 list-disc space-y-3 pl-5 leading-7 text-[#625C53]">
            <li>
              <strong class="text-[#332D25]">Encuesta:</strong>
              la base jurídica concreta debe determinarse según cómo se
              presente la participación, la información ofrecida y el uso
              previsto de las respuestas.
            </li>
            <li>
              <strong class="text-[#332D25]">Novedades del proyecto:</strong>
              cuando el envío se base en el consentimiento, este deberá
              solicitarse de forma específica, libre e informada y poder
              acreditarse.
            </li>
            <li>
              <strong class="text-[#332D25]">Seguridad y funcionamiento:</strong>
              el tratamiento de datos técnicos se limitará a lo necesario y
              deberá apoyarse en la base jurídica que corresponda.
            </li>
          </ul>

          <p class="mt-4 text-sm leading-6 text-[#777168]">
            La base jurídica definitiva de cada finalidad debe confirmarse
            antes de publicar esta política y reflejarse de forma coherente
            en el formulario.
          </p>
        </section>

        <section id="conservacion" class="scroll-mt-28 border-b border-[#D8CDBB] pb-9">
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A1834D]">
            05
          </p>
          <h2 class="font-serif text-2xl text-[#332D25] sm:text-3xl">
            Conservación de los datos
          </h2>

          <p class="mt-5 leading-7 text-[#625C53]">
            Los datos personales se conservarán durante el tiempo necesario
            para cumplir la finalidad para la que fueron recogidos y, cuando
            corresponda, durante los plazos exigidos para atender
            responsabilidades legales.
          </p>

          <ul class="mt-4 list-disc space-y-3 pl-5 leading-7 text-[#625C53]">
            <li>
              Las respuestas de la encuesta se conservarán durante el periodo
              que se establezca para analizar las preferencias del proyecto.
            </li>
            <li>
              Los datos de contacto se conservarán mientras sean necesarios
              para la finalidad solicitada o hasta que retires tu consentimiento,
              cuando esa sea la base jurídica aplicable, sin perjuicio de
              obligaciones legales de conservación.
            </li>
            <li>
              Los registros técnicos se conservarán durante el plazo necesario
              para la finalidad de seguridad o funcionamiento correspondiente.
            </li>
          </ul>

          <p class="mt-4 text-sm leading-6 text-[#777168]">
            Deben definirse los plazos concretos o los criterios específicos
            de conservación aplicables a cada tratamiento.
          </p>
        </section>

        <section id="destinatarios" class="scroll-mt-28 border-b border-[#D8CDBB] pb-9">
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A1834D]">
            06
          </p>
          <h2 class="font-serif text-2xl text-[#332D25] sm:text-3xl">
            Destinatarios y proveedores
          </h2>

          <p class="mt-5 leading-7 text-[#625C53]">
            Los datos podrán ser tratados por proveedores que presten servicios
            técnicos necesarios para el funcionamiento de la web, siempre que
            intervengan realmente en el tratamiento y bajo las condiciones
            legales que correspondan.
          </p>

          <p class="mt-4 leading-7 text-[#625C53]">
            Si las respuestas se almacenan en Google Sheets o se utilizan
            servicios de Google para gestionar los datos, será necesario
            identificar los servicios y entidades que intervienen, revisar sus
            condiciones de tratamiento y determinar si existen transferencias
            internacionales de datos y qué garantías resultan aplicables.
          </p>

          <p class="mt-4 leading-7 text-[#625C53]">
            No se venderán los datos personales. Solo se comunicarán a terceros
            cuando exista una base jurídica para ello, resulte necesario para
            prestar el servicio o exista una obligación legal.
          </p>

          <p class="mt-4 text-sm leading-6 text-[#777168]">
            La información definitiva sobre proveedores, destinatarios y
            transferencias debe ajustarse a la configuración real de la web.
          </p>
        </section>

        <section id="derechos" class="scroll-mt-28 border-b border-[#D8CDBB] pb-9">
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A1834D]">
            07
          </p>
          <h2 class="font-serif text-2xl text-[#332D25] sm:text-3xl">
            Tus derechos
          </h2>

          <p class="mt-5 leading-7 text-[#625C53]">
            Puedes ejercer, cuando sean aplicables, los siguientes derechos
            en relación con tus datos personales:
          </p>

          <div class="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div class="rounded-lg border border-[#DED5C8] bg-white/55 p-4">
              <h3 class="font-semibold text-[#332D25]">Acceso</h3>
              <p class="mt-1 text-sm leading-6 text-[#625C53]">
                Saber si tratamos tus datos y obtener información sobre ellos.
              </p>
            </div>

            <div class="rounded-lg border border-[#DED5C8] bg-white/55 p-4">
              <h3 class="font-semibold text-[#332D25]">Rectificación</h3>
              <p class="mt-1 text-sm leading-6 text-[#625C53]">
                Solicitar la corrección de datos inexactos o incompletos.
              </p>
            </div>

            <div class="rounded-lg border border-[#DED5C8] bg-white/55 p-4">
              <h3 class="font-semibold text-[#332D25]">Supresión</h3>
              <p class="mt-1 text-sm leading-6 text-[#625C53]">
                Solicitar que eliminemos tus datos cuando proceda legalmente.
              </p>
            </div>

            <div class="rounded-lg border border-[#DED5C8] bg-white/55 p-4">
              <h3 class="font-semibold text-[#332D25]">Oposición</h3>
              <p class="mt-1 text-sm leading-6 text-[#625C53]">
                Oponerte a determinados tratamientos en los supuestos previstos.
              </p>
            </div>

            <div class="rounded-lg border border-[#DED5C8] bg-white/55 p-4">
              <h3 class="font-semibold text-[#332D25]">Limitación</h3>
              <p class="mt-1 text-sm leading-6 text-[#625C53]">
                Solicitar la limitación del tratamiento en los casos previstos.
              </p>
            </div>

            <div class="rounded-lg border border-[#DED5C8] bg-white/55 p-4">
              <h3 class="font-semibold text-[#332D25]">Portabilidad</h3>
              <p class="mt-1 text-sm leading-6 text-[#625C53]">
                Recibir determinados datos en un formato adecuado cuando se
                cumplan los requisitos legales.
              </p>
            </div>
          </div>

          <p class="mt-5 leading-7 text-[#625C53]">
            Cuando el tratamiento se base en el consentimiento, puedes retirarlo
            en cualquier momento. La retirada no afecta a la licitud del
            tratamiento realizado antes de retirarlo.
          </p>

          <p class="mt-4 leading-7 text-[#625C53]">
            Para ejercer tus derechos, contacta con la persona responsable
            mediante el correo electrónico indicado en el apartado
            «Responsable del tratamiento». Es posible que sea necesario
            verificar tu identidad para evitar accesos no autorizados.
          </p>

          <p class="mt-4 leading-7 text-[#625C53]">
            También puedes presentar una reclamación ante la
            <a href="https://www.aepd.es/" target="_blank" rel="noopener noreferrer" class="text-[#94784D] underline decoration-[#C9A86A]
                     underline-offset-4 hover:text-[#725A34]">
              Agencia Española de Protección de Datos (AEPD)
            </a>
            si consideras que el tratamiento de tus datos no se ajusta a la normativa.
          </p>
        </section>

        <section id="seguridad" class="scroll-mt-28 border-b border-[#D8CDBB] pb-9">
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A1834D]">
            08
          </p>
          <h2 class="font-serif text-2xl text-[#332D25] sm:text-3xl">
            Seguridad de los datos
          </h2>

          <p class="mt-5 leading-7 text-[#625C53]">
            Se deberán aplicar medidas técnicas y organizativas adecuadas al
            tipo de información tratada para proteger los datos frente a
            accesos no autorizados, pérdida, alteración o divulgación indebida.
          </p>

          <p class="mt-4 leading-7 text-[#625C53]">
            Ningún sistema puede garantizar una seguridad absoluta. Las medidas
            concretas deberán corresponderse con la infraestructura y los
            procedimientos realmente implantados.
          </p>
        </section>

        <section id="cambios" class="scroll-mt-28 pb-4">
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A1834D]">
            09
          </p>
          <h2 class="font-serif text-2xl text-[#332D25] sm:text-3xl">
            Cambios en esta política
          </h2>

          <p class="mt-5 leading-7 text-[#625C53]">
            Esta política podrá actualizarse si cambian las características de
            la web, las finalidades del tratamiento, los proveedores utilizados
            o las obligaciones legales aplicables. La versión vigente estará
            disponible en esta página, con su fecha de actualización.
          </p>
        </section>

        <!-- Volver al inicio -->
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
