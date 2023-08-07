function InstructionCard({ logo, word, color }) {
  return (
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
        ${
          color === "purple" &&
          "bg-gradient-to-r from-purple-300 via-purple-500 to-purple-700 text-white"
        }
        ${
          color === "cyan" &&
          "bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-700 text-white"
        }
        ${
          color === "green" &&
          "bg-gradient-to-r from-green-300 via-green-500 to-green-700 text-white"
        }
    `}
    >
      <div className="text-4xl xl:text-6xl mb-6 xl:mb-12">
        {logo === "download" && <i class="fa-solid fa-download"></i>}
        {logo === "select" && <i class="fa-solid fa-square-check"></i>}
        {logo === "clock" && <i class="fa-solid fa-clock"></i>}
        {logo === "pay" && <i class="fa-solid fa-money-bill"></i>}

        {logo === "seguro" && <i class="fa-solid fa-shield-halved"></i>}
        {logo === "rapido" && <i class="fa-solid fa-gauge-simple-high"></i>}
        {logo === "simple" && <i class="fa-solid fa-hands"></i>}

        {logo === "yape" && (
          <img
            src="https://seeklogo.com/images/Y/yape-app-logo-1FD46D1120-seeklogo.com.png"
            className="h-20 w-20"
            alt="yape"
          />
        )}
        {logo === "plin" && (
          <img
            src="https://seeklogo.com/images/P/plin-logo-967A4AF583-seeklogo.com.png"
            className="h-20 w-20"
            alt="plin"
          />
        )}
        {logo === "efectivo" && (
          <img
            src="https://cdn-icons-png.flaticon.com/512/2331/2331941.png"
            className="h-20 w-20"
            alt="plin"
          />
        )}
        {logo === "tarjeta" && (
          <img
            src="https://images.vexels.com/media/users/3/263269/isolated/preview/a461aa900b9a0fc2c3b1533899ed29d0-icono-de-tarjetas-de-visita-de-dinero.png"
            className="h-20 w-20"
            alt="plin"
          />
        )}
      </div>
      <p className="text-xl xl:text-2xl text-right font-bold">{word}</p>
    </div>
  );
}

export default function Instructions({ isHome, isAbout }) {
  if (isAbout) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 xl:gap-7 2xl:gap-10 ">
        <InstructionCard logo="seguro" word="Segura" color="blue" />
        <InstructionCard logo="rapido" word="R&aacute;pida" color="orange" />
        <InstructionCard logo="simple" word="Simple" color="sky" />
      </div>
    );
  } else {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 xl:gap-7 2xl:gap-10 ">
        {isHome ? (
          <>
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
            <InstructionCard
              logo="clock"
              word="Progr&aacute;malo"
              color="sky"
            />
            <InstructionCard logo="pay" word="Paga y disfruta" color="blue" />
          </>
        ) : (
          <>
            <InstructionCard logo="yape" word="Yape" color="purple" />
            <InstructionCard logo="plin" word="Plin" color="cyan" />
            <InstructionCard logo="efectivo" word="Efectivo" color="green" />
            <InstructionCard
              logo="tarjeta"
              word="Cuenta bancaria"
              color="blue"
            />
          </>
        )}
      </div>
    );
  }
}
