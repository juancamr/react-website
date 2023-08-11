import Container from "../../../components/Container";
import CustomH2 from "../../../components/custom/CustomH2";
import CustomP from "../../../components/custom/CustomP";
import { home } from "../../../common/content";

const Users = () => {
  const { users } = home;
  return (
    <Container>
      <div
        className="
            shadow-xl
            border border-gray-200
            bg-gradient-to-tr
            from-blue-300
            via-blue-500
            to-blue-700
            rounded-xl
            xl:rounded-[50px]
            grid
            md:grid-cols-2
            text-white
            "
      >
        <ImageEspecialista />
        <div
          className="flex items-center p-5 lg:p-10 md:py-20
            xl:p-14 xl:py-32
          "
        >
          <div>
            <CustomH2
              styles="mb-5
              "
            >
              {users.title}
            </CustomH2>
            <CustomP styles="">{users.paragraph}</CustomP>
          </div>
        </div>
        <ImageEspecialista hidden />
      </div>
    </Container>
  );
};

function ImageEspecialista({ hidden }) {
  return (
    <img
      src="assets/images/update/especialista.png"
      alt="especialista"
      className={`
              h-full
              2xl:h-[600px]
              w-full
              object-cover
              rounded-b-xl
              md:rounded-none
              md:rounded-r-[50px]
              ${
                hidden
                  ? "hidden md:block"
                  : "md:hidden rounded-b-none rounded-t-xl"
              }`}
    />
  );
}

export default Users;
