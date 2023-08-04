import { Bounce, Zoom } from "react-reveal";
import Container from "../../../components/Container";
import Heading from "../../../components/text/Heading";
import Paragraph from "../../../components/text/Paragraph";

export default function Paquetes() {
  return (
    <section>
      <div className="grid lg:grid-cols-2 gap-4 mb-10">
        <Bounce left>
          <div
            className="p-6 2xl:p-10 rounded-3xl shadow-xl
        border border-gray-200
        bg-gradient-to-tr from-orange-600 via-orange-400 to-orange-600
        "
          >
            <Heading className="text-slate-50 mb-4">Paquete 1</Heading>
            <Paragraph className="text-slate-100">
              Duis est veniam voluptate ullamco Lorem commodo enim Lorem ea
              commodo fugiat.
            </Paragraph>
          </div>
        </Bounce>
        <Bounce left>
          <div
            className="p-6 2xl:p-10 rounded-3xl shadow-xl
        border border-gray-200
        bg-slate-50
        "
          >
            <Heading className="text-gray-800 mb-4">
              Paquete Personalizado
            </Heading>
            <Paragraph className="text-gray-600">
              Duis est veniam voluptate ullamco Lorem commodo enim Lorem ea
              commodo fugiat.
            </Paragraph>
          </div>
        </Bounce>
      </div>
      <Zoom>
        <div className="text-center">
          <a
            href={"https://wa.me/986327221"}
            className="
            px-5
            py-4
            xl:px-10
            xl:py-5
            bg-gradient-to-r
            from-green-500
            via-green-600 
            to-green-700
            hover:from-green-700
            hover:via-green-600
            hover:to-green-500
            text-white
            text-xl
            2xl:text-2xl
            text-md
            shadow-lg
            rounded-3xl
            "
          >
            Cotiza tu pedido <i class="fa-brands fa-whatsapp ml-2"></i>
          </a>
        </div>
      </Zoom>
    </section>
  );
}
