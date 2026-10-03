<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  intro: string
  updatedAt?: string
}>()
</script>

<template>
  <main class="min-h-screen bg-[#F5F2EC] text-[#242322]">
    <SiteHeader />

    <section class="border-b border-[#DED7CC]">
      <div class="mx-auto max-w-3xl px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16">
        <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[#94784D]">
          {{ eyebrow }}
        </p>

        <h1 class="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
          {{ title }}
        </h1>

        <p class="mt-5 max-w-2xl text-base leading-7 text-[#5F5B54]">
          {{ intro }}
        </p>

        <p v-if="updatedAt" class="mt-5 text-xs text-[#777168]">
          Última actualización: {{ updatedAt }}
        </p>
      </div>
    </section>

    <article class="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-14
             [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:font-serif
             [&_h2]:text-2xl [&_h2]:leading-tight
             [&_p]:mb-4 [&_p]:text-sm [&_p]:leading-7
             [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:space-y-2
             [&_ul]:pl-6 [&_li]:text-sm [&_li]:leading-6
             [&_a]:text-[#94784D] [&_a]:underline
             [&_a]:underline-offset-4">
      <slot />
    </article>

    <SiteFooter />
  </main>
</template>
