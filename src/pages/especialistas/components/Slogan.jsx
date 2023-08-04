import { LINK_ESPECIALISTA_GOOGLE_PLAY } from "../../../common/constants";
import Socials from "../../home/components/Socials";

export default function Slogan() {
  return (
    <div
      className="flex items-center p-6 md:p-10
    bg-gradient-to-tr from-blue-900 via-blue-400 to-blue-900
    rounded-3xl w-full"
    >
      <div>
        <h1 className="
        text-white 
        text-4xl 
        lg:text-7xl
        md:text-xl 
        font-bold 
        uppercase mb-3">
          Trabaja con TIIMS
        </h1>
        <p className="
        text-slate-200
         text-xl 
         lg:text-3xl 
         mb-7 
         md:mb-10 
         leading-6">
            Gana más de S/ 2,400 al mes, trabajando en tus tiempos libres
        </p>
        <div className="mb-8 lg:mb-10 xl:mb-12">
          <a
            href={LINK_ESPECIALISTA_GOOGLE_PLAY}
            className="
            px-5
            py-4
            xl:px-10
            xl:py-5
            bg-gradient-to-r
            from-blue-500
            via-blue-600 
            to-blue-700
            text-white
            text-xl
            2xl:text-2xl
            text-md
            shadow-lg
            rounded-3xl
            hover:from-blue-700 hover:via-blue-600 hover:to-blue-500
            "
          >
            Registrate aquí <i class="fa-brands ml-2 fa-google-play"></i>
          </a>
        </div>
        <p className="text-slate-200 text-xl lg:text-2xl mb-4 leading-6">
          Encuentranos en ...
        </p>
        <Socials />
      </div>
    </div>
  );
}
