import Qa from "../../components/qa/Q&A";
import { questions } from "../../common/questions/usuarios";
import { useEffect } from "react";
import "./Questions.css";
import { Bounce } from "react-reveal";

const Questions = () => {
  useEffect(() => {
    document.getElementById("Preguntas").classList.add("active");
  });
  return (
    <main
      id="main-questions"
      className="py-24 lg:py-14 bg-slate-50 px-2 min-h-screen"
    >
      <div className="w-full px-4">
        <Bounce bottom>
          <Qa
            questions={questions}
            heading="&#191;En qu&eacute; podemos ayudarte?"
            searchPlaceholder="Como se puede..."
          />
        </Bounce>
      </div>
    </main>
  );
};

export default Questions;
