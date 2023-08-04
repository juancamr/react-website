import Heading from "../../../components/text/Heading";
import Paragraph from "../../../components/text/Paragraph";
import { LINK_COMPANY } from "../../../common/constants";
import { Bounce, Zoom } from "react-reveal";

export default function TopContainer() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute top-10 w-full ">
        <Heading className="px-4 text-center mb-4 text-gray-800 dark:text-slate-50 text-4xl 2xl:text-6xl">
          &#161;Potencia tu empresa con las soluciones de TIIMS!
        </Heading>
        <Paragraph
          className="px-4
          text-center
          mb-10 xl:mb-6
          text-gray-600
          dark:text-slate-100"
        >
          Simplifica operaciones, aumenta la productividad y concéntrate en el
          crecimiento de tu empresa.
        </Paragraph>
        <Zoom>
          <div className="mb-8 lg:mb-10 xl:mb-12 flex justify-center">
            <a
              href={LINK_COMPANY}
              className="
            px-5
            py-4
            xl:px-10
            xl:py-5
            bg-gradient-to-r
            from-blue-500
            via-blue-600 
            to-blue-700
            text-white
            text-xl
            2xl:text-2xl
            text-md
            shadow-lg
            rounded-3xl
            hover:from-blue-700 hover:via-blue-600 hover:to-blue-500
            "
            >
              Empieza ya <i class="fa-solid fa-globe ml-2"></i>
            </a>
          </div>
        </Zoom>
      </div>
      <Bounce bottom>
        <div
          className="
          absolute
          bottom-0
          flex justify-center w-full
        "
        >
          <img
            src="assets/images/building.png"
            className="
          bottom-0
          mb-28
          lg:h-80
          2xl:mb-28
          2xl:h-[500px]
          "
          />
        </div>
      </Bounce>
    </div>
  );
}
