<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Costos de producción    
    .row.mb-5
      .col-lg-7(data-aos="fade-left", data-aos-delay='0')  
        p.mb-4  Los decrementos de los beneficios económicos pueden ser clasificados según su destinación; en este sentido se tienen dos grandes categorías que engloban todas las operaciones de la empresa. Las inversiones efectuadas para la creación de los productos se conocen como costo de producción, mientras que las destinadas a la gestión administrativa o comercial son llamadas gastos. 
        p.mb-4  La segunda diferencia significativa radica en que los costos son cargados a los productos (en el inventario) y no se reconocen como una disminución en la rentabilidad hasta que no se haya generado la venta de tales productos, los gastos, por su parte, se reconocen directamente en el resultado, afectando la utilidad sin importar si los productos se vendan o no.
      .col-lg-5
        figure.mb-5(data-aos="fade-right", data-aos-delay='0')
          img(src='@/assets/curso/t4-i1.png', alt='personas en una fabrica')

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-green-light.p-4
          figcaption.customCaption.mb-2  Figura 11 Flujograma de distribución de egresos
          figure.mb-5
            img(src='@/assets/curso/t4-i2.svg', alt='personas en una fabrica')
          figcaption  <b>Nota.</b> Tomado del libro “Presupuestos bajo normas internacionales de información financiera y taxonomía XBRL”. Rincón y Narváez, (2017).


    #t_4_1.titulo-segundo
      h2 4.1  Elementos del costo de producción
    p.mb-5  Teniendo clara la distinción con los gastos, es posible adentrarse en los elementos que componen el costo de producción. La clasificación que goza de mayor aceptación los divide en tres grandes grupos: materia prima, mano de obra y costos indirectos de fabricación. En la siguiente figura se puede apreciar lo mencionado:
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-light-green.p-4
          figcaption.customCaption.mb-2  Figura 12 Flujograma de distribución de egresos
          figure.mb-5
            img(src='@/assets/curso/t4-i3.svg', alt='personas en una fabrica')
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Materia prima" :icono="require('@/assets/curso/t4-ic1.svg')")
        .row.align-items-center.px-4
          .col-md-6.mb-4.mb-md-0
            h3 Materia prima
            p Son los materiales utilizados para la elaboración del producto. Se subdivide en materiales directos, siendo estos los afectados por los niveles de producción y atribuibles a cada producto, por ejemplo, las gallinas de engorde; o indirectos en el caso de los que no tienen tanta relevancia o su asignación resulta más compleja de determinar, por ejemplo, el concentrado con el que se alimentan, donde no es posible identificar cuánto de este se transmite como mayor peso de las aves.
        
          .col-md-6
            figure
              img(src='@/assets/curso/t4-i4.svg', alt='imagen decorativa relacionada a la materia prima')

      .py-4.py-md-5(titulo="Mano de obra" :icono="require('@/assets/curso/t4-ic2.svg')")
        .row.align-items-center.px-4
          .col-md-6.mb-4.mb-md-0
            h3 Mano de obra
            p Comprende el trabajo realizado por el personal que pertenece al área de producción. Reciben la misma clasificación de la materia prima, por lo que la mano de obra directa suele limitarse al trabajo de los operarios que realizan las labores de forma manual o por intermedio de la maquinaria, mientras que la indirecta comprende los salarios del personal de vigilancia o de los supervisores de área.
          .col-md-6
            figure
              img(src='@/assets/curso/t4-i5.svg', alt='imagen decorativa relacionada fabricación')

      .py-4.py-md-5(titulo="Costos indirectos de fabricación" :icono="require('@/assets/curso/t4-ic3.svg')")
        .row.align-items-center.px-4
          .col-md-6.mb-4.mb-md-0
            h3 Costos indirectos de fabricación
            p Agrupan tanto los materiales indirectos como la mano de obra indirecta, así como otros gastos diversos que son necesarios en el área de producción, pero no pueden ser asignados directamente al producto. Algunos ejemplos de estos son los mantenimientos a la maquinaria, el arrendamiento del inmueble donde se ubica la fábrica o los sistemas de control de calidad del producto.        
          .col-md-6
            figure
              img(src='@/assets/curso/t4-i6.svg', alt='imagen decorativa relacionada fabricación')

    Separador
    br
    br
    #t_4_2.titulo-segundo
      h2 4.2  Clasificación
    p.mb-5  Existen variados criterios de clasificación de los costos de producción que obedecen a propósitos diferentes. A continuación, se describen los que ofrecen mayor utilidad para la administración y elaboración del presupuesto:

    h3.titulo-tercero Según su variabilidad en relación con la producción
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5(data-aos="fade-up", data-aos-delay='0') 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p  Bajo este modelo, los costos se discriminan en variables, que son aquellos que tienen una relación directa con las unidades producidas, por ejemplo, a mayor cantidad de huevos a producir, mayor la cantidad de gallinas a utilizar. Como contraparte están los costos fijos, que no se ven afectados por la producción, aquí pueden encontrarse rubros como el salario de las aseadoras de planta de producción.

            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/t4-i7.svg', alt='Gallinas poniendo huevos') 

    h3.titulo-tercero Según su relación con el producto
    .row.justify-content-center.mb-5
      .col-lg-3(data-aos="fade-left", data-aos-delay='0') 
        figure
          img(src='@/assets/curso/t4-i8.svg', alt='imagen decorativa') 
      .col-lg-7(data-aos="fade-right", data-aos-delay='25') 
        p.mb-3  La regla aplicable a este sistema lleva a determinar si existe o no una relación directa entre el insumo y la generación del producto terminado. 
        p.mb-3  Se consideran directos los costos asignables a un producto en específico como lo sería la materia prima objeto de transformación o el salario pagado al operario que trabaja en una línea de producción en concreto. 
        p.mb-3  Los costos indirectos, por su parte, corresponden a aquellos que, aunque tienen relación con la producción, son comunes a varios tipos de productos o cuesta asignarlos de forma directa a uno en específico.
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4(data-aos="flip-down", data-aos-delay='0')
          p <b>Uno de los ejemplos más claros es el costo de los servicios públicos,</b> el agua o la luz utilizados para encender y operar la maquinaria: no pueden designarse fácilmente a un solo producto, pues todas las líneas de producción requieren de ellos.    
    
    h3.titulo-tercero Según su uso en procedimientos de planeación
    .row.justify-content-center.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/t4-i9.svg', alt='imagen decorativa') 
      .col-lg-7
        p.mb-3  Este criterio toma especial relevancia a la hora de la planeación estratégica y la proyección presupuestal. Bajo este sistema están los costos estimados que obedecen a la observación y análisis de su comportamiento y no son tan precisos, pues su cálculo no requiere procedimientos tan rigurosos. 
        p.mb-3  En segundo lugar, están los costos estándar, cuya determinación se hace a través de sistemas de costeo que ofrecen una alta precisión; demandan mucho tiempo para su cálculo, pero tienen un margen de error mucho más reducido. Debido a lo exigente que es el proceso de determinación del costeo estándar, suele ser aplicado a aquellas líneas de producción de gran volumen y relevancia. 
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-up", data-aos-delay='25')
        .cajon.color-green-light.p-4
          figcaption.customCaption.mb-2 Figura 13 Clasificación de los costos de producción
          figure
            img(src='@/assets/curso/t4-ix1.svg', alt='Tabla de clasificación')   
    



    Separador
    br
    br
    #t_4_3.titulo-segundo
      h2 4.3  Cálculo
    .row.mb-5(data-aos="fade-up", data-aos-delay='0')
      .col-lg-7
        p.mb-3  Determinar el costo de producción de un producto puede ser una tarea básica o muy compleja dependiendo las particularidades del proceso. El elemento que suele traer mayores dificultades para su medición es el de costos indirectos, puesto que, al no existir una relación directa con la producción, cuesta trabajo atribuir la proporción del mismo que corresponde a cada línea productiva. Si la empresa produce un solo tipo de producto, se simplifica mucho la labor. En este sentido, una sumatoria de todos los elementos del costo, dividido en el número de unidades producidas brindará el costo por unidad.
      .col-lg-5
        figure
          img(src='@/assets/curso/t4-i11.png', alt='imagen decorativa')  

    .row.mb-5.justify-content-center
      .col-lg-8
        figcaption.customCaption.mb-2  Tabla 3  Ejemplo de cálculo de costos por unidad
        .tabla-b.color-acento-contenido.mb-5
          table.text-bold
            tr
              th Materia prima:
              td $ 500
            tr
              th Mano de obra directa:
              td $ 200
            tr
              th Costos indirectos de fabricación:
              td $ 100
            tr.bg-color-row
              th Total de costos de producción:
              td $ 800
            tr
              th Unidades producidas:
              td 10
            tr
              th Costo de producción unitario ($800/10):
              td $ 80 






</template>

<script>
export default {
  name: 'Tema4',
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

<style lang="sass" scoped></style>
