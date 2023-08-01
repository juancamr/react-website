import React from "react";
import Qa from "../../components/qa/Q&A";
import { questions } from "../../common/questions/usuarios";
import "./Home.css";
import { Slide } from "react-reveal";

const Home = () => {
  return (
    <main
      className="py-14 px-4 home-container min-h-screen"
      style={{ height: "2100px" }}
    >
      <Slide left>
        <Qa
          styles={"bg-slate-50 p-4 rounded shadow"}
          bgWhite={true}
          questions={questions}
          heading="Preguntas frecuentes"
          searchPlaceholder={"como estas"}
        />
      </Slide>
    </main>
  );
};

export default Home;
