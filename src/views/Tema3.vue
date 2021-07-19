<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Presupuesto    
    .row
      .col-lg-7
        p.mb-3  La correcta administración de una empresa requiere de una planeación que la encamine a una serie de metas que planteen sus propietarios y directivos. Existen diversas formas de llevarlo a cabo desde el simple bosquejo verbal de un escenario hipotético, hasta una expresión cuantitativa de las metas delimitadas por áreas de operación. Un presupuesto se asemeja a lo segundo, siendo un documento formal con una estructura definida que permite prever los objetivos cuantitativos a corto y mediano plazo.
        .cajon.color-acento-botones.p-4
          p El presupuesto funciona como un elemento de control que permite medir el desempeño de los funcionarios y delimitar las responsabilidades, pero también facilita la integración de procesos entre las sub partes de la empresa. La evaluación posterior permite determinar qué tan distante está la empresa de alcanzar sus metas, para así, implementar cambios de manera más oportuna, reduciendo costos y aumentando la eficiencia.

      .col-lg-5
        figure.mb-5
          img(src='@/assets/curso/t3-i1.svg', alt='imagen decorativa') 

    #t_3_1.titulo-segundo
      h2 3.1  Técnicos
    .row.mb-5
      .col-lg-3
        figure.mb-5
          img(src='@/assets/curso/t3-i2.svg', alt='personas en una fabrica')        
      .col-lg-9
        .cajon.color-acento-botones.p-4
          p.mb-3 El presupuesto funciona como un elemento de control que permite medir el desempeño de los funcionarios y delimitar las responsabilidades, pero también facilita la integración de procesos entre las sub partes de la empresa. La evaluación posterior permite determinar qué tan distante está la empresa de alcanzar sus metas, para así, implementar cambios de manera más oportuna, reduciendo costos y aumentando la eficiencia.
          p Existen diversas formas de clasificar las empresas, cada una de ellas obedeciendo a un criterio concreto que permite identificar factores coincidentes, y, por lo tanto, abordar definiciones, medidas y estrategias de manera conjunta según las necesidades del usuario de la información. La siguiente figura expone aquellas que gozan de mayor popularidad y resultan más útiles en el entorno, para posteriormente detallar cada una de ellas.
    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-light-green.p-4
          figcaption.customCaption.mb-2  Figura 6 Enfoques de tiempo de la información productiva
          figure.mb-5
            img(src='@/assets/curso/t3-i3.svg', alt='grafico enfoques de tiempo')            
          figcaption  <b>Nota.</b> Tomado del libro “presupuestos bajo normas internacionales de información financiera y taxonomía XBRL”. Rincón y Narváez, (2017).

    Separador
    br
    br

    #t_3_2.titulo-segundo
      h2 3.2  Importancia
    .row.mb-5
      .col-lg-7
        p.mb-4  El presupuesto es una herramienta que facilita la administración de la compañía, al permitir establecer un camino de acción enfocado a objetivos concretos. Al ser un sistema proyectivo permite prever situaciones inciertas, posibilitando anticiparse al futuro para ejecutar acciones de naturaleza preventiva. El análisis de indicadores pasados lleva a plantear metas más razonables acordes a la evolución propia del negocio; con esto se hace menos probable la frustración por esperar resultados demasiado ambiciosos. 
        .cajon.color-acento-botones.p-4
          Con un objetivo claro es posible idear estrategias que propendan a esos resultados para posteriormente analizar los esperados con los conseguidos, y evaluar si las estrategias resultaron efectivas. De esta forma, el presupuesto aportará con la consecución de metas y mejoramiento de estrategias para procurar por un crecimiento continuo.

      .col-lg-5
        figure.mb-5
          img(src='@/assets/curso/t3-i4.png', alt='grafico enfoques de tiempo')        

    Separador
    br
    br

    #t_3_3.titulo-segundo
      h2 3.3  Tipos
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            .h4.mb-0 Un buen sistema presupuestal debe estar compuesto, por lo menos, por tres tipos de presupuesto. Uno de operación a ejecutar durante el periodo que mida los niveles de producción o adquisición de productos terminados, un sistema de presupuesto de capital centrado en la inversión en activos fijos y uno financiero que mida el impacto económico de las decisiones tomadas a través de estados financieros proyectados.
            i.fas.fa-quote-right
    
    h3.titulo-tercero Presupuestos de operación
    .row.justify-content-center.mb-5
      .col-lg-10
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Presupuesto de ventas")
            .col-md-3.mb-4.mb-md-0
              figure.mb-5
                img.h110(src='@/assets/curso/t3-i5.svg', alt='imagen decorativa')          
            .col-md-8
              p.mb-3  Es uno de los primeros a elaborar para el diseño del sistema presupuestal; tiene una complejidad elevada dado que los resultados esperados se ven afectados por variables del entorno sobre las que no se tiene control. Es importante analizar aspectos macro económicos o políticos, y evaluar el impacto que hayan podido tener sobre el volumen de ventas histórico. 
              p.mb-3  Puede abordarse desde dos perspectivas, aquella que centra el análisis en los factores externos a través de pronósticos estadísticos y evaluación del estado del mercado, o aquella enfocada en los factores internos, retroalimentándose del personal directivo y comercial. El mejor escenario es aquel que tome elementos de ambos enfoques para construir una imagen equilibrada.
          .row(titulo="Presupuesto de producción")
            .col-md-3.mb-4.mb-md-0
              figure.mb-5
                img.h110(src='@/assets/curso/t3-i6.svg', alt='imagen decorativa')          
            .col-md-8
              p.mb-3  Es aplicable a las empresas manufactureras ya que busca establecer la cantidad de unidades a producir según las ventas estimadas en el presupuesto de ventas o la capacidad de producción disponible. Es uno de los más complicados de elaborar debido a que involucra muchos conceptos asociados al costeo de los productos terminados, además de multiplicidad de factores relacionados como la calidad y cantidad de mano de obra, la capacidad de la maquinaria disponible o la disponibilidad de espacio de almacenamiento.
          .row(titulo="Presupuesto de gastos de administración y ventas")
            .col-md-3.mb-4.mb-md-0
              figure.mb-5
                img.h110(src='@/assets/curso/t3-i7.svg', alt='imagen decorativa')          
            .col-md-8
              p.mb-3  Incluye todas las erogaciones que no se encuentran asociadas directamente con la producción como comisiones, salarios de personal comercial y administrativo, arrendamiento de las oficinas, honorarios pagados a asesores y directivos de las demás áreas, entre otros. Los valores aquí discriminados suelen ser significativos y suelen ser evaluados una vez el presupuesto de ventas y producción se hayan integrado.   

    h3.titulo-tercero Presupuesto de capital
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Suele plantearse a más largo plazo que los presupuestos operativos, ya que contempla inversiones significativas enfocadas al crecimiento del capital de la compañía. Las compras que se planteen en este presupuesto deben estar debidamente justificadas dado que representan erogaciones significativas de dinero.
            .col-lg-4.mb-4.mb-lg-0
              figure
                img.h200(src='@/assets/curso/t3-i8.svg', alt='imagen decorativa')  

        p.mb-5  Si la administración lo considera necesario, podría estimar el impacto del endeudamiento a través de mecanismos de fuentes externas como préstamos bancarios o de fuentes internas como la emisión de acciones, y contrastarlo con los beneficios del robustecimiento de la infraestructura para tomar decisiones de inversión y endeudamiento en el largo plazo. 
        .cajon.color-acento-botones.p-4
          p <b>Por ejemplo,</b> si renovar la maquinaria disminuye los costos de producción, esa mayor utilidad / producto del menor costo podría cubrir los pagos por intereses del endeudamiento financiero.
    
    h3.titulo-tercero Presupuesto financiero
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Suelen ser los últimos en ser elaborados, ya que consolidan la información de los presupuestos de operación y de capital. Se expresan como estados financieros proyectados, por lo que suelen estar compuestos, por lo menos, de un estado de situación financiera, un estado de resultados, un estado de cambios en el patrimonio y un estado de flujos de efectivo. Pueden ser tan detallados como las directivas lo requieran, así mismo, será la precisión de los diagnósticos efectuados a partir de dicha información.
            .col-lg-4.mb-4.mb-lg-0
              figure
                img.h200(src='@/assets/curso/t3-i9.svg', alt='imagen decorativa')  

        .cajon.color-acento-botones.p-4
          p.mb-4 Gran parte de este presupuesto se transmite desde los anteriores, así, el presupuesto de ventas junto con el de producción y costo de ventas determinarán los márgenes de rentabilidad bruta; si se agregan los presupuestos de gastos, se podría alcanzar la utilidad del ejercicio proyectado.
          p Por su parte, los presupuestos de capital y las políticas de recaudo pueden aportar la información suficiente para construir el activo, pasivo y patrimonio de la situación financiera de la empresa.

    Separador
    br
    br

    

    #t_3_4.titulo-segundo
      h2 3.4  Presupuesto inicial de la empresa
    PasosA.color-acento-botones.mb-5(tipo="l")
      div
        p Los ciclos operativos de las empresas varían en cuanto a extensión dependiendo del tipo de la actividad que se realice. 

      div
        p Una empresa del sector agrícola puede tener un ciclo de 4 meses si eso es lo que tarda recolectar los frutos de una cosecha, pero otra del mismo sector puede requerir de 8 meses; esto implica que la variedad de extensiones de tiempo requeridas sea tan diversa que complique la homologación o comparativa entre diferentes organizaciones.
      
      div
        p Para temas fiscales y normativos en general, el Estado suele estandarizar estos periodos de tiempo en periodos de un año, situación que ha llevado al mundo empresarial a adoptar este mismo sistema más allá de las particularidades de cada sistema empresarial.
      div
        p El presupuesto inicial entra en esta homogeneización de periodos dado que es el formulado por cada empresa al inicio del año, y que actúa como punto de partida para la operación de todos los sistemas involucrados en el funcionamiento de la compañía. 
      div
        p Así, por regla general, este comprende la estimación de todas las operaciones a efectuar entre el 1 de enero y el 31 de diciembre de cada año. 
      div
        p Por lo tanto, este presupuesto es considerado uno de los elementos más importantes en la planeación dado que involucra tanto las actividades operativas como aquellas ocasionales que espera se efectúen en el transcurso del año. 
    
    Separador
    br
    br    


    #t_3_5.titulo-segundo
      h2 3.5  Cómo elaborar un presupuesto
    .row.mb-5
      .col-lg-7
        p.mb-3  Para el diseño e implementación de un presupuesto es necesario partir desde la consolidación de información de diferentes fuentes para crear lineamientos enfocados en la eficiencia y productividad, posteriormente, elaborar la proyección de todos los rubros que involucran la operación, y finalmente, evaluar los resultados obtenidos al aplicar las políticas que surgieron del análisis.
        .cajon.color-acento-botones.p-4
          p El ciclo se reinicia con la interpretación de la información recolectada donde permanecen las estrategias que dieron resultado, y se modifican las que no. Las tres grandes fases de la proyección presupuestal son las siguientes:

      .col-lg-5
        figure
          img(src='@/assets/curso/t3-i10.png', alt='imagen decorativa')  
    h3.titulo-tercero Planeación estratégica
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .cajon.color-light-green.p-4.mb-5
      figcaption.customCaption.mb-2  Figura 8 Componentes de la planeación estratégica
      figure.mb-5
        img(src='@/assets/curso/t3-i11.svg', alt='grafico enfoques de tiempo')    
      figcaption.mb-2 <b>Nota.</b> Tomado del libro “Costos y presupuestos”. Burbano, (2006).

    h3.titulo-tercero Presupuestación
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Una vez se tienen claras las estrategias a gran escala se deben aterrizar las medidas a acciones específicas, destinando una asignación de recursos detallada para cada actividad. Todas las partidas serán consolidadas en los tipos presupuestales descritos previamente, y serán compartidos a las áreas involucradas de tal manera que exista un flujo de información oportuno y suficiente para que cada empleado pueda aportar desde su posición en la ejecución de sus nuevas tareas.
            .col-lg-4.mb-4.mb-lg-0
              figure
                img.h200(src='@/assets/curso/t3-i12.svg', alt='imagen decorativa')  
        p.mb-5  En este punto también es importante determinar un cronograma para la finalización de las diversas actividades contenidas en el diseño del presupuesto. Debido a que existen tantas áreas organizacionales involucradas en el plan estratégico, coordinar los tiempos resulta imprescindible para que las tareas se ejecuten de manera fluida y no existan retrasos por incumplimientos.
         .cajon.color-acento-botones.p-4.mb-5
            p <b>Un ejemplo sencillo de cómo coordinar tareas variadas es el diagrama de Gantt,</b> una herramienta visual que permite identificar en qué fase tendrá actividades a ejecutar cada área o proceso. Siempre y cuando cada involucrado se responsabilice de cumplir en su horizonte de tiempo, será posible medir la verdadera eficacia de las estrategias implementadas.        

        .cajon.color-light-green.p-4.mb-5
          figcaption.customCaption.mb-2  Figura 9 Diagrama de tiempos
          figure.mb-5
            img(src='@/assets/curso/t3-i11.svg', alt='grafico enfoques de tiempo')    
          figcaption.mb-2 <b>Nota.</b> Tomado del libro “Costos y presupuestos”. Burbano, (2006).

    h3.titulo-tercero Control presupuestal
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p El control presupuestal parte de la correcta retroalimentación del sistema. Es en este momento cuando se transmitirá la percepción de los resultados obtenidos por las nuevas medidas implantadas de acuerdo con la planeación estratégica. Como es natural, muchas de las políticas aplicadas pueden no producir los resultados que se habían estimado, por lo que una comunicación oportuna evitará reprocesos y desgastes administrativos innecesarios.
            .col-lg-4.mb-4.mb-lg-0
              figure
                img.h200(src='@/assets/curso/t3-i14.svg', alt='imagen decorativa')  
        p.mb-5  En esta fase se hace la evaluación del sistema implementado a través de una comparativa entre lo presupuestado y lo ejecutado. Es completamente normal que los resultados no alcancen las expectativas por diversos factores, por ejemplo, la entrada de un nuevo competidor al mercado puede afectar los niveles de ventas; o una reforma tributaria puede encarecer las materias primas y, por lo tanto, afectar los costos de producción.
        .cajon.color-acento-botones.p-4.mb-5
          p Más allá de esto, se deberá priorizar en la evaluación de aspectos en los que la empresa sí tenga control, como la eficiencia de sus empleados, la calidad del producto a vender o las políticas de recaudo que garanticen la liquidez suficiente para continuar con el ciclo productivo.       

        .cajon.color-light-green.p-4.mb-5
          figcaption.customCaption.mb-2  Figura 10 Comparativa presupuestado - ejecutado
          figure.mb-5
            img(src='@/assets/curso/t4-i15.svg', alt='grafico comparativo de resultados')    

        .cajon.color-acento-botones.p-4.mb-5
          p Una vez se alcancen las conclusiones de las medidas implementadas, se dará inicio al ciclo de planeación estratégica nuevamente al aplicar nuevas medidas, mientras se mantienen aquellas que dieron resultados positivos; este ciclo podrá repetirse cuantas veces lo requiera la administración con miras a perfeccionar todos los procesos que sean posibles.   











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

<style lang="sass" scoped>
.h110{max-height: 110px}
.h200{max-height: 200px}
</style>
