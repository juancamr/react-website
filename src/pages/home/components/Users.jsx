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
            via-orange-500
            to-orange-600
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
            <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-white mb-5">
              {users.title}
            </h2>

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
      src="assets/images/update/especialista.jpeg"
      alt="especialista"
      className={`
              h-full
              2xl:h-[600px]
              w-full
              object-cover
              rounded-b-xl
              md:rounded-none
              md:rounded-r-xl
              lg:rounded-none
              lg:rounded-r-xl
              ${
                hidden
                  ? "hidden md:block"
                  : "md:hidden rounded-b-none rounded-t-xl"
              }`}
    />
  );
}

export default Users;
