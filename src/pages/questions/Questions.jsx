import Qa from "../../components/qa/Q&A";
import { questions } from "../../common/questions/usuarios";
import { useEffect } from "react";
import "./Questions.css";
import Heading from "../../components/text/Heading";
import MainContainer from "../../components/MainContainer";
import Container from "../../components/Container";

const Questions = () => {
  useEffect(() => {
    document.getElementById("Preguntas").classList.add("active");
  });
  return (
    <MainContainer beige>
      <div className="md:w-1/2 mx-auto">
        <Qa questions={questions} />
      </div>
    </MainContainer>
  );
};

export default Questions;
