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
      <Container>
        <div className="min-h-screen grid lg:grid-cols-2 gap-5">
          <Qa questions={questions} searchPlaceholder={"¿Dónde puedo ver los términos y condiciones?"} />
          <div className="hidden lg:block">
            <img
              className="h-[800px] object-cover w-full"
              src="assets/images/update/questions.webp"
              alt=""
            />
          </div>
        </div>
      </Container>
    </MainContainer>
  );
};

export default Questions;
