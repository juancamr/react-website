import "./NavbarMobile.css";
import { routes } from "../../../../common/constants";

export default function NavbarMobile() {
  return (
    <div className="fixed w-full z-20">
      <div
        className="
          rounded-3xl
          p-2 backdrop-blur-md bg-white/90
          mt-4
          ml-4
          shadow-xl w-[105px]
          left-0 z-20
      "
      >
        <a href="/">
          <img
            src="assets/images/logo-tiims.png"
            className="
        h-8
        "
            alt=""
          />
        </a>
      </div>

      <div>
        <input type="checkbox" id="active" />
        <label
          for="active"
          class="menu-btn mt-4 mr-4 top-0 right-0 p-4
          backdrop-blur-md bg-orange-400/80 z-20
          "
        >
          <span></span>
        </label>
        <label for="active" class="close"></label>
        <div class="wrapper">
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            {routes.map((route, id) => (
              <li key={id}>
                <a href={route.path}>{route.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
