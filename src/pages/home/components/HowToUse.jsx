import Container from "../../../components/Container";
import CustomP from "../../../components/custom/CustomP";

const elements = [
  {
    icon: "assets/images/update/descarga.png",
    paragraph: "Descarga la app",
  },
  {
    icon: "assets/images/update/selecciona.png",
    paragraph: "Selecciona tu servicio",
  },
  {
    icon: "assets/images/update/programalo.png",
    paragraph: "Programalo",
  },
  {
    icon: "assets/images/update/paga.png",
    paragraph: "Paga y disfruta",
  },
];

function Card({ icon, text }) {
  return (
    <div
      className="
        rounded-3xl
        p-5
        flex
        items-center
        justify-center
        border
        border-gray-400
        "
    >
      <div>
        <img className="mx-auto mb-3" src={icon} alt={icon} />
        <CustomP styles={"text-center"}>{text}</CustomP>
      </div>
    </div>
  );
}

export default function HowToUse() {
  return (
    <Container>
      <div
        className="grid
      md:grid-cols-2
      lg:grid-cols-4
      gap-5
      "
      >
        {elements.map((element, index) => (
          <Card key={index} icon={element.icon} text={element.paragraph} />
        ))}
      </div>
    </Container>
  );
}
