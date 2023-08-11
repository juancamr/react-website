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
      text-blue-700 
      dark:text-blue-500
      text-left
      md:text-center 
      mb-2"
      >
        {title}
      </CustomH2>
      <CustomP
        styles="
      text-gray-800  
      dark:text-white 
      md:text-center
      mb-5 
      lg:mb-10"
      >
        {paragraph}
      </CustomP>
      <div className="grid lg:grid-cols-5 gap-4 lg:px-20 2xl:px-40">
        <div className=" flex items-center lg:col-span-3">
          <div>
            <CustomH2
              styles="
            lg:px-5
            mb-3  
            text-orange-400"
            >
              {titleRequirements}
            </CustomH2>
            <div className="text-slate-800 dark:text-white lg:px-5">
              <ul className="space-y-5">
                {requirements.map((requisito, index) => (
                  <li key={index}>
                    <CustomP styles="font-light text-gray-800">
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
            src="assets/images/requisitos.jpg"
            alt="image"
            className="object-cover h-full w-full rounded-3xl md:h-72 lg:h-96"
          />
          {/* <div className="w-full rounded-3xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500 to-yellow-300">
              <RequisitosIcon />
          </div> */}
        </div>
      </div>
    </Container>
  );
}
