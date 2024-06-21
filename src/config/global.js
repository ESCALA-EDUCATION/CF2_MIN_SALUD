export default {
  global: {
    componenteFormativo:
      'Enfoques en la atención en salud a las personas de los sectores LGBTIQ+ y con orientaciones sexuales e identidades de género diversas.',
    descripcionCurso:
      'En este componente se realizará una amplia descripción de los enfoques que deben considerarse en el proceso de atención para todas las personas de los sectores LGBTIQ+ y orientaciones sexuales e identidades de género no hegemónicas. El objetivo principal de estos enfoques es favorecer la equidad, igualdad y garantía de los derechos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/interno.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/temas/a1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/temas/a2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/temas/a3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        subTitulo: 'Introducción',
        img: require('@/assets/curso/p1.png'),
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Definiciones asociadas con la discriminación',
        subTitulo: '1. Definiciones asociadas con la discriminación',
        img: require('@/assets/curso/p2.png'),
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diversidad: conceptos',
        subTitulo: '2. Diversidad: conceptos',
        img: require('@/assets/curso/p3.png'),
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Garantía de la dignidad humana: principios',
        subTitulo: '3. Garantía de la dignidad humana: principios',
        img: require('@/assets/curso/p4.png'),
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Enfoques: concepto, origen, tipos, alcance, características',
        subTitulo:
          '4. Enfoques: concepto, origen, tipos, alcance, características',
        img: require('@/assets/curso/p5.png'),
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        subTitulo: 'Síntesis',
        desarrolloContenidos: false,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Resolución 2367. (2023). Por la cual se modifican los artículos 1, 2 y 3 de la Resolución 1035 de 2022 y los capítulos 3, 4, 5, 6, 8, 9, 10 y 11 del anexo técnico "Plan Decenal de Salud Pública 2022-2031" (29 de diciembre de 2023).',
    },
    {
      referencia:
        'Estay, G. F., Valenzuela, V. A., & Cartes, V. R. (2020). Atención en salud de personas LGBT+: Perspectivas desde la comunidad local penquista. Revista Chilena de Obstetricia y Ginecología, 85(4), 351-357',
      link: 'https://dx.doi.org/10.4067/S0717-75262020000400351',
    },
    {
      referencia:
        'Fondo de Población de las Naciones Unidas - UNFPA – Colombia. (2019). Lineamientos de Atención en los Servicios de Salud que Consideran el Enfoque Diferencial, de Género y No Discriminación para Personas LGBTI. 1 de octubre de 2019.',
    },
    {
      referencia:
        'Decreto 762 de 2018. (2018). Por el cual se adiciona un capítulo al Título 4 a la Parte 4, del Libro 2, del Decreto 1066 de 2015, Único Reglamentario del Sector Interior, para adoptar la Política Pública para la garantía del ejercicio efectivo de los derechos de las personas que hacen parte de los sectores sociales LGBTI y de personas con orientaciones sexuales e identidades de género diversas (7 de mayo de 2018). D.O. 50.586.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social, Profamilia, Organización Internacional para las Migraciones – OIM, Fondo de Población de las Naciones Unidas – UNFPA. Política Nacional de Derechos Sexuales y Derechos Reproductivos – PNSDSDR.',
    },
    {
      referencia:
        'Comisión Interamericana de Derechos Humanos. (2015). Violencia contra personas lesbianas, gay, bisexuales, trans e intersex en América. OAS/Ser.L/V/II.rev.2 Doc. 36, 12 de noviembre de 2015. Original: inglés.',
    },
    {
      referencia:
        'Guzmán, F., & Arias, C. A. (2012). Buena fe y principio de confianza en medicina. Revista Colombiana de Cirugía, 27(3), 192-195. Recuperado el 11 de febrero de 2024, de ',
      link:
        'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S2011-75822012000300003&lng=en&tlng=es',
    },
    {
      referencia:
        'Roughgarden, J. (Director). (2008). Sexual Diversity in the Animal Kingdom.',
    },
    {
      referencia:
        'Narro-Robles, J., Rodríguez-Domínguez, J., Viesca-Treviño, C., & Abreu-Hernández, L. F. (2004). Ética y salud: Retos y reflexiones. Gaceta Médica de México, 140(6), 661-666. Recuperado el 19 de enero de 2024, de',
      link:
        'http://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0016-38132004000600017&lng=es&tlng=es',
    },
    {
      referencia:
        'Marquiegui, A. (1997). Nuevos paradigmas en educación y el proyecto "Plantel". Docencia, Investigación y Extensión, 1(1), 13-25.',
    },
    {
      referencia:
        'Ruiz Bolívar, C. (1997). Paradigmas emergentes en investigación. Memorias de la 2da Jornada de Investigadores Junior (Maracay, 09 y 10 de julio), 11-17.',
    },
    {
      referencia:
        'Rivas Balboa, C. (1996). Un nuevo paradigma en educación y formación de recurso humanos. Cuadernos Lagoven Nro. 99. Caracas: Departamento de Asuntos Públicos de LAGOVEN.',
    },
  ],
  glosario: [
    {
      termino: 'Bifobia (Biphobia) (sust.)',
      significado:
        'miedo, la discriminación o el odio hacia las personas bisexuales o hacia quienes son percibidos como tal.',
    },
    {
      termino: 'Binarismo de género (Gender binary structure) (sust.)',
      significado:
        'contempla sólo la existencia de dos géneros, niño/hombre/masculino y niña/mujer/femenino, y de que una persona tiene que encajar estrictamente en una de las dos categorías.',
    },
    {
      termino:
        'Cirugía de afirmación de género (Gender affirming surgery, GAS) (sust)',
      significado:
        'procedimientos quirúrgicos usados para modificar el cuerpo y volverlo más acorde con la identidad individual de género. También es conocida como cirugía de reasignación de sexo (sex reassignment surgery, SRS) o cirugía de confirmación de género (gender confirming surgery, GCS).',
    },
    {
      termino: 'Cisgénero (Cisgender) (adj.)',
      significado:
        'término que designa a la persona en la que el sexo de nacimiento encaja exactamente con su identidad sexual (es decir, una persona que no sea transgénero).',
    },
    {
      termino: 'No binario (Non-binary) (adj.)',
      significado:
        'detalle a una persona cuya identidad de género no encaja con la estructura tradicional de género binario.',
    },
    {
      termino: 'Outing (Outing) (sust.)',
      significado:
        'es la acción de hacer pública o develar la orientación sexual o identidad de género de otra persona, “sacarla del clóset” involuntariamente o sin su consentimiento.',
    },
    {
      termino: 'Pangénero (Pangender) (adj.)',
      significado:
        'describe a una persona que se identifica con muchos géneros.',
    },
    {
      termino: 'Pansexual (Pansexual) (adj.)',
      significado:
        'una orientación sexual que describe a una persona que siente atracción sexual y emocional hacia otras personas, independientemente de sus géneros.',
    },
    {
      termino: 'Poliamoroso (Polyamorous) (adj.)',
      significado:
        'persona que ha estado o está abierta a la posibilidad de tener más de una relación romántica o sexual a la vez; con el conocimiento y consentimiento de todos los involucrados. A veces abreviado como “poli”.',
    },
    {
      termino: 'Rol de género (Gender role) (sust.)',
      significado:
        'grupo de normas sociales que dictaminan los tipos de comportamiento que generalmente se consideran aceptables, apropiados o deseados para una persona según su sexo real o percibido.',
    },
    {
      termino: 'Salir del clóset (Coming out) (sust.)',
      significado:
        'proceso por el cual una persona acepta y/o logra identificar su propia orientación sexual o identidad de género. También el proceso por el cual una persona expresa a otros (a sus amigos, etc.) su orientación sexual o identidad de género.',
    },
    {
      termino: 'Sexo asignado al nacer (Assigned sex at birth) (sust.)',
      significado:
        'es el enfoque de orientado a la precaución que se aplica a la gestión del riesgo, en el marco de la evaluación de los procedimientos y la prestación de los servicios de salud.',
    },
    {
      termino: 'Transfemenino (Transfeminine) (adj.)',
      significado:
        'describe a quienes se les asignó el sexo masculino al nacer, pero que se identifican con la femineidad más que con la masculinidad.',
    },
    {
      termino: 'Transición (Transition) (sust.)',
      significado:
        'para las personas transgénero, este término se refiere al proceso de reconocer, aceptar y expresar la propia identidad de género. También se refiere al periodo en que la persona hace cambios sociales, legales o médicos; como por ejemplo cambio en la manera de vestirse, su nombre o designación de sexo, así como el uso de intervenciones médicas. Algunas veces referido como proceso de afirmación de género.',
    },
    {
      termino:
        'Trastornos del desarrollo sexual (Disorders of sex development, DSD) (sust.)',
      significado:
        'representan un grupo de enfermedades poco frecuentes en donde los órganos reproductivos no se desarrollan como se espera. Algunos de estos incluyen el síndrome de Klinefelter y el síndrome de insensibilidad androgénica. Algunas veces se les llaman diferencias del desarrollo sexual. Algunas personas prefieren usar el término intersexual.',
    },
  ],
  complementario: [
    {
      tema:
        '1. Sustentación de los diversos enfoques para tener en cuenta en el proceso de atención en salud a la población de los sectores LGBTIQ+ y con      orientaciones sexuales e identidades de género no hegemónicas.',
      referencia:
        'Resolución 2138, Por la cual se adoptan los lineamientos de transversalización del enfoque de género en el sector salud para el cierre de brechas por razones de sexo, género, identidad de género y orientación sexual. (19 diciembre de 2023).',
      tipo: 'Norma',
      link:
        'https://www.cerlatam.com/normatividad/minsalud-resolucion-2138-de-2023/',
    },
    {
      tema:
        '1. Sustentación de los diversos enfoques para tener en cuenta en el proceso de atención en salud a la población de los sectores LGBTIQ+ y con orientaciones sexuales e identidades de género no hegemónicas.',
      referencia:
        'Lineamientos de Atención en los Servicios de Salud que Consideran el Enfoque Diferencial, de Género y No Discriminación para Personas LGBTI. Fondo de Población de las Naciones Unidas - UNFPA – Colombia. 1 octubre de 2019.',
      tipo: 'Documento',
      link:
        'https://colombia.unfpa.org/es/publications/lineamientos-atencion-servicios-salud-enfoque-genero',
    },
    {
      tema:
        '1. Sustentación de los diversos enfoques para tener en cuenta en el proceso de atención en salud a la población de los sectores LGBTIQ+ y con orientaciones sexuales e identidades de género no hegemónicas.',
      referencia:
        'Resolución 2367, Por la cual se modifican los artículos 1, 2 y 3 de la Resolución 1035 de 2022 y los capítulos 3, 4, 5, 6, 8, 9, 10 y 11 del anexo técnico "Plan Decenal de Salud Pública 2022-2031". (29 diciembre de 2023).',
      tipo: 'Norma',
      descarga: '/downloads/Resolución_No_2367_de_2023.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
