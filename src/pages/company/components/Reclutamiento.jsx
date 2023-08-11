import Heading from "../../../components/text/Heading";
import Paragraph from "../../../components/text/Paragraph";
import PlanesReclutamiento from "./PlanesReclutamiento";

export default function Reclutamiento() {
  return (
    <div className="mb-20 lg:px-12 xl:px-16 2xl:px-20">
      <Heading
        className="text-blue-700 dark:text-blue-500
      text-center
      px-4
      "
      >
        Selecci&oacute;n y reclutamiento
      </Heading>
      <Paragraph
        className="text-gray-600 dark:text-slate-200
        text-center
      mb-4
      lg:mb-8
      xl:mb-10
      "
      >
        Personalizamos nuestros servicios para satisfacer tus necesidades.
      </Paragraph>
      <div className="grid lg:grid-cols-5">
        <div className="lg:col-span-2 mb-5 px-4">
          <img
            src="assets/images/seleccion_icono.jpg"
            alt=""
            className="object-cover w-full rounded-3xl md:h-80 lg:h-full
            shadow-xl
            "
          />
        </div>
        <div className="2xl:scale-100 lg:col-span-3 px-4">
          <PlanesReclutamiento />
        </div>
      </div>
    </div>
  );
}
