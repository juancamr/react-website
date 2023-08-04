import AboutUs from "../pages/aboutUs/AboutUs";
import Company from "../pages/company/Company";
import Especialistas from "../pages/especialistas/Especialistas";
import Questions from "../pages/questions/Questions";

export const ADMIN_URL = "https://admin.tiims.com.pe";
export const WEBSITE_URL = "https://tiims.com.pe";

export const TOTAL_DOWNLOADS = 30;
export const TOTAL_USERS = 50;
export const TOTAL_PROVIDERS_HIRED = 40;

export const LINK_USER_GOOGLE_PLAY =
  "https://play.google.com/store/apps/details?id=com.tiims&hl=es_UY";
export const LINK_ESPECIALISTA_GOOGLE_PLAY =
  "https://play.google.com/store/apps/details?id=com.tiims.provider&hl=es_UY";
export const LINK_COMPANY = "https://company.tiims.com.pe/login";

export const usersComments = [
  {
    name: "Juan Carlos",
    photo: "https://randomuser.me/api/portraits/women/66.jpg",
    comment:
      "Holauoaeu aouauaou aoeuoa aoeu aou  aoeuouaoeu a oeua oeu aoeu aoeu ",
    rate: 5,
  },
  {
    name: "Juan Carlos",
    photo: "https://randomuser.me/api/portraits/men/60.jpg",
    comment: "Hola la verdad es que me parece una mrd",
    rate: 5,
  },
  {
    name: "Juan Carlos",
    photo: "https://randomuser.me/api/portraits/men/62.jpg",
    comment: "Hola asnteuhsnao aoestnhuoau aeuaouaou aoeuaou oaeu ",
    rate: 5,
  },
  {
    name: "Juan Carlos",
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
    comment: "santoehutsno hasnotehu tnao uhnatohe usntaoheu ntshaoeu",
    rate: 5,
  },
];

export const especialistasComments = [
  {
    name: "Juan Carlos",
    photo: "assets/images/questions-background.jpg",
    comment:
      "Holauoaeu aouauaou aoeuoa aoeu aou  aoeuouaoeu a oeua oeu aoeu aoeu ",
    rate: 5,
  },
  {
    name: "Juan Carlos",
    photo: "assets/images/company.jpg",
    comment: "Hola la verdad es que me parece una mrd",
    rate: 5,
  },
  {
    name: "Juan Carlos",
    photo: "assets/images/white-background.jpg",
    comment: "Hola asnteuhsnao aoestnhuoau aeuaouaou aoeuaou oaeu ",
    rate: 5,
  },
  {
    name: "Juan Carlos",
    photo: "assets/images/white-background.jpg",
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

export const footerLinks = {
  legal: {
    name: "Legal",
    links: [
      {
        name: "Terminos y condiciones",
        path: `${ADMIN_URL}/terms.html`,
      },
      {
        name: "Politica y privacidad",
        path: `${ADMIN_URL}/privacy.html`,
      },
    ],
  },
  company: {
    name: "Empresas",
    links: [
      {
        name: "Servicios",
        path: "/",
      },
      {
        name: "Reclutamiento",
        path: "/",
      },
    ],
  },
  download: {
    name: "Descargas",
    links: [
      {
        name: "Usuarios",
        path: "/",
      },
      {
        name: "Especialistas",
        path: "/",
      },
    ],
  },
  followUs: {
    name: "Siguenos",
    links: [
      {
        name: "fab fa-facebook-f",
        path: "/",
      },
      {
        name: "fab fa-instagram",
        path: "/",
      },
      {
        name: "fab fa-linkedin-in",
        path: "/",
      },
      {
        name: "fab fa-tiktok",
        path: "/",
      },
    ],
  },
  contact: {
    name: "Contactanos",
    content: {
      direction: "Av. Javier Prado Este 560",
      numberPhone: "soporte@tiims.com.pe",
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

export const SOCIALS = {
  TIKTOK: "https://tiktok.com",
  YOUTUBE: "https://youtube.com",
  LINKEDIN: "https://linkedin.com",
  FACEBOOK: "https://facebook.com",
  INSTAGRAM: "https://instagram.com",
};
