import { SOCIALS } from "../../../common/constants";
import Container from "../../../components/Container";

const Divider = () => (
  <div className="h-3 w-full xl:w-80 bg-orange-500 my-3 rounded-xl" />
);

const TopContainer = () => {
  return (
    <Container>
      <div className="relative lg:grid lg:grid-cols-3 lg:gap-10">
        <section
          className="absolute top-0 left-0 h-full flex items-end pb-4 lg:pb-0 lg:items-center z-10
          lg:relative
          "
        >
          <div className="ml-2">
            <h1 className="text-5xl font-bold text-white lg:text-gray-800">
              <span className="text-3xl font-normal">Somos </span>TIIMS
            </h1>
            <Divider />
            <div className="pt-2 flex space-x-4 text-2xl text-white lg:text-gray-800">
              <a target="_blank" href={SOCIALS.TIKTOK}>
                <i class="fa-brands fa-tiktok"></i>
              </a>
              <a target="_blank" href={SOCIALS.INSTAGRAM}>
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a target="_blank" href={SOCIALS.FACEBOOK}>
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a target="_blank" href={SOCIALS.LINKEDIN}>
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </section>
        <div className="h-[550px] 2xl:h-[700px] col-span-2 relative w-full">
          <img
            src="assets/images/update/us.webp"
            className="h-full w-full object-cover
              brightness-75
              rounded-3xl shadow-xl 
              "
            alt="company-image"
          />
        </div>
      </div>
    </Container>
  );
};

export default TopContainer;
