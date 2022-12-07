<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Metodologías para el desarrollo de proyectos de <em>software</em>

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/img-1.png') 
      .col-lg-10
        p Como toda disciplina, el desarrollo de <em>software</em> madura y con el tiempo genera nuevos mecanismos para su propia optimización. De estos esfuerzos surgen las metodologías de desarrollo de <em>software</em>: marcos de trabajo utilizados para estructurar, planificar y controlar el proceso de desarrollo de un sistema de información.

    .row.justify-content-center.align-items-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-md-3.mb-5.cuadro-derecha-2
          .row.m-0.align-items-center.justify-content-between.bloque-texto-a.texto-2
            .col-lg-4.mb-1.mb-lg-0
              figure.posicion_imagen_2
                img(src='@/assets/curso/temas/tema3/img-2.png')
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Una metodología de desarrollo de <em>software</em> brinda al equipo de trabajo un marco para construir aplicaciones de manera eficiente y rigurosa, garantizando un producto cercano al esperado. Si no se desarrolla a partir de una metodología, el resultado final será impredecible y no se podrá controlar el avance del proyecto.

    p.mb-5 A continuación, las metodologías existentes de desarrollo de <em>software</em>: 

    .row
      .col-lg-8.order-2.order-lg-1
        TabsA.color-acento-botones.mb-5        
          .tarjeta.clr-paleYellow.p-4(titulo="Cascada")
            p El desarrollo es visto como el flujo de una catarata: las fases (análisis, diseño, implementación,<em> testing, </em>integración y mantenimiento) son secuenciales, impidiéndole iniciar una fase sin haber terminado la anterior.
          .tarjeta.clr-paleYellow.p-4(titulo="Prototipado")
            p A lo largo de todo el ciclo de desarrollo se van implementando prototipos, o versiones preliminares del producto, hasta llegar al <em>software</em> final.
          .tarjeta.clr-paleYellow.p-4(titulo="Incremental")
            p Una combinación de los anteriores. Es una metodología iterativa: en cada repetición, se entrega un producto no definitivo, pero plenamente funcional, para someterlo a la evaluación del cliente, con quien se mantiene un contacto permanente. Así, con cada iteración se avanza hacia el entregable final.
          .tarjeta.clr-paleYellow.p-4(titulo="En espiral")
            p Un enfoque cíclico: se repiten varias veces las etapas de planificación, análisis, evaluación y desarrollo. Se minimiza el riesgo al dividir el proyecto en segmentos pequeños y, por lo tanto, controlables.
          .tarjeta.clr-paleYellow.p-4(titulo="Metodologías <br> ágiles")
            p Esta familia de métodos es la que más se aplica en la actualidad. Todos ellos se caracterizan por una permanente interacción entre los miembros del equipo de desarrollo, poca planificación, asesoría constante por parte del cliente e iteraciones cortas, al cabo de las cuales se entrega una demostración preliminar del producto. Son tanto incrementales como iterativas.          
      .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/tema3/img-3.png").m-auto

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema3/img-4.png') 
      .col-lg-9.color_dos_uno
        p.p-3 Una Metodología de desarrollo de <em>software</em>, consiste principalmente en hacer uso de diversas herramientas, técnicas, métodos y modelos para el desarrollo. Regularmente este tipo de metodologías, tienen la necesidad de venir documentadas, para que los programadores que estarán dentro de la planeación del proyecto comprendan perfectamente la metodología y en algunos casos el ciclo de vida del <em>software</em> que se pretende seguir. Aunque actualmente existe mucha variedad en metodologías de programación, la realidad es que todas están basadas en ciertos enfoques generalistas que se crearon hace muchos años, algunos tipos de metodologías de desarrollo de <em>software</em>que se utilizaron e inventaron al principio de la era tecnológica.

    .row.justify-content-center.align-items-center
      .col-lg-9.color_dos_dos
        p.p-3 En la actualidad todas estas metodologías son utilizadas ya que uno de los aspectos a tener en cuenta es el tipo de proyecto que se desea realizar algunas de ellas están pensadas para grandes proyectos de <em>software</em>mientras que otras conservan la particularidad de adaptarse a proyectos de pequeña escala como son el caso de las metodologías ágiles las cuales tienen una adaptación mayor a proyectos de pequeña y mediana escala ya que los proyectos en los cuales se suelen utilizar no involucran gran cantidad de roles y responsables del proceso de construcción por ello es necesario tener en claro desde la fase inicial del proyecto el alcance y los diferentes requerimientos que esta pueda generar para establecer la mejor metodología para aplicar en dicho proyecto.
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema3/img-5.png') 

    separador 

    #t_3_1.titulo-segundo.color-acento-contenido.pb-2
      h3 3.1 Tecnologías y criterios para procesos de desarrollo de <em>software</em>

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        p Una tecnología de desarrollo de <em>software</em>, a veces conocida como herramienta de generación de código o un generador de código, es un programa de <em>software</em> utilizado por los desarrolladores para construir, mantener, modificar, apoyar y depurar otros programas, marcos o aplicaciones; aunque existen diferentes maneras de establecer la tecnología que se adecua mejor al proyecto se debe realizar un estudio teniendo como base los requerimientos que entrega el cliente para conectar dichas necesidades con el proyecto; en algunas ocasiones no basta solo con darle un vistazo a las diferentes posibilidades que se tienen en el mercado actual sino también la infraestructura con la que cuenta el cliente o la organización que desea el desarrollo de la solución informática; un ejemplo de ello es la construcción de un <em>software</em> móvil y un <em>software</em> web aunque ambos comparten ciertas características similares en aspectos de rendimiento e infraestructura para su despliegue son distintos, muchos aplicativos solo requieren una red local para operar desde un equipo centralizador el cual podría ser fácilmente un servidor donde se carguen las aplicaciones y servicios necesarios para el cliente que no es lo mismo si se requiere la construcción de un sistema que pueda ser accedido desde cualquier parte del mundo y en diferentes dispositivos en este último caso se pensaría en la creación de una solución orientada a la web en la cual se requiere una conexión específica a internet mediante protocolos de seguridad o el uso de un hosting y dominio de acceso para la misma en ambos casos. Como se puede notar, la infraestructura necesaria para su operación es distinta, aunque el <em>software</em> sea el mismo.
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema3/img-6.png') 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/img-7.png') 
      .col-lg-10
        p Hay cientos y miles de tecnologías de <em>software</em> disponibles en el mercado ahora mismo. Es posible que elegir la adecuada sea una tarea difícil. Hay muchos factores que hay que tener en cuenta a la hora de seleccionar la tecnología de desarrollo de <em>software</em> adecuada. Sin embargo, esta debe elegirse en función del tipo de proyecto; existen muchos factores a tener en cuenta para la realización y puesta en marcha de un aplicativo, la mayoría de ellos están en función de la infraestructura de despliegue y seguridad. A continuación, se pueden ver algunas consideraciones y componentes a tener en cuenta para realizar dicho proceso:

    .row.justify-content-center.mb-5
      .col-8.col-lg-4
        figure
          img.my-3(src="@/assets/curso/temas/tema3/img-8.png")      
      .col-lg-8
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Aplicabilidad al medio ambiente") No todas las tecnologías de desarrollo de <em>software</em> son apropiadas para cada entorno. Por ello, es fundamental asegurarse de que las herramientas adecuadas son compatibles con los entornos requeridos. Un programa de escritorio de <em>Windows</em>, por ejemplo, nunca será utilizado por una herramienta de despliegue web.

          p(numero="2" titulo="Normas de la empresa") Muchas empresas exigen que las tecnologías de desarrollo de <em>software</em> se adhieran a la política y alcancen objetivos específicos. Como resultado, la estandarización de las herramientas permite a los desarrolladores de <em>software</em> utilizar el equipo necesario para los proyectos.

          p(numero="3" titulo="Utilidad") La consideración más importante a la hora de seleccionar tecnologías de desarrollo de <em>software</em> es la utilidad. Elija las mejores herramientas que le ayuden a completar su proyecto. 

          p(numero="4" titulo="Integración") Una herramienta debe ser capaz de interactuar con otros dispositivos necesarios para los proyectos de desarrollo de <em>software</em>. Cuanto más eficazmente se vincule la herramienta con otros medios, más valor añadirá a los proyectos y a los desarrolladores web.

          p(numero="5" titulo="Tener experiencia previa con la herramienta") Si el equipo de desarrollo de <em>software</em> tiene experiencia previa con la herramienta, puede determinar si será beneficiosa en un proyecto o no. 

    p.mb-5 Elegir la herramienta de desarrollo de <em>software</em> adecuada es indispensable, ya que puede romper o hacer un proyecto. Pero antes de elegir la herramienta de desarrollo, hay que decidir los requisitos del proyecto, los objetivos finales y los lenguajes de programación que se van a utilizar.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema3/img-9.png') 
      .col-lg-7
        .cajon-b.color-primario.p-3.mb-5.color-pos-2
          p.mb-0 Los siguientes factores pueden ayudarte sin duda a elegir la mejor herramienta de desarrollo de <em>software</em>, estos consejos son una manera de garantizar una adecuada adaptación del proyecto y le ayudarán tener la posibilidad de mayor éxito en sus proyectos de <em>software</em> a mediano o largo plazo, en otros aspectos el conocer la herramienta y la experiencia que se tenga de la misma para la construcción de un proyecto de <em>software</em> es fundamental ya que esto en el caso de no estar familiarizados con la herramienta se puede convertir en un factor de riesgo para el proyecto por ello es necesario tener en cuenta las competencias y habilidades de cada miembro del equipo para que puedan ejecutar las tareas y responsabilidades del proyecto de la mejor manera posible.

    separador 

    #t_3_2.titulo-segundo.color-acento-contenido.pb-2
      h3 3.2 Modelos de desarrollo de <em>software</em>

    p.mb-5 A continuación, se tratan los diferentes modelos de desarrollo de <em>software</em>, sus ventajas y características fundamentales para el cumplimiento de los requerimientos del cliente los cuales se toman en la etapa de análisis del proyecto:

    TabsC.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Modelo de cascada")
        .row.justify-content-center
          .col-md-6.mb-md-0
            ul.lista-ul.ms-4
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p.mt-0 Consta de una secuencia ordenada. 
              li 
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p Cada etapa previa es la secuencia de la próxima.
              li 
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p Controla las fechas de entrega del producto.
              li 
          .col-md-6
            ul.lista-ul.ms-4
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p Establece criterios de entrada y salida en cada fase claramente definidos.
              li 
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p Dado que provee pocos puntos de visibilidad da la impresión de que es lento.
              li 
          figure
            img(src='@/assets/curso/temas/tema3/img-10.svg') 
      .py-4.py-md-5(titulo="Modelo en V")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Una reexaminación del modelo del ciclo de vida desde el punto de vista de aseguramiento de calidad.

            p Cuando cada proceso termina su producto, las especificaciones de prueba para probar los procesos están también completas.

            p <b>Fases</b>

            ul.lista-ul.ms-4
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p.mb-0 Inicio
              li 
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p.mb-0 Análisis
              li 
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p.mb-0 Diseño
              li 
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p.mb-0 Código
              li 
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p.mb-0 I.S.T
              li 
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p.mb-0 Implementación
              li 
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p.mb-0 Pruebas de Integración del sistema
              li 
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p.mb-0 UAT
              li 
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p.mb-0 Plan de Aceptación Integración del Sistema
              li 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-11.svg') 

      .py-4.py-md-5(titulo="Construcción de prototipos")
        .row.justify-content-center.align-items-center
          p Un prototipo es una versión preliminar de un sistema de información con fines de demostración o evaluación.
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul.ms-4
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p.mb-0 Identificación de Requerimientos.
              li
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p.mb-0 Diseño Rápido.
              li
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p.mb-0 IUtilizar el Prototipo.
              li
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p.mb-0 Revisar y Mejorar.
              li
          .col-md-6
            ul.lista-ul.ms-4
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p.mb-0 Es un método menos formal de desarrollo.
              li
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p.mb-0 El prototipo es una técnica para comprender las especificaciones.
              li
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p.mb-0 Un prototipo puede ser eliminado.
              li
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p.mb-0 Un prototipo puede llegar a ser parte del producto final.
              li
          figure
            img(src='@/assets/curso/temas/tema3/img-12.svg') 
      .py-4.py-md-5(titulo="El modelo de espiral")
        .row.justify-content-center.align-items-center
          .col-md-12
            p Los productos de <em>software</em> son creados a través de múltiples repeticiones del proceso del ciclo de vida. Se rompen un mini-proyecto.

            p Estos modelos han sido aplicados al desarrollo de <em>software</em>.

            p Aún no han madurado al punto de ser aplicados como modelos de desarrollo con tiempos y limitaciones de costos.

            figure
              img(src='@/assets/curso/temas/tema3/img-13.svg') 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9
        .cajon-b.color-primario.p-3.mb-5.color-pos-3
          p.mb-0 Como bien se han explorado los modelos de desarrollo de <em>software</em> tratan de garantizar el cumplimiento de los requerimientos establecidos por el cliente; muchos de ellos establecen un grado de complejidad mayor y otros son muy rígidos al momento de realizar la gestión y seguimiento del mismo pero en resumidas cuentas se centran en el cumplimiento de los requerimientos del sistema a construir, otro aspecto a tener en cuenta es la integración de los proceso que estos tienen internamente; esto quiere decir que se debe realizar un análisis del tipo de proyecto, la cantidad de personas involucradas, los tiempos de entrega, que tan involucrado debe estar el cliente en el proceso de construcción. Estas preguntas deben tenerse en cuenta antes de seleccionar un modelo de desarrollo para que el proceso de construcción se realice de la mejor manera posible.
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema3/img-14.png') 

    p.mb-5 A continuación, pude visualizar las fases a tener en cuenta en la construcción de <em>software</em>:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.pb-0
          p.mb-0.text-small <b>Figura 6.</b> Fases de construcción de un <em>software</em>
        ImagenInfografica.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img-puntos.svg')
          .tarjeta.color-modal.p-3(x="22%" y="45%" numero="1")
            p <b>Análisis:</b> en esta fase se realiza la toma de requerimientos del cliente.
          .tarjeta.color-modal.p-3(x="45%" y="45%" numero="2")
            p <b>Diseño:</b> en esta fase se construyen los componentes mediante los cuales interactúa el usuario con el <em>software</em>
          .tarjeta.color-modal.p-3(x="66.5%" y="45%" numero="3")
            p <b>Desarrollo:</b> en esta fase se construye el código fuente de la aplicación, las funciones y procedimientos para su funcionamiento.
          .tarjeta.color-modal.p-3(x="88.3%" y="45%" numero="4")
            p <b>Implementación:</b> en esta fase se realizan todos los procedimientos para la instalación y puesta en marcha del <em>software</em>
        

</template>

<script>
export default {
  name: 'Tema3',
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
