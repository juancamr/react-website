import Container from "../../../components/Container";
import { aboutUs } from "../../../common/content";

const OurEspecialization = () => {
  const { title, slogan, paragraph } = aboutUs.ourSpecialization;
  return (
    <Container>
      <div className="grid lg:grid-cols-5 gap-5">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-base text-orange-600 font-bold italic">{slogan}</p>
        </div>
        <div className="lg:col-span-3">
          <p className="lg:border-l-4 lg:border-gray-800 lg:pl-4 text-base italic font-light text-gray-800 py-2">
            {paragraph}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default OurEspecialization;
