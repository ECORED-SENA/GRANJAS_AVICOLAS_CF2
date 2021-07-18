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
    #t_3_1.titulo-segundo
      h2 3.1  Técnicos

    #t_3_2.titulo-segundo
      h2 3.2  Importancia

    #t_3_3.titulo-segundo
      h2 3.3  Tipos

    #t_3_4.titulo-segundo
      h2 3.4  Presupuesto inicial de la empresa

    #t_3_5.titulo-segundo
      h2 3.5  Cómo elaborar un presupuesto

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

<style lang="sass" scoped></style>
