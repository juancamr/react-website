import Container from "../../../components/Container";
import CustomH2 from "../../../components/custom/CustomH2";
import CustomP from "../../../components/custom/CustomP";

const Users = () => {
  return (
    <div
      className="bg-darkblue-500 py-20 pb-20
      md:py-14
      xl:py-28
    "
    >
      <Container>
        <div
          className="
            shadow
            bg-beige
            rounded-3xl
            grid
            md:grid-cols-2
            "
        >
          <div
            className="flex items-center py-5 lg:p-10 md:py-20
            xl:p-14 xl:py-32
          "
          >
            <div>
              <CustomH2
                styles="mb-5
              text-darkblue-500
              "
              >
                &#191;Estas preparado para descubrir una APP que te facilitara
                el dia a dia?
              </CustomH2>
              <CustomP styles="">
                Miles de peruanos estan solicitando a sus especialistas, tu no
                te quedes atras
              </CustomP>
            </div>
          </div>
          <img
            src="assets/images/mision.jpg"
            alt="some-image"
            className="
              h-full
              w-full
              object-cover
              rounded-b-3xl
              md:rounded-none
              md:rounded-r-3xl
              "
          />
        </div>
      </Container>
    </div>
  );
};

export default Users;
