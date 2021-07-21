<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row
      .col-lg-7
        p.mb-5 La necesidad de mitigar la pandemia por COVID-19 ha obligado a la comunidad científica internacional, a desarrollar una serie de investigaciones y desarrollos tendientes a presentar una vacuna para hacerle frente a esta enfermedad que aumenta día a día su morbi mortalidad en Colombia. Es así, como en diciembre de 2020, la comunidad científica presenta los resultados de varios desarrollos de vacunas, que ofrecen eficacia y seguridad, respaldados por estudios clínicos rigurosos.
        p.mb-5  Es tal la complejidad que ha adquirido con el tiempo que existen disciplinas dedicadas únicamente a comprender y aplicar las mejores estrategias para maximizar sus beneficios.
        .cajon.color-acento-contenido.p-4(data-aos="flip-down", data-aos-delay='0')
          p Este componente tiene como pilar fundamental aportar al aprendiz una conceptualización de lo qué es una empresa, los elementos que la integran y las estrategias más efectivas para gestionar eficientemente sus recursos a través de la planeación estratégica.

      
      .col-lg-5
        figure.mb-5
          img(src="@/assets/curso/t0-i1.svg", alt="Texto que describa la imagen")



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
