import Heading from "../../../components/text/Heading";
import Paragraph from "../../../components/text/Paragraph";
import Instructions from "../../home/components/InstructionCard";

export default function WhyChooseUs() {
  return (
    <section>
      <Heading
        className="
        text-center
        text-gray-800
        dark:text-slate-50
        uppercase
        mb-2
        "
      >
        &#191;Por qu&eacute; elegirnos?
      </Heading>
      <Paragraph className="text-center text-gray-600 dark:text-white mb-4 xl:mb-10">
        Porque nuestra app es...{" "}
      </Paragraph>
      <Instructions isAbout={true} />
    </section>
  );
}
