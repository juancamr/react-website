import { Fade, Flip } from "react-reveal";
import Heading from "../../../components/text/Heading";
import Paragraph from "../../../components/text/Paragraph";
import RequisitosIcon from "../../../components/images/RequisitosIcon";

export default function Requisitos() {
  const requisitos = [
    "Descarga la app y completa tus datos personales.",
    "Sube una imagen que muestre tu DNI por ambos lados.",
    "Sube tu Certificado Único Laboral CertiJoven o CertiAdulto según sea el caso",
    "Sube tu recibo de luz o agua.",
    "Carga tu CV actualizado (opcional) *",
  ];
  return (
    <div className="px-4">
      <Heading
        className="
      text-blue-700 
      text-center 
      leading-9
      px-4 
      mb-4"
      >
        S&eacute; parte de la comunidad de especialistas
      </Heading>
      <Paragraph
        className="
      text-gray-800  
      dark:text-white 
      text-center
      text-[22px] 
      mb-5 
      lg:mb-10"
      >
        Para registrarte como especialista
      </Paragraph>
      <div className="grid lg:grid-cols-5 gap-4 lg:px-20 2xl:px-40">
        <div className=" flex items-center lg:col-span-3">
          <div>
            <Heading
              className="
            lg:px-5
            text-[35px] 
            mb-3  
            text-orange-400"
            >
              Documentaci&oacute;n
            </Heading>
            <div className="text-slate-800 dark:text-white lg:px-5">
              <ul className="space-y-5">
                {requisitos.map((requisito, index) => (
                  <li key={index}>
                    <Paragraph className="font-light">
                      {index + 1}. {requisito}
                    </Paragraph>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:px-4 lg:col-span-2">
          <div className="w-full rounded-3xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500 to-yellow-300">
            <Flip right>
              <RequisitosIcon />
            </Flip>
          </div>
        </div>
      </div>
    </div>
  );
}
