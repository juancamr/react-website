import Socials from "./Socials";
import { LINK_USER_GOOGLE_PLAY, WEBSITE_URL } from "../../../common/constants";

export default function Slogan() {
  return (
    <div
      className="flex items-center p-6 md:p-10
    rounded-3xl w-full"
    >
      <div>
        <h1
          className="
        text-gray-800
        text-[28px]
        leading-[29px]
        md:text-3xl
        lg:text-[55px]
        lg:leading-[55px]
        2xl:text-[53px]
        2xl:leading-[3.5rem]
        font-bold
        uppercase
        mb-3
        "
        >
          La app multiservicios N°1 del Perú
        </h1>
        <p
          className="
        text-gray-400 
        text-xl 
        lg:text-2xl 
        mb-7 
        md:mb-10 
        leading-6"
        >
          Contrata especialistas verificados y confiables para resolver tus
          tareas del hogar
        </p>
        <div className="mb-8 lg:mb-10 xl:mb-12">
          <a
            href={LINK_USER_GOOGLE_PLAY}
            className="
            px-5
            py-4
            xl:px-10
            xl:py-5
            bg-gradient-to-r
            from-orange-500
            via-orange-600 
            to-orange-700
            text-white
            text-xl
            2xl:text-2xl
            text-md
            shadow-lg
            rounded-3xl
            hover:from-orange-700 hover:via-orange-600 hover:to-orange-500
            "
          >
            Descarga la app <i class="fa-brands ml-2 fa-google-play"></i>
          </a>
        </div>
        <div className="mb-8 lg:mb-10 xl:mb-12 hidden md:block">
          <a
            href={`${WEBSITE_URL}/app/reservar`}
            className="
            px-5
            py-4
            xl:px-10
            xl:py-5
            bg-gradient-to-r
            shadow-lg
            border
            border-gray-200
            from-orange-50
            via-orange-200 
            to-orange-300
            text-black
            text-xl
            2xl:text-2xl
            text-md
            lg:text-xl
            rounded-3xl
            hover:from-orange-300 hover:via-orange-200 hover:to-orange-50
            "
          >
            Reserva tu servicio <i class="ml-2 fa-solid fa-globe"></i>
          </a>
        </div>
        <p className="text-gray-400 text-xl lg:text-2xl mb-4 leading-6">
          S&iacute;guenos en
        </p>
        <Socials />
      </div>
    </div>
  );
}
