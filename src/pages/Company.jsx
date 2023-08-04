import Qa from "../components/qa/Q&A";
import { questions } from "../common/questions/empresas";
import { useEffect } from "react";
import Heading from "../components/text/Heading";

const Company = () => {
  useEffect(() => {
    document.getElementById("Empresas").classList.add('active');
  });
  return (
    <main className="py-24 lg:py-14 px-2 bg-slate-50">
      <Heading className='text-center'>Comming soon...</Heading>
      {/* <Qa
        questions={questions}
        searchPlaceholder="Como me comunico..."
        heading="&#191;Su empresa tiene preguntas?"
      /> */}
    </main>
  );
};

export default Company;
