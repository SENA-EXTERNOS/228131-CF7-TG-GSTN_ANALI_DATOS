<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center
      .col-lg-9
        .cajon-b.color-primario.p-3.mb-5.intro
          p.mb-0 Apreciado aprendiz, bienvenido a este componente formativo, donde se abordarán las temáticas orientadas al proceso de construcción de un sistema de información, en el cual se tendrá como eje fundamental, el modelo de construcción, de acuerdo con los lineamientos, plan de trabajo y las metodologías que permitan su gestión y control.
            br
            br
            |Afiance sus saberes y habilidades en lo relacionado con ciclo de vida del #[EM software], etapas del sistema, tecnologías y recursos necesarios (humanos, tecnológicos y económicos), eficiencia de los procesos de #[em software], gestión de los mismos y la correcta combinación de estos, para llegar al éxito.
            br
            br
            |En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo. 

      .col-lg-3
        figure
          img(src="@/assets/curso/temas/img-intro.png")

    p.mb-5 Lo invitamos a ver el video introductorio y a participar activamente en cada uno de los conceptos y conocimientos abordados en este componente, ya que serán de apoyo y soporte para la elaboración de actividades que nacen a partir del mismo. <b>Muchos éxitos en esta nueva etapa.</b>

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
