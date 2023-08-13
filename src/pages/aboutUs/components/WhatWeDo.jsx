import Container from "../../../components/Container";
import { aboutUs } from "../../../common/content";

const Divider = () => <div className="h-4 w-40 lg:w-80 bg-orange-500 my-4" />;

const WhatWeDo = () => {
  const { title, paragraph, paragraphs } = aboutUs.whatWeDo;
  return (
    <Container>
      <h2 className="text-3xl font-bold mb-3">{title}</h2>
      <p className="text-base text-gray-600">{paragraph}</p>
      <Divider />
      <div className="pt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {paragraphs.map((paragraphItem, index) => (
          <div key={index}>
            <p className="text-base text-gray-800">{paragraphItem}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WhatWeDo;
