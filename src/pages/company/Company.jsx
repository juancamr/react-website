import Qa from "../../components/qa/Q&A";
import { questions } from "../../common/questions/empresas";
import { useEffect } from "react";
import TopContainer from "./components/TopContainer";
import Reclutamiento from "./components/Reclutamiento";
import PaquetesSection from "./components/PaquetesSection";
import MainContainer from "../../components/MainContainer";
import Container from "../../components/Container";
import SloganContainer from "../../components/SloganContainer";
import CustomH1 from "../../components/custom/CustomH1";
import { company } from "../../common/content";
import CustomP from "../../components/custom/CustomP";
import CustomButton from "../../components/custom/CustomButton";
import { ADMIN_URL } from "../../common/constants";
import Mapa from "./components/Mapa";
import Top from "./components/Top";
import PlanesReclutamiento from "./components/PlanesReclutamiento";
import Planes from './components/Planes'

const Company = () => {
  useEffect(() => {
    document.getElementById("Empresas").classList.add("active");
  });
  return (
    <MainContainer>
      <Top />
      <Mapa />
      <Planes />
    </MainContainer>
  );
};

export default Company;

// <main className="py-24 lg:py-14 bg-slate-50 dark:bg-slate-900">
{
  /* <TopContainer />
      <Reclutamiento />
      <PaquetesSection /> */
}
{
  /* <div className="px-4">
        <Qa
          styles="
          shadow-xl
          border border-gray-300
          bg-gradient-to-tr
          bg-blue-100 
          p-8
          rounded-3xl"
          heading="Preguntas? Aqu&iacute; las resolvemos"
          searchPlaceholder="&#191;C&oacute;mo genero ingresos?"
          questions={questions}
        />
      </div> */
}
// </main>
