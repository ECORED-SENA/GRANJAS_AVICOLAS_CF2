<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
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
