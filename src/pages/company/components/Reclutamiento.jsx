import { Slide } from "react-reveal";
import RequisitosIcon from "../../../components/images/RequisitosIcon";
import Heading from "../../../components/text/Heading";
import Paragraph from "../../../components/text/Paragraph";
import PlanesReclutamiento from "./PlanesReclutamiento";

export default function Reclutamiento() {
  return (
    <div className="mb-20 lg:px-12 xl:px-16 2xl:px-20">
      <Heading
        className="text-blue-700 dark:text-blue-600
      text-center
      px-4
      mb-4
      lg:mb-8
      xl:mb-10
      "
      >
        Reclutamiento
      </Heading>
      <div className="grid lg:grid-cols-5">
        <div className="lg:col-span-2 mb-5">
          <div className="px-4">
            <RequisitosIcon />
          </div>
          <Paragraph className="px-8 lg:px-12 xl:px-20 text-gray-600 dark:text-slate-200">
            Personalizamos nuestros servicios para satisfacer tus necesidades.  
          </Paragraph>
        </div>
        <Slide right>
          <div className="lg:scale-75 2xl:scale-100 lg:col-span-3 px-4">
            <PlanesReclutamiento />
          </div>
        </Slide>
      </div>
    </div>
  );
}
