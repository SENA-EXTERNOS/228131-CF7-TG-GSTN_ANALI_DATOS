<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Diseño del plan de trabajo para el proyecto de <em>software</em>

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/tema1/img-1.png") 
      .col-lg-9
        p El diseño del plan de trabajo para un proyecto de #[em software] debe estar enmarcado, inicialmente, de acuerdo con las actividades y requerimientos que surjan del análisis de estos; es importante tener en cuenta que los requerimientos del proyecto, surgen de la necesidad tecnológica en el momento en el que se le realiza una entrevista al cliente y tomando atenta nota de las necesidades que este exprese y que serán priorizadas, de acuerdo con los procedimientos del negocio; es decir, que el sistema será construido de acuerdo a como se dé la dinámica del negocio que tenga el cliente, para evitar reprocesos en la construcción del producto de #[em software.]

        .cajon.p-4.mb-4.color-cajon
          p Inicialmente, se debe realizar una definición muy explícita de los objetivos por alcanzar en el proyecto y que deben estar conectados con los requerimientos exigidos por el usuario; adicional a esto, se deben establecer los riesgos a los que se enfrenta el proyecto y en qué nivel se encuentran esos riesgos. Por ejemplo, el alcance del proyecto o de algunos de los requerimientos exigidos por el cliente y que pueden acarrear retrasos y no solo eso, sino generar traumatismos en otros procesos que demanden mayor concentración del equipo de trabajo, siendo este uno de los factores que pueden hacer que el proyecto fracase mucho antes de iniciar. Por eso, se debe negociar de manera conjunta entre el equipo de trabajo y el cliente, para analizar la viabilidad de estos y contemplar si se requiere mayor esfuerzo, tanto en tiempo como en capital humano, para cumplirlos.

    p.mb-5 <b>Los objetivos de un buen plan de proyecto deben ser los siguientes:</b>

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img-puntos.svg')
          .tarjeta.color-modal.p-3(x="20%" y="23%" numero="1")
            p Comunicar el ámbito y recursos al personal de desarrollo y al cliente.
          .tarjeta.color-modal.p-3(x="39%" y="14%" numero="2")
            p Definir los riesgos y sugerir técnicas de control del riesgo.
          .tarjeta.color-modal.p-3(x="54%" y="23%" numero="3")
            p Definir los costos y planificación temporal para la revisión de la gestión.
          .tarjeta.color-modal.p-3(x="77%" y="17%" numero="4")
            p Proporcionar un enfoque general del desarrollo del <em>software</em> para todo el personal relacionado con el proyecto.
          .tarjeta.color-modal.p-3(x="77%" y="33%" numero="5")
            p Describir cómo se garantizará la calidad y cómo se gestionan los cambios.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure
          img(src="@/assets/curso/temas/tema1/img-3.png") 
      .col-lg-10
        p En definitiva, se trata de un acuerdo formal y de compromiso, entre los representantes del equipo del proyecto, con respecto a cómo se maneja y coordina el esfuerzo de desarrollo, especificando el alcance del proyecto, el enfoque para su administración, su organización y su plan de trabajo.
          br
          br
          |Para lograr una alta congruencia entre las partes involucradas, se deben realizar los siguientes pasos:

    SlyderF.slyder-100.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-down")
      .tarjeta.overflow-hidden(style="background-color: #ffe595 ").h-100.d-flex.flex-column
        div(style="background-color: #4dd0e1 ").p-1.mb-4
          img(src='@/assets/curso/temas/tema1/c1.svg', alt='' style="width: 250px").m-auto
        p.text-center.p-3 Documentar el acuerdo entre los miembros del equipo del proyecto.
      .tarjeta.overflow-hidden(style="background-color: #ffe595 ").h-100.d-flex.flex-column
        div(style="background-color: #4dd0e1 ").p-1.mb-4
          img(src='@/assets/curso/temas/tema1/c2.svg', alt='' style="width: 250px").m-auto
        p.text-center.p-3 Buscar un entendimiento claro de los objetivos y las metas del proyecto.
      .tarjeta.overflow-hidden(style="background-color: #ffe595 ").h-100.d-flex.flex-column
        div(style="background-color: #4dd0e1 ").p-1.mb-4
          img(src='@/assets/curso/temas/tema1/c3.svg', alt='' style="width: 250px").m-auto
        p.text-center.p-3 Definir los roles y las responsabilidades del proyecto.
      .tarjeta.overflow-hidden(style="background-color: #ffe595 ").h-100.d-flex.flex-column
        div(style="background-color: #4dd0e1 ").p-1.mb-4
          img(src='@/assets/curso/temas/tema1/c4.svg', alt='' style="width: 250px").m-auto
        p.text-center.p-3 Documentar el enfoque de administración del proyecto y sus procedimientos.
      .tarjeta.overflow-hidden(style="background-color: #ffe595 ").h-100.d-flex.flex-column
        div(style="background-color: #4dd0e1 ").p-1.mb-4
          img(src='@/assets/curso/temas/tema1/c5.svg', alt='' style="width: 250px").m-auto
        p.text-center.p-3 Proveer una base para el alcance y manejo de las expectativas.
      .tarjeta.overflow-hidden(style="background-color: #ffe595 ").h-100.d-flex.flex-column
        div(style="background-color: #4dd0e1 ").p-1.mb-4
          img(src='@/assets/curso/temas/tema1/c6.svg', alt='' style="width: 250px").m-auto
        p.text-center.p-3 Definir los procedimientos para controlar los cambios, administrar los riesgos y monitorear la calidad del proyecto.
      .tarjeta.overflow-hidden(style="background-color: #ffe595 ").h-100.d-flex.flex-column
        div(style="background-color: #4dd0e1 ").p-1.mb-4
          img(src='@/assets/curso/temas/tema1/c7.svg', alt='' style="width: 250px").m-auto
        p.text-center.p-3 Comunicar los estatutos, con detalle, a todo el equipo de trabajo. 
        

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema1/img-11.png") 
      .col-lg-8
        p Adicional a todos estos procesos, es necesario tener claros, desde el principio, todos los componentes requeridos en el proyecto; esto incluye el capital humano, pues la contratación del personal es fundamental para llevar a cabo cada uno de los requerimientos solicitados por el cliente; en algunas ocasiones, por ejemplo, se hace necesaria la contratación de personal especializado en ciertas herramientas porque dentro del equipo de trabajo no se cuenta con tal experticia y, por tal motivo, debería estar contemplada dentro del plan de trabajo; es decir, los requerimientos solicitados por el cliente, hablan de las necesidades que se tendrán para el desarrollo del proyecto y que deberán incluirse en el plan de trabajo, el cual debe tener adjuntas todas las actividades necesarias para llevar a cabo este proceso, de manera eficiente.

    h3 Metodologías para el desarrollo de <em>software</em>

    p.mb-5 Las metodologías de desarrollo de #[em software] se entienden como marcos de trabajo para generar la dinámica de los proyectos de #[em software], los cuales, de acuerdo con las necesidades y requerimientos del cliente, pueden tener un grado de complejidad adjunto, por lo que seleccionar la metodología adecuada, es clave para que este proceso se realice de manera correcta.

    .row.justify-content-center.align-items-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-md-3.mb-5.cuadro-derecha-1
          .row.m-0.align-items-center.justify-content-between.bloque-texto-a.texto-1
            .col-lg-4.mb-1.mb-lg-0
              figure.posicion_imagen
                img(src='@/assets/curso/temas/tema1/img-12.png')
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p En la actualidad, existen muchas metodologías, algunas de las cuales se ajustan a proyectos con un grado de dificultad grande y otras para proyectos mucho más personalizados, teniendo en cuenta la forma en cómo se gestionan estos y qué tan detallado se quiere realizar este proceso para controlar los avances que generan; estas metodologías van desde las tradicionales, que se ajustan a proyectos complejos que requieren equipos de trabajo bastante grandes y con diferentes dinámicas internas, como también se encuentran las famosas metodologías ágiles, que han tomado gran fortaleza en los últimos años trayendo así nuevas dinámicas para la gestión y seguimiento de proyectos de #[em software.]

    p.mb-5 Las metodologías permiten controlar e interactuar con el cliente o usuario final del aplicativo involucrándolo en el proceso, de tal manera, que este pueda saber en qué fase se encuentra el proyecto; construya ciertos procesos del mismo en conjunto, lo que genera, de alguna manera, una ventaja y es que el avance se considera una aceptación por parte del cliente, que es quien aprueba los avances presentados, teniendo en cuenta las pruebas a cumplir. 
      br
      br
      |A continuación, se mencionan los tipos de metodologías:

    TabsC.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Desarrollo por prototipos")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p La metodología por prototipos, permite que se generen versiones del proyecto de #[em software], las cuales van generando, de manera incremental, los requerimientos solicitados por el cliente; esto permite ir revisando de manera progresiva el avance del proyecto y realizando cambios en el mismo, refinando el producto con cada entrega; se incluyen los requerimientos, de acuerdo con la fase en que se encuentre, y de acuerdo con el plan de trabajo y el cronograma negociado con el cliente.
              br
              br
              |Es importante tener en cuenta que este tipo de metodología es muy utilizado, porque las versiones o prototipos que se generan y se refinan, se pueden poner en marcha para que puedan ser probados en el entorno real en el que estará expuesto el proyecto; esto es una ventaja bastante significativa, porque son potenciales funcionalidades del sistema y generan valor para el cliente.
              br
              br
              |Como se puede observar en la imagen, las fases que afectan el producto se desarrollan de manera continua y, una vez se completa el proceso, se pasa a un incremento de producto con la validación y aprobación del cliente; esto quiere decir que, una vez se cumple el ciclo del proceso, se crea un nuevo prototipo, el cual surge de las mejoras realizadas y, de esta manera, va creciendo el producto hasta alcanzar el cumplimiento de todos requisitos del cliente.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-13.svg')
      .py-4.py-md-5(titulo="Metodología Cascada")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p La metodología cascada pertenece a las llamadas tradicionales; esta realiza el proceso de construcción del #[em software] en diferentes fases, que van desde el análisis de las necesidades expuestas por el cliente, hasta la implementación del #[em software]; en cada fase se realiza una transformación y avance del producto, pero tiene una particularidad especial y es que la metodología cascada no permite realizar refacciones al producto, en el proceso de construcción; es decir, solo se pueden realizar cambios a problemas presentados en la siguiente versión; un ejemplo de esto es el desarrollo de los sistemas operativos a los que no se les pueden realizar cambios y mejoramientos al proceso, sino que, una vez que se construye el producto, se pueden sacar parches de seguridad o actualizaciones, para arreglar los problemas presentados en la construcción del #[em software.]
              br
              br
              |Como se puede apreciar en la imagen, la metodología de cascada establece un marco de trabajo en el cual no se puede generar retroalimentación, sino hasta el final del ciclo del proceso; esto da a entender que los cambios solo se realizan después de generar la versión del proceso completo y, en una nueva versión, se establecen los arreglos a realizar o cambios solicitados por el cliente.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-14.svg')

      .py-4.py-md-5(titulo="Metodologías Ágiles")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p La metodología Scrum es una de las más utilizadas a nivel mundial, debido a que provee un marco de trabajo sencillo, el cual involucra al cliente en el desarrollo del producto, en todo momento, lo que lo convierte en el protagonista del proceso de su desarrollo; esta metodología cuenta con diferentes artefactos, los cuales permiten generar inercia con la construcción del producto, tales como el #[em product backlog], que es una lista priorizada de los requerimientos del usuario y que se deben construir e implementar, de acuerdo con las necesidades del cliente, generando valor al negocio; es decir, deben ser funcionales. Luego, se encuentra el #[em sprint backlog], un detalle de la lista de requerimientos del #[em product backlog], pero distribuida en actividades que se deben desarrollar, para cumplir con el objetivo del requerimiento a construir.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-15.svg')

    p.mb-5 A continuación, los roles de la metodología <em>SCRUM</em>:

    .row.justify-content-center.align-items-center.mb-5
      .col-md-9
        figure
          img(src='@/assets/curso/temas/tema1/img-16.svg')
    p.mb-5(data-aos='fade-right') Afiance sus saberes con relación a las metodologías ágiles; para hacerlo, visualice con suma atención el video que se muestra a continuación: 
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/pqemDIuq95g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
