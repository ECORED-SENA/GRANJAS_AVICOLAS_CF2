<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Empresa
    p.mb-5 Comprender el concepto de empresa implica visualizarla como un organismo compuesto por diversos sistemas que trabajan de manera conjunta y, de preferencia, armónica y así operar tras un objetivo concreto. Su finalidad suele ser una sola, la generación de valor; un valor que puede medirse como excedentes financieros vistos como utilidades o reinversión, o como aportación a la sociedad. 

    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-3  La empresa es un agente protagónico en el entorno, no solo contribuye al desarrollo económico con la generación de empleo, sino que también suple las necesidades de la comunidad. Es tal su relevancia que existen incontables normas que la definen, regulan y limitan. El ejemplo más claro se encuentra en el Código de Comercio de 1971 considerado el compendio de normativa comercial más importante en Colombia. Allí se define la empresa como: 


            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/t1-i1.svg', alt='imagen decorativa')  


    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            .h4.mb-0 ARTÍCULO 25. &lt;EMPRESA - CONCEPTO&gt;. Se entenderá por empresa toda actividad económica organizada para la producción, transformación, circulación, administración o custodia de bienes, o para la prestación de servicios. Dicha actividad se realizará a través de uno o más establecimientos de comercio.
            span  Código de Comercio, 1971, Artículo 25
            i.fas.fa-quote-right

    #t_1_1.titulo-segundo
      h2 1.1  Tipos de empresa
    .row.mb-5
      .col-lg-2
        figure
          img(src='@/assets/curso/t1-i2.svg', alt='imagen decorativa')  
      .col-lg-10
        p Existen diversas formas de clasificar las empresas, cada una de ellas obedeciendo a un criterio concreto que permite identificar factores coincidentes, y, por lo tanto, abordar definiciones, medidas y estrategias de manera conjunta según las necesidades del usuario de la información. La siguiente figura expone aquellas que gozan de mayor popularidad y resultan más útiles en el entorno, para posteriormente detallar cada una de ellas.
    
    h3.titulo-tercero Tipos de empresa
    .row.mb-5
      .col-lg-5
        .nav-holder(@mouseover="mostrarIndicador = false", onclick="")
          .indicador--click(v-if="mostrarIndicador")
          img(src="@/assets/curso/t1-c1.jpg", alt="imagen decorativa", onclick="")
          .text.align-items-center.p-lg-5.p-4(onclick="")
            .row.py-lg-5.py-3(onclick="")
              .col-12
                p 
                  span.h3 Sector económico<br>
                  | Esta clasificación obedece al sector productivo donde la empresa lleva a cabo su actividad principal, este sistema también suele delimitar el tipo de actividad que esta desarrolla (de extracción, producción/transformación, o comercialización).   

      .col-lg-7
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Sector primario")
            .col-md-2
              figure
                img.h80(src='@/assets/curso/t1-i3.svg', alt='icono decorativo')
            .col-md-10.mb-4.mb-md-0
              p.text-small Agrupa aquellas que desarrollan actividades asociadas a la explotación de recursos naturales. En este sector no se suelen involucrar actividades de transformación, por lo que el consumidor/cliente toma los recursos tal y como fueron extraídos. 


          .row(numero="2" titulo="Sector secundario")
            .col-md-2
              figure
                img.h80(src='@/assets/curso/t1-i4.svg', alt='icono decorativo')
            .col-md-10.mb-4.mb-md-0
              p.text-small Comprende las empresas que prestan actividades de manufactura, es decir, que adquieren materias primas y aplican los procesos necesarios para transformarlos en otro tipo de bienes.  

          .row(numero="3" titulo="Sector terciario")
            .col-md-2
              figure
                img.h80(src='@/assets/curso/t1-i5.svg', alt='icono decorativo')
            .col-md-10.mb-4.mb-md-0
              p.text-small Incluye las empresas que se dedican a la intermediación en la compraventa de bienes sin aplicar procesos de transformación, así como aquellas dedicadas a la prestación de servicios.  
    
    
    Separador
    .row.mb-5
      .col-lg-5
        .nav-holder(@mouseover="mostrarIndicador = false", onclick="")
          .indicador--click(v-if="mostrarIndicador")
          img(src="@/assets/curso/t1-c2.png", alt="imagen decorativa", onclick="")
          .text.align-items-center.p-lg-5.p-4(onclick="")
            .row.py-lg-5.py-3(onclick="")
              .col-12
                p 
                  span.h3 Control de recursos<br>
                  | Las empresas pueden clasificarse según la procedencia del capital, aquí se enmarcan dos grandes actores que pueden tomar participación de manera independiente o conjunta: el sector público bajo la figura del Estado, y el sector privado, a través de la inversión particular.   

      .col-lg-7
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Pública")
            .col-md-2
              figure
                img.h80(src='@/assets/curso/t1-i6.svg', alt='icono decorativo')
            .col-md-10.mb-4.mb-md-0
              p.text-small El capital proviene del sector público, suelen estar enfocadas en la ejecución de actividades de naturaleza social o la explotación de recursos naturales de propiedad del Estado. 


          .row(numero="2" titulo="Privada")
            .col-md-2
              figure
                img.h80(src='@/assets/curso/t1-i7.svg', alt='icono decorativo')
            .col-md-10.mb-4.mb-md-0
              p.text-small Su capital proviene de particulares, pues comprende todo tipo de actividades y la destinación de sus excedentes suele ser la reinversión o la generación de dividendos, entendiendo estos últimos como los beneficios económicos generados para los propietarios de la empresa.  

          .row(numero="3" titulo="Mixta")
            .col-md-2
              figure
                img.h80(src='@/assets/curso/t1-i8.svg', alt='icono decorativo')
            .col-md-10.mb-4.mb-md-0
              p.text-small Se compone de la conjunción de los dos tipos de capitales, público y privado. Suelen surgir de la necesidad del Estado de conseguir recursos adicionales ya sea para dinamizar su operación o para cubrir déficits presupuestales.

    Separador
    .row.mb-5
      .col-lg-5
        .nav-holder(@mouseover="mostrarIndicador = false", onclick="")
          .indicador--click(v-if="mostrarIndicador")
          img(src="@/assets/curso/t1-c3.png", alt="imagen decorativa", onclick="")
          .text.align-items-center.p-lg-5.p-4(onclick="")
            .row.py-lg-5.py-3(onclick="")
              .col-12
                p 
                  span.h3 Esfera territorial<br>
                  | Este criterio de clasificación obedece al área geográfica donde la empresa lleva a cabo su actividad.  

      .col-lg-7
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Local")
            .col-md-2
              figure
                img.h80(src='@/assets/curso/t1-i9.svg', alt='icono decorativo')
            .col-md-10.mb-4.mb-md-0
              p.text-small Se enfocan a desarrollar su actividad únicamente en la localidad o municipio donde está su planta física. 

          .row(numero="2" titulo="Regional")
            .col-md-2
              figure
                img.h80(src='@/assets/curso/t1-i10.svg', alt='icono decorativo')
            .col-md-10.mb-4.mb-md-0
              p.text-small Llevan a cabo su operación en más de un municipio, pero restringiéndose a un departamento o región en concreto. 

          .row(numero="3" titulo="Nacional")
            .col-md-2
              figure
                img.h80(src='@/assets/curso/t1-i11.svg', alt='icono decorativo')
            .col-md-10.mb-4.mb-md-0
              p.text-small Operan y venden sus bienes y servicios en diversas regiones del país, pues abarcan una porción significativa del mismo a través de distintas sucursales o sistemas de distribución más complejos y grandes.

          .row(numero="4" titulo="Multinacional")
            .col-md-2
              figure
                img.h80(src='@/assets/curso/t1-i12.svg', alt='icono decorativo')
            .col-md-10.mb-4.mb-md-0
              p.text-small Desarrollan actividades operativas en varios países y usualmente existe una central de operaciones a nivel global conocida como matriz, mientras que las sucursales que operan alrededor del mundo se conocen como subsidiarias o filiales. 

    Separador
    .row.mb-5
      .col-lg-5
        .nav-holder(@mouseover="mostrarIndicador = false", onclick="")
          .indicador--click(v-if="mostrarIndicador")
          img(src="@/assets/curso/t1-c4.png", alt="imagen decorativa", onclick="")
          .text.align-items-center.p-lg-5.p-4(onclick="")
            .row.py-lg-5.py-3(onclick="")
              .col-12
                p 
                  span.h3 Constitución jurídica<br>
                  | Las empresas pueden ser unipersonales a través de la creación de un establecimiento de comercio autónomo e indivisible de la persona natural, o bien, constituirse a partir de la conjunción de varias personas naturales que se organizan en sociedad.   
      .col-lg-7
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Societarias")
            .col-md-2
              figure
                img.h80(src='@/assets/curso/t1-i13.svg', alt='icono decorativo')
            .col-md-10.mb-4.mb-md-0
              p.text-small.mb-3 Son aquellas que se constituyen de manera independiente a los socios que la integran, tienen un número de identificación tributaria propio dada su personería jurídica y las responsabilidades frente a terceros son asumidas directamente por la empresa y su representante legal.
              p.text-small.mb-3 En Colombia existen varios tipos de empresas de naturaleza societaria y la forma de identificar su tipo societario es verificando la terminación de su nombre comercial a modo de ejemplo y como las de mayor acogida en el país se presentan las siguientes:
            .col-lg-12
              figcaption.customCaption.mb-2  Tabla 1 Tipos de empresas de naturaleza societaria
              //-- Aqui va la tabla
          .row(numero="2" titulo="Autónomas")
            .col-md-2
              figure
                img.h80(src='@/assets/curso/t1-i14.svg', alt='icono decorativo')
            .col-md-10.mb-4.mb-md-0
              p.text-small Constituidas por una sola persona natural, toda responsabilidad frente a terceros es asumida por el titular de esta. No tienen personería jurídica ni cuentan con una identificación separada de la persona que la crea.  
            
    Separador
    .row.mb-5
      .col-lg-5
        .nav-holder(@mouseover="mostrarIndicador = false", onclick="")
          .indicador--click(v-if="mostrarIndicador")
          img(src="@/assets/curso/t1-c5.png", alt="imagen decorativa", onclick="")
          .text.align-items-center.p-lg-5.p-4(onclick="")
            .row.py-lg-5.py-3(onclick="")
              .col-12
                p 
                  span.h3 Tamaño<br>
                  | Se clasifican de la siguiente manera: microempresa, pequeña, mediana y gran empresa.  

      .col-lg-7
        .cajon.color-acento-contenido.p-4
          p Existen diferentes escalas de medición para determinar la categoría de una empresa según su tamaño, sin embargo, la legislación colombiana ha reglamentado este aspecto para la emisión de normatividad que apele a este sistema. La ley 590 del 2000 indicó las categorías y los lineamientos básicos sobre los cuales se podría determinar el tamaño de las empresas, dándole cabida a criterios como el número de trabajadores, las ventas brutas anuales o el valor de los activos; no obstante, es el decreto 957 de 2019 del Ministerio de Comercio, Industria y Turismo el que reglamentó este aspecto según el sector económico en el que se desarrolle la actividad de la empresa y en función de sus ingresos por actividades ordinarias.
          
          a.boton.color-acento-contenido.mb-5.indicador__container(@click="modal1 = true")
            span Ver clasificación
            .indicador--click(v-if="mostrarIndicador")
            
      ModalA(:abrir-modal.sync="modal1")
        .row.align-items-center
          .col-md-12.mb-4.mb-md-0
              figcaption.customCaption.mb-2  Tabla 2 Clasificación de las empresas según Decreto 957
              figure
              img(src='@/assets/curso/t1-c1.png', alt='Texto que describa la imagen')
              figcaption <b>Nota.</b> Elaboración propia a partir del decreto 957 del Ministerio de Comercio, Industria y Turismo (2019).

            


    .cajon.color-green-light.p-4.mb-5
       figcaption.customCaption.mb-2  <b>Figura</b> 1 Tipos de empresa     
       figure
        img(src='@/assets/curso/t1-i15.svg', alt='Tabla con tipos de empresa')     


    Separador
    br
    br
    #t_1_2.titulo-segundo
      h2 1.2  Recursos y transacciones contables de la empresa
    .row.mb-5
      .col-lg-7

        p.mb-3  Para que estos sistemas evolucionen deben existir métodos para retroalimentar los procesos existentes o la creación de nuevos cuando sea necesario. Las estrategias de mejoramiento continuo cumplen con esta premisa pues están enfocadas en maximizar la rentabilidad, pero para ello requieren el compendio de toda la información disponible para refinar cada uno de los elementos involucrados. 

      .col-lg-5
        figure
        img(src='@/assets/curso/t1-i16.svg', alt='Tabla con tipos de empresa') 

    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-acento-contenido.p-4
          p Es aquí donde el registro de las transacciones a través del sistema contable toma especial importancia, ya que aporta una porción significativa de los datos que posteriormente serán analizados por un sistema de control diseñado por la empresa (gestión de calidad). Una vez se cuente con el registro y el análisis, se alcanzan unas conclusiones concertadas y se plantean las modificaciones que sean consideradas necesarias para mejorar los procesos o la calidad del producto a entregar.
          
    .row.mb-5.justify-content-center
      .col-lg-8
        .cajon.color-green-light.p-4.mb-5
          figcaption.customCaption.mb-2  <b>Figura 2</b> Empresas como sistema     
          figure
            img(src='@/assets/curso/t1-i17.svg', alt='Tabla con tipos de empresa')     
          figcaption <b>Nota.</b> Tomado de <b>“Todo sobre la gestión de la empresa”.</b> Planas, (2018).
    
    p.mb-5
      La información contable y financiera funciona como un registro de la evolución de una empresa en un periodo de tiempo determinado. Su función principal es apoyar la toma de decisiones de agentes internos, como los directivos o inversores, o agentes externos como proveedores, acreedores o clientes. Para que la información sea útil para un amplio grupo de terceros es importante que las reglas para su registro y revelación estén estandarizadas. 
    .row.mb-5.justify-content-center
      .col-lg-8.mb-5
        .cajon.color-acento-contenido.p-4.mb-5  
          p <b>En Colombia, la Ley 1314 de 2009 fundó las bases para la actualización del marco normativo contable a través de la convergencia a un sistema internacional de amplia aceptación.</b> En la actualidad, las empresas constituidas en Colombia deben llevar el registro de la información financiera aplicando los estándares internacionales emitidos por la <b>Junta de Normas Internacionales de Contabilidad (IASB por sus siglas en inglés) conocidos en español como las Normas Internacionales de Información Financiera – NIIF.</b>  

      .col-lg-8.mb-5
        .cajon.color-green-light.p-4
          .row
            .col-lg-3
              figure
                img(src='@/assets/curso/t1-i18.svg', alt='imagen decorativa')  
            .col-lg-9
              .h4 Decreto 2420 de 2015 Normas de contabilidad, de información financiera y de aseguramiento de información
              p.mb-4  Para profundizar en cuanto a los marcos normativos contables aplicables a las empresas que desarrollen su actividad en Colombia, se recomienda consultar el Decreto único reglamentario 2420 de 2015 y sus modificatorios.
              
              a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Enlace web.</b> Decreto 2420 de 2015 Normas de contabilidad, de información financiera y de aseguramiento de información.
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .outlined-box
          .row.align-items-center
            .col-lg-6
              figure
                img(src='@/assets/curso/t1-i19.svg', alt='imagen decorativa')              
            .col-lg-6
              p.p-4 <b>La forma en que dichos registros son transmitidos a los usuarios finales de la información es a través de los estados financieros,</b> en ellos se consolida la situación económica y financiera de la compañía en un periodo determinado, y a partir de ellos, se posibilita la toma de decisiones. En la siguiente figura se puede apreciar lo mencionado. 
    
    .row.justify-content-center.mb-5
      .col-lg-8.mb-5
        .cajon.color-green-light.p-4
          figcaption.customCaption.mb-2  <b>Figura 3</b> Los estados financieros y la toma de decisiones empresariales    
          figure
            img(src='@/assets/curso/t1-i20.svg', alt='Tabla con tipos de empresa')  
          figcaption <b>Nota.</b> Tomado de <b>“Apuntes de finanzas operativas”.</b> Lira, (2016).

    Separador
    br
    br
    #t_1_3.titulo-segundo
      h2 1.3  Diagnóstico organizacional de la empresa
    p.mb-3  Los sistemas de evaluación y retroalimentación permanente posibilitan la corrección de errores o malas prácticas con el fin de diseñar procesos más eficientes. El diagnóstico organizacional se centra en la identificación de las problemáticas de la empresa, sus causas y las potenciales consecuencias; posteriormente, se integran estrategias de mejoramiento que contemplen los recursos disponibles para eliminar tales problemáticas o mitigar su impacto.
    br
    br
    .row.justify-content-center.mb-5
      .col-lg-10
        .highlight-box
          .row
            .col-lg-3
              figure
                img.h180(src='@/assets/curso/t1-i21.svg', alt='imagen decorativa') 
            .col-lg-9
              p.p-4 <b>El diagnóstico empresarial</b> es entonces un medio para refinar cada proceso a través de un trabajo de investigación que califique su desempeño de manera cualitativa y cuantitativa. 
    br
    br
    h3.titulo-tercero Etapas
    p.mb-5  Si bien es cierto que las fases en las que se debe ejecutar un diagnóstico se encuentran supeditadas a las condiciones de la empresa objeto de estudio, existen una serie de etapas que pueden considerarse fundamentales para construir un esquema más efectivo:
    .row.justify-content-center.mb-5
      .col-lg-8
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Definición del alcance y justificación del diagnóstico")
            .col-md-9.mb-4.mb-md-0
              p Es importante establecer desde un inicio el porqué de la aplicación del estudio, así como las áreas a ser evaluadas y las personas que estarán a cargo.
            .col-md-3
              figure
                img.h80(src='@/assets/curso/t1-i22.svg', alt='icono decorativo')

          .row(numero="2" titulo="Diseño de objetivos específicos")
            .col-md-9.mb-4.mb-md-0
              p Deben detallarse los resultados que se esperan alcanzar tras la ejecución del diagnóstico, priorizando aquellos que tanto la empresa como el agente evaluador consideren de mayor relevancia para llevar a cabo las actividades organizacionales en evaluación. 
            .col-md-3
              figure
                img.h80(src='@/assets/curso/t1-i23.svg', alt='icono decorativo')

          .row(numero="3" titulo="Elaboración de los sistemas de evaluación a aplicar")
            .col-md-9.mb-4.mb-md-0
              p Una vez definidas las áreas a evaluar, y los criterios clave a evaluar, deberán construirse las pruebas a través de las cuales se espera recopilar la información deseada. 
            .col-md-3
              figure
                img.h80(src='@/assets/curso/t1-i24.svg', alt='icono decorativo')

          .row(numero="4" titulo="Ejecución del diagnóstico")
            .col-md-9.mb-4.mb-md-0
              p Es apenas en esta fase en la que se ejecutan las pruebas diseñadas para la recolección de la información haciendo uso de los métodos y técnicas más apropiados para cada área. 
            .col-md-3
              figure
                img.h80(src='@/assets/curso/t1-i25.svg', alt='icono decorativo')

          .row(numero="4" titulo="Análisis de datos")
            .col-md-9.mb-4.mb-md-0
              p Es apenas en esta fase en la que se ejecutan las pruebas diseñadas para la recolección de la información haciendo uso de los métodos y técnicas más apropiados para cada área. 
            .col-md-3
              figure
                img.h80(src='@/assets/curso/t1-i26.svg', alt='icono decorativo')

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p <b>Una vez son ejecutadas todas las fases descritas,</b> cada empresa podrá plantearse la posibilidad de elaborar un nuevo diagnóstico para determinar si las estrategias formuladas han dado los resultados esperados.
    
    h3.titulo-tercero Objetivos
    p Los objetivos del diagnóstico empresarial se encuentran supeditados al modelo de intervención, sin embargo, para Pérez (1985), los que suelen ser cubiertos de manera frecuente son los siguientes:
    .row.justify-content-center.mb-5
      .col-lg-10
        ul.lista-ul
          li 
            i.fas.fa-check
            | Aportar información suficiente para crear una conceptualización lo más objetiva posible de lo que es la empresa y cómo funciona.
          li 
            i.fas.fa-check
            | Determinar las fortalezas y debilidades de la organización.
          li 
            i.fas.fa-check
            | Aportar herramientas suficientes para elaborar un plan de intervención y mejora.

    h3.titulo-tercero Modelos
    .row.mb-5.justify-content-center
      .col-lg-10.mb-5
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-3  El diagnóstico empresarial como herramienta puede ser adecuado según las necesidades de cada evaluador, en este sentido, se puede diseñar un sistema que cubra todos los aspectos que se consideren relevantes sin entrar a aplicar ningún modelo de terceros. Siempre y cuando se vele por una recolección suficiente de información e interpretación posterior objetiva, es completamente viable la ejecución de un diagnóstico a la medida. 
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/t1-i27.svg', alt='imagen decorativa')  

      .col-lg-10
        p.mb-5  Ahora bien, si se busca una guía para su planeación y ejecución, ya sea por falta de experticia o por la incertidumbre que generan las condiciones para desarrollar un trabajo, es posible aplicar un modelo desarrollado por un tercero.

    hr
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-b.color-secundario.p-4.mb-5
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p <b>Los modelos de diagnóstico buscan enmarcar el funcionamiento de las organizaciones dentro de una serie de parámetros y variables que se consideran claves.</b> Cada uno de ellos cuenta con un criterio orientador para efectuar el análisis de la actividad empresarial, así pues, ofrecen diferentes perspectivas para abordar las operaciones que se consideren más relevantes.
            p.text-right.text-bold  - Rodríguez (2016)
            i.fas.fa-quote-right

        .cajon.color-acento-contenido.p-4
          p  En este sentido, son prescindibles e intercambiables, por lo que cada analista podrá elegir a su gusto y preferencia el que mejor se adecúe a su estilo de trabajo o su filosofía de empresa. <b>Dos de los más relevantes se explican a continuación.</b>
    
    .row.justify-content-center.mb-5
      .col-lg-10
        h3  Modelo de contingencias:
        p.mb-5 Elaborado por Lawrence y Lorsch (1969), se fundamenta en la concepción de la empresa como un sistema que interactúa con su entorno. Sus dos conceptos más importantes son la diferenciación e integración.
    
    .tarjeta--container.row.mb-5.justify-content-center
      .col-lg-5.tarjeta.c1.p-4
        .row.justify-content-center.mb-4.p-5.text-center
          .col-6
            figure.mb-5(data-aos="flip-left", data-aos-delay='0')
              img.h180(src='@/assets/curso/t1-i28.svg', alt='Imagen Decorativa')
          
          .h2 Diferenciación
          p Entendida como la necesidad de especialización de algunas partes organizacionales para dar cumplimiento a las exigencias del entorno como los requerimientos legales y tributarios, las necesidades de los clientes o los requerimientos tecnológicos.

      .col-lg-5.tarjeta.c2.p-4
        .row.justify-content-center.mb-4.p-5.text-center
          .col-6
            figure.mb-5(data-aos="flip-right", data-aos-delay='100')
              img.h180(src='@/assets/curso/t1-i28.svg', alt='imagen decorativa')
          
          .h2 Integración
          p Es la fuerza que busca mantener las sub partes integradas, permitiendo su funcionamiento como una sola entidad.
    
    .row.justify-content-center.mb-5
      .col-lg-10    
        p.mb-5  Por ende, este modelo se centra en comprender la relación de la empresa con su ambiente, y cómo se relacionan la integración y la diferenciación para mantener el sistema funcionando de manera coordinada mientras satisface diversas necesidades del exterior.
        .cajon.color-acento-contenido.p-4
          p Todas las operaciones organizacionales deberán enfocarse partiendo del entorno sobre el que se desarrolla la actividad empresarial, así, el diseño de la estructura operativa será más mecánico o flexible, dependiendo de la complejidad del ambiente. Los autores del modelo lograron representar su esquema general tal y como se presenta en la siguiente figura:
    .row.justify-content-center.mb-5
      .col-lg-10     
          figcaption.customCaption.mb-2  <b>Figura 4</b> Modelo de funcionamiento organizacional
          figure.mb-3
            img(src='@/assets/curso/t1-i30.svg', alt='Tabla con tipos de empresa')  
          figcaption <b>Nota.</b> Tomado de <b>“Modelo de funcionamiento organizacional”.</b>Lawrence y Lorsch, (1969). 

    .row.justify-content-center.mb-5
      .col-lg-10.mb-5
        h3 Modelo de Mintzberg y la estructura en cinco:
        p Opera bajo una premisa similar al modelo anterior, ya que considera como elementos más relevantes de la organización la división del trabajo y la coordinación de las tareas para funcionar de manera armoniosa. Según su autor, una empresa puede dividirse en cinco categorías:

      .col-lg-10
        .cajon.color-green-light.p-4
          figcaption.customCaption.mb-2  <b>Figura 5</b> Estructura Orgánica de Mintzberg     
          figure
            img(src='@/assets/curso/t1-i31.svg', alt=' Estructura Orgánica de Mintzberg')     
          figcaption <b>Nota.</b> Recuperada de ICESI.
    
    .row.justify-content-center.mb-5
      .col-lg-8.mb-5  
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Ápice estratégico - alta gerencia")
            .col-md-10.mb-4.mb-md-0
              p Es el equipo encargado de tomar decisiones estratégicas y velar porque la filosofía de la compañía se alinee con las intenciones de sus propietarios.
            .col-md-2
              figure
                img.h80(src='@/assets/curso/t1-i32.svg', alt='icono decorativo')


          .row(numero="2" titulo="Línea media - gerentes de área")
            .col-md-10.mb-4.mb-md-0
              p Se constituye como la línea de mando directa del núcleo operativo, toman decisiones a nivel de área, por lo que funcionan como canal de comunicación entre los altos mandos y los operarios.
            .col-md-2
              figure
                img.h80(src='@/assets/curso/t1-i33.svg', alt='icono decorativo')

          .row(numero="3" titulo="Núcleo operativo – operarios")
            .col-md-10.mb-4.mb-md-0
              p Son quienes ejecutan las tareas programadas por los gerentes de área.
            .col-md-2
              figure
                img.h80(src='@/assets/curso/t1-i34.svg', alt='icono decorativo')

          .row(numero="4" titulo="Tecnoestructura – expertos dedicados a estandarización del trabajo")
            .col-md-10.mb-4.mb-md-0
              p Son funcionarios altamente preparados, enfocados en la optimización de los flujos de trabajo, designando el personal y preparándolo para hacerlo más eficiente. 
            .col-md-2
              figure
                img.h80(src='@/assets/curso/t1-i35.svg', alt='icono decorativo')

          .row(numero="5" titulo="Staff de apoyo – unidades que prestan servicios indirectos")
            .col-md-10.mb-4.mb-md-0
              p Se compone por especialistas en servicios concretos y accesorios a las actividades misionales de la empresa, como ejemplo podrían citarse las áreas de asesoría jurídica o las de correspondencia y mensajería.
            .col-md-2
              figure
                img.h80(src='@/assets/curso/t1-i35.svg', alt='icono decorativo')


                




    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    Muestras
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
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
.h80{maxh-height: 80px}
.h180{height: 180px}
</style>
