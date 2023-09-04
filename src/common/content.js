export const home = {
  topContainer: {
    title: "La app multiservicios N.º 1 del Perú",
    paragraph:
      "Contrata especialistas verificados y confiables para resolver tus tareas del hogar.",
    downloadButton: "Descarga la app",
    reservaButton: "Reserva tus servicios",
    image: "assets/images/update/mockup_top.webp",
  },
  howToUse: {
    title: "Encuentra al experto ideal para ti",
    steps: [
      {
        icon: "assets/images/update/descarga.png",
        paragraph: "Descarga la app",
      },
      {
        icon: "assets/images/update/selecciona.png",
        paragraph: "Selecciona tu servicio",
      },
      {
        icon: "assets/images/update/programalo.png",
        paragraph: "Programa tu servicio",
      },
      {
        icon: "assets/images/update/paga.png",
        paragraph: "Paga y disfruta",
      },
    ],
  },
  services: {
    title: "Servicios",
    paragraph:
      "¡Decide reservar o programar tu servicio según tu conveniencia y la opción de pago que prefieras!",
    serviceList: [
      {
        icon: "fa-solid fa-broom",
        name: "Limpieza",
      },
      {
        icon: "fa-solid fa-shield",
        name: "Seguridad",
      },
      {
        icon: "fa-solid fa-tooth",
        name: "Odontología",
      },
      {
        icon: "fa-solid fa-person",
        name: "Conserje",
      },
    ],
    button: "Descubre más",
  },
  users: {
    title:
      "¿Estás preparado para descubrir una APP que te facilitará el día a día?",
    paragraph:
      "Miles de peruanos están solicitando a sus especialistas, tú no te quedes atrás.",
  },
  especialistasCommentsSection: {
    title: "Porque nos gusta leerlos...",
    paragraph:
      "Estos son algunos de los comentarios que nos dejan nuestros usuarios.",
    comments: [
      {
        name: "María B.",
        photo: "assets/images/especialistas/especialista1.jpeg",
        comment:
          "Libertad total para elegir proyectos y horarios, ¡mis ingresos aumentaron notablemente!",
        rate: 5,
      },
      {
        name: "Oscar G.",
        photo: "assets/images/especialistas/especialista2.jpeg",
        comment:
          "Plataforma eficiente que potenció mis habilidades y generó ganancias adicionales significativas.",
        rate: 5,
      },
      {
        name: "Kevin S.",
        photo: "assets/images/especialistas/especialista3.jpeg",
        comment:
          "Flexibilidad y demanda constante de trabajos, excelente aliado para ingresos extras satisfactorios.",
        rate: 5,
      },
      {
        name: "Wilfredo P.",
        photo: "assets/images/especialistas/especialista4.jpeg",
        comment:
          "Como freelancer, esta app marcó la diferencia al permitirme monetizar con mis habilidades cómodamente.",
        rate: 5,
      },
    ],
  },
  downloadSection: {
    headingDownload: "¿Listo para probar Tiims?",
    paragraphDownload: "Optimiza tu día a día",
  },
};

export const especialistas = {
  topContainer: {
    title: "TRABAJA CON TIIMS",
    paragraph: "Gana más de S/ 2,400 al mes, trabajando en tus tiempos libres.",
    downloadButton: "Descarga la app",
    image: "assets/images/update/especialista_top.webp",
  },
  requirements: {
    title: "Sé parte de la comunidad de especialistas",
    paragraph: "Requisitos para tu registro como especialista",
    titleRequirements: "Documentación",
    requirements: [
      "Tu número de DNI.",
      "Tu dirección de domicilio.",
      "Tu número de celular.",
      "Tu ocupación actual.",
      "Subir tu curriculum vitae.",
      "Subir tu certijoven.",
      "Prueba de confiabilidad de acuerdo a servicios seleccionados.",
      // "Sube una imagen que muestre tu DNI por ambos lados.",
      // "Sube tu Certificado Único Laboral CertiJoven o CertiAdulto según sea el caso.",
      // "Sube tu recibo de luz o agua.",
      // "Carga tu CV actualizado (opcional).",
      // "Reserva tu cita para pasar el proceso de poligrafía.",
    ],
  },
  payment: {
    title: "Métodos de pago",
    methods: [
      {
        icon: "https://seeklogo.com/images/Y/yape-app-logo-1FD46D1120-seeklogo.com.png",
        paragraph: "Yape",
      },
      {
        icon: "https://seeklogo.com/images/P/plin-logo-967A4AF583-seeklogo.com.png",
        paragraph: "Plin",
      },
      {
        icon: "https://static.vecteezy.com/system/resources/previews/011/660/689/original/3d-money-icon-illustration-png.png",
        paragraph: "Efectivo",
      },
      {
        icon: "https://static.vecteezy.com/system/resources/previews/009/338/810/original/3d-illustration-credit-card-png.png",
        paragraph: "Cuenta bancaria",
      },
    ],
  },
  downloadSection: {
    headingDownload: "¿Listo para empezar a ganar dinero?",
    paragraphDownload: "Conviértete en un especialista",
  },
};

const features90 = [
  "Entrevista preselección",
  "Entrevista preempleo",
  "Datos personales",
  "Verificación laboral",
  "Verificación social",
];
const features180 = [
  ...features90,
  "Entrevista psicológica",
  "Psicolaboral predictiva",
  "Psicolaboral proyectiva",
  "Psicolaboral conductual",
];
const features360 = [
  ...features180,
  "Verificación domiciliaria",
  "Verificación académica",
  "Verificación crediticia",
  "Psicolaboral cognitiva",
  "Poligrafía",
];

