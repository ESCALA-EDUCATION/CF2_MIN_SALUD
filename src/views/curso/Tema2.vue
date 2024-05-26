<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.py-4
    .titulo-principal
      .titulo-principal__numero
        span
          | 2
      h1 Diversidad: conceptos
    .bg-2.mn
      .row.justify-content-center.mb-5
        .col-lg-4.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/21.png', alt='')
        .col-lg-8(data-aos="fade-left")
          p Teniendo en cuenta que en el componente 1 se revisaron los conceptos más importantes para comprender lo relacionado con género, sexo, expresión de género, identidad de género y orientación sexual, pasamos a ampliar la información relacionada con la diversidad, la cual se refiere a las distintas formas de expresión, ya sea desde lo étnico, cultural o sexual; por tanto, está presente en todos los aspectos de la vida, gestando acuerdos y desacuerdos a nivel social. En el contexto del presente curso, se abordará la diversidad sexual y de género, la cual nace con el fin de promover la inclusión y la igualdad, generando tolerancia y empatía.
          .tarjeta.p-4(style="background-color: #423755 ").mb-5
            .row.justify-content-center.align-items-center
              .col-lg-1.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/3.svg', alt='')
              .col-lg-11(data-aos="fade-left")
                p.mb-0.fw-bold.text-white En la #[span.color-acento cultura occidental], ha existido un predominio en #[span.color-acento la clasificación binaria del sexo/género] de las personas, con existencia de una categoría masculina y femenina asignada al nacer, así como la existencia de normas que favorecen la heterosexualidad, provocando conductas basadas en discriminación y odio, como la homofobia, transfobia y otras formas de rechazo hacia los sectores sociales LGBTIQ+ y con orientaciones sexuales e identidades de género no hegemónicas.
      p.mb-5(data-aos='fade-right') La diversidad sexual y de género se refiere a todas las posibilidades que tienen las personas de asumir, expresar y vivir la sexualidad en razón de su identidad, expresión de género y orientación sexual.
      .mn.py-lg-0.mb-5(style="background-color: #3c1c74 ")
        .row.justify-content-center.align-items-center
          .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/22.svg', alt='') 
          .col-lg-7(data-aos="fade-left")
            h4.mb-5
              span.color-acento ¿Sabías que?
            p.text-white Cuando se generan situaciones de exclusión, restricción o rechazo de una persona hacia la diversidad sexual y de género, da como resultado una falta de respeto hacia la persona, lo que puede generar la anulación de los derechos y libertades.
      p.mb-5(data-aos='fade-right') Dadas estas situaciones en donde se deben garantizar el derecho y la libertad de la persona, el talento humano en salud debe contribuir en la creación de espacios incluyentes y libres de toda discriminación.
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.col-7(data-aos="fade-right"): img(src='@/assets/curso/temas/23.png', alt='') 
        .col-lg-7(data-aos="fade-left")
          p.mb-0 Para que se dé una real garantía de derechos, el #[b(style="color: #0F5FFE ") Fondo de Población de las Naciones Unidas (UNFPA)] recomienda dar lineamientos al talento humano en salud, quienes deben procurar en todo momento una atención que garantice el libre desarrollo de la personalidad, con el fin de que se puedan realizar todas las acciones encaminadas a la promoción de la salud, la prevención de la enfermedad y atención integral en el marco de las necesidades de salud de las personas de los sectores LGBTIQ+ y con orientaciones sexuales e identidades de género no hegemónicas.
      .tarjeta.p-5.mb-3(style="background-color: #2a3c52")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/24.svg")
          .col
            .row.justify-content-between.align-items-center
              .col-10.mb-3.mb-sm-0
                h4.mb-1
                  span.color-acento Resolución 2138 de 2023 del Ministerio de Salud y Protección Social
                p.text-white Para tal reconocimiento, se abordaron en el componente 1 todas las descripciones relacionadas con género, sexo, expresión de género, identidad de género y orientación sexual, acorde con lo expuesto en la Resolución 2138 de 2023 del Ministerio de Salud y Protección Social, por la cual se adoptan los lineamientos de transversalización del enfoque de género. Sin embargo, en el presente componente, se hace alusión a las mismas de forma resumida, con el objetivo de afianzar dicho conocimiento.
              .col.mb-3.mb-sm-0
                a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank" type="application/pdf")
                  span Descargar 
                  i.fas.fa-file-download
      .tarjeta.p-5.mb-5(style="background-color: #423755")
        p.mb-0.text-white  En el marco de la adopción de los lineamientos de transversalización del enfoque de género, se define la identidad de género como #[span.color-acento.fw-normal “vivencia individual y personal, independiente del sexo con el que nació. Incluye la vivencia personal del cuerpo, que puede o no involucrar transformaciones corporales escogidas libremente”].
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
          p #[b(style="color: #0F5FFE ") La orientación sexual] se entiende como #[b(style="color: #0F5FFE ") “la atracción sexual, afectiva y erótica que una persona siente hacia otras de su mismo género, del género opuesto, de ambos géneros o hacia ninguna persona”], permitiendo relaciones afectivas y sexuales con estas personas. Igualmente, se incorpora la definición de sexo, que corresponde a las características genéticas, endocrinas y morfológicas, e incluye las categorías de hombre, mujer e intersexualidad. 
          .tarjeta.p-5.mb-5(style="background-color: #423755")
            .row.justify-content-center.align-items-center
              .col-lg-2.mb-lg-0.mb-3.col-7: img(src='@/assets/curso/temas/25.svg', alt='')
              .col-lg-10
                p.mb-0.text-white Esta última se refiere a una variación orgánica en la que el desarrollo del sexo cromosómico, gonadal o anatómico no coincide con los dos sexos tradicionalmente asignados.
        .col-lg-6.col-7: img(src='@/assets/curso/temas/26.png', alt='')

      .bg-2-1.mn.py-lg-0.mb-4
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.col-7: img(src='@/assets/curso/temas/27.svg', alt='')
          .col-lg-8
            .tarjeta.overflow-hidden(style="background-color: #bad1ff ").mb-3
              .row.justify-content-center
                .col-lg-4
                  .p-4.h-100.d-flex(style="background-color: #5b92fe ")
                    h4.text-white.m-auto Masculino, femenino, cisgénero, transgénero
                .col-lg-8.d-flex
                  .p-4.d-flex
                    p.m-auto Transgénero: transexuales, travestis y transformistas.
            .tarjeta.overflow-hidden(style="background-color: #bad1ff ").mb-3
              .row.justify-content-center
                .col-lg-4
                  .p-4.h-100.d-flex(style="background-color: #5b92fe ")
                    h4.text-white.m-auto Género fluido
                .col-lg-8.d-flex
                  .p-4.d-flex
                    p.m-auto La identidad de género es dinámica, la cual puede ser ubicada desde lo masculino un tiempo y después desde lo femenino o viceversa.
            .tarjeta.overflow-hidden(style="background-color: #bad1ff ").mb-3
              .row.justify-content-center
                .col-lg-4
                  .p-4.h-100.d-flex(style="background-color: #5b92fe ")
                    h4.text-white.m-auto Queer
                .col-lg-8.d-flex
                  .p-4.d-flex
                    p.m-auto Identidad de género diferente a cisgénero.
            .tarjeta.overflow-hidden(style="background-color: #bad1ff ").mb-3
              .row.justify-content-center
                .col-lg-4
                  .p-4.h-100.d-flex(style="background-color: #5b92fe ")
                    h4.text-white.m-auto +
                .col-lg-8.d-flex
                  .p-4.d-flex
                    p.m-auto Otras identidades de género.
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 2. 
        span Resumen de la clasificación de Orientaciones sexuales. 
      .bg-2-2.p-4.mb-5
        .row.justify-content-center.mb-5
          .col-lg-8(data-aos="zoom-in"): img(src='@/assets/curso/temas/28.svg', alt='')
      p.mb-5(data-aos='fade-right') Comprender en profundidad las características de esta clasificación es crucial para adoptar de manera objetiva los enfoques que se revisarán en este componente. Esto permitirá ajustar o modificar las prácticas y comportamientos en la atención sanitaria que no estén alineados con la garantía de derechos, dentro del marco de la diversidad de género y orientación sexual. 
      .mn.py-lg-0.mb-5(style="background-color: #423755 ")
        .row.justify-content-center.align-items-center
          .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/29.svg', alt='') 
          .col-lg-7(data-aos="fade-left")
            p.text-white Este fortalecimiento en la garantía de derechos se expandirá en el Componente 3, donde se revisarán las pautas de atención hacia la población LGBTIQ+ y aquellas con orientaciones sexuales e identidades de género no hegemónicas. Se tomarán en cuenta el modelo de atención afirmativo, la humanización de la atención y las recomendaciones para un enfoque de derechos y no discriminación en la atención.

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
