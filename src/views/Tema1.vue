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
        p El diseño del plan de trabajo para un proyecto de software debe estar enmarcado inicialmente de acuerdo a las actividades y requerimientos que surjan del análisis de estos; es importante tener en cuenta que los requerimientos del proyecto surgen de la necesidad tecnológica en el momento en el que se le realiza una entrevista al cliente y tomando atenta nota de las necesidades que este exprese y que serán priorizadas de acuerdo a los procedimientos del negocio; es decir, que el sistema será construido de acuerdo a como se dé la dinámica del negocio que tenga el cliente para evitar reprocesos en la construcción del producto de <em>software</em>.

        .cajon.p-4.mb-4.color-cajon
          p Inicialmente se debe realizar una definición muy explícita de los objetivos a alcanzar en el proyecto y que deben estar conectados con los requerimientos exigidos por el usuario; adicional a ello, se deben establecer los riesgos a los que se enfrenta el proyecto y en qué nivel están esos riesgos, un ejemplo, es el alcance del proyecto o de algunos de los requerimientos exigidos por el cliente y que pueden acarrear retrasos y no solo eso, sino que puedan generar traumatismos en otros procesos que demanden mayor concentración del equipo de trabajo, siendo esto uno de los factores que puedan hacer que el proyecto fracase mucho antes de iniciar, por eso se deben negociar de manera conjunta entre el equipo de trabajo y el cliente para ver la viabilidad de estos y si requieren mayor esfuerzo tanto en tiempo como en capital humano para cumplirlos.

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
            p Definir los costes y planificación temporal para la revisión de la gestión.
          .tarjeta.color-modal.p-3(x="77%" y="17%" numero="4")
            p Proporcionar un enfoque general del desarrollo del <em>software</em> para todo el personal relacionado con el proyecto.
          .tarjeta.color-modal.p-3(x="77%" y="33%" numero="5")
            p Describir cómo se garantizará la calidad y cómo se gestionan los cambios.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure
          img(src="@/assets/curso/temas/tema1/img-3.png") 
      .col-lg-10
        p Acuerdo formal y de compromiso entre los representantes del equipo del proyecto, respecto a cómo se maneja y coordina el esfuerzo de desarrollo, especificando el alcance del proyecto, el enfoque para su administración, su organización y su plan de trabajo.

        p Para lograr una alta congruencia entre las partes involucradas se debe realizar los siguientes pasos:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-down")
      .tarjeta
        .col-10
          img(src='@/assets/curso/temas/tema1/img-4.svg') 
      .tarjeta
        .col-10
          img(src='@/assets/curso/temas/tema1/img-5.svg')
      .tarjeta
        .col-10
          img(src='@/assets/curso/temas/tema1/img-6.svg')
      .tarjeta
        .col-10
          img(src='@/assets/curso/temas/tema1/img-7.svg')
      .tarjeta
        .col-10
          img(src='@/assets/curso/temas/tema1/img-8.svg')
      .tarjeta
        .col-10
          img(src='@/assets/curso/temas/tema1/img-9.svg')
      .tarjeta
        .col-10
          img(src='@/assets/curso/temas/tema1/img-10.svg')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema1/img-11.png") 
      .col-lg-8
        p Adicional a todos estos procesos, es necesario tener claro desde el principio todos los componentes requeridos en el proyecto, esto incluye el capital humano, pues la contratación del personal es fundamental para llevar a cabo cada uno de los requerimientos solicitados por el cliente; en algunas ocasiones, por ejemplo, es necesaria la contratación de personal especializado en ciertas herramientas y que dentro del equipo de trabajo no se cuenta con tal experticia y, por tal motivo, debería estar contemplada dentro del plan de trabajo; es decir, los requerimientos solicitados por el cliente, hablan de las necesidades que se tendrán para el desarrollo del proyecto y que deberán incluirse en el plan de trabajo, el cual debe tener adjuntas todas las actividades necesarias para llevar a cabo este proceso de manera eficiente.

    separador 

    #t_1_1.titulo-segundo.color-acento-contenido.pb-2
      h3 1.1 Metodologías para el desarrollo de <em>software</em>

    p.mb-5 Las metodologías de desarrollo de software se entienden como marcos de trabajo para generar la dinámica de los proyectos de <em>software</em> los cuales, de acuerdo con las necesidades y requerimientos del cliente, pueden tener un grado de complejidad adjunto por lo que seleccionar la metodología adecuada es clave para que este proceso se realice de manera correcta. 

    .row.justify-content-center.align-items-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-md-3.mb-5.cuadro-derecha-1
          .row.m-0.align-items-center.justify-content-between.bloque-texto-a.texto-1
            .col-lg-4.mb-1.mb-lg-0
              figure.posicion_imagen
                img(src='@/assets/curso/temas/tema1/img-12.png')
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p En la actualidad existen muchas metodologías, algunas de las cuales se ajustan a proyectos con un grado de dificultad grande y otras para proyectos mucho más personalizados, teniendo en cuenta la forma en cómo se gestionan estos y que tan detallado se quiere realizar este proceso para controlar los avances que  generan; estas metodologías van desde las tradicionales que se ajustan a proyectos complejos que requieren equipos de trabajo bastante grandes y con diferentes dinámicas internas, como también se encuentran las famosas metodologías ágiles que han tomado gran fortaleza en los últimos años trayendo así nuevas dinámicas para la gestión y seguimiento de proyectos de <em>software</em>.

    p.mb-5 Las metodologías permiten controlar e interactuar con el cliente o usuario final del aplicativo involucrándolo en el proceso de tal manera que este puede saber en qué fase se encuentra el proyecto y construye ciertos procesos del mismo en conjunto, esto genera de alguna manera una ventaja y es que el avance se considera una aceptación por parte del cliente que es quien aprueba los avances presentados, teniendo en cuenta las pruebas a cumplir. A continuación, se mencionan los tipos de metodologías:

    TabsC.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Desarrollo por prototipos")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p La metodología por prototipos permite que se generen versiones del proyecto de software, las cuales van generando de manera incremental los requerimientos solicitados por el cliente, esto permite ir revisando de manera progresiva el avance del proyecto y realizando cambios en el mismo, refinando el producto con cada entrega; se incluyen los requerimientos de acuerdo a la fase en que se encuentre y de acuerdo al plan de trabajo y cronograma negociado con el cliente. Es importante tener en cuenta que este tipo de metodologías es muy utilizado, ya que las versiones o prototipos que se generan y se refinan se pueden poner en marcha para que puedan ser probados en el entorno real en el que estará expuesto el proyecto, eso es una ventaja bastante significativa ya que son potenciales funcionalidades del sistema y generan valor para el cliente. A continuación, veremos una imagen que representa este proceso:

            p Como se puede observar en la imagen, las fases que afectan el producto se desarrollan de manera continua y una vez se completa el proceso se pasa a un incremento de producto con la validación y aprobación del cliente, lo que quiere decir, que una vez se cumple el ciclo del proceso, se crea un nuevo prototipo el cual surge de las mejoras realizadas; de esta manera va creciendo el producto hasta alcanzar el cumplimiento de todos requisitos del cliente.
          .col-md-6
            .titulo-sexto.color-acento-contenido.pb-0
              p.mb-0.text-small <b>Figura 1.</b> Metodología prototipo
            figure
              img(src='@/assets/curso/temas/tema1/img-13.svg')
      .py-4.py-md-5(titulo="Metodología Cascada")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p La metodología cascada pertenece a las llamadas tradicionales la cual realiza el proceso de construcción del <em>software</em> en diferentes fases, las cuales van desde el análisis de las necesidades expuestas por el cliente hasta la implementación del <em>software</em>, en cada fase se realiza una transformación y avance del producto, pero tiene una particularidad especial y es que la metodología cascada no permite realizar refacciones al producto en el proceso de construcción; es decir, solo se pueden realizar cambios a problemas presentados en la siguiente versión, un ejemplo de esto, es el desarrollo de los sistemas operativos a los que no se les pueden realizar cambios y mejoramientos al proceso, sino que una vez que se construye el producto se pueden sacar parches de seguridad, o actualizaciones para arreglar los problemas presentados en la construcción del <em>software</em>.

            p Como se puede apreciar en la imagen la metodología de cascada establece un marco de trabajo en el cual no se puede generar retroalimentación, sino hasta el final del ciclo del proceso, esto da a entender que los cambios solo se realizan después de generar la versión del proceso completo y en una nueva versión se establecen los arreglos a realizar o cambios solicitados por el cliente.

          .col-md-6
            .titulo-sexto.color-acento-contenido.pb-0
              p.mb-0.text-small <b>Figura 2.</b> Metodología de cascada
            figure
              img(src='@/assets/curso/temas/tema1/img-14.svg')

      .py-4.py-md-5(titulo="Metodologías Ágiles")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p La metodología <em>Scrum</em> es una de las más utilizadas a nivel mundial, ya que provee un marco de trabajo sencillo el cual involucra al cliente en todo momento en el desarrollo del producto, lo que lo convierte en el protagonista del proceso de desarrollo; esta metodología cuenta con diferentes artefactos, los cuales permiten generar inercia con la construcción del producto tales como el <em>product backlog</em> que es una lista priorizada de los requerimientos del usuario y que se deben construir e implementar de acuerdo a las necesidades del cliente,  generando valor al negocio, es decir, deben ser funcionales. Luego se encuentra el <em>sprint backlog</em>, un detalle de la lista de requerimientos del <em>product backlog</em>, pero distribuida en actividades que se deben desarrollar para cumplir con el objetivo del requerimiento a construir.
          .col-md-6
            .titulo-sexto.color-acento-contenido.pb-0
              p.mb-0.text-small <b>Figura 3.</b> Metodología <em>Scrum</em>
            figure
              img(src='@/assets/curso/temas/tema1/img-15.svg')

    p.mb-5 A continuación, los roles de la metodología <em>SCRUM</em>:

    .row.justify-content-center.align-items-center.mb-5
      .col-md-9
        .titulo-sexto.color-acento-contenido.pb-0
          p.mb-0.text-small <b>Figura 4.</b> Roles metodología <em>Scrum</em>
        figure
          img(src='@/assets/curso/temas/tema1/img-16.svg')

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      
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
