import React, { useEffect } from "react";
import SloganUser from "./components/SloganUser";
import HowToUse from "./components/HowToUse";
import Servicios from "./components/Servicios";
import Users from "./components/Users";
import UserComments from "./components/UserComments";
import BottomContainer from "./components/BottomContainer";
import MainContainer from "../../components/MainContainer";

const Home = () => {
  return (
    <MainContainer beige>
      <SloganUser />
      <HowToUse />
      <Servicios />
      <Users />
      <UserComments />
      <BottomContainer />
    </MainContainer>
  );
};

export default Home;

// <main
//   id="home-container"
//   className="min-h-screen
// space-y-16 md:space-y-20 xl:space-y-40
// 2xl:pb-30 relative
// "
// >
//   <img
//     src="assets/images/blurred_vivid.jpg"
//     className="
//   h-screen object-cover w-full
//   "
//     alt=""
//   />
//   <div
//     className="grid lg:grid-cols-2 gap-4 px-4 xl:px-8 2xl:px-40
//     absolute top-0 left-0
//   "
//   >
//     <Slogan />
//     <Banner />
//   </div>

//   <div className="w-full px-4 xl:px-8 2xl:px-20">
//     <div>
//       <h1
//         className="
//     text-center
//     text-orange-600
//     dark:text-orange-300
//     font-bold
//     text-3xl
//     md:text-4xl
//     xl:text-5xl
//     xl:mb-10
//     px-4
//     mb-6
//     "
//       >
//         Encuentra al experto ideal para ti
//       </h1>
//       <Instructions isHome={true} />
//     </div>
//   </div>

//   <div className="px-4 xl:px-8  2xl:px-20">
//     <h1
//       className="
//     text-center
//     text-gray-800
//     dark:text-white
//     font-bold
//     text-3xl
//     md:text-4xl
//     xl:text-5xl
//     xl:mb-4
//     px-4
//     mb-2
//     "
//     >
//       Servicios
//     </h1>
//     <p
//       className="
//     text-gray-600
//     dark:text-slate-300 px-6
//     text-center
//     text-lg
//     md:text-xl
//     lg:text-2xl
//     xl:text-3xl
//     leading-5 mb-6
//     xl:mb-8
//                     "
//     >
//       ¡Decide reservar o programar tu servicio según tu conveniencia y la
//       opción de pago que prefieras!
//     </p>
//     <Servicios />
//     <div className="flex justify-center">
//       <a
//         href="https://tiims.com.pe/app/reservar"
//         className="bg-orange-500 hover:bg-orange-600 text-white py-4 px-9 rounded-3xl lg:mt-4 text-lg xl:text-2xl transition-colors"
//       >
//         Descubre m&aacute;s{" "}
//       </a>
//     </div>
//   </div>

//   {/* <div className="grid md:grid-cols-2 md:w-3/4 mx-auto">
//     <div className="flex items-center justify-center md:justify-left">
//       <div>
//         <h1 className="text-gray-800 dark:text-slate-50 text-3xl md:text-4xl xl:text-5xl font-bold mb-5 text-center md:text-left px-4">
//           Nuestros clientes  <br />
//           tienen su opinión
//         </h1>
//         <p className="text-gray-600 dark:text-white text-center md:text-left text-xl md:text-2xl mb-8 px-4 ">
//           Desliza para interactuar
//         </p>
//       </div>
//     </div>
//     <Fade right>
//       <Comments comments={usersComments} color="orange" />
//     </Fade>
//   </div> */}

//   <div className="relative py-20 xl:py-0">
//     <img
//       className="h-40 md:h-60 xl:h-80 2xl:h-[500px] w-full"
//       src="assets/images/lineas_naranjas.png"
//       alt=""
//     />
//     <Download
//       heading="&#191;Listo para probar Tiims?"
//       subHeading="No pierdas m&aacute;s el tiempo buscando en anuncios. &#161;Contrata un
//     especialista!"
//       users={true}
//     />
//   </div>

//   <Newsletter />
// </main>
