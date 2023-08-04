import { Fade, Flip } from "react-reveal";
import Heading from "../../../components/text/Heading";
import Paragraph from "../../../components/text/Paragraph";
import RequisitosIcon from "../../../components/images/RequisitosIcon";

export default function Requisitos() {
  const requisitos = [
    "Subir su documento de identidad (DNI) para que este pueda ser procesado por nuestra base de datos",
    "Subir su documento de identidad (DNI) para que este pueda ser procesado por nuestra base de datos",
    "Subir su documento de identidad (DNI) para que este pueda ser procesado por nuestra base de datos",
    "Subir su documento de identidad (DNI) para que este pueda ser procesado por nuestra base de datos",
  ];
  return (
    <>
      <Heading className="text-blue-500 text-center px-4 mb-3">
        &#191;C&oacute;mo puedo ser parte?
      </Heading>
      <Paragraph className="text-white text-center mb-5 lg:mb-10">
        Aqu&iacute; te ayudamos
      </Paragraph>
      <div className="grid lg:grid-cols-2 gap-4 lg:px-20">
        <div className="bg-slate-50 dark:bg-slate-950 flex items-center">
          <div>
            <Heading className="lg:px-5 mb-3 text-orange-300">
              Requisitos
            </Heading>
            <div className="text-slate-800 dark:text-white lg:px-5">
              <ul className="space-y-5">
                {requisitos.map((requisito, index) => (
                  <li key={index}>
                    <Paragraph >
                      {index + 1}. {requisito}
                    </Paragraph>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:px-4">
          <div className="w-full rounded-3xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500 to-yellow-300">
            <Flip right>
              <RequisitosIcon />
            </Flip>
          </div>
        </div>
      </div>
    </>
  );
}
