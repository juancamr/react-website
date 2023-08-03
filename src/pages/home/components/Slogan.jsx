import Socials from "./Socials";

export default function Slogan() {
  return (
    <div className="flex items-center p-6 md:p-10 bg-slate-50 rounded-3xl w-full">
      <div>
        <h1 className="text-gray-800 text-4xl md:text-6xl 2xl:text-8xl font-bold uppercase mb-3">
          Facilita tu vida...
        </h1>
        <p className="text-gray-400 text-xl lg:text-2xl mb-7 md:mb-10 leading-6">
          Reserva tus servicios con nuestros mejores especialistas
        </p>
        <div className="mb-8 lg:mb-10 xl:mb-12">
          <a
            href="https://google.com"
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
        <div className="mb-8 lg:mb-10 xl:mb-12">
          <a
            href="https://google.com"
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
            Contrata tus servicios <i class="ml-2 fa-solid fa-globe"></i>
          </a>
        </div>
        <p className="text-gray-400 text-xl lg:text-2xl mb-4 leading-6">
          Encuentranos en ...
          </p>
        <Socials />
      </div>
    </div>
  );
}
