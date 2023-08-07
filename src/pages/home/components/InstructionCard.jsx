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
        {logo === "download" && (
          <img
            src="https://openclipart.org/image/2400px/svg_to_png/218662/Download-Button.png"
            alt="download"
            className="h-20 w-20"
          ></img>
        )}
        {logo === "select" && (
          <img
            src="https://codahosted.io/packs/14001/unversioned/assets/LOGO/46f7caf584a4ee7ec55d7aeb1272de730efceb61be1a589066264b79787ea295634d2a5dbcbb42905f50cb4d41a197b7ba357bcb5e5be04e48032986db0b8b22d916d323f7790866fd5ecba351bf0f1b17342f48890708d7158d21b17f1f365eca9a7ec2"
            alt="select"
            className="h-20 w-20"
          ></img>
        )}
        {logo === "calendar" && (
          <img
            src="https://cdn3.iconfinder.com/data/icons/office-347/64/Calendar-office-schedule-1024.png"
            alt="calendar"
            className="h-20 w-20"
          ></img>
        )}
        {logo === "pay" && (
          <img
            src="https://static.wixstatic.com/media/218375_621c3efffea7418cbf7955303a363fbb~mv2.png/v1/fill/w_357,h_357,al_c,usm_0.66_1.00_0.01/direct%20payment.png"
            alt="pay"
            className="h-20 w-20"
          ></img>
        )}

        {logo === "seguro" && (
          <img
            src="https://th.bing.com/th/id/R.7f3765a4b19d4a165f1ea6fcfd9826c2?rik=PMFaxYt27lwiSA&riu=http%3a%2f%2fpngimg.com%2fuploads%2fshield%2fshield_PNG1277.png&ehk=fWRY7bHB2c9j8YJEsKkZ7rpBJq00eb3I7ek8BxVEDMc%3d&risl=&pid=ImgRaw&r=0"
            className="h-20 w-20"
            alt="yape"
          />
        )}
        {logo === "rapido" && (
          <img
            src="https://th.bing.com/th/id/R.2e21ae3c4eebb65e3975da16f2fc00a8?rik=3TI0kuKFWT6YBw&pid=ImgRaw&r=0"
            className="h-20 w-20"
            alt="yape"
          />
        )}
        {logo === "simple" && (
          <img
            src="https://th.bing.com/th/id/R.fad2ab3b3beadf3d3404421344fec3ba?rik=r16ec7Z5OQuctw&riu=http%3a%2f%2faspirec.com%2fimages%2fact-icon2.png&ehk=XZ7esTAvJiUJ4ckFUS8aUSGM7mrxozanZktdxZXHIOk%3d&risl=&pid=ImgRaw&r=0"
            className="h-20 w-20"
            alt="yape"
          />
        )}

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
        <InstructionCard logo="seguro" word="Segura" color="sky" />
        <InstructionCard logo="rapido" word="R&aacute;pida" color="orange" />
        <InstructionCard logo="simple" word="Simple" color="blue" />
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
              color="orange"
            />
            <InstructionCard
              logo="select"
              word="Selecciona tu servicio"
              color="green"
            />
            <InstructionCard
              logo="calendar"
              word="Progr&aacute;malo"
              color="blue"
            />
            <InstructionCard logo="pay" word="Paga y disfruta" color="sky" />
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
