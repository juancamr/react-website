import { useRef, useState } from "react";
import Heading from "./text/Heading";
import Paragraph from "./text/Paragraph";
import { Modal } from "@mui/material";
import { ADMIN_URL } from "../common/constants";

export default function () {
  const input = useRef(null);
  const [open, setOpen] = useState(false);

  const subscribe = async () => {
    await fetch(ADMIN_URL, {
      method: "POST",
      body: JSON.stringify({
        email: input.current.value,
      }),
    })
      .then((data) => data.json())
      .then((response) => {
        if (response.success) {
          setOpen(true);
          input.current.value = "";
        }
      });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (input.current.value != "") {
      setOpen(true);
      input.current.value = "";
    }
  };

  return (
    <div
      className="
      mx-4
      text-center
        bg-gradient-to-tr
        from-gray-600 via-gray-700 to-gray-800
        rounded-3xl
        p-6 md:p-8 lg:p-14
        border border-gray-200
        shadow-xl
        flex items-center justify-center
        text-white
    "
    >
      <div>
        <div className="w-full">
          <i class="fa-solid fa-at text-5xl mb-4"></i>
        </div>
        <Heading className="uppercase mb-3">Suscr&iacute;bete</Heading>
        <Paragraph className="mb-5">Recibe promociones y descuentos</Paragraph>
        <form
          onSubmit={onSubmit}
          className="grid grid-cols-5 gap-x-2 w-full xl:w-96 mx-auto"
        >
          <input
            className="rounded-xl border border-gray-200 shadow-xl
          col-span-3
        text-lg px-4 py-2
        bg-slate-50
        text-gray-800
        "
            ref={input}
            type="email"
            placeholder="alguien@ejemplo.com"
          />
          <button
            className="bg-orange-400
          hover:bg-orange-500
          shadow-xl
        rounded-xl px-3 col-span-2
        text-base lg:text-xl
        "
          >
            Enviar
          </button>
        </form>

        <Modal
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div
            className="bg-slate-50
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-96 xl:w-[500px] border rounded-3xl border-gray-400 shadow-xl p-8
        text-gray-800
        "
          >
            <Heading className="mb-4">&#161;Suscrito!</Heading>
            <Paragraph>
              Muchas gracias por ser parte de esta gran comunidad,
              estar&aacute;s al tanto de nuestras nuevas actualizaciones y
              promociones
            </Paragraph>
          </div>
        </Modal>
      </div>
    </div>
  );
}
