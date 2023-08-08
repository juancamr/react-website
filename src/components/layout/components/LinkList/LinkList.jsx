import { useEffect } from "react";
import { WEBSITE_URL, routes } from "../../../../common/constants";
import Button from "../../../Button";
import Link from "../Link/Link";
import "./LinkList.css";

const LinkList = () => {
  useEffect(() => {
    const navbar = document.getElementById('navbar')
    window.onscroll = function() {
      if (window.scrollY >= 100) {
        navbar.classList.add('bg-slate-50')
        navbar.classList.add('shadow-xl')
      } else {
        navbar.classList.remove('bg-slate-50')
        navbar.classList.remove('shadow-xl')
      }
    }
  }, [])
  return (
    <nav id="navbar" className="navbar py-5 flex items-center justify-center lg:space-x-20 xl: space-x-40 2xl:space-x-60 transition-all z-20
    w-full fixed
    ">

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
