import { Zoom } from "react-reveal";

function InstructionCard({ logo, word, color }) {
  return (
    <Zoom top>
      <div
        className={`rounded-3xl p-6 2xl:p-10

        ${
          color === "sky" &&
          "bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 "
        }
        ${
          color === "blue" &&
          "bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 text-white"
        }
        ${
          color === "white-orange" &&
          "bg-gradient-to-r from-orange-100 via-orange-200 to-orange-300 "
        }
        ${
          color === "orange" &&
          "bg-gradient-to-r from-orange-300 via-orange-500 to-orange-700 text-white"
        }
    `}
      >
        <div className="text-4xl xl:text-6xl mb-6 xl:mb-12">
          {logo === "download" && <i class="fa-solid fa-download"></i>}
          {logo === "select" && <i class="fa-solid fa-square-check"></i>}
          {logo === "clock" && <i class="fa-solid fa-clock"></i>}
          {logo === "pay" && <i class="fa-solid fa-money-bill"></i>}
        </div>
        <p className="text-xl xl:text-2xl text-right font-bold">{word}</p>
      </div>
    </Zoom>
  );
}

export default function Instructions() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 xl:gap-7 2xl:gap-10">
      <InstructionCard
        logo="download"
        word="Descarga la app"
        color="white-orange"
      />
      <InstructionCard
        logo="select"
        word="Selecciona tu servicio"
        color="orange"
      />
      <InstructionCard logo="clock" word="Progr&aacute;malo" color="sky" />
      <InstructionCard logo="pay" word="Paga y disfruta" color="blue" />
    </div>
  );
}
