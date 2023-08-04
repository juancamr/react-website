import Heading from "../../../components/text/Heading";
import Paragraph from "../../../components/text/Paragraph";
import Paquetes from "./Paquetes";
import RequisitosIcon from "../../../components/images/RequisitosIcon";

function HeadingSection() {
  return (
    <div className="lg:col-span-2 mb-5">
      <Heading className='text-orange-600 text-center'>Limpieza</Heading>
      <div className="px-4">
        <RequisitosIcon />
      </div>
      <Paragraph className="px-8 lg:px-12 xl:px-20 text-gray-600 dark:text-slate-200">
      Paquete de limpieza de consultorios y oficinas

      </Paragraph>
    </div>
  );
}

export default function PaquetesSection() {
  return (
    <div className="mb-20 lg:px-12 xl:px-16 2xl:px-20">
      <div className="grid lg:grid-cols-5">
        <div className="lg:col-span-2 mb-5 lg:hidden">
          <HeadingSection />
        </div>
        <div className="lg:col-span-3 px-4 flex items-center">
          <Paquetes />
        </div>
        <div className="lg:col-span-2 mb-5 hidden lg:block">
          <HeadingSection />
        </div>
      </div>
    </div>
  );
}
