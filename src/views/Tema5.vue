<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Plan de producción    
    .row.mb-5
      .col-lg-2
        figure.mb-5(data-aos="fade-left", data-aos-delay='0')
          img(src='@/assets/curso/t5-i0.svg', alt='imagen decorativa')

      .col-lg-10  
        p.mb-5(data-aos="fade-right", data-aos-delay='50')  El proceso productivo involucra todas las áreas que tienen relación directa con la elaboración del producto o la prestación del servicio. La correcta gestión de este aspecto permite la optimización de los costos, lo que puede traducirse en una mayor rentabilidad, o en un menor precio de venta. El plan de producción surge como una herramienta administrativa enfocada a la correcta gestión del proceso productivo, con miras a la generación de ventajas competitivas a través de la mejora de la eficiencia de todos los actores que sean contemplados en él.





    #t_5_1.titulo-segundo
      h2 5.1  Características
    p.mb-5  El plan de producción se concentra en la elaboración de los productos o la prestación de los servicios ofrecidos por la empresa, los factores que los caracterizan son los siguientes:
    .row.mb-5.wrapCards
      .col-lg-4
        .tarjeta.c2.p-5.h-100(data-aos="fade-up", data-aos-delay='0')
          figure.mb-5(data-aos="flip-left", data-aos-delay='0')
            img.h180(src='@/assets/curso/t5-ic1.svg', alt='Imagen Decorativa')
          p Debe ser elaborado por un jefe de producción con el conocimiento técnico necesario para evaluar la mayor cantidad de variables respecto a niveles de materia prima y horas de trabajo. A mayor número de escenarios contemplados, mayor probabilidad de identificar las metodologías más eficientes.
      .col-lg-4
        .tarjeta.c1.p-5.h-100(data-aos="fade-up", data-aos-delay='50')
          figure.mb-5(data-aos="flip-left", data-aos-delay='0')
            img.h180(src='@/assets/curso/t5-ic2.svg', alt='Imagen Decorativa')
          p Es precedido por una planeación estratégica, dado que debe estar acorde a los planteamientos ordenados por el área directiva de la compañía. La planeación estratégica determina, por ejemplo, el tipo de productos a fabricar, información que toma el plan de producción como base para determinar los requerimientos de materia prima y personal.            

      .col-lg-4
        .tarjeta.c2.p-5(data-aos="fade-up", data-aos-delay='0')
          figure.mb-5(data-aos="flip-right", data-aos-delay='100')
            img.h180(src='@/assets/curso/t5-ic3.svg', alt='imagen decorativa')
          p Se nutre de los presupuestos de otras áreas. Tal es el caso del presupuesto de ventas, que aporta la información asociada a la demanda, y que funciona como punto de partida para establecer las metas de producción. También se alinea con los presupuestos de capital, ya que la cantidad de recursos disponibles puede afectar las políticas de compra y almacenaje de inventarios.        




    Separador
    br
    br
    #t_5_2.titulo-segundo
      h2 5.2  Etapas
    p.mb-5  Para llevar a cabo un plan de producción es necesario tener en cuenta una serie de pasos que contribuirán a que las estimaciones sean más cercanas a la realidad. Lo anterior es de vital importancia dado que plantearse objetivos realistas evitará sobre inversiones y permitirá una medición más objetiva de la capacidad de la línea productiva. Se recomienda que cualquier plan de producción conste por lo menos de las siguientes etapas:
    .tarjeta.color-acento-contenido.negMargin.p-5.r-0
      SlyderB.mb-5(:datos="datosSlyder")



</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Previsión de la demanda del producto',
        texto:
          'Una aproximación de las unidades que se esperan vender de cada producto es uno de los factores más relevantes a la hora de programar las compras de materia prima y la contratación del personal operativo. Esta estimación proviene del presupuesto de ventas, que hace parte de la planificación estratégica de la empresa.',
        imagen: require('@/assets/curso/t5-i1.svg'),
      },
      {
        titulo: 'Diseño de plan maestro de producción',
        texto:
          'Una vez se cuenta con los niveles de demanda esperada por producto, es momento de proceder a determinar aspectos más específicos como la cantidad a producir, los períodos estimados de entrega y las cargas de trabajo por línea de producción. Se le denomina plan maestro porque en este convergen todos los productos elaborados por la empresa.',
        imagen: require('@/assets/curso/t5-i2.svg'),
      },
      {
        titulo: 'Planificación de capacidad',
        texto:
          'En esta fase es importante considerar factores internos como la capacidad de la maquinaria, la disponibilidad de los espacios productivos, o la cantidad de operarios y las horas disponibles para trabajar. Se recomienda buscar un equilibrio entre las distintas líneas de producción para optimizar el uso de las instalaciones y cubrir con toda la demanda estimada en etapas previas de la planeación estratégica.',
        imagen: require('@/assets/curso/t5-i3.svg'),
      },
      {
        titulo: 'Control de inventarios',
        texto:
          'Debe planificarse la cantidad de materia prima a comprar, los intervalos de tiempo para hacer los pedidos acordes al volumen y ritmo de producción, usualmente se busca mantener solo los volúmenes de materia prima necesarios para reducir costos de almacenamiento y mantener los niveles de liquidez apropiados.',
        imagen: require('@/assets/curso/t5-i4.svg'),
      },
      {
        titulo: 'Control de producción y de calidad',
        texto:
          'En esta etapa se evaluarán las unidades producidas y el cumplimiento de los estándares de calidad planteados. La supervisión estará enfocada en el cumplimiento de los cronogramas propuestos, el volumen de la producción estimada en comparación a la ejecutada y en la minimización de costos por defectos o sobrantes. ',
        imagen: require('@/assets/curso/t5-i5.svg'),
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

<style lang="sass" scoped>
.h180{max-height: 180px}
</style>
