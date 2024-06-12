<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bg-i-1.mn
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-3.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/1.svg', alt='')
        .col-lg-9(data-aos="fade-left")
          p.mb-0 Aprendices, el Ministerio de Salud y Protección Social les da la bienvenida al segundo componente formativo relacionado con los Enfoques de Atención a la salud para las personas de los sectores LGTBIQ+ y con orientaciones sexuales e identidades de género no hegemónicas.
            br
            |Para ello, recordemos el Plan Decenal de Salud Pública 2022-2031 como política de Estado que incluye los elementos contemplados en la Ley Estatutaria en Salud y demás referentes normativos, buscando la comprensión de los derechos, sus aspectos diferenciales y el abordaje integrado de los sujetos de derecho tanto individuales como colectivos. En el marco de los derechos humanos, en particular, los de igualdad y no discriminación, la vida digna se constituye en un elemento fundamental, así como la adopción de acciones afirmativas que prevengan, superen, corrijan y reparen cualquier condición o situación en la que se generen desigualdades y brechas de equidad.
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
          .tarjeta.p-5(style="background-color: #2c3e50")
            p.mb-0.text-white La República de Colombia, al declararse un Estado Social de Derecho en la Constitución Política de 1991, incluyó artículos relacionados con los derechos humanos, la igualdad y la no discriminación. Por su parte, la Política Pública LGBTI a nivel nacional, adoptada a través del Decreto 762 de 2018, busca asegurar la garantía de los derechos de las personas con orientaciones sexuales o identidades de género diversas. Para lograrlo, contempla los diferentes enfoques y señala la importancia de definir acciones y rutas de atención buscando un cambio cultural y de comprensión de múltiples categorías identitarias o características particulares, como: sexo, género, orientación sexual, identidad de género, entre otras. 
        .col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/2b.svg', alt='')
      .tarjeta.p-4(style="background-color: #423755 ").mb-5
        .row.justify-content-center.align-items-center
          .col-lg-1.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/3.svg', alt='')
          .col-lg-11(data-aos="fade-left")
            p.mb-0.fw-bold.text-white Como parte de los compromisos con la política pública, el Plan Decenal 2022-2031 bajo la resolución 2367 de 2023, ha estipulado una serie de prioridades a tener en cuenta con la población de los sectores LGBTIQ+ y con orientación sexual, identidad o expresión de género y características sexuales diversas. Dentro de estas prioridades se describen aquellas que tienen relación directa con el presente curso:
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/4.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .acordion-modificado 
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--acc rounded-0")
              div(titulo="Protocolos de atención para víctimas de violencia de género y LGBTIQ+")
                p.mb-0 Incluir guías y protocolos específicos basados en las condiciones y requerimientos de mujeres víctimas de violencia de género y personas LGBTIQ+.
              div(titulo="Servicios integrales para sectores LGBTIQ+")
                p.mb-0  Generar servicios que incluyan opciones Transamigables, con personal capacitado y ambientes adaptados para el reconocimiento de sus necesidades e identidades.
              div(titulo="Características de los Servicios Transamigables")
                .p-4.pt-0
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-heart
                      p.mb-0 #[b Consulta diferenciada:] Profesionales formados específicamente para la atención a personas Trans.
                    li.d-flex
                      i.fas.fa-heart
                      p.mb-0 #[b Unidades de salud amigables:] Espacios exclusivos y privados, con señalización adecuada y personal especializado. Horarios adaptados a las necesidades de la población.
              div(titulo="Integración de saberes de organizaciones de Mujeres y LGBTIQ+")
                p.mb-0 Incorporar prácticas y conocimientos de estas organizaciones en la red de gestión del conocimiento en salud pública.
              div(titulo="Capacitación en uso de MIPRES")
                p.mb-0 Formar a los prestadores de servicios de salud sobre la utilización de MIPRES para la gestión de medicamentos y procedimientos en procesos de tránsito de género.
              div(titulo="Adaptación de formatos y registros")
                p.mb-0 Modificar formatos y sistemas para incluir el nombre identitario de las personas Transgénero, conforme a la Resolución No. 2367 de 2023.
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
          .tarjeta.p-5(style="background-color: #423755")
            p.mb-0.text-white El módulo inicia con una revisión conceptual del sesgo inconsciente de género, estableciendo pautas generales que el talento humano en salud debe conocer y aplicar para mejorar el servicio y garantizar los derechos de las personas LGTBIQ+ y con orientaciones sexuales e identidades de género no hegemónicas. El objetivo es fomentar la comprensión y la inclusión de la diversidad sexual y de género. A pesar de los avances en organizaciones públicas y privadas para incluir a esta comunidad, siguen siendo uno de los grupos más discriminados y violentados en el país.
        .col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/5b.png', alt='')

    
    

</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass">
.bg-i-1
  background-image: url(../assets/curso/temas/b-i-1.svg)
  background-repeat: no-repeat
  background-size: cover
  background-position: 0 0
</style>
