import React from "react";
import LinkList from "./components/LinkList/LinkList";
import NavbarMobile from "./components/NavbarMobile/NavbarMobile";

const Header = () => {
  return (
    <header
      id="header"
      className={`${
        window.location.pathname === "/provider/register" && "!hidden"
      }`}
    >
      <div className="hidden lg:block">
        <LinkList />
      </div>
      <div className="lg:hidden">
        <NavbarMobile />
      </div>
      {/* <div className="bg-white
      p-4
      fixed bottom-0
      right-0
      z-30
      mr-4
      rounded-full
      mb-4
      "> */}
      <a
        className="
        text-center backdrop-blur-md bg-white/80
      h-12 w-12
      fixed bottom-0
      right-0
      text-xl
      z-30
      mr-4
      rounded-full
      font-bold
      shadow-xl
      border border-gray-200
      mb-4
      text-black
      py-3
        "
        href="#header"
      >
        <i class="fa-solid fa-arrow-up"></i>
      </a>
      {/* </div> */}
    </header>
  );
};

export default Header;
