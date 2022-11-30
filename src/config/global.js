export default {
  global: {
    componenteFormativo: `Recursos de diseño de <em>software</em> según criterios técnicos`,
    descripcionCurso: `Este componente formativo está diseñado para abordar la temática de los procedimientos y requisitos para el diseño de soluciones informáticas, además de los criterios de aceptación que se deben tener en cuenta para su aprobación.`,
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: `Diseño del plan de trabajo para el proyecto de <em>software</em>`,
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Metodologías para el desarrollo de <em>software</em>',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: `Gestión del proyecto de <em>software</em> alineado con la metodología del PMI <em>(Project Management Institute)</em>`,
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: `Ciclo de vida y organización del proyecto de <em>software</em>`,
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: `Control y seguimiento de procesos para administrar exitosamente el proyecto`,
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: `Metodologías para el desarrollo de proyectos de <em>software</em>`,
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: `Gestión de proyectos con <em>Project</em>: bajo el enfoque del PMI.`,
      referencia: `Salazar Castañeda, Francisco M. (S.f). <em>Gestión de proyectos con Project: bajo el enfoque del PMI. </em>Editorial MACRO `,
      tipo: `Libro`,
      link: `https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_ebooks0002698`,
    },
    {
      tema: `Modelos de desarrollo de <em>software.</em> ¿Cuál elegir?`,
      referencia: `Hernández, Angel M. Bron, Oliva B. Liliannes, Fonseca.  Matamoros Benitez, Caridad (2019). <em>Modelos de desarrollo de software. ¿Cuál elegir?</em>, 11 (3), 34-55.`,
      tipo: `Artículo`,
      link: `https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_dialnet_primary_oai_dialnet_unirioja_es_ART0001555258`,
    },
    {
      tema: `Implementación del Estándar ISO/IEC 29110 en Centros de Desarrollo de <em>Software</em> de Universidades Mexicanas: Experiencia del Estado de Zacatecas`,
      referencia: `Laporte, Claude Y. Mejía, Jezreel. Muñoz, Mima. (2018). <em>Implementación del Estándar ISO/IEC 29110 en Centros de Desarrollo de Software de Universidades Mexicanas:</em> Experiencia del Estado de Zacatecas`,
      tipo: `Artículo`,
      link: `https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_scielo_journals_S1646_98952018000400005`,
    },
    {
      tema: `Implementación de una Oficina de Gestión de Proyectos (PMO), en el área de Infraestructura, del Departamento de Responsabilidad Social y Comunidades de Lundin Gold`,
      referencia: `Ambuludí Amay, Carmen del C. Ortega Castro, Juan C. (2021). <em>Implementación de una Oficina de Gestión de Proyectos (PMO), en el área de Infraestructura, del Departamento de Responsabilidad Social y Comunidades de Lundin Gold, (7) 4.</em>`,
      tipo: `Artículo`,
      link: `https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_dialnet_primary_oai_dialnet_unirioja_es_ART0001524400`,
    },
  ],
  glosario: [
    {
      termino: `Análisis`,
      significado: `etapa de un proyecto donde se estudian los requerimientos y su impacto en el proyecto.`,
    },
    {
      termino: `Cascada`,
      significado: `metodología tradicional para la construcción de aplicaciones informáticas que es muy estricta y eficiente.`,
    },
    {
      termino: `Ciclo de vida`,
      significado: `se refiere al proceso que se sigue para la creación de un proyecto de <em>software</em> el cual tiene varias fases que ejecutar.`,
    },
    {
      termino: `Gestión de proyectos`,
      significado: `proceso que se requiere en el desarrollo de un proyecto para realizar un seguimiento adecuado al mismo.`,
    },
    {
      termino: `PMI`,
      significado: `organización orientada a la gestión y certificaciones en el ámbito de proyectos a nivel mundial.`,
    },
    {
      termino: `Proyecto`,
      significado: `conjunto de requerimientos solicitados por un cliente o interesado en la construcción de un producto.`,
    },
    {
      termino: `Requerimiento`,
      significado: `solicitud que tiene unas especificaciones ordenadas y claras las cuales se deben incluir en un proyecto.`,
    },
    {
      termino: `Riesgo`,
      significado: `situación que se puede presentar en un proyecto y que requiere del diseño de planes de contingencia para mitigarlo.`,
    },
    {
      termino: `SCRUM`,
      significado: `metodología orientada al desarrollo de aplicaciones informáticas de manera ágil.`,
    },
    {
      termino: `Tecnologías`,
      significado: `conjunto de herramientas y procesos para la construcción de proyectos de <em>software.</em>`,
    },
  ],
  referencias: [
    {
      referencia: `Alfaro, A., Carrizo, D. (2021). <em>Método de aseguramiento de la calidad en una metodología de desarrollo de software, un enfoque práctico.</em> Universidad de Tarapacá. 26, n.1, p.114-129`,
      link: ``,
    },
    {
      referencia: `Cárdenas, O., Zea, M., Valarezo, M., & Ramón, R. (2021). <em>Comparativa de tendencias de desarrollo de software móvil.</em> 3C TIC 10.1, p. 123-47.`,
      link: ``,
    },
    {
      referencia: `Flores, F., Sanhueza, V., Valdés, H., & Reyes, L. (2021). <em>Metodologías ágiles: un análisis de los desafíos organizacionales para su implementación.</em> Revista científica del centro de investigaciones y desarrollo científico de la Universidad distrital Francisco José de Caldas. 43.1, p. 38-49.`,
      link: ``,
    },
    {
      referencia: `Mejía, J., González, M., Calvo, J., & San Feliu, T. (2018).<em>Identificando caminos para iniciar la implementación de mejora de procesos de software en organizaciones de desarrollo de software.</em> Risti. Revista ibérica de sistemas y tecnologías de información. 26, p. 31-42.`,
      link: ``,
    },
    {
      referencia: `Morales, J., & Pardo, C. (2016). <em>Revisión sistemática de la integración de modelos de desarrollo de software dirigido por modelos y metodologías ágiles/systematic review about the integration of model-driven software development and agile methodologies.</em> Informador Técnico. 80, p.1- 87.`,
      link: ``,
    },
    {
      referencia: `Ramos, A., Pérez, H., Nava, S., & Martínez, F. (2022). <em>Mic-agile: metodología ágil para micro-equipos de desarrollo de software</em>. Revista Ingenio, 19 (1), p. 1-8.`,
      link: ``,
    },
    {
      referencia: `Renan, C., Merchán, E., & Mero, K. 2021). <em>Ingeniería de procesos para el desarrollo de software de calidad.</em> Serie Científica de la Universidad de las Ciencias Informáticas. 14.4, p.133-50.`,
      link: ``,
    },
    {
      referencia: `Soto, D., Reyes, A., Giraldo, J., Villamizar, A. & Vidal, F. (2022). <em>Buenas prácticas para el desarrollo de software sostenible.</em> Risti. Revista ibérica de sistemas y tecnologías de información. E49, p. 449-60. `,
      link: ``,
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
