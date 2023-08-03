import React from "react";
import LinkList from "./components/LinkList/LinkList";
import NavbarMobile from "./components/NavbarMobile/NavbarMobile";

const Header = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

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
