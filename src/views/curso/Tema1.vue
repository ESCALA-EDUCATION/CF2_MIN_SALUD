<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.py-4
    .titulo-principal
      .titulo-principal__numero
        span
          | 1
      h1 Definiciones asociadas con la discriminación
    .mn(style="background-color: #e9fcf6 ")
      .row.justify-content-center.align-items-center
        .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
          p.mb-0 En la primera parte del curso, se describen barreras culturales que afectan el acceso efectivo a los servicios de salud, incluyendo términos y actitudes discriminatorias vinculadas a valores, creencias y supuestos. Entre estos conceptos se encuentran #[b(style='color: #0F5FFE') los Sesgos, paradigmas, prejuicio, estereotipos, estigmas, que son barreras conducentes a discriminación.] Para entender mejor estos términos, se proporcionarán definiciones claras.      
        .col-lg-4(data-aos="fade-left"): img(src='@/assets/curso/temas/6b.svg', alt='')
    .bg-1.mn
      .tarjeta.overflow-hidden.p-lg-0.p-3(style="background-color: #423755").d-flex.mb-5
        .row.justify-content-center
          .col-lg-4.col-7.mb-lg-0.mb-3
            img(src='@/assets/curso/temas/7.png', alt='')
          .col-lg-8
            .p-4.text-white
              h4 El sesgo 
              p.mb-0 Es definido  como la orientación o tendencia previamente establecida por el aprendizaje a lo largo de la vida hacia la toma de acción o decisión. Funcionan como atajos que ahorran tiempo al momento de evaluar una situación, pero pueden estar deformando la percepción de los hechos, incluso sin que nos demos cuenta. En la sociedad actual pueden existir sesgos basados en el género, la etnia, la raza, el ciclo de vida (edad), la procedencia de las personas, entre otros. Los sesgos pueden ser explícitos o implícitos.
      .row.justify-content-center.mb-5
        .col-lg-5.mb-lg-0.mb-3(data-aos="fade-right")
          .d-flex.align-items-center.p-3(style="border-bottom: 1px solid #12263F")
            img.me-3(src='@/assets/curso/temas/8.svg', alt='' style="width: 84px")
            p.mb-4 #[b Sesgo explícito:] son los sentimientos, comportamientos y estereotipos dirigidos a grupos sociales e individuos que parten del aprendizaje individual y la persona es consciente de ellos.   
        .col-lg-5(data-aos="fade-left")
          .d-flex.align-items-center.p-3(style="border-bottom: 1px solid #12263F")
            img.me-3(src='@/assets/curso/temas/9.svg', alt='' style="width: 84px")
            p.mb-0 #[b Sesgo implícito:] son los sentimientos, comportamientos y estereotipos dirigidos hacia grupos sociales e individuos, con la diferencia que son inconscientes y se observan en el comportamiento del ser humano.
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
          h5.mb-4(style='color: #0F5FFE') Ejemplos
          p.mb-4 #[strong Sesgo de género respecto a la salud reproductiva.]
            br
            |“No hay cultura para las mujeres lesbianas, a mí nunca me han entregado un condón para mujer, nunca se habló sobre el cuidado de las ITS (Infección de transmisión sexual) para relaciones con mujeres, es todo muy heteronormado”.
          //h5.mb-3(style='color: #0F5FFE') Ejemplo
          p.mb-0 #[strong Sesgo de identidad de género.]
            br
            |Existe la creencia errónea, según la cual, todas las personas trans desean la realización de procedimientos quirúrgicos en sus genitales (por ejemplo: vaginoplastia en el caso de las mujeres trans y faloplastia en el caso de los hombres trans). La realidad es que hay personas trans que desean este procedimiento y otras que no, lo que no excluye la realización de otro tipo de intervenciones de acuerdo con su autonomía, proceso y valoración de riesgo/beneficio.  
        .col-lg-4.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/10b.png', alt='')
      .mn.py-0.mb-5(style="background-color: #3c1c74") 
        .row.justify-content-center.align-items-center
          .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/11.svg', alt='')
          .col-lg-7(data-aos="fade-left")
            .p-4.text-white
              h4 El estereotipo
              p.mb-3 Se refiere a las ideas preconcebidas o creencias generalizadas sobre los atributos, roles o actitudes que tienen ciertos grupos de personas. Los estereotipos de género hacen referencia a las ideas preconcebidas sobre cómo debe ser, verse o comportarse un hombre y cómo debe ser, verse o comportarse una mujer. Estos son perjudiciales cuando limitan la capacidad de las personas para expresarse, construir sus proyectos de vida o tomar decisiones.
                
              p.mb-0 #[strong Ejemplo]  Si es enfermero, es gay, póngale la firma.        
              p #[strong Ejemplo]  Dicen que es lesbiana, pero ¡yo la veo muy femenina!  

      .tarjeta.p-5(style="background-color: #423755 ").mb-4 
        .text-white
          h4 El paradigma
          p.mb-5 Establece un conjunto de saberes y valores a los que un grupo de personas se adhiere, en algunos casos de manera inconsciente o no explícita. Un paradigma funciona como un modelo que sirve para explicar lo que ocurre en el mundo, por lo que incide de forma directa en la manera en que se interpreta la experiencia cotidiana, cómo se produce el conocimiento y cómo se actúa a partir de todo lo anterior.
          .row.justify-content-center
            .col-lg-4.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/12.png', alt='')
            .col-lg-8(data-aos="fade-left")
              p.mb-4 #[b Ejemplo]
                br
                br
                |Paradigma que considera al cuerpo masculino (de hombres cisgénero) como la referencia para la producción de conocimiento en salud, por ejemplo, en los ensayos clínicos de nuevos fármacos. Esto significa que la información disponible sobre dosis y posibles efectos secundarios que tienen este tipo de tecnologías en el resto de las corporalidades suele ser desconocida y poco monitoreada (mujeres cisgénero, mujeres trans, hombres trans, personas intersex).
              p.mb-0 #[b Ejemplo]
                br
                br
                |Los colectivos de personas intersexuales alrededor del mundo han denunciado que la realización de cirugías de reconstrucción genital realizadas a temprana edad y, sin su consentimiento ha traído efectos devastadores. Estas intervenciones se han enmarcado, muchas veces, en el paradigma que dicta que 'lo biológico' (en sus aspectos medibles y observables) es mucho más importante que todos los demás aspectos, incluida la voluntad y el consentimiento de la persona.
      h4.mb-3 El prejuicio 
      p.mb-5(data-aos='fade-right') El prejuicio es un juicio u opinión que se forma sin el conocimiento necesario o contacto real respecto a quien o a lo que se forma. El prejuicio es generalmente negativo, no necesita evidencias y es la antesala de la discriminación.  El prejuicio puede tener varios componentes como lo son el cognitivo (creencias), afectivo (emociones) y comportamental (conducta). Es importante manifestar que, aunque existe cierta correlación entre ellos, estos tres componentes pueden presentarse de manera independiente      implicando medidas diferentes (Brigham, 1971, Psychol Bull 76:15-38.). Durante la prestación del servicio, el talento humano puede evidenciar prejuicios, ignorando la diversidad y las desigualdades de género.
      h4.mb-3(style="color: #0F5FFE ") Ejemplo 
      p.mb-5(data-aos='fade-right') Prejuicios en torno a la orientación sexual y la identidad de género:
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
          .acordion-modificado 
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--acc rounded-0")
              div(titulo="Las personas bisexuales están confundidas acerca de su orientación sexual.")
                p.mb-0 #[b Nota aclaratoria:] la bisexualidad es una orientación sexual tan válida como cualquier otra. Aunque la existencia de ésta sigue estando cuestionada desde el prejuicio, las cifras muestran otra cosa: “Según Gallup, un 54,6% de los adultos LGBT+ en EE.UU. se identifica como bisexual”, en México “un 51,7% de la población LGTB+ se identifica como bisexual”. 
            
              div(titulo="La transexualidad es considerada una enfermedad mental.")
                p.mb-0 #[b Nota aclaratoria:] la Organización Mundial de la Salud (OMS) excluyó la transexualidad de la lista de trastornos mentales en junio de 2018. Ahora es parte de la Clasificación Internacional de Enfermedades (CIE) como condiciones relativas a la salud sexual.
            
              div(titulo="La transexualidad es una elección/opción/capricho.")
                p.mb-0 #[b Nota aclaratoria:] las personas trans perciben que su identidad de género no tiene correspondencia con su cuerpo sexuado. Por esta razón, pueden llegar a realizar cambios físicos y jurídicos para que se les trate acorde con el sexo con el que se identifican.
            
              div(titulo="Todas las personas transexuales son heterosexuales.")
                p.mb-0 #[b Nota aclaratoria:] la orientación sexual y la identidad de género son conceptos distintos. Una persona cisgénero puede ser lesbiana, gay o bisexual, igual que una persona transexual.
        .col-lg-4.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/13b.png', alt='')
      h4.mb-3 El estigma
      p.mb-5(data-aos='fade-right') Es el proceso mediante el cual un conjunto de rasgos, características o cualidades son utilizados para argumentar o legitimar la exclusión social a la cual son sometidas las personas. El estigma impone una especie de marca de deshonra a personas que presentan alguna característica considerada indeseable por un grupo social y, se usa como justificación para el rechazo y la segregación.
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
          h4(style="color: #0F5FFE ") Ejemplo 
          p.mb-4 Un hombre homosexual seguramente es VIH positivo y debe ser únicamente atendido en una institución que se ocupe de ese tipo de personas.
          .tarjeta.p-5(style="background-color: #d5e3ff")
            p.mb-2 #[b Nota aclaratoria:] 
            p #[b(style="color: #0F5FFE ") La orientación sexual] no predice el estatus serológico de una persona. Por otro lado, en caso de tratarse de una persona VIH positiva, no se le puede excluir de la oferta de servicios debido a su diagnóstico, ya que esto correspondería a un trato degradante que obedecería a una sanción moral y no a un criterio técnico de seguridad para pacientes o profesionales de la salud.
        .col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/14.png', alt='')
      p.mb-5(data-aos='fade-right') #[b(style="color: #0F5FFE ") Los sesgos, paradigmas, estereotipos, estigmas y prejuicios] , aunque son mecanismos diferentes, se mezclan y funcionan conjuntamente en el día a día de la sociedad, provocando distinción, exclusión, restricción o preferencia, y generando discriminación de manera consciente o inconsciente. Esta discriminación ocurre cuando:
      .bg-1-1.mn.mb-4
        .row.justify-content-center.mb-5
          .col-lg-7.mb-lg-0.mb-3
            .tarjeta.tarjeta-citas.h-100.p-5.d-flex.align-items-center(style="background-color: #d0daf0 ")
              p.mb-0.fst-italic “Se le trata de manera menos favorable en comparación con otros o si se lo acosa por la forma en como se ve, de dónde viene, lo que cree o por otras razones. Se le puede negar el acceso equitativo al trabajo, la vivienda, la atención médica, la educación, el matrimonio o la vida familiar, la policía o el sistema de justicia, tiendas, restaurantes o cualquier otro servicio u oportunidad”. 
                br
                br
                | #[span(style="color: #0F5FFE ") Oficina del Alto Comisionado de Naciones Unidas para los Derechos Humanos (OACNUDH). ]  
          .col-lg-5.col-7: img(src='@/assets/curso/temas/15.png', alt='')
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 5.
        span Categorías sociales que pueden activar estereotipos y prejuicios. 
      .bg-1-2.mn.py-0.mb-4
        .row.justify-content-center.mb-5
          .col-lg-7.col-9.mb-lg-0.mb-1(data-aos="fade-right"): img.m-5(src='@/assets/curso/temas/17.svg', alt='')
          .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img.m-5.d-none.d-lg-block(src='@/assets/curso/temas/16.svg', alt='')
      
      .bg-actividad-full.mn.mb-5
        .tarjeta.p-4.mb-0
          .row.justify-content-center.align-items-center.align-items-lg-stretch
            .col-6.col-md-4.col-lg-3.mb-md-0
              .tarjeta.h-100.d-flex.align-items-center.p-4
                figure
                  img(src="@/assets/curso/icon_actividad2.svg", alt="", style="max-width: 221px")
            .col-12.col-md-8.col-lg-9
              h2.txt-color-primario Actividad didáctica 1
              h3 Estigmas y estereotipos en la sociedad
              p.mb-4 Fomentar una comprensión sobre conceptos críticos como sesgos, paradigmas, prejuicios y estereotipos, y su impacto en la percepción social hacia individuos y grupos.
              .tarjeta.bg-white.p-3
                .row.justify-content-around.align-items-center
                  .col-sm.mb-3.mb-sm-0
                    p.fw-bold.mb-0  Relacionar conceptos. 
                  .col-auto
                    a.boton.boton--b(:href="obtenerLink('/actividades/act1/story.html')" target="_blank")
                      span Realizar
                      i.fas.fa-puzzle-piece


      p.mb-5(data-aos='fade-right') El talento humano en salud debe sensibilizarse frente a la presencia de estigmas, estereotipos, prejuicios, paradigmas y sesgos hacia las personas LGBTIQ+ y con orientaciones sexuales e identidades de género no hegemónicas. Esto con el fin de adoptar una posición neutral, serena y enfocada en brindar atención basada en el respeto y cero discriminaciones:
      .mn.py-lg-0(style="background-color: #e9fcf6 ").mb-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
            p.mb-lg-0.mb-5 Tener actitudes afirmativas libres de conceptos preconcebidos hacia las personas LGBTIQ+ y con orientaciones sexuales e identidades de género no hegemónicas, basando toda la atención en salud en comunicación asertiva, imparcialidad, receptividad, entendimiento de las necesidades específicas, responsabilidad, fiabilidad y respeto.
          .col-lg-4.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/19.svg', alt='', style="margin-top: -2rem ")
      .row.justify-content-center.mb-5
        .col-lg-4.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/20.png', alt='')
        .col-lg-8(data-aos="fade-left")
          .tarjeta.p-4.h-100(style="background-color: #423755 ")
            p.mb-0.text-white Crear comportamientos que transformen las diversas barreras generadas a partir de los estigmas, abandonando categorías prejuiciosas y promoviendo la equidad, igualdad y cero discriminación hacia las personas de los sectores LGBTIQ+ y con orientaciones sexuales e identidades de género no hegemónicas. Para superar este tipo de comportamientos, es indispensable conocer las realidades y necesidades de la población LGBTIQ+ y con orientaciones sexuales e identidades de género diversas, y de esta manera, lograr cambiar las ideas preconcebidas sobre esta población. Es decir, para transformar estas prácticas se requiere ser sensible a la situación del otro, pero sobre todo reconocerla y entenderla.

      



  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
