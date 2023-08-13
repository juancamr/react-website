import Container from "../../../components/Container";
import { aboutUs } from "../../../common/content";

const MiddleContainer = () => {
  const { title, paragraph } = aboutUs.middleContainer;
  return (
    <div className="bg-orange-500">
      <Container>
        <div className="py-10 xl:py-14 text-center xl:w-1/2 mx-auto">
          <h1 className="text-2xl font-bold text-white mb-3">{title}</h1>
          <p className="text-slate-100 font-light text-base">{paragraph}</p>
        </div>
      </Container>
    </div>
  );
};

export default MiddleContainer;
