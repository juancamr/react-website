import { SOCIALS } from "../../../common/constants";
import Container from "../../../components/Container";

const Divider = () => <div className="h-4 w-40 lg:w-80 bg-orange-500 my-4" />;

const TopContainer = () => {
  return (
    <Container>
      <div className="relative lg:grid lg:grid-cols-2 lg:gap-10">
        <section
          className="absolute top-0 left-0 h-full flex items-center z-10
          lg:relative
          "
        >
          <div className="ml-2">
            <Divider />
            <h1 className="text-5xl font-bold text-white lg:text-gray-800">
              <span className="text-3xl font-normal">Somos </span>TIIMS
            </h1>
            <Divider />
            <div className="pt-2 flex space-x-4 text-2xl text-white lg:text-gray-800">
              <a href={SOCIALS.TIKTOK}>
                <i class="fa-brands fa-tiktok"></i>
              </a>
              <a href={SOCIALS.INSTAGRAM}>
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href={SOCIALS.FACEBOOK}>
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href={SOCIALS.LINKEDIN}>
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </section>
        <div className="h-[550px] 2xl:h-[700px]">
          <img
            src="assets/images/update/nosotros.webp"
            className="h-full w-full object-cover
              brightness-75 lg:brightness-100
              "
            alt="company-image"
          />
        </div>
      </div>
    </Container>
  );
};

export default TopContainer;
