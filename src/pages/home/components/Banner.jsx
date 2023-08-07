import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";

export default function Banner() {
  const firstMessage = useRef(null);
  const secondMessage = useRef(null);

  useEffect(() => {
    const typed = new Typed(firstMessage.current, {
      strings: ["Necesito un operario de limpieza URGENTE 😢"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 100,
      showCursor: false,
      loop: false,
      backDelay: 100,
    });

    const typed2 = new Typed(secondMessage.current, {
      strings: ["Claro, estoy en camino, llegar&eacute; en 5 minutos 👀"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 3300,
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 100,
      showCursor: false,
      loop: false,
      backDelay: 100,
    });

    // Destropying
    return () => {
      typed.destroy();
      typed2.destroy();
    };
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        ease: "easeOut",
        duration: 1,
        // x: { duration: 1 },
      }}
      className="relative h-full w-full
        2xl:h-[800px] "
    >
      <img
        className="object-cover h-full w-full rounded-3xl shadow-xl"
        src="assets/images/mockup.webp"
        alt="image"
      />

      <div
        className="p-4 lg:p-6
        absolute top-[20%]
        left-[5%] backdrop-blur-md
        bg-white/40 dark:bg-black/30
        rounded-xl dark:text-slate-50
        text-gray-900 w-72
        
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
        className="p-4 lg:p-6 absolute top-[50%] right-[5%] backdrop-blur-md bg-white/40 dark:bg-black/30 rounded-xl text-gray-900 dark:text-slate-50 w-72
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
      </div>
    </motion.div>
  );
}
