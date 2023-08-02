import React from "react";
import LinkList from "./components/LinkList/LinkList";
import NavbarMobile from "./components/NavbarMobile/NavbarMobile";

const Header = () => {
  return (
    <header>
      <div className="hidden lg:block">
        <LinkList />
      </div>
      <div className="lg:hidden">
        <NavbarMobile />
      </div>
    </header>
  );
};

export default Header;