export const company = {
  topContainer: {
    title: "Encuentra a tu colaborador ideal en 24 horas*",
    paragraph:
      "Encarga el riguroso proceso de selección de su personal a Tiims.",
    downloadButton: "Comencemos",
  },
  mapa: {
    title: "Nuestras alianzas en reclutamiento",
  },

  planes: {
    90: {
      name: "Selección 90",
      price: "899",
      features: features90,
    },
    180: {
      name: "Selección 180",
      price: "1599",
      features: features180,
    },
    360: {
      name: "Selección 360",
      price: "1999",
      features: features360,
    },
  },
};

export const aboutUs = {
  whatWeDo: {
    title: "Juntos Creamos Soluciones",
    paragraph:
      "Nos unimos como comunidad en Tiims para abordar desafíos diarios. Desde conectar a jóvenes con servicios esenciales hasta brindar a los especialistas la oportunidad de compartir sus habilidades, colaboramos para construir un entorno donde las soluciones fluyen. Nuestra plataforma es el lienzo donde la innovación y la confianza convergen, creando un impacto significativo en la vida de todos los involucrados. Estos son algunos de nuestros objetivos para nuestros clientes:",
    paragraphs: [
      "Ayudar con su agenda ocupada. Simplificamos la vida al conectar a los usuarios con servicios esenciales en su horario conveniente, eliminando la preocupación por tareas domésticas y mejorando la calidad de vida.",
      "Empleo flexible. Ofrecemos a los especialistas la oportunidad de trabajar de acuerdo a sus habilidades y horarios, brindándoles una fuente confiable de ingresos y empoderamiento.",
      "Seguridad y confianza. Nuestro riguroso proceso de selección y verificación garantiza que los servicios sean proporcionados por especialistas confiables, generando tranquilidad y satisfacción para los usuarios.",
    ],
  },
  middleContainer: {
    title: "Tecnología y Conexiones: Nuestro Modelo de Operación",
    paragraph:
      "Nuestro modelo de operación se basa en la sinergia entre personas y tecnología. Proporcionamos una plataforma intuitiva que conecta a usuarios con especialistas confiables y servicios esenciales. Esta interacción fluida y segura impulsa nuestra misión de mejorar la vida cotidiana para todos.",
  },
  ourSpecialization: {
    title: "Seguridad y Bienestar",
    slogan: "Nuestra Especialización",
    paragraph:
      "En el año 2023, nació Tiims con la visión de simplificar la vida y generar oportunidades. Inspirados por la seguridad y el bienestar de nuestros clientes, creamos una plataforma que refleja nuestro compromiso en cada conexión, asegurando confianza y tranquilidad en cada servicio.",
  },
  mission: [
    {
      icon: "fa-solid fa-building-flag",
      name: "Misión",
      paragraph:
        "Nuestra misión en Tiims es brindar una plataforma innovadora que conecta a individuos con servicios esenciales y oportunidades laborales. Nos esforzamos por simplificar la vida cotidiana al fomentar conexiones confiables y flexibles entre clientes y especialistas.",
    },
    {
      icon: "fa-solid fa-eye",
      name: "Visión",
      paragraph:
        "En Tiims, aspiramos a ser la primera elección para quienes buscan soluciones y oportunidades en servicios esenciales. Buscamos crear una comunidad de confianza donde las personas puedan colaborar y prosperar, impulsados por la conveniencia y la calidad.",
    },
  ],

  ownersComments: [
    {
      photo: "assets/images/us/ceo.png",
      comment:
        "Estoy orgulloso de liderar una empresa que revoluciona la forma en que las personas acceden a servicios y oportunidades laborales. Nuestro enfoque en la innovación, la confianza y la comunidad está cambiando positivamente la vida de individuos y especialistas en toda nuestra plataforma.",
      name: "Adrián Vásquez",
      cargo: "CEO at Tiims",
    },
    {
      photo: "assets/images/us/programmer.png",
      comment:
        "Codificar cada función significó brindar a individuos el control de sus ingresos. Saber que nuestras líneas de código generan oportunidades monetarias y profesionales es increíblemente gratificante.",
      name: "Juan Carlos Molero",
      cargo: "DEVELOPER",
    },
    {
      photo: "assets/images/us/marketing.png",
      comment:
        "Nuestra estrategia comunicó con éxito cómo la aplicación puede transformar tiempos libres en ingresos sustanciales. Ver cómo las empresas adoptan esta solución y prosperan es nuestra mayor recompensa.",
      name: "María Cortez",
      cargo: "Growth Marketing",
    },
    {
      photo: "assets/images/us/marketing-manager.png",
      comment:
        "Dirigir esta innovadora plataforma es un honor. Conectamos talentos especializados con aquellos que necesitan su ayuda, generando ingresos adicionales y resolviendo problemas diarios. Mi visión es seguir transformando vidas a través de esta comunidad única.",
      name: "Cheke Merino",
      cargo: "Marketing Manager",
    },
    {
      photo: "assets/images/us/ventas.png",
      comment:
        "Conectamos con diversas empresas y fuimos testigos de cómo la aplicación revolucionó su flexibilidad financiera. Nuestro trabajo se traduce en crecimiento económico real y clientes satisfechos.",
      name: "Fabiana Rodriguez",
      cargo: "Sales Manager",
    },
    {
      photo: "assets/images/us/seleccion.png",
      comment:
        "Guiar los sueños profesionales es mi pasión. Seleccionamos mentes brillantes que potencian nuestra misión: brindar ingresos y soluciones. Estoy orgullosa de construir equipos que impulsan el cambio y el éxito.",
      name: "Graciela Rivera",
      cargo: "Seleccion y reclutamiento",
    },
  ],
};
