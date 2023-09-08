import AboutUs from "../pages/aboutUs/AboutUs";
import Company from "../pages/company/Company";
import Especialistas from "../pages/especialistas/Especialistas";
import Questions from "../pages/questions/Questions";
import RegistroEspecialista from "../pages/especialistas/registro/RegistroEspecialista";

export const ADMIN_URL = "https://admin.tiims.com.pe";
//export const ADMIN_URL = "http://192.168.1.150:3000";
export const WEBSITE_URL = "https://tiims.com.pe";

export const TOTAL_DOWNLOADS = 110;
export const TOTAL_USERS = 90;
export const TOTAL_PROVIDERS_HIRED = 80;

export const servicesOnDemand = [
  "642c85960aedf208b973c709", //limpieza
  "647f66994d3a8c594919e939", //gasfiteria
  "647f66cb4d3a8c594919e93c", //pintura
  "647f67184d3a8c594919e93f", //albanileria
  "641bd3140b34bd0e036cc4c8", //electricista
  "642da2cb0aedf208b973cc8b", //profesores
  "642d9cce0aedf208b973cc68", //paseo de mascotas
];

export const LINK_USER_GOOGLE_PLAY =
  "https://play.google.com/store/apps/details?id=com.tiims&hl=es_UY";
export const LINK_ESPECIALISTA_GOOGLE_PLAY =
  "https://play.google.com/store/apps/details?id=com.tiims.provider&hl=es_UY";
export const LINK_COMPANY = "https://company.tiims.com.pe/login";

export const especialistasComments = [
  {
    name: "Juan Carlos",
    photo: "https://randomuser.me/api/portraits/men/7.jpg",
    comment:
      "Holauoaeu aouauaou aoeuoa aoeu aou  aoeuouaoeu a oeua oeu aoeu aoeu ",
    rate: 5,
  },
  {
    name: "Juan Carlos",
    photo: "https://randomuser.me/api/portraits/men/13.jpg",
    comment:
      "Duis ad occaecat aliqua proident.Culpa tempor nisi id sit id consequat non nisi.",
    rate: 5,
  },
  {
    name: "Juan Carlos",
    photo: "https://randomuser.me/api/portraits/men/15.jpg",
    comment:
      "Duis ad occaecat aliqua proident.Culpa tempor nisi id sit id consequat non nisi.",
    rate: 5,
  },
  {
    name: "Juan Carlos",
    photo: "https://randomuser.me/api/portraits/men/35.jpg",
    comment: "santoehutsno hasnotehu tnao uhnatohe usntaoheu ntshaoeu",
    rate: 5,
  },
];

export const routes = [
  { name: "Especialistas", path: "/provider", component: Especialistas },
  { name: "Empresas", path: "/empresas", component: Company },
  { name: "Preguntas", path: "/preguntas", component: Questions },
  { name: "Nosotros", path: "/nosotros", component: AboutUs },
];

export const SOCIALS = {
  TIKTOK: "https://www.tiktok.com/@tiims_peru?_t=8eLWKCM6hyX&_r=1",
  // YOUTUBE: "https://youtube.com",
  LINKEDIN: "https://www.linkedin.com/company/tiims/",
  FACEBOOK:
    "https://www.facebook.com/profile.php?id=100091151310015&mibextid=LQQJ4d",
  INSTAGRAM: "https://instagram.com/tiims_peru?igshid=MzRlODBiNWFlZA==",
};

