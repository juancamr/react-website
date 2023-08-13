import { useEffect } from "react";
import { WEBSITE_URL, routes } from "../../../../common/constants";
import Button from "../../../Button";
import Link from "../Link/Link";
import "./LinkList.css";

const LinkList = () => {
  console.log(window.location.pathname);
  useEffect(() => {
    // const navbar = document.querySelector("#navbar");
    // const links = document.querySelectorAll("#navbar a");
    // function changeColorLinks(color) {
    //   links.forEach(function (link) {
    //     if (color === "gray") {
    //       link.classList.add("gray-link");
    //     } else {
    //       link.classList.add("white-link");
    //     }
    //   });
    // }
    // window.onscroll = function () {
    //   if (window.scrollY >= 100) {
    //     navbar.classList.add("bg-slate-50");
    //     navbar.classList.add("shadow-xl");
    //     changeColorLinks("gray");
    //   } else {
    //     navbar.classList.remove("bg-slate-50");
    //     navbar.classList.remove("shadow-xl");
    //     changeColorLinks("white");
    //   }
    // };
  }, []);
  return (
    <nav
      id="navbar"
      className={`navbar z-40 py-3 flex items-center justify-center lg:space-x-20 xl:space-x-40 2x:space-x-60
        transition-all
        ${window.location.pathname === "/" && "bg-beige"}
        ${window.location.pathname === "/provider" && "bg-bluepastel"}
        ${window.location.pathname === "/empresas" && "bg-white"}
        ${window.location.pathname === "/preguntas" && "bg-beige"}
        ${window.location.pathname === "/nosotros" && "bg-beige"}
        fixed z-20 w-full
    `}
    >
      <a href="/">
        <img src="assets/images/logo-tiims.png" className="h-14 w-40" alt="" />
      </a>
      <ul className="space-x-8">
        <Link path="/" name="Inicio" />
        {routes.map((link) => (
          <Link path={link.path} name={link.name} />
        ))}
      </ul>
      <Button styles="text-lg" href={`${WEBSITE_URL}/app/reservar`}>
        Reserva ya
      </Button>
    </nav>
  );
};

export default LinkList;
