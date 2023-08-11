import AboutUs from "../pages/aboutUs/AboutUs";
import Company from "../pages/company/Company";
import Especialistas from "../pages/especialistas/Especialistas";
import Questions from "../pages/questions/Questions";

export const ADMIN_URL = "https://admin.tiims.com.pe";
export const WEBSITE_URL = "https://tiims.com.pe";

export const TOTAL_DOWNLOADS = 110;
export const TOTAL_USERS = 90;
export const TOTAL_PROVIDERS_HIRED = 80;

export const LINK_USER_GOOGLE_PLAY =
  "https://play.google.com/store/apps/details?id=com.tiims&hl=es_UY";
export const LINK_ESPECIALISTA_GOOGLE_PLAY =
  "https://play.google.com/store/apps/details?id=com.tiims.provider&hl=es_UY";
export const LINK_COMPANY = "https://company.tiims.com.pe/login";

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
        name: "Terminos y condiciones",
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
    name: "Contactanos",
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
