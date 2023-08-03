import Qa from "../components/qa/Q&A";
import { questions } from "../common/questions/especialistas";
import { useEffect } from "react";

const Questions = () => {
  useEffect(() => {
    document.getElementById("Empresas").classList.add("active");
  });
  return (
    <main className="py-14 bg-slate-50 px-2 min-h-screen relative">
      {/* <img
        className="absolute top-0 left-0 h-full w-full object-cover z-0"
        src="assets/images/questions-background.jpg"
        alt="questions-background"
      /> */}
      <Qa
        styles="bg-slate-50"
        questions={questions}
        heading="&#191;Tienes preguntas? Aqu&iacute; las resolvemos"
        searchPlaceholder="Como se puede..."
      />
    </main>
  );
};

export default Questions;
