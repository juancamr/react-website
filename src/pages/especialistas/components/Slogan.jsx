import Socials from "../../home/components/Socials";

export default function Slogan() {
  return (
    <div className="flex items-center p-6 md:p-10
    bg-gradient-to-tr from-blue-900 via-blue-400 to-blue-900
    rounded-3xl w-full">
      <div>
        <h1 className="text-white text-4xl md:text-6xl 2xl:text-8xl font-bold uppercase mb-3">
          Imagina tenerlo todo...
        </h1>
        <p className="text-slate-200 text-xl lg:text-2xl mb-7 md:mb-10 leading-6">
          Consigue tus servicios a tus precios
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
            from-blue-50
            via-blue-200 
            to-blue-300
            text-black
            text-xl
            2xl:text-2xl
            text-md
            lg:text-xl
            rounded-3xl
            hover:from-blue-300 hover:via-blue-200 hover:to-blue-50
            "
          >
            Contrata tus servicios <i class="ml-2 fa-solid fa-globe"></i>
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
