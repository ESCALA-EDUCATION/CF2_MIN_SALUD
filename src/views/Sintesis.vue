<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5

      .titulo-principal
        .titulo-principal__numero
          span
            i.fas.fa-sitemap
        h1 Síntesis

      p.mb-5 El siguiente esquema le presenta una síntesis de los temas y contenidos desarrollados y analizados en este componente formativo. 
  
      .row.justify-content-center
        .col-lg-10.mb-5
          figure
            img(src="@/assets/curso/sintesis.svg", alt="alt")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis
  
  </template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass"></style>
