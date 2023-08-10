import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";

export default function Banner() {
  // const firstMessage = useRef(null);
  // const secondMessage = useRef(null);

  // useEffect(() => {
  //   const typed = new Typed(firstMessage.current, {
  //     strings: ["Necesito un operario de limpieza URGENTE 😢"], // Strings to display
  //     // Speed settings, try diffrent values untill you get good results
  //     startDelay: 300,
  //     typeSpeed: 50,
  //     backSpeed: 100,
  //     backDelay: 100,
  //     showCursor: false,
  //     loop: false,
  //     backDelay: 100,
  //   });

  //   const typed2 = new Typed(secondMessage.current, {
  //     strings: ["Claro, estoy en camino, llegar&eacute; en 5 minutos 👀"], // Strings to display //     // Speed settings, try diffrent values untill you get good results
  //     startDelay: 3300,
  //     typeSpeed: 50,
  //     backSpeed: 100,
  //     backDelay: 100,
  //     showCursor: false,
  //     loop: false,
  //     backDelay: 100,
  //   });

  //   // Destropying
  //   return () => {
  //     typed.destroy();
  //     typed2.destroy();
  //   };
  // }, []);
  return (
    <div className="h-full">
      <img
        // src="https://th.bing.com/th/id/OIP.OD3Phb38vDgf70PQKl_zGgHaHa?pid=ImgDet&w=626&h=626&rs=1"
        src="https://img.freepik.com/free-photo/liquid-marbling-paint-texture-background-fluid-painting-abstract-texture-intensive-color-mix-wallpaper_1258-85222.jpg?w=1480&t=st=1691532116~exp=1691532716~hmac=c3e974e4015d30f91d07a2ab2c55554bab84d3b402ba806b8a8de6f29c6528a1"
        className="w-full h-full object-cover"
        alt="banner"
      />
      {/* <div
        className="p-4 lg:p-6
        absolute top-[20%]
        left-[5%] backdrop-blur-md
        bg-black/30
        rounded-xl text-slate-50
        w-72
        
        "
      >
        <div className="flex space-x-4">
          <img
            src="https://randomuser.me/api/portraits/men/66.jpg"
            className="h-16 w-16 lg:h-20 lg:w-20 object-cover rounded-full"
            alt=""
          />
          <h3
            ref={firstMessage}
            className="font-medium lg:font-bold text-base leading-6"
          ></h3>
        </div>
      </div>

      <div
        className="p-4 lg:p-6 absolute top-[50%] right-[5%] backdrop-blur-md bg-black/30 rounded-xl text-slate-50 w-72
      "
      >
        <div className="flex space-x-4">
          <img
            src="https://randomuser.me/api/portraits/men/40.jpg"
            className="h-16 w-16 lg:h-20 lg:w-20 object-cover rounded-full"
            alt=""
          />
          <h3
            ref={secondMessage}
            className="font-medium xl:font-bold text-base leading-6"
          ></h3>
        </div>
      </div> */}
    </div>
  );
}
