import SloganContainer from "../../../components/SloganContainer";
import { especialistas } from "../../../common/content";
import CustomH1 from "../../../components/custom/CustomH1";
import CustomP from "../../../components/custom/CustomP";
import { LINK_ESPECIALISTA_GOOGLE_PLAY } from "../../../common/constants";
import CustomButton from "../../../components/custom/CustomButton";

const SloganEspecialista = () => {
  const { topContainer } = especialistas;
  const { title, paragraph, downloadButton, image } = topContainer;
  return (
    <SloganContainer blue>
      <section
        className="p-5
          pr-0
          md:p-10
          md:pr-0
          lg:p-14
          lg:pr-0
          xl:p-20u
          xl:pr-0
          2xl:p-26  
          2xl:pr-0
          flex items-center
        "
      >
        <div>
          <CustomH1 styles={"text-white mb-5"}>{title}</CustomH1>
          <CustomP styles={"text-slate-200 mb-8 xl:mb-10"}>{paragraph}</CustomP>
          <div className="lg:mb-9 xl:mb-10">
            <CustomButton
              currentPage
              isLink
              link={"provider/register"}
              styles={"mb-5"}
              white
            >
              Regístrate <i class="fa-solid fa-arrow-right ml-2"></i>
            </CustomButton>
          </div>
          <div className="mt-10 lg:mt-0">
            <CustomButton isLink link={LINK_ESPECIALISTA_GOOGLE_PLAY} white>
              {downloadButton} <i class="fa-brands fa-google-play ml-2"></i>
            </CustomButton>
          </div>
        </div>
      </section>
      <section className="flex justify-end items-end">
        <img
          className="
            h-52
            md:h-80
            lg:h-[25rem]
            2xl:h-[32rem]
            object-cover
            "
          src={image}
          alt="mockup"
        />
      </section>
    </SloganContainer>
  );
};

export default SloganEspecialista;
