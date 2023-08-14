import Container from "../../../components/Container";
import Heading from "../../../components/text/Heading";
import Paragraph from "../../../components/text/Paragraph";
import { especialistas } from "../../../common/content";
import CustomH2 from "../../../components/custom/CustomH2";
import CustomP from "../../../components/custom/CustomP";

export default function Requisitos() {
  const { title, paragraph, titleRequirements, requirements } =
    especialistas.requirements;
  return (
    <Container>
      <CustomH2
        styles="
        text-blue-300
      text-left
      md:text-center 
      mb-2"
      >
        {title}
      </CustomH2>
      <CustomP
        styles="
      text-white
      md:text-center
      mb-5 
      lg:mb-14"
      >
        {paragraph}
      </CustomP>
      <div className="grid lg:grid-cols-5 gap-4 ">
        <div className=" flex items-center lg:col-span-3">
          <div>
            <CustomH2
              styles="
            lg:px-5
            mb-6
            text-orange-400"
            >
              {titleRequirements}
            </CustomH2>
            <div className="lg:px-5 text-white">
              <ul className="space-y-3">
                {requirements.map((requisito, index) => (
                  <li key={index}>
                    <CustomP styles="font-light">
                      {index + 1}. {requisito}
                    </CustomP>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:px-4 lg:col-span-2">
          <img
            src="https://img.freepik.com/free-photo/high-angle-multiple-election-questionnaires_23-2148265537.jpg?w=996&t=st=1692026398~exp=1692026998~hmac=e1a02b160b1672b6ab277922e2fe2a70473cfef61dd6ac9a0ab94ee2623364e9"
            alt="image"
            className="hidden lg:block lg:h-full object-cover"
          />
          {/* <div className="w-full rounded-3xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500 to-yellow-300">
              <RequisitosIcon />
          </div> */}
        </div>
      </div>
    </Container>
  );
}
