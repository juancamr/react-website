import { Fade, Flip } from "react-reveal";
import Comments from "../../components/comments/Comments";
import { usersComments } from "../../common/constants";
import { useEffect } from "react";
import Slogan from "./components/Slogan";
import Banner from "./components/Banner";
import Container from "../../components/Container";
import Requisitos from "./components/Requisitos";
import Qa from "../../components/qa/Q&A";
import { questions } from "../../common/questions/especialistas";
import Download from "../../components/Download";
import Heading from "../../components/text/Heading";
import Instructions from "../home/components/InstructionCard";

const Especialistas = () => {
  useEffect(() => {
    document.getElementById("Especialistas").classList.add("active");
  });
  return (
    <main
      id="especialistas-main"
      className="py-24 lg:pt-8 min-h-screen space-y-16 md:space-y-20 xl:space-y-40 bg-slate-950 2xl:pb-30 "
    >
      <div className="h-full grid lg:grid-cols-2 gap-4 px-4 xl:px-8  2xl:px-20">
        <div className="lg:hidden">
          <Slogan />
        </div>
        <Banner />
        <div className="hidden lg:flex">
          <Slogan />
        </div>
      </div>

      <Container className="bg-slate-950">
        <Requisitos />
      </Container>

      <Container>
        <Heading className="text-center text-slate-50 mb-2 xl:mb-4">
          Informaci&oacute;n de pago
        </Heading>
        <Instructions isHome={false} />
      </Container>

      <div className="grid md:grid-cols-2 md:w-3/4 mx-auto bg-slate-950">
        <div className="hidden lg:flex">
          <Fade left>
            <Comments comments={usersComments} color="blue" />
          </Fade>
        </div>
        <div className="flex items-center">
          <div className="flex items-center justify-center md:justify-left">
            <div>
              <h1 className="text-slate-50 text-3xl md:text-4xl xl:text-5xl font-bold mb-5 text-center md:text-left px-4">
                Ellos ya est&aacute;n ganando dinero con Tiims
                <br />
                ...
              </h1>
              <p className="text-white text-center md:text-left text-xl md:text-2xl mb-8 px-4 ">
                Desliza para interactuar
              </p>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <Fade left>
            <Comments comments={usersComments} color="blue" />
          </Fade>
        </div>
      </div>

      <div className="px-4">
        <Qa
          styles="bg-gradient-to-tr from-slate-400 via-blue-200 to-slate-400 p-8 rounded-3xl"
          heading="Preguntas? Aqu&iacute; las resolvemos"
          searchPlaceholder="&#191;C&oacute;mo genero ingresos?"
          questions={questions}
        />
      </div>

      <div className="relative py-20 xl:py-0">
        <img
          className="h-40 md:h-60 xl:h-80 2xl:h-[500px] w-full"
          src="assets/images/lineas_azules.png"
          alt=""
        />
        <Download
          heading="&#191;Listo para probar Tiims?"
          subHeading="No pierdas m&aacute;s el tiempo buscando en anuncios. &#161;Contrata un
        especialista!"
          users={false}
        />
      </div>
    </main>
  );
};

export default Especialistas;
