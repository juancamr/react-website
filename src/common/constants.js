import AboutUs from "../pages/aboutUs/AboutUs";
import Company from "../pages/Company";
import Especialistas from "../pages/Especialistas";
import Questions from "../pages/Questions";

export const ADMIN_URL = "https://admin.tiims.com.pe";

export const TOTAL_DOWNLOADS = 30;
export const TOTAL_USERS = 50;
export const TOTAL_PROVIDERS_HIRED = 40;

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
      numberPhone: "+51 9435216539",
    },
  },
};
