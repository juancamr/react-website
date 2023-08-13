import SloganContainer from "../../../components/SloganContainer";
import CustomH1 from "../../../components/custom/CustomH1";
import CustomP from "../../../components/custom/CustomP";
import { ADMIN_URL, LINK_COMPANY } from "../../../common/constants";
import CustomButton from "../../../components/custom/CustomButton";
import { company } from "../../../common/content";

const { title, paragraph, downloadButton } = company.topContainer;

const Top = () => {
  return (
    <SloganContainer isCompany>
      <div className="relative h-[600px] md:h-[500px] lg:h-[600px] xl:h-full w-full">
        <div className="absolute top-0 left-0 md:w-1/2 p-4 lg:p-6 z-20">
          <h1
            className="text-darkblue-500 mb-2 lg:mb-6 font-extrabold
            text-4xl
          xl:text-5xl
          2xl:text-6xl
          "
          >
            {title}
          </h1>
          <p
            className="
            text-base
            text-gray-600
            md:text-lg
            lg:text-xl
            xl:text-xl
            mb-6 lg:mb-10
          "
          >
            {paragraph}
          </p>
          <CustomButton isLink link={LINK_COMPANY} orange styles="text-white">
            {downloadButton}
          </CustomButton>
        </div>
        <div
          className="bg-gradient-to-tl from-darkblue-600 to-white
            absolute bottom-0 w-full rounded-[50px]
            py-10 h-[200px] lg:h-[300px]"
        />
        <img
          className="
          md:h-96
          lg:h-full
            object-contain absolute bottom-0 right-0
            md:rounded-br-[50px]
            rounded-b-[50px]
            "
          src="assets/images/update/building.png"
          alt="building"
        />
      </div>
    </SloganContainer>
  );
};

export default Top;
