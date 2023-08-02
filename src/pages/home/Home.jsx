import React from "react";
import Qa from "../../components/qa/Q&A";
import { questions } from "../../common/questions/usuarios";
import "./Home.css";
import { Fade } from "react-reveal";
import Comments from "../../components/comments/Comments";
import { usersComments } from "../../common/constants";
import Banner from "./components/Banner";
import Slogan from "./components/Slogan";
import Instructions from "./components/InstructionCard";
import Servicios from "./components/Servicios";

const Home = () => {
  return (
    <main className="py-20 lg:pt-0 px-4 min-h-screen space-y-16 md:space-y-20 xl:space-y-40 bg-black xl:px-8 2xl:pb-10 2xl:px-20">
      <div className="min-h-screen 2xl:h-[400px] grid lg:grid-cols-2 gap-4">
        <Slogan />
        <Banner />
      </div>

      <div>
        <h1
          className="
        text-center
        text-orange-300
        font-bold
        text-3xl
        md:text-4xl
        xl:text-5xl
        xl:mb-10
        px-4
        mb-6
        "
        >
          Encuentra la experiencia ideal
        </h1>
        <Instructions />
      </div>
      <div>
        <h1
          className="
        text-center
        text-blue-300
        font-bold
        text-3xl
        px-4
        mb-2
        "
        >
          Servicios
        </h1>
        <p className="text-slate-300 px-4 text-center text-lg leading-5 mb-6">
          Descubre nuestra variedad de servicios
        </p>
        <Servicios />
        <div className="flex justify-center">
          <a
            href="https://tiims.com.pe/reservar"
            className="bg-blue-500 text-white py-3 px-8 rounded-3xl"
          >
            Descubre m&aacute;s{" "}
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 md:w-3/4 mx-auto">
        <div className="flex items-center">
          <div>
            <h1 className="text-slate-50 text-3xl xl:text-5xl font-bold mb-5 text-center md:text-left px-4">
              Mira que dicen nuestros clientes <br />
              ...
            </h1>
            <p className="text-white px-4 ">Desliza para interactuar</p>
          </div>
        </div>
        <Fade right>
          <Comments comments={usersComments} color="orange" />
        </Fade>
      </div>
    </main>
  );
};

export default Home;
