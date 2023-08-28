import { useEffect } from "react";
import MainContainer from "../../components/MainContainer";
import Mapa from "./components/Mapa";
import Top from "./components/Top";
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