export const footerLinks = {
  legal: {
    name: "Legal",
    links: [
      {
        name: "Términos y Condiciones",
        path: `${ADMIN_URL}/terms.html`,
      },
      {
        name: "Política de privacidad",
        path: `${ADMIN_URL}/privacy.html`,
      },
    ],
  },
  company: {
    name: "Empresas",
    links: [
      {
        name: "Servicios",
        path: "/empresas",
      },
      {
        name: "Reclutamiento",
        path: "/empresas",
      },
    ],
  },
  download: {
    name: "Descargas",
    links: [
      {
        name: "Usuarios",
        path: LINK_USER_GOOGLE_PLAY,
      },
      {
        name: "Especialistas",
        path: LINK_ESPECIALISTA_GOOGLE_PLAY,
      },
    ],
  },
  followUs: {
    name: "Síguenos",
    links: [
      {
        name: "fab fa-facebook-f",
        path: SOCIALS.FACEBOOK,
      },
      {
        name: "fab fa-instagram",
        path: SOCIALS.INSTAGRAM,
      },
      {
        name: "fab fa-linkedin-in",
        path: SOCIALS.LINKEDIN,
      },
      {
        name: "fab fa-tiktok",
        path: SOCIALS.TIKTOK,
      },
    ],
  },
  contact: {
    name: "Contáctanos",
    content: {
      direction: "Av. Javier Prado Este 560",
      numberPhone: "contacto@tiims.com.pe",
    },
  },
};

export const misionVision = {
  mission: {
    title: "Misión",
    text: {
      heading: "Solución",
      content:
        "En Tiims, nos enfocamos en empoderar tanto a nuestros clientes como a los especialistas que brindan servicios en Lima. Queremos proporcionales una solución única, comodidad y fiabilidad inigualables y brindarles el preciado regalo del tiempo para disfrutar de lo que realmente importa.",
    },
    image: "assets/images/mision.jpg",
  },
  vision: {
    title: "Visión",
    text: {
      heading: "Conectar",
      content:
        "En Tiims buscamos convertirnos en la plataforma referente de servicios especializados en Perú, reconocida por conectar a las personas con especialistas de primera categoría, revolucionando así la forma en la que se accede a los servicios y simplificando la vida de nuestros clientes.",
    },
    image: "assets/images/vision.jpg",
  },
};

export const inputsText = [
  {
    label: "Nombres",
    name: "nombres",
    placeholder: "Ingresa tus nombres",
    type: "text",
  },
  {
    label: "Apellidos",
    name: "apellidos",
    placeholder: "Ingresa tus apellidos",
    type: "text",
  },
  {
    label: "Correo electrónico",
    name: "email",
    placeholder: "micorreo@personal.com",
    type: "email",
  },
  {
    label: "Contraseña",
    name: "password",
    placeholder: "Crea tu contraseña",
    type: "password",
  },
];

export const distritos = [
  "Ancón",
  "Ate",
  "Barranco",
  "Breña",
  "Carabayllo",
  "Cercado de Lima",
  "Chaclacayo",
  "Chorrillos",
  "Cieneguilla",
  "Comas",
  "El Agustino",
  "Independencia",
  "Jesús María",
  "La Molina",
  "La Victoria",
  "Lince",
  "Los Olivos",
  "Lurigancho",
  "Lurín",
  "Magdalena del Mar",
  "Miraflores",
  "Pachacámac",
  "Pucusana",
  "Pueblo Libre",
  "Puente Piedra",
  "Punta Hermosa",
  "Punta Negra",
  "Rímac",
  "San Bartolo",
  "San Borja",
  "San Isidro",
  "San Juan de Lurigancho",
  "San Juan de Miraflores",
  "San Luis",
  "San Martín de Porres",
  "San Miguel",
  "Santa Anita",
  "Santa María del Mar",
  "Santa Rosa",
  "Santiago de Surco",
  "Surquillo",
  "Villa El Salvador",
  "Villa María del Triunfo",
  "Callao",
  "Bellavista",
  "Callao",
  "Carmen de la Legua-Reynoso",
  "La Perla",
  "La Punta",
  "Mi Perú",
  "Ventanilla",
];

