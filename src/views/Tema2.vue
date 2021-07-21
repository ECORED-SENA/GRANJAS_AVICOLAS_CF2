<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Disponibilidad de recursos
    
    .row.mb-5
      .col-lg-8(data-aos="fade-left", data-aos-delay='0')
        p.mb-3  La empresa como sistema que funciona dentro de un entorno determinado requiere de interacciones con agentes externos que actúan desde diferentes fases del ciclo operativo. Al inicio de este, los proveedores y acreedores suministran los insumos necesarios para el desarrollo del objeto social, y al final, son los clientes quienes demandan la entrega del bien o servicio. La contraprestación recibida por estos últimos posibilita el inicio de un nuevo ciclo que perpetúe la generación de valor.
        p.mb-3  Del apartado anterior se infiere que los recursos son el medio a través del cual la empresa ejecuta la estrategia para la que fue concebida; en este sentido, la concepción del término “recursos” es tan amplia que alberga elementos de cualquier naturaleza. 

      .col-lg-4(data-aos="fade-right", data-aos-delay='50')
        figure.mb-5
          img(src='@/assets/curso/t2-i1.png', alt='personas en una fabrica')
    
    .cajon.mb-5.p-4.color-acento-botones
      p Para aterrizar un poco más el término, resulta apropiada una clasificación que permita identificar los tipos de recursos necesarios en un sistema empresarial. Así pues, se propone y detalla la siguiente clasificación dada su amplia aceptación en el medio: 
    
    .row.mb-5.justify-content-center
      .col-lg-8
        .cajon.color-light-green.p-4(data-aos="fade-up", data-aos-delay='0')
          figcaption.customCaption.mb-2  Figura 6 Recursos de una empresa
          figure.mb-5
            img(src='@/assets/curso/t2-i2.svg', alt='ilustracion de recursos de una empresa')            
          figcaption  <b>Nota.</b> Elaboración propia.

    #t_2_1.titulo-segundo
      h2 2.1  Humanos
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4.shadow-box
                p.mb-3  La empresa es una organización de carácter social y para llevar a cabo su función requiere de la interacción humana, ya sea entre trabajadores y directivos, o vendedores y clientes. El factor humano es inherente al sistema organizacional, y su relevancia es tal, que una buena gestión del talento humano puede potenciar las ventajas competitivas y mejorar enormemente los rendimientos financieros de cualquier compañía.
                p Existen tres grupos para clasificar el elemento humano:

            .col-lg-4.mb-4.mb-lg-0
              figure
                img.h200(src='@/assets/curso/t2-i3.svg', alt='imagen decorativa')  
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Propietarios")
        .col-md-8
          p.mb-3.mx-5  Son quienes aportan el capital, es decir, los dueños de la compañía y quienes usualmente toman las decisiones a gran escala como el objeto social de la compañía, el tipo societario, la aprobación de la información financiera o la destinación de los excedentes. Usualmente ejercen su posición a través de la junta de socios o asamblea de accionistas; sin embargo, cuando la empresa es pequeña, los propietarios suelen ejercer el control de manera directa, por lo que son directivos al mismo tiempo.
        .col-md-3.mb-4.mb-md-0
          figure.mb-5
            img.h110(src='@/assets/curso/t2-i4.svg', alt='imagen decorativa')          
      .row(titulo="Directivos")
        .col-md-8
          p.mb-3.mx-5  Son designados para actuar en representación de los propietarios y son los encargados de llevar a cabo el correcto desarrollo operativo. Ejemplo de estos son la junta directiva y los gerentes generales y de áreas específicas. Toman decisiones de nivel estratégico y dirigen la compañía en función de los lineamientos generales establecidos por los propietarios.
        .col-md-3.mb-4.mb-md-0
          figure.mb-5
            img.h110(src='@/assets/curso/t2-i5.svg', alt='imagen decorativa')          
      .row(titulo="Trabajadores")
        .col-md-8
          p.mb-3.mx-5  Llevan a cabo las labores operativas, son nombrados por los directivos o sus designados, y se dedican a ejecutar las tareas que estos estos les encargan. En esta categoría encontramos los operarios, jefes de área y los supervisores.
        .col-md-3.mb-4.mb-md-0
          figure.mb-5
            img.h110(src='@/assets/curso/t2-i6.svg', alt='imagen decorativa')          
    Separador
    br
    br

    #t_2_2.titulo-segundo
      h2 2.2  Materiales
    p.mb-5  Los elementos materiales comprenden aquellos bienes tangibles necesarios para desarrollar el objeto social de la empresa. Pueden clasificarse según el tiempo que se espera permanezcan en la organización así:
    .tarjeta--container.row.mb-5
      .col-lg-6.tarjeta.c1.p-5
        .row.justify-content-center.mb-4.p-5.text-center
          .col-6
            figure.mb-5(data-aos="flip-left", data-aos-delay='0')
              img.h180(src='@/assets/curso/t2-i7.svg', alt='Imagen Decorativa')
          
          .h2 Corrientes
          p Aquellos de los que se espera disponer en periodos inferiores a un año, tal es el caso de las materias primas que serán usadas en el proceso de producción o los productos terminados dispuestos para la venta.

      .col-lg-6.tarjeta.c2.p-5
        .row.justify-content-center.mb-4.p-5.text-center
          .col-6
            figure.mb-5(data-aos="flip-right", data-aos-delay='100')
              img.h180(src='@/assets/curso/t2-i8.svg', alt='imagen decorativa')
          
          .h2 No corrientes
          p Son los elementos utilizados en varios ciclos productivos, y de los cuales se espera generen beneficios a la empresa durante periodos superiores a un año. Se encuentran bienes como la maquinaria, los muebles y enseres o las edificaciones.

    Separador
    br
    br

    #t_2_3.titulo-segundo
      h2 2.3  Técnicos
    p.mb-3  Se refiere a los procedimientos y conocimientos propios de la actividad que desarrolla la empresa. Se encuentran asociados a cualquier proceso, ya sea administrativo, de producción o comercial. Ejemplos de estas categorías son los siguientes:
    .row.justify-content-center
      .col-lg-10
        LineaTiempoB.color-secundario.mb-5(:datos="datosLineaTiempoB")    


    Separador
    br
    br
    #t_2_4.titulo-segundo
      h2 2.4  Financieros

    p.mb-5  Hace referencia al capital dispuesto en dinero o en títulos valores de alta liquidez. La obtención de capital se hace a través de diversas fuentes, y su correcta administración garantizará que todos los demás elementos puedan funcionar de manera fluida y permanente. Los sistemas de obtención de capital son los siguientes:
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-secundario.p-5(titulo="Fuentes operativas")
        .row
          .col-lg-4
            figure.mb-5
              img.nW(src='@/assets/curso/t2-i9.svg', alt='imagen decorativa')
          .col-lg-8
            h3 Fuentes operativas
            p Venta de los bienes y servicios producidos u ofertados por la empresa, esto incluye el recaudo de la cartera y las ventas de contado. Es la fuente de capital más importante dado que da cumplimiento a la concepción con la cual fue creada la empresa.

      
      .tarjeta.color-secundario.p-5(titulo="Fuentes de financiación")
        .row
          .col-lg-4
            figure.mb-5
              img.nW(src='@/assets/curso/t2-i10.svg', alt='imagen decorativa')
          .col-lg-8
            h3 Fuentes de financiación
            p Corresponde a los dineros recibidos por parte del sector financiero o los acreedores privados. Son dineros que se reciben con una promesa de ser retornados en un plazo determinado, asumiendo unos costos por intereses. Es un sistema alternativo de consecución de capital que puede provenir de fuentes internas como lo son los aportes de capital de los propietarios, o de fuentes externas como los créditos de libre inversión que ofrecen los bancos.

      .tarjeta.color-secundario.p-5(titulo="Fuentes de inversión")
        .row
          .col-lg-4
            figure.mb-5
              img.nW(src='@/assets/curso/t2-i11.svg', alt='imagen decorativa')
          .col-lg-8
            h3 Fuentes de inversión
            p.mb-3  Son aquellas rentas obtenidas por actividades accesorias a la principal. Un ejemplo común es el arrendamiento de propiedades que no están siendo utilizadas o la venta de inmuebles que han generado plusvalía.
            p.mb-3  En esta categoría hay que prestar especial atención a la venta de los activos no corrientes de la empresa; dado que una venta indiscriminada de los mismos podría llevar a no contar con las instalaciones suficientes para llevar a cabo los procesos propios de la empresa y sus consecuentes falencias en la producción o comercialización de los bienes ofertados. 







</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: 'Administrativo',
        texto:
          'Políticas empresariales, organigramas, sistemas de control interno o de calidad. Un sistema a la medida para el reclutamiento de personal puede garantizar una selección idónea de trabajadores que impulse los niveles de productividad en cualquier área de la organización.',
        icono: require('@/assets/curso/t2-ic1.svg'),
      },
      {
        titulo: 'Producción',
        texto:
          'Patentes, fórmulas o recetas asociadas a la creación del producto. Algunas empresas deben su enorme éxito a este elemento, tal es el caso de Coca Cola, que se ha conservado como la bebida más popular en el mundo gracias a su característico y único sabor.',
        icono: require('@/assets/curso/t2-ic2.svg'),
      },
      {
        titulo: 'Comercial',
        texto:
          'Imagen corporativa, estrategias de mercadeo, bases de datos. Existen compañías que son reconocidas dentro de su rubro y mantienen niveles altos de ventas gracias a su reputación. ',
        icono: require('@/assets/curso/t2-ic3.svg'),
      },
    ],
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

<style lang="sass" scoped></style>
