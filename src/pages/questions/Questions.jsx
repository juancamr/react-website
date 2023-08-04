import Qa from "../../components/qa/Q&A";
import { questions } from "../../common/questions/especialistas";
import { useEffect } from "react";
import "./Questions.css";

const Questions = () => {
  useEffect(() => {
    document.getElementById("Preguntas").classList.add("active");
  });
  return (
    <main id='main-questions' className="py-24 lg:py-14 bg-slate-50 px-2 min-h-screen">
      <div className="w-full px-4">
        <Qa
          questions={questions}
          heading="&#191;Tienes preguntas? Aqu&iacute; las resolvemos"
          searchPlaceholder="Como se puede..."
        />
      </div>
    </main>
  );
};

export default Questions;
