import { motion } from "framer-motion";
import Counter from "../../../components/animations/Counter";
import {
  TOTAL_DOWNLOADS,
  TOTAL_PROVIDERS_HIRED,
  TOTAL_USERS,
} from "../../../common/constants";

const Stats = () => {
  return (
    <section className="mb-32 text-center lg:text-left scale-100 md:scale-75 lg:scale-100 relative">
      <div className="container mx-auto text-center lg:text-left xl:px-32 ">
        <div className="grid items-center lg:grid-cols-2">
          <div className="mb-12 lg:mb-0">
            <div className="relative z-10 block rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]

            ">
              <h2 className="mb-6 text-4xl font-bold text-slate-50">
                &#191;Qui&eacute;nes somos?
              </h2>
              <p className="mb-12 text-neutral-300 text-xl text-justify">
                Somos una startup tecnol&oacute;gica del Per&uacute;, buscamos
                resolver la gran problem&aacute;tica del desempleo, nuestra
                intenci&eacute;n es ayudar a aquellas personas con talento a
                poder generar ingresos en sus tiempos libres.
              </p>

              <div className="grid gap-x-6 md:grid-cols-3">
                <div className="mb-12 md:mb-0">
                  <h2 className="text-slate-50 mb-4 text-3xl font-bold">
                    <Counter start={0} end={TOTAL_DOWNLOADS} />{" "}
                    <i class="fa-solid fa-download"></i>
                  </h2>
                  <h5 className="mb-0 text-lg font-medium text-slate-50 dark:text-neutral-300">
                    Descargas
                  </h5>
                </div>

                <div className="mb-12 md:mb-0">
                  <h2 className="text-slate-50 mb-4 text-3xl font-bold">
                    <Counter start={0} end={TOTAL_USERS} />{" "}
                    <i class="fa-solid fa-user"></i>
                  </h2>
                  <h5 className="mb-0 text-lg font-medium text-slate-50 dark:text-neutral-300">
                    Usuarios
                  </h5>
                </div>

                <div className="mb-12 md:mb-0">
                  <h2 className="text-slate-50 mb-4 text-3xl font-bold">
                    <Counter start={0} end={TOTAL_PROVIDERS_HIRED} />{" "}
                    <i class="fa-solid fa-heart"></i>
                  </h2>
                  <h5 className="mb-0 text-lg font-medium text-slate-50 dark:text-neutral-300">
                    Especialistas
                  </h5>
                </div>
              </div>
            </div>
          </div>
          {/* </Fade> */}

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              ease: "easeOut",
              duration: 1,
              // x: { duration: 1 },
            }}
          >
            <img
              src="assets/images/building_about_us.webp"
              className="fancy-border-radius rotate-lg-6 w-full shadow-lg dark:shadow-black/20
              2xl:h-[650px]
              "
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
