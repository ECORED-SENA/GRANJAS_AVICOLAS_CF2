<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Costos de producción    
    .row.mb-5
      .col-lg-7  
        p.mb-5  El proceso productivo involucra todas las áreas que tienen relación directa con la elaboración del producto o la prestación del servicio. La correcta gestión de este aspecto permite la optimización de los costos, lo que puede traducirse en una mayor rentabilidad, o en un menor precio de venta. El plan de producción surge como una herramienta administrativa enfocada a la correcta gestión del proceso productivo, con miras a la generación de ventajas competitivas a través de la mejora de la eficiencia de todos los actores que sean contemplados en él.
      .col-lg-5
        figure.mb-5
          img(src='@/assets/curso/t5-i0.svg', alt='imagen decorativa')






    #t_4_1.titulo-segundo
      h2 4.1  Elementos del costo de producción

    #t_4_2.titulo-segundo
      h2 4.2  Clasificación

    #t_4_3.titulo-segundo
      h2 4.3  Cálculo

    #t_4_4.titulo-segundo
      h2 4.1  Elementos del costo de producción

    #t_4_5.titulo-segundo
      h2 4.1  Elementos del costo de producción



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
