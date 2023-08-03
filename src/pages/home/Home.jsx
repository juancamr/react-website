import React, { useEffect } from "react";
import "./Home.css";
import { Fade } from "react-reveal";
import Comments from "../../components/comments/Comments";
import { usersComments } from "../../common/constants";
import Banner from "./components/Banner";
import Slogan from "./components/Slogan";
import Instructions from "./components/InstructionCard";
import Servicios from "./components/Servicios";
import Download from "../../components/Download";
import Newsletter from "../../components/Newsletter";

const Home = () => {
  useEffect(() => {
    document.getElementById("Inicio").classList.add("active");
  });
  return (
    <main className="py-24 lg:pt-8 min-h-screen space-y-16 md:space-y-20 xl:space-y-40 bg-slate-950 2xl:pb-30 ">
      <div className="h-full grid lg:grid-cols-2 gap-4 px-4 xl:px-8  2xl:px-20">
        <Slogan />
        <Banner />
      </div>

      <div className="w-full px-4 xl:px-8 2xl:px-20">
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
      </div>
      <div className="px-4 xl:px-8  2xl:px-20">
        <h1
          className="
        text-center
        text-indigo-500
        font-bold
        text-3xl
        md:text-4xl
        xl:text-5xl
        xl:mb-4
        px-4
        mb-2
        "
        >
          Servicios
        </h1>
        <p className="text-slate-300 px-4 text-center text-lg md:text-xl lg:text-2xl xl:text-3xl leading-5 mb-6 xl:mb-8">
          Descubre nuestra variedad de servicios
        </p>
        <Servicios />
        <div className="flex justify-center">
          <a
            href="https://tiims.com.pe/reservar"
            className="bg-blue-500 text-white py-3 px-8 rounded-3xl lg:mt-4 xl:text-xl"
          >
            Descubre m&aacute;s{" "}
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 md:w-3/4 mx-auto">
        <div className="flex items-center justify-center md:justify-left">
          <div>
            <h1 className="text-slate-50 text-3xl md:text-4xl xl:text-5xl font-bold mb-5 text-center md:text-left px-4">
              Mira que dicen nuestros clientes <br />
              ...
            </h1>
            <p className="text-white text-center md:text-left text-xl md:text-2xl mb-8 px-4 ">
              Desliza para interactuar
            </p>
          </div>
        </div>
        <Fade right>
          <Comments comments={usersComments} color="orange" />
        </Fade>
      </div>

      <div className="relative py-20 xl:py-0">
        <img
          className="h-40 md:h-60 xl:h-80 2xl:h-[500px] w-full"
          src="assets/images/lineas_naranjas.png"
          alt=""
        />
        <Download
          heading="&#191;Listo para probar Tiims?"
          subHeading="No pierdas m&aacute;s el tiempo buscando en anuncios. &#161;Contrata un
        especialista!"
          users={true}
        />
      </div>

      <Newsletter />
    </main>
  );
};

export default Home;
