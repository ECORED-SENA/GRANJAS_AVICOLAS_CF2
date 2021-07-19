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
    .row
      .col-lg-5
      .col-lg-7













    Separador
    br
    br
    #t_1_2.titulo-segundo
      h2 1.2  Recursos y transacciones contables de la empresa


    Separador
    br
    br
    #t_1_3.titulo-segundo
      h2 1.3  Diagnóstico organizacional de la empresa















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
