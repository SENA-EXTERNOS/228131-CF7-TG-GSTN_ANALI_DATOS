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
          p.mb-0 Bienvenido, querido aprendiz a este componente formativo en el que se abordarán las temáticas orientadas al proceso de construcción de un sistema de información en el cual se tendrá como eje fundamental el modelo de construcción de acuerdo a lineamientos, plan de trabajo y las metodologías que permitan su gestión y control; adicional a ello, es indispensable que no se deje de lado el ciclo de vida del <em>software</em>, el cual establece en qué etapa se encuentra el sistema. Ahora bien, estos componentes permiten agrupar la tecnología necesaria y los recursos para llevar a cabo de manera eficiente este proceso. Uno de los problemas al momento de construir un sistema de información es justamente no realizar una correcta gestión de los recursos que se deben tener para el desarrollo del mismo; es decir, los humanos, tecnológicos y económicos y la correcta combinación de estos para llegar al éxito. 

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