export const jobElements = [
  "Ninguno",
  "Gerente General",
  "Director Ejecutivo (CEO)",
  "Director de Operaciones (COO)",
  "Director Financiero (CFO)",
  "Director de Marketing (CMO)",
  "Director de Recursos Humanos (CHRO)",
  "Director de Tecnología (CTO)",
  "Director de Ventas",
  "Gerente de Proyectos",
  "Gerente de Productos",
  "Desarrollador de Software (Frontend, Backend, Full Stack)",
  "Ingeniero de Software",
  "Desarrollador Mobile (iOS, Android)",
  "Arquitecto de Software",
  "Ingeniero DevOps",
  "Científico de Datos",
  "Ingeniero de Machine Learning",
  "Ingeniero de Seguridad Informática",
  "Analista de Sistemas",
  "Diseñador Gráfico",
  "Diseñador de Experiencia de Usuario (UX Designer)",
  "Diseñador de Interfaz de Usuario (UI Designer)",
  "Ilustrador",
  "Animador",
  "Director de Arte",
  "Diseñador de Juegos",
  "Diseñador de Productos",
  "Ejecutivo de Ventas",
  "Gerente de Ventas",
  "Especialista en Marketing Digital",
  "Analista de Marketing",
  "Gerente de Marketing",
  "Coordinador de Marketing en Redes Sociales",
  "Especialista en SEO/SEM",
  "Gerente de Relaciones Públicas",
  "Especialista en Reclutamiento",
  "Gerente de Recursos Humanos",
  "Analista de Compensación y Beneficios",
  "Especialista en Desarrollo Organizacional",
  "Coordinador de Capacitación y Desarrollo",
  "Contador",
  "Controller Financiero",
  "Analista Financiero",
  "Especialista en Impuestos",
  "Auditor Financiero",
  "Tesorero",
  "Analista de Riesgos Financieros",
  "Gerente de Operaciones",
  "Coordinador de Logística",
  "Especialista en Cadena de Suministro",
  "Planificador de Producción",
  "Gerente de Almacén",
  "Coordinador de Distribución",
  "Representante de Servicio al Cliente",
  "Gerente de Servicio al Cliente",
  "Especialista en Soporte Técnico",
  "Coordinador de Atención al Cliente",
  "Especialista en Retención de Clientes",
  "Médico General",
  "Enfermero/a",
  "Terapeuta Físico",
  "Psicólogo Clínico",
  "Farmacéutico",
  "Nutricionista",
  "Especialista en Salud Mental",
  "Profesor de Primaria/Secundaria",
  "Profesor Universitario",
  "Maestro de Educación Especial",
  "Tutor Académico",
  "Instructor de Idiomas",
  "Entrenador Educativo",
  "Arquitecto",
  "Ingeniero Civil",
  "Ingeniero Eléctrico",
  "Ingeniero Mecánico",
  "Ingeniero Industrial",
  "Arquitecto de Paisaje",
  "Ingeniero de Energía Renovable",
  "Periodista",
  "Productor Audiovisual",
  "Editor de Video",
  "Locutor de Radio",
  "Guionista",
  "Fotógrafo",
  "Investigador Científico",
  "Investigador de Mercado",
  "Investigador de Tecnología",
  "Científico de Laboratorio",
  "Abogado",
  "Asesor Legal",
  "Notario",
  "Juez",
  "Asistente Legal",
  "Asistente Administrativo",
  "Secretario/a Ejecutivo/a",
  "Coordinador Administrativo",
  "Recepcionista",
  "Ingeniero de Producción",
  "Ingeniero de Calidad",
  "Ingeniero Automotriz",
  "Técnico de Mantenimiento Industrial",
  "Investigador Académico",
  "Profesor Universitario de Investigación",
  "Investigador en Ciencias Sociales",
  "Consultor de Estrategia",
  "Consultor de Gestión",
  "Asesor Financiero",
  "Operario de montacarga",
  "Apilador",
  "Conserje",
  "Operario de almacén",
  "Operario de limpieza",
  "Operador dual",
];

export const defaultLocation = {
  _id: "",
  address_name: "",
  street: "",
  floor: "",
  city: "",
  zipcode: "",
  country_name: "Perú",
  country_code: "PE",
  country_code_2: "PE",
  latitude: -12.0463731,
  longitude: -77.042754,
  address: "Lima, Perú",
};
