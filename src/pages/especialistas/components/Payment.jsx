import Container from "../../../components/Container";
import CustomP from "../../../components/custom/CustomP";
import CustomH2 from "../../../components/custom/CustomH2";
import { especialistas } from "../../../common/content";
import Card from "../../../components/Card";

const { title, methods } = especialistas.payment;

export default function Payment() {
  return (
    <Container>
      <CustomH2
        styles="text-center mb-5 text-darkblue-500
      md:mb-6
      lg:mb-7
      xl:mb-10
      "
      >
        {title}
      </CustomH2>
      <div
        className="grid
      md:grid-cols-2
      lg:grid-cols-4
      gap-5
      "
      >
        {methods.map((element, index) => (
          <Card key={index} icon={element.icon} text={element.paragraph} />
        ))}
      </div>
    </Container>
  );
}
