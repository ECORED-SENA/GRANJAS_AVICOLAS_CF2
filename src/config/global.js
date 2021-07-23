export default {
  global: {
    componenteFormativo: 'Caracterización y diagnóstico de la empresa',
    descripcionCurso:
      'La empresa es una de las construcciones sociales de mayor relevancia y complejidad en el entorno. Conocer sus propiedades y los recursos que la conforman posibilitará la generación de nuevos emprendimientos formales que contribuyan al aumento económico del territorio. Entender las tácticas de gestión enfocadas a la planificación y administración de los recursos, por su lado, otorgará herramientas para potenciar su aumento y asegurar su permanencia en el mercado.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        titulo: 'Empresa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de empresa',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Recursos y transacciones contables de la empresa',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Diagnóstico organizacional de la empresa',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Disponibilidad de recursos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Humanos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Materiales',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Técnicos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Financieros',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Presupuesto',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Definición y ejemplos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Importancia',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Tipos',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Presupuesto inicial de la empresa',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Cómo elaborar un presupuesto',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Costos de producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Elementos del costo de producción',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Clasificación',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Cálculo',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Plan de producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Características',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Etapas',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Burbano A. (2006). Costos y presupuestos. Segunda edición. Ediciones Uniandes.',
      link:
        'https://www.scribd.com/read/436221926/Presupuestos-Bajo-normas-internacionales-de-informacion-financiera-y-taxonomia-XBRL',
    },
    {
      referencia:
        'Decreto 410 de 1971 [Presidencia de la República] Por el cual se expide el Código de Comercio. Marzo 27 de 1971',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio.html',
    },
    {
      referencia:
        'Lira P. (2016). Apuntes de finanzas operativas. Universidad Peruana de Ciencias Aplicadas S.A.C.',
      link:
        'https://es.scribd.com/read/401875272/Apuntes-de-Finanzas-Operativas-Lo-basico-para-saber-operar-una-empresa-financieramente',
    },
    {
      referencia:
        'Pérez V. y Manuel F. (1985). La evaluación organizacional. p.67-74.',
      link:
        'https://journals.copmadrid.org/jwop/files/1985/vol1/arti2.htm#_Hlk445286354',
    },
    {
      referencia:
        'Planas F. E. (2018). Todo sobre la gestión de su empresa. Editorial de Vecchi.',
      link:
        'https://es.scribd.com/read/388236109/Todo-sobre-la-gestion-de-su-empresa',
    },
    {
      referencia:
        'Rincón C. y Narváez J. (2017). Presupuestos bajo normas internacionales de información financiera y taxonomía XBRL. Ediciones de la U.',
      link:
        'https://www.scribd.com/read/436221926/Presupuestos-Bajo-normas-internacionales-de-informacion-financiera-y-taxonomia-XBRL',
    },
    {
      referencia:
        'Rodríguez D. (2016). Diagnóstico organizacional. Octava edición. Ediciones Universidad Católica de Chile.',
      link:
        'https://es.scribd.com/document/429486479/diagnostico-organizacional',
    },
  ],
  glosario: [
    {
      termino: 'Empresa',
      significado:
        'sistema de organización social para generar valor económico o prestar un servicio a la comunidad.',
    },
    {
      termino: 'Excedentes/utilidades',
      significado:
        'beneficio económico resultante al tomar los ingresos y deducir los costos y gastos.',
    },
    {
      termino: 'Persona natural',
      significado: 'individuo de la raza humana con derechos y obligaciones.',
    },
    {
      termino: 'Persona jurídica',
      significado:
        'figura jurídica compuesta por una o más personas naturales con identidad propia, pero sin la capacidad de actuar por sí misma. Es diferente a todas las personas que la componen, y requiere de un representante legal para actuar.',
    },
    {
      termino: 'Retroalimentación',
      significado:
        'sistema cíclico mediante el cual los resultados obtenidos en un proceso se reintegran nuevamente al mismo para mejorarlo.',
    },
    {
      termino: 'Estrategia',
      significado:
        'plan diseñado para ejecutar acciones y alcanzar objetivos, enmarcado en unos parámetros definidos por los directivos.',
    },
    {
      termino: 'Tributario',
      significado:
        'en el contexto del componente, asociado con impuestos, entendidos como las contribuciones exigidas por el gobierno',
    },
    {
      termino: 'Ciclo operativo:',
      significado:
        'proceso que abarca todas las etapas desde la compra de materia prima hasta la venta del producto terminado.',
    },
    {
      termino: 'Objeto social',
      significado:
        'labor para la cual fue concebida una empresa, incluye todas las actividades que se van a ejecutar de manera recurrente.',
    },
    {
      termino: 'Plusvalía',
      significado:
        'valorización que obtiene un bien inmueble con el paso del tiempo.',
    },
    {
      termino: 'Margen de rentabilidad:',
      significado:
        'ratio que determina la proporción de utilidad al tomar un ingreso y dividirlo en los costos necesarios para generarlo.',
    },
  ],
  complementario: [
    {
      texto:
        'Diagnóstico organizacional. Meza B, A, El diagnóstico organizacional: elementos, métodos y técnicas (2009).',
      tipo: 'Artículo web',
      link:
        'https://www.infosol.com.mx/miespacio/el-diagnostico-organizacional-elementos-metodos-y-tecnicas/',
    },
    {
      texto:
        'Plan de Producción. Pérez A. Plan de producción de una empresa: el pilar de toda buena gestión corporativa (2019)',
      tipo: 'Artículo web',
      link:
        'https://www.obsbusiness.school/blog/plan-de-produccion-de-una-empresa-el-pilar-de-toda-buena-gestion-corporativa',
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
      {
        nombre: 'Andrés Felipe Avilan Lozano',
        cargo: 'Experto temático',
        centro: 'Centro Agropecuario la granja - Regional Tolima',
      },
      {
        nombre: 'Lady Johanna Cruz Sarmiento',
        cargo: 'Experta temática',
        centro: 'Centro Agropecuario la granja - Regional Tolima',
      },
      {
        nombre: 'Diana Marcela Luis Vásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de la gestión industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de gestión industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Revisión de estilo',
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
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jorge Armando Villamizar Moreno',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Víctor Raúl Cárdenas Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Villamizar Lizcano',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Fabian Robles Méndez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
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
