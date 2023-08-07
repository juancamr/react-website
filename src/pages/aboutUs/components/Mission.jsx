import Slogan from "./Slogan";
import Banner from "./Banner";
import { misionVision } from "../../../common/constants";
import Heading from "../../../components/text/Heading";
import Paragraph from "../../../components/text/Paragraph";

function Element({ left, right, content }) {
  return (
    <section>
      <div className="hidden lg:block">
        <div className="h-full grid md:grid-cols-2 gap-4 px-4 xl:px-8 2xl:px-40 mb-8">
          {left && <Slogan text={content.text} />}
          <Banner title={content.title} image={content.image} />
          {right && <Slogan text={content.text} />}
        </div>
      </div>

      <div className="lg:hidden">
        <div className="h-full grid md:grid-cols-2 gap-4 px-4 xl:px-8  2xl:px-20">
          <Banner image={content.image} title={content.title} />
          <Slogan text={content.text} />
        </div>
      </div>
    </section>
  );
}

export default function MissionVission() {
  const content = misionVision;
  return (
    <div>
      <Heading
        className="
        text-center
        text-gray-800
        dark:text-slate-50
        uppercase
        mb-2
        "
      >
      Nuestra misión y visión
      </Heading>
      <Paragraph className="text-center text-gray-600 dark:text-white mb-4 xl:mb-10">
        Alcanzemos juntos nuestras metas
      </Paragraph>
      <Element right={true} content={content.vision} />
      <Element styles="mb-10" left={true} content={content.mission} />
    </div>
  );
}
