<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Disponibilidad de recursos
    
    .row.mb-5
      .col-lg-8
        p.mb-3  La empresa como sistema que funciona dentro de un entorno determinado requiere de interacciones con agentes externos que actúan desde diferentes fases del ciclo operativo. Al inicio de este, los proveedores y acreedores suministran los insumos necesarios para el desarrollo del objeto social, y al final, son los clientes quienes demandan la entrega del bien o servicio. La contraprestación recibida por estos últimos posibilita el inicio de un nuevo ciclo que perpetúe la generación de valor.
        p.mb-3  Del apartado anterior se infiere que los recursos son el medio a través del cual la empresa ejecuta la estrategia para la que fue concebida; en este sentido, la concepción del término “recursos” es tan amplia que alberga elementos de cualquier naturaleza. 

      .col-lg-4
        figure.mb-5
          img(src='@/assets/curso/t2-i1.png', alt='personas en una fabrica')
    
    .cajon.mb-5.p-4.color-acento-botones
      p Para aterrizar un poco más el término, resulta apropiada una clasificación que permita identificar los tipos de recursos necesarios en un sistema empresarial. Así pues, se propone y detalla la siguiente clasificación dada su amplia aceptación en el medio: 
    
    .row.mb-5.justify-content-center
      .col-lg-8
        .cajon.color-light-green.p-4
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
              .bloque-texto-a__texto.p-4
                p.mb-3  La empresa es una organización de carácter social y para llevar a cabo su función requiere de la interacción humana, ya sea entre trabajadores y directivos, o vendedores y clientes. El factor humano es inherente al sistema organizacional, y su relevancia es tal, que una buena gestión del talento humano puede potenciar las ventajas competitivas y mejorar enormemente los rendimientos financieros de cualquier compañía.
                p Existen tres grupos para clasificar el elemento humano:

            .col-lg-4.mb-4.mb-lg-0
              figure
                img.h200(src='@/assets/curso/t2-i3.svg', alt='imagen decorativa')  
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Propietarios")
        .col-md-8
          p.mb-3  Son quienes aportan el capital, es decir, los dueños de la compañía y quienes usualmente toman las decisiones a gran escala como el objeto social de la compañía, el tipo societario, la aprobación de la información financiera o la destinación de los excedentes. Usualmente ejercen su posición a través de la junta de socios o asamblea de accionistas; sin embargo, cuando la empresa es pequeña, los propietarios suelen ejercer el control de manera directa, por lo que son directivos al mismo tiempo.
        .col-md-3.mb-4.mb-md-0
          figure.mb-5
            img.h110(src='@/assets/curso/t2-i4.svg', alt='imagen decorativa')          
      .row(titulo="Directivos")
        .col-md-8
          p.mb-3  Son designados para actuar en representación de los propietarios y son los encargados de llevar a cabo el correcto desarrollo operativo. Ejemplo de estos son la junta directiva y los gerentes generales y de áreas específicas. Toman decisiones de nivel estratégico y dirigen la compañía en función de los lineamientos generales establecidos por los propietarios.
        .col-md-3.mb-4.mb-md-0
          figure.mb-5
            img.h110(src='@/assets/curso/t2-i5.svg', alt='imagen decorativa')          
      .row(titulo="Trabajadores")
        .col-md-8
          p.mb-3  Llevan a cabo las labores operativas, son nombrados por los directivos o sus designados, y se dedican a ejecutar las tareas que estos estos les encargan. En esta categoría encontramos los operarios, jefes de área y los supervisores.
        .col-md-3.mb-4.mb-md-0
          figure.mb-5
            img.h110(src='@/assets/curso/t2-i6.svg', alt='imagen decorativa')          


    #t_2_2.titulo-segundo
      h2 2.2  Materiales
    p.mb-5  Los elementos materiales comprenden aquellos bienes tangibles necesarios para desarrollar el objeto social de la empresa. Pueden clasificarse según el tiempo que se espera permanezcan en la organización así:
    


    #t_2_3.titulo-segundo
      h2 2.3  Técnicos

    #t_2_4.titulo-segundo
      h2 2.4  Financieros










</template>

<script>
export default {
  name: 'Tema2',
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
